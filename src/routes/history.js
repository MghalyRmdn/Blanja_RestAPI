const express = require('express')

const historyRouter = express.Router();

const historyControllers = require("../controllers/history")

const checkToken = require("../helpers/middleware/chcekToken")


// TABEL HISTORY
historyRouter.post("/", checkToken, historyControllers.createHistory)

historyRouter.get("/", historyControllers.readHistory)

module.exports = historyRouter;