const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./controllers/userController.js");
const rooms = require("./controllers/roomsController.js");
const chat = require("./controllers/chatController.js");


app.use(cors());
app.use(express.json());

app.use("/user", user);
app.use("/rooms", rooms);
app.use("/chat", chat);

// root
app.get("/", (request, response) => {
    response.send("Hello World!");
});

// 404 Page not found
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = {app, };