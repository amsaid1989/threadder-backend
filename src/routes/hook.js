import express from "express";
import { exec } from "child_process";

const router = express.Router();

router.use(express.json());

router.post("/hook", (req, res) => {
    console.log("Received hook data from GitHub");
    const { name } = req.body.repository;

    if (name === "threadder-backend") {
        exec("git pull --all", (error, stdout, stderr) => {
            if (error) {
                console.log(`Error: ${error.message}`);
                res.sendStatus(500);
                return;
            }

            if (stderr) {
                console.log(`stderr: ${stderr}`);
                res.sendStatus(500);
                return;
            }

            console.log(`stdout: ${stdout}`);
            res.sendStatus(200);
        });
    } else if (name === "threadder") {
        exec(
            "git submodule update --remote --recursive",
            (error, stdout, stderr) => {
                if (error) {
                    console.log(`Error: ${error.message}`);
                    res.sendStatus(500);
                    return;
                }

                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    res.sendStatus(500);
                    return;
                }

                console.log(`stdout: ${stdout}`);
                res.sendStatus(200);
            }
        );
    }
});

export default router;
