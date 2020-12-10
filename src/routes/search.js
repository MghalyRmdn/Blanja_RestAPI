const express = require("express");

const searchRouter = express.Router();

const searchControllers = require("../controllers/search")

// Search
searchRouter.get("/", searchControllers)

module.exports = searchRouter;