import dotenv from "dotenv";
import express from "express";
import queryString from "query-string";
import multer from "multer";
import TwitterStorage from "../utils/TwitterStorage.js";
import {
    getRequestToken,
    getAccessToken,
    getUserData,
    publishThread,
} from "../utils/twitterWrappers.js";
import logger from "../utils/logger.js";

dotenv.config();

const router = express.Router();

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
                        logger.error(err);
                    } else {
                        res.json({ redirect: redirectURL });
                    }
                });
            } else {
                logger.error("Callback not confirmed");
                res.status(500).send("Internal server error");
            }
        })
        .catch(next);
});

router.get("/callback", (req, res, next) => {
    if (req.query.oauth_token !== req.session.requestToken) {
        res.sendStatus(403);

        return;
    }

    getAccessToken(req.query)
        .then((response) => {
            const { oauth_token, oauth_token_secret, user_id, screen_name } =
                queryString.parse(response.data);

            // Save the access tokens in the user session
            req.session.accessToken = oauth_token;
            req.session.accessTokenSecret = oauth_token_secret;
            req.session.user = { screenName: screen_name };

            return getUserData(user_id);
        })
        .then((user) => {
            const { name, profile_image_url_https } = user.data;

            // Complete saving the user data in the user session
            req.session.user.name = name;
            req.session.user.profileImage = profile_image_url_https.replace(
                "_normal",
                ""
            );

            const redirectURL = queryString.stringifyUrl({
                url:
                    process.env.NODE_ENV === "development"
                        ? process.env.DEV_SERVER
                        : "/",
                query: req.session.user,
            });

            res.redirect(302, redirectURL);
        })
        .catch(next);
});

router.use(express.json());

router.post("/publish_thread", (req, res, next) => {
    const tweets = req.body.tweets;

    // Ensures that the provided thread is formatted appropriately.
    // It should be an array of objects that each has the properties
    // 'text' and 'media'
    if (
        !(
            tweets instanceof Array &&
            tweets.every(
                (tweet) =>
                    tweet.hasOwnProperty("text") &&
                    tweet.hasOwnProperty("media")
            )
        )
    ) {
        logger.error("Thread not formatted appropriately");

        res.status(400).send("Bad request");

        return;
    }

    const token = {
        key: req.session.accessToken,
        secret: req.session.accessTokenSecret,
    };

    publishThread(tweets, token)
        .then(() => {
            res.send("Thread published successfully");
        })
        .catch(next);
});

const storage = TwitterStorage({});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const supportedTypes = [".png", ".jpg", ".jpeg", ".gif", ".webp"];

        const [_, ext] = file.originalname.split(/(\..+$)/);

        if (ext && supportedTypes.includes(ext)) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    },
    limits: {
        fileSize: 15 * 1000 * 1000,
        files: 1,
    },
}).single("mediaFile");

router.post("/upload_media", (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            next(err);
        } else {
            if (req?.file?.media_id) {
                res.json({ media_id: req.file.media_id });
            } else {
                logger.error("Failed to upload media");

                res.status(500).send("Upload failed");
            }
        }
    });
});

export default router;
