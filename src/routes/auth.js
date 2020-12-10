const authRouter = require("express").Router()

const authControllers = require("../controllers/auth")
// const form = require("../helpers/form")

authRouter.post("/register", authControllers.postNewUser)

authRouter.post("/login", authControllers.postLogin)

// authRouter.get("/login" , authControllers)


module.exports = authRouter;