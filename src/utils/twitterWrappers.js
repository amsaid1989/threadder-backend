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

function makeAuthorizedRequest(request) {
    return axios({
        ...request,
        headers: oauth.toHeader(oauth.authorize(request)),
    });
}

function sendTwitterRequest(url, method, data = {}, params = {}) {
    const requestForAuth = {
        url: url,
        method: method,
    };

    if (Object.entries(data).length > 0) {
        requestForAuth.data = data;
    }

    if (Object.entries(params).length > 0) {
        requestForAuth.params = params;
    }

    return makeAuthorizedRequest(requestForAuth);
}

export function getRequestToken() {
    return sendTwitterRequest(
        "https://api.twitter.com/oauth/request_token",
        "post",
        { oauth_callback: "http://localhost:5000/callback" }
    );
}

export function getAccessToken(twitterResponseObj) {
    return sendTwitterRequest(
        "https://api.twitter.com/oauth/access_token",
        "post",
        twitterResponseObj
    );
}

export function getUserData(id) {
    const url = queryString.stringifyUrl({
        url: "https://api.twitter.com/1.1/users/show.json",
        query: {
            user_id: id,
        },
    });

    return sendTwitterRequest(url, "get");
}
