const express = require("express");
const chat = express.Router();

chat.post("/", (req,res)=>{
    req.io.sockets.emit('update', foo);
});

module.exports = chat;