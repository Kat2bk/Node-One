const express = require('express');

const database = require('./database');
const server = express();
server.use(express.json());
const port = 8080


