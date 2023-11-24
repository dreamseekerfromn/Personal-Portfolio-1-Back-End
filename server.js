// DEPENDENCIES
const app = require("./app.js");
const { Server } = require("socket.io");
const http = require('http');
//const io = require('socket.io')(Server);

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3333;

// create http server & web socket
const httpServer = http.createServer(app);
const wsServer = new Server(httpServer);

// LISTEN
wsServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});