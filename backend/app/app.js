// require('dotenv').config();
const express = require("express");
const cors = require("cors");
const route =  require("./routes/index.js");

// const fs =require('fs');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

route(app);

module.exports = app;
