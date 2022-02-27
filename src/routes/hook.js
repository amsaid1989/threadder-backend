import dotenv from "dotenv";
import express from "express";
import { exec } from "child_process";
import logger from "../utils/logger.js";

dotenv.config();

const router = express.Router();

router.use(express.json());

router.post("/hook", (req, res) => {
    logger.info("Parsing /hook request");

    const { name } = req.body.repository;

    if (!name) {
        logger.error(
            "Request body is not formatted properly. It should include repository.name, but it does not"
        );
        res.sendStatus(500);
        return;
    }

    if (name === "threadder-backend") {
        const cmd =
            process.env.NODE_ENV === "production"
                ? "git pull --all&&pm2 restart --update-env threadder"
                : "git pull --all";
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                logger.error(error.message);
                res.sendStatus(500);
                return;
            }

            if (stderr) {
                logger.error(stderr);
                res.sendStatus(500);
                return;
            }

            logger.info(stdout);
            res.sendStatus(200);
        });
    } else if (name === "threadder") {
        const cmd =
            process.env.NODE_ENV === "production"
                ? "git submodule update --remote --recursive&&pm2 restart --update-env threadder"
                : "git submodule update --remote --recursive";
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                logger.error(error.message);
                res.sendStatus(500);
                return;
            }

            if (stderr) {
                logger.error(stderr);
                res.sendStatus(500);
                return;
            }

            logger.info(stdout);
            res.sendStatus(200);
        });
    }
});

export default router;
