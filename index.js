const http = require("http");
const express = require("express");
const { Socket: socketServer } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new socketServer({
  cors: "*",
});

io.attach(server);

io.on("connection", (socket) => console.log("socket connected", socket.id));

server.listen(8000, `socket server connected at port 8000`);
