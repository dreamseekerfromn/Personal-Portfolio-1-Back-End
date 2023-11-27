// DEPENDENCIES
const app = require("./app.js");
//const { Server } = require("socket.io");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3333;
const PORT2 = process.env.PORT2 || 3334;
// create http server & web socket
//const httpServer = http.createServer(app);
//const wsServer = new Server(httpServer);

app.listen(PORT2, function(req, res){
  console.log(`Listening on port ${PORT2}`)
});

// LISTEN
/*
wsServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
*/
//module.exports = wsServer;