const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./controllers/userController.js");
const rooms = require("./controllers/roomsController.js");
const http = require('http');
const chat = require("./controllers/chatController.js");
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(express.json());

io.on('connection', function(socket){
    socket.on('login', function(data){
        console.log(data);
        io.emit('login',data);
    });

    socket.on('chat', function(data){
        console.log(data);
        socket.broadcast.emit('chat',data);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected', data);
    })
});

// root
app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.use("/user", user);
app.use("/rooms", rooms);
app.use('/chat', (req, res, next) => {
    req.io = io;
    return next();
}, chat);

// 404 Page not found
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;