const express = require("express");
const chat = express.Router();

chat.post("/", (req,res)=>{
    console.log("hi")
    req.io.sockets.emit('update', "something something");
});

chat.get("/", (req,res)=>{
    console.log("n");
    req.io.sockets.emit('update', "foo");
});

chat.get("*", (req,res)=>{
    console.log("something missing in socket connection")
})

module.exports = chat;