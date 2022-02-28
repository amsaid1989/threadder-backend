import dotenv from "dotenv";
import express from "express";
import { exec } from "child_process";
import logger from "../utils/logger.js";

function executeCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                reject(error.message);
            } else if (stderr !== "") {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}

dotenv.config();

const router = express.Router();

router.use(express.json());

router.post("/hook", (req, res) => {
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
        const cmd =
            process.env.NODE_ENV === "production"
                ? "git pull --all&&pm2 restart --update-env threadder"
                : "git pull --all";

        executeCommand(cmd)
            .then((result) => {
                console.log(result);

                res.status(200).send("Completed");
            })
            .catch((err) => {
                console.log(err);

                res.status(500).send("Failed");
            });
    } else if (name === "threadder") {
        const cmd =
            process.env.NODE_ENV === "production"
                ? "git submodule update --remote --recursive&&pm2 restart --update-env threadder"
                : "git submodule update --remote --recursive";

        executeCommand(cmd)
            .then((result) => {
                console.log(result);

                res.status(200).send("Completed");
            })
            .catch((err) => {
                console.log(err);

                res.status(500).send("Failed");
            });
    }
});

export default router;
