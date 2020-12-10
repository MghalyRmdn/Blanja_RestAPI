require("dotenv").config()

const express = require('express')
const logger = require("morgan")
const cors = require('cors')
const mainRouter = require("./src/routes/index")

const app = express()
const port = 8000;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

app.use(express.static("public"))

app.use(cors())
app.use(logger("dev"))
// tambah parser untuk www.form-urlencoded (postman)
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use("/", mainRouter)

module.exports = app;