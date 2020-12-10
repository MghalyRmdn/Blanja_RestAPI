const express = require('express');

const productRouter = express.Router();

const checkToken = require("../helpers/middleware/chcekToken")
const productController = require("../controllers/product")

//CREATE
productRouter.post("/", checkToken, productController.createProducts);

// UPDATE
productRouter.patch("/", checkToken, productController.updateProduct);

// DELETE
productRouter.delete("/:id", checkToken, productController.deleteProduct);

//READ by ID
productRouter.get("/:id", checkToken, productController.readSingleProduct);

// GET all Products
productRouter.get("/", productController.readProduct);

module.exports = productRouter;