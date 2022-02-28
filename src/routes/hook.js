import dotenv from "dotenv";
import express from "express";
import { exec } from "child_process";
import logger from "../utils/logger.js";

dotenv.config();

const router = express.Router();

router.use(express.json());

router.post("/hook", (req, res) => {
    /**
     * TODO (Abdelrahman): Secure the webhook using the secret.
     */
    if (!req.body || !req.body.repository) {
        logger.error(
            "Webhook request not formatted properly. Missing Body or Repository"
        );
        res.status(500).send("Hook request failed due to illformatted body");
        return;
    }

    const { name } = req.body.repository;

    if (!name) {
        logger.error(
            "Request body is not formatted properly. It should include repository.name, but it does not"
        );
        res.status(500).send("Hook request failed due to illformatted body");
        return;
    }

    if (name === "threadder-backend") {
        logger.info("Attempting to pull the updates from the backend repo");

        exec("git pull --all", (error, stdout, stderr) => {
            if (error) {
                logger.error(error.message);
            }

            if (stderr && stderr !== "") {
                logger.error(stderr);
            }

            if (stdout && stdout !== "") {
                logger.info(stdout);
            }

            if (process.env.NODE_ENV === "production") {
                exec("pm2 restart --update-env threadder");
            }
        });

        res.status(200).send("Webhook payload received");
    }
});

export default router;
