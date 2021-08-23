import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import cors from "cors";
import mongoConnect from "connect-mongodb-session";
import twitterRouter from "./routes/twitterAPIRouter.js";
import sessionEndRouter from "./routes/sessionEndRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
    origin: ["http://localhost:3000", "https://amsaid1989.github.io"],
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
};

app.options("*", cors(corsOptions));

app.use(cors(corsOptions));

const MongoDBStore = mongoConnect(session);
const store = new MongoDBStore(
    {
        uri: process.env.MONGO_URI,
        collection: "Sessions",
    },
    function (err) {
        if (err) {
            console.log(err);
        }
    }
);

store.on("error", function (err) {
    if (err) {
        console.log(err);
    }
});

const sessionOptions = {
    secret: process.env.SESSION_SECRET.split(" "),
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: "none",
    },
};

if (process.env.NODE_ENV === "production") {
    // set the trust proxy for Heroku
    app.set("trust proxy", 1);

    sessionOptions.store = store;
    sessionOptions.proxy = true;
    sessionOptions.cookie.domain = ".github.io";
    sessionOptions.cookie.secure = false;
    sessionOptions.cookie.maxAge = 24 * 60 * 60 * 1000;
}

app.use(session(sessionOptions));

app.use(twitterRouter);
app.use(sessionEndRouter);

app.get("/", (req, res) => {
    res.redirect("/request_token");
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
