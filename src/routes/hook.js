import express from "express";
import { exec } from "child_process";
import logger from "../utils/logger.js";

const router = express.Router();

router.use(express.json());

router.post("/hook", (req, res) => {
    const { name } = req.body.repository;

    if (name === "threadder-backend") {
        exec("git pull --all", (error, stdout, stderr) => {
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
        exec(
            "git submodule update --remote --recursive",
            (error, stdout, stderr) => {
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
            }
        );
    }
});

export default router;
