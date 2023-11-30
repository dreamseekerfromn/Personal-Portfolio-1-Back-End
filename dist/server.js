// DEPENDENCIES
const { app } = require("./app.js");

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { createNewMessage } = require("./queries/chat.js");
const io = new Server(server, {cors:{ origin: "*"}});

io.on('connection', (socket)=>{
  console.log('a user connected');
  socket.on('message', (messageBundle)=>{
    console.log(messageBundle);
    //console.log(" " + messageBundle.user_name);
    if(messageBundle.message){
      io.emit('message', {user_name:messageBundle.user_name, message: messageBundle.message, room_id: messageBundle.room_id});
      createNewMessage(messageBundle);
    }
  });
});

/*
io.on('message', (socket)=>{
  console.log(socket.message)
})*/

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3333;
const PORT2 = process.env.PORT2 || 3334;

// LISTEN
app.listen(PORT2, function(req, res){
  console.log(`Listening on port ${PORT2}`)
});

server.listen(PORT, ()=>{
  console.log(`socket is listening on ${PORT}`);
});
