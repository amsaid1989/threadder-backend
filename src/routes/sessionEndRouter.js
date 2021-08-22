import express from "express";

const router = express.Router();

router.get("/logout", (req, res, next) => {
    console.log(req.sessionID);
    req.session.destroy(function (err) {
        if (err) {
            next(err);
        } else {
            res.status(200).end();
        }
    });
});

export default router;
