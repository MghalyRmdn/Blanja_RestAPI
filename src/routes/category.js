const express = require('express')

const categoryRouter = express.Router();

const categoryControllers = require("../controllers/category")

// TABEL Category

categoryRouter.get("/", categoryControllers.categoryGet)

module.exports = categoryRouter;