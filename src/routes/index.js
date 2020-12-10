const express = require("express");

const checkToken = require("../helpers/middleware/chcekToken")
const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const productRouter = require("./product");
const historyRouter = require("./history");
const categoryRouter = require("./category")
const productsRouter = require("./products");
const searchRouter = require("./search");
const authRouter = require("./auth");
const uploadRouter = require("./singleUpload")
const uploadsRouter = require("./multiUpload")



mainRouter.use("/", welcomeRouter);

//Route CRUD
mainRouter.use("/product", productRouter);

//Route History
mainRouter.use("/history", historyRouter);


mainRouter.use("/products", checkToken, productsRouter);

//Route Search
mainRouter.use("/search", searchRouter);

// Router Catgory
mainRouter.use("/category", categoryRouter);

mainRouter.use("/auth", authRouter);

mainRouter.use("/upload", uploadRouter);
mainRouter.use("/multi-upload", uploadsRouter);



module.exports = mainRouter