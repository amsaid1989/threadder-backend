import express from "express";
import { exec } from "child_process";

const router = express.Router();

router.use(express.json());

router.post("/hook", (req, res) => {
    console.log("Received hook data from GitHub");
    exec("la -al", (error, stdout, stderr) => {
        if (error) {
            console.log(`Error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        console.log(`stdout: ${stdout}`);
    });
    res.sendStatus(200);
});

export default router;
