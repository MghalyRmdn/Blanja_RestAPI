const express = require('express')

const welcomeRouter = express.Router()

welcomeRouter.get("/", (req, res) => {
    res.send("Selamat Datang di Blanja")
})

module.exports = welcomeRouter;