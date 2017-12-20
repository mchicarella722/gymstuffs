const express = require("express");
const exerciseController = require("./exerciseController");

const server = express();

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

server.use("/", exerciseController.router );
server.listen(4201);

console.log("http://localhost:4201");