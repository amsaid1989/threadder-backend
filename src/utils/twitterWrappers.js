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
    const oauth_data = token
        ? oauth.authorize(request, token)
        : oauth.authorize(request);

    return axios({
        ...request,
        headers: oauth.toHeader(oauth_data),
    });
}

function sendTwitterRequest(requestObj) {
    const requestForAuth = {
        url: requestObj.url,
        method: requestObj.method,
    };

    if (requestObj.data && Object.entries(requestObj.data).length > 0) {
        requestForAuth.data = requestObj.data;
    }

    if (requestObj.params && Object.entries(requestObj.params).length > 0) {
        requestForAuth.params = requestObj.params;
    }

    return addTwitterAuthorizationHeader(requestForAuth, requestObj.token);
}

export function getRequestToken() {
    return sendTwitterRequest({
        url: "https://api.twitter.com/oauth/request_token",
        method: "post",
        data: { oauth_callback: "http://localhost:5000/callback" },
    });
}

export function getAccessToken(twitterResponseObj) {
    return sendTwitterRequest({
        url: "https://api.twitter.com/oauth/access_token",
        method: "post",
        data: twitterResponseObj,
    });
}

export function getUserData(id) {
    const url = queryString.stringifyUrl({
        url: "https://api.twitter.com/1.1/users/show.json",
        query: {
            user_id: id,
        },
    });

    return sendTwitterRequest({ url: url, method: "get" });
}

function postTweet(text, token, previousTweetID = undefined) {
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
    let lastID;

    for (const tweet of thread) {
        lastID = (await postTweet(tweet, token, lastID)).data.id_str;
    }
}
