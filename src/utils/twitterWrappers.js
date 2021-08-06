import dotenv from "dotenv";
import OAuth from "oauth-1.0a";
import crypto from "crypto";
import axios from "axios";
import queryString from "query-string";

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
    /*
     * Adds an authorization header to an HTTP request. If a token is
     * provided, then it is included in the header. Otherwise, the
     * header will only use the application public and secret keys.
     */

    const oauth_data = token
        ? oauth.authorize(request, token)
        : oauth.authorize(request);

    return axios({
        ...request,
        headers: oauth.toHeader(oauth_data),
    });
}

function sendTwitterRequest(requestObj) {
    /*
     * Utility function that builds a request from the object passed
     * to it, then adds the required authorization headers before
     * returning the result.
     */

    const requestForAuth = {
        url: requestObj.url,
        method: requestObj.method,
    };

    // Add data to the axios request if a data object is provided
    if (requestObj.data && Object.entries(requestObj.data).length > 0) {
        requestForAuth.data = requestObj.data;
    }

    // Add params to the axios request if a params object is provided
    if (requestObj.params && Object.entries(requestObj.params).length > 0) {
        requestForAuth.params = requestObj.params;
    }

    return addTwitterAuthorizationHeader(requestForAuth, requestObj.token);
}

export function getRequestToken() {
    /*
     * Initiates the first step of the 3-legged process of logging in
     * with Twitter.
     *
     * It makes a call to the 'request_token' endpoint and returns the
     * result.
     */

    return sendTwitterRequest({
        url: "https://api.twitter.com/oauth/request_token",
        method: "post",
        data: { oauth_callback: "http://localhost:5000/callback" },
    });
}

export function getAccessToken(twitterResponseObj) {
    /*
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
    /*
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

function postTweet(text, token, previousTweetID = undefined) {
    /*
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
    /*
     * Uses the postTweet() function to post a series of tweets
     * as a thread, where each tweet is posted as a reply to the
     * previous one.
     */

    let lastID;

    for (const tweet of thread) {
        lastID = (await postTweet(tweet, token, lastID)).data.id_str;
    }
}
