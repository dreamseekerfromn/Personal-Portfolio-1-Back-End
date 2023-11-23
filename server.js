// DEPENDENCIES
const app = require("./app.js");
//const { Server } = require("socket.io");
//const io = require('socket.io')(Server);

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3333;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/*
io.on('connection', function(socket){
    console.log('a user connected');
});*/