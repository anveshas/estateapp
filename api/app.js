import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postroute from "./routes/post.route.js";
import authroute from "./routes/auth.route.js";
import testroute from "./routes/test.route.js";
import userroute from "./routes/user.route.js";
import chatroute from "./routes/chat.route.js";
import messageroute from "./routes/message.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({origin: process.env.CLIENT_URL, credentials: true}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authroute);
app.use("/api/users", userroute);
app.use("/api/posts", postroute);
app.use("/api/test", testroute);
app.use("/api/chat", chatroute);
app.use("/api/message", messageroute);


app.listen(8800, () => {
    console.log("Server is Running");
});