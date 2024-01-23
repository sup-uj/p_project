// require("dotenv").config();
import  express  from "express";
import  http  from "http";
import  bodyParser  from "body-parser";
import  cors  from 'cors';
// import { express } from "express";
// const express = require('express');
const app = express();
// const http = require('http');
// const path = require('path');
// const { Server } = require('socket.io');
// const ACTIONS = require('./src/Actions');
// const bodyParser = require('body-parser');
const server = http.createServer(app);
// const io = new Server(server);
// const cors = require('cors');


const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
  
app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

