import dotenv from "dotenv";
import path from "path";
import url from "url";
import express from "express";
import session from "express-session";
import cors from "cors";
import mongoConnect from "connect-mongodb-session";
import twitterRouter from "./routes/twitterAPIRouter.js";
import sessionEndRouter from "./routes/sessionEndRouter.js";
import hooksRouter from "./routes/hook.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
const staticPath = path.join(_dirname, "public");

if (process.env.NODE_ENV === "development") {
    const corsOptions = {
        origin: ["http://localhost:3000"],
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
        credentials: true,
    };

    app.options("*", cors(corsOptions));

    app.use(cors(corsOptions));
}

app.use(express.static(staticPath));

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
};

if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);

    sessionOptions.store = store;
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        secure: true,
    };
}

app.use(session(sessionOptions));

app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});

app.use(twitterRouter);
app.use(sessionEndRouter);
app.use(hooksRouter);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
