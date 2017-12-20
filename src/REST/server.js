const express = require("express");
const exerciseController = require("./exerciseController");

const server = express();

server.use("/", exerciseController.router );
server.listen(4201);

console.log("http://localhost:4201");