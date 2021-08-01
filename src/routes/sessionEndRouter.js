import express from "express";

const router = express.Router();

router.get("/logout", (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);

            res.send("Failed to log out");
        } else {
            res.set("Cache-Control", "no-store, max-age=0")
                .clearCookie("user", {
                    expires: 0,
                    secure: true,
                })
                .end();
        }
    });
});

export default router;
