import dotenv from "dotenv";
import express from "express";
import queryString from "query-string";
import {
    getRequestToken,
    getAccessToken,
    getUserData,
    publishThread,
} from "../utils/twitterWrappers.js";

dotenv.config();

const router = express.Router();

const appURL =
    process.env.NODE_ENV === "production"
        ? "https://amsaid1989.github.io/threadder/"
        : "http://localhost:3000";

router.get("/request_token", (req, res, next) => {
    getRequestToken()
        .then((response) => {
            const {
                oauth_token,
                oauth_token_secret,
                oauth_callback_confirmed,
            } = queryString.parse(response.data);

            // Since the Twitter API returns oauth_callback_confirmed as a string
            // of 'true' or 'false', we convert it into a boolean for ease of use
            const callbackConfirmed =
                oauth_callback_confirmed === "true" ? true : false;

            if (callbackConfirmed) {
                // Build the URL to which the user will be redirected in order to
                // authenticate the app
                const redirectURL = queryString.stringifyUrl({
                    url: "https://api.twitter.com/oauth/authenticate",
                    query: { oauth_token: oauth_token },
                });

                // Save the tokens in the user session
                req.session.requestToken = oauth_token;
                req.session.requestTokenSecret = oauth_token_secret;

                req.session.save(function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json({ redirect: redirectURL });
                    }
                });
            } else {
                res.send("Callback not confirmed");
            }
        })
        .catch(next);
});

router.get("/callback", (req, res, next) => {
    if (req.query.oauth_token !== req.session.requestToken) {
        res.sendStatus(403);
    } else {
        getAccessToken(req.query)
            .then((response) => {
                const {
                    oauth_token,
                    oauth_token_secret,
                    user_id,
                    screen_name,
                } = queryString.parse(response.data);

                // Save the access tokens in the user session
                req.session.accessToken = oauth_token;
                req.session.accessTokenSecret = oauth_token_secret;
                req.session.user = { screenName: screen_name };

                return getUserData(user_id);
            })
            .then((user) => {
                const { name, profile_image_url } = user.data;

                // Complete saving the user data in the user session
                req.session.user.name = name;
                req.session.user.profileImage = profile_image_url.replace(
                    "_normal",
                    ""
                );

                res.set("Cache-Control", "no-store, max-age=0")
                    .cookie("user", JSON.stringify(req.session.user), {
                        sameSite: "none",
                        secure: true,
                        httpOnly: true,
                    })
                    .redirect(302, appURL);
            })
            .catch(next);
    }
});

router.use(express.json());

router.post("/publish_thread", (req, res, next) => {
    const tweets = req.body.tweets;

    publishThread(tweets, {
        key: req.session.accessToken,
        secret: req.session.accessTokenSecret,
    })
        .then(() => {
            res.send("Thread published successfully");
        })
        .catch(next);
});

export default router;
