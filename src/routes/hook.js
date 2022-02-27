import express from "express";

const router = express.Router();

router.use(express.json());

router.post("/hook", (req, res) => {
    console.log("Received hook data from GitHub");
    res.sendStatus(200);
});

export default router;
