const express = require("express");
const mailController = require("../controllers/mail-contr.js");

const mailRouter = express.Router();

mailRouter.all('', [mailController.receiveMail]);

module.exports = mailRouter;