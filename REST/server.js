const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const exerciseController = require("./exerciseController");

const dbconfig = require('./config/database');
mongoose.connect(dbconfig.databse);
mongoose.connection.on('connected',()=>{
  console.log("Connected to MongoDB"+dbconfig.database)
});

mongoose.connection.on('error',()=>{
  console.log("Error connecting to MongoDB"+dbconfig.database)
});

const server = express();
const port = 4201

const users = require('./routes/users');

server.get("/", (req,res)=>
{
  res.send('Invalid Endpoint')
})

server.use(cors());

server.use(express.static(path.join(path.join('../', __dirname),"src")));
server.use(bodyParser.json());

server.use('/users', users);

server.use("/", exerciseController.router );
server.listen(port);

console.log("http://localhost:${port}");