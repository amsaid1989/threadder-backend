import dotenv from "dotenv";
import express from "express";
import { spawn } from "child_process";
import logger from "../utils/logger.js";

function middleware(req, res, next) {
    if (!req.body || !req.body.repository) {
        logger.error(
            "Webhook request not formatted properly. Missing Body or Repository"
        );
        next();
        return;
    }

    const { name } = req.body.repository;

    if (!name) {
        logger.error(
            "Request body is not formatted properly. It should include repository.name, but it does not"
        );
        next();
        return;
    }

    if (name === "threadder-backend") {
        const pull = spawn("git", ["pull", "--all"], {
            stdio: ["ignore", "pipe", "pipe"],
        });

        pull.stdout.pipe(res, { end: false });
        pull.stderr.pipe(res, { end: false });

        pull.on("exit", (exitCode) => {
            console.log(exitCode);

            const pm = spawn("pm2", ["restart", "--update-env", "threadder"], {
                stdio: ["ignore", "pipe", "pipe"],
            });
            pm.stdout.pipe(res, { end: false });
            pm.stderr.pipe(res, { end: false });

            pm.on("exit", (exitCode) => {
                next();
            });
        });
    }
}

dotenv.config();

const router = express.Router();

router.use(express.json());

router.use(middleware);

router.post("/hook", (req, res) => {
    res.status(200).send("Completed");
});

// router.post("/hook", (req, res) => {
//     if (!req.body || !req.body.repository) {
//         logger.error(
//             "Webhook request not formatted properly. Missing Body or Repository"
//         );
//         res.status(500).send("Hook request failed due to illformatted body");
//         return;
//     }

//     const { name } = req.body.repository;

//     if (!name) {
//         logger.error(
//             "Request body is not formatted properly. It should include repository.name, but it does not"
//         );
//         res.status(500).send("Hook request failed due to illformatted body");
//         return;
//     }

//     if (name === "threadder-backend") {
//         const cmd =
//             process.env.NODE_ENV === "production"
//                 ? "git pull --all&&pm2 restart --update-env threadder"
//                 : "git pull --all";

//         executeCommand(cmd)
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });

//         res.status(200).send("Completed");
//     } else if (name === "threadder") {
//         const cmd =
//             process.env.NODE_ENV === "production"
//                 ? "git submodule update --remote --recursive&&pm2 restart --update-env threadder"
//                 : "git submodule update --remote --recursive";

//         executeCommand(cmd)
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });

//         res.status(200).send("Completed");
//     }
// });

export default router;
