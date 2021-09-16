import dotenv from "dotenv";
import fs from "fs";
import OAuth from "oauth-1.0a";
import crypto from "crypto";
import axios from "axios";
import queryString from "query-string";
import FormData from "form-data";

dotenv.config();

// Generate the Authorization data
const oauth = OAuth({
    consumer: {
        key: process.env.TWITTER_KEY,
        secret: process.env.TWITTER_SECRET,
    },
    signature_method: "HMAC_SHA1",
    hash_function(base_string, key) {
        return crypto
            .createHmac("sha1", key)
            .update(base_string)
            .digest("base64");
    },
});

function addTwitterAuthorizationHeader(request, token = undefined) {
    /**
     * Adds an authorization header to an HTTP request. If a token is
     * provided, then it is included in the header. Otherwise, the
     * header will only use the application public and secret keys.
     */

    const oauth_data = token
        ? oauth.authorize(request, token)
        : oauth.authorize(request);

    // console.log(oauth.toHeader(oauth_data));

    return axios({
        ...request,
        headers: {
            ...request.headers,
            ...oauth.toHeader(oauth_data),
        },
    });
}

function sendTwitterRequest(requestObj) {
    /**
     * Utility function that builds a request from the object passed
     * to it, then adds the required authorization headers before
     * returning the result.
     */

    const requestForAuth = {
        url: requestObj.url,
        method: requestObj.method,
    };

    if (requestObj.headers) {
        requestForAuth.headers = requestObj.headers;
    }

    if (requestObj.data && Object.entries(requestObj.data).length > 0) {
        requestForAuth.data = requestObj.data;
    }

    if (requestObj.params && Object.entries(requestObj.params).length > 0) {
        requestForAuth.params = requestObj.params;
    }

    if (requestObj.includeBodyHash) {
        requestForAuth.includeBodyHash = true;
    }

    return addTwitterAuthorizationHeader(requestForAuth, requestObj.token);
}

export function getRequestToken() {
    /**
     * Initiates the first step of the 3-legged process of logging in
     * with Twitter.
     *
     * It makes a call to the 'request_token' endpoint and returns the
     * result.
     */

    const SERVER =
        process.env.NODE_ENV === "development"
            ? process.env.DEV_SERVER
            : process.env.PRODUCTION_SERVER;

    return sendTwitterRequest({
        url: "https://api.twitter.com/oauth/request_token",
        method: "post",
        data: { oauth_callback: `${SERVER}/callback` },
    });
}

export function getAccessToken(twitterResponseObj) {
    /**
     * Initiates the last step of the 3-legged process of logging in
     * with Twitter.
     *
     * It makes a request to the 'access_token' endpoint in order to
     * get the user's tokens for the app after being granted access
     * to the user's account.
     */

    return sendTwitterRequest({
        url: "https://api.twitter.com/oauth/access_token",
        method: "post",
        data: twitterResponseObj,
    });
}

export function getUserData(id) {
    /**
     * Sends a request to Twitter's '/users/show' endpoint to get
     * the user's data given a valid id.
     */

    const url = queryString.stringifyUrl({
        url: "https://api.twitter.com/1.1/users/show.json",
        query: {
            user_id: id,
        },
    });

    return sendTwitterRequest({ url: url, method: "get" });
}

function postTweet(text, mediaIDs, token, previousTweetID = undefined) {
    /**
     * Makes a request to Twitter's 'statuses/update' endpoint to
     * publish a tweet on behalf of a user.
     *
     * If previousTweetID is provided, then the new tweet is added
     * as a reply to the previous tweet.
     */

    const url = queryString.stringifyUrl({
        url: "https://api.twitter.com/1.1/statuses/update.json",
        query: {
            status: text,
            media_ids: mediaIDs.join(","),
            in_reply_to_status_id: previousTweetID,
        },
    });

    return sendTwitterRequest({
        url: url,
        method: "post",
        token: token,
    });
}

export async function publishThread(thread, token) {
    /**
     * Uses the postTweet() function to post a series of tweets
     * as a thread, where each tweet is posted as a reply to the
     * previous one.
     */

    let lastID;

    for (const tweet of thread) {
        lastID = (await postTweet(tweet.text, tweet.media, token, lastID)).data
            .id_str;
    }
}

export function initMediaUpload(mediaFile, token) {
    const url = queryString.stringifyUrl({
        url: "https://upload.twitter.com/1.1/media/upload.json",
        query: {
            command: "INIT",
            total_bytes: mediaFile.size,
            media_type: mediaFile.mimetype,
        },
    });

    return sendTwitterRequest({
        url: url,
        method: "post",
        token,
    });
}

function appendChunk(mediaID, segmentIndex, chunk, token) {
    const data = new FormData();

    data.append("command", "APPEND");
    data.append("media_id", mediaID);
    data.append("segment_index", segmentIndex);
    data.append("media", chunk);

    return sendTwitterRequest({
        url: "https://upload.twitter.com/1.1/media/upload.json",
        method: "post",
        data: data,
        headers: data.getHeaders(),
        includeBodyHash: true,
        token,
    });
}

export function appendMediaFile(mediaFile, token) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < mediaFile.chunks.length; i++) {
            const buffer = mediaFile.chunks[i];

            appendChunk(mediaFile.id, i, buffer, token)
                .then((res) => {
                    if (res.status < 200 || res.status > 299) {
                        reject(response);
                    }

                    if (i + 1 === mediaFile.chunks.length) {
                        resolve("Upload complete");
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        }
    });
}

export function finalizeMediaUpload(mediaFile, token) {
    const url = queryString.stringifyUrl({
        url: "https://upload.twitter.com/1.1/media/upload.json",
        query: {
            command: "FINALIZE",
            media_id: mediaFile.id,
        },
    });

    return sendTwitterRequest({
        url: url,
        method: "post",
        token,
    });
}

export function getUploadStatus(id, token) {
    const url = queryString.stringifyUrl({
        url: "https://upload.twitter.com/1.1/media/upload.json",
        query: {
            command: "STATUS",
            media_id: id,
        },
    });

    return sendTwitterRequest({
        url: url,
        method: "get",
        token,
    });
}

export function checkUploadStatus(id, token, initialTimeoutDuration) {
    let timeout;

    const completeStates = ["failed", "succeeded"];

    const checkCompletedState = (state) => {
        return state === "succeeded";
    };

    const setCheckTimeout = (resolve, reject, timeoutDuration) => {
        timeout = setTimeout(() => {
            getUploadStatus(id, token)
                .then((mediaData) => {
                    const state = mediaData.data.processing_info.state;

                    if (completeStates.includes(state)) {
                        if (checkCompletedState(state)) {
                            resolve(id);
                        } else {
                            reject(
                                `Upload of media file with id (${id}) have failed`
                            );
                        }
                    } else {
                        const duration =
                            mediaData.data.processing_info.check_after_secs *
                            1000;

                        setCheckTimeout(resolve, reject, duration);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        }, timeoutDuration * 1000);
    };

    return new Promise((resolve, reject) => {
        setCheckTimeout(resolve, reject, initialTimeoutDuration);
    });
}
