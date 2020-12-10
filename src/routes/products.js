const express = require('express');

const productsRouter = express.Router();

const productsController = require("../controllers/products");

// productsRouter.get("/", productsController.sortBy)


productsRouter.get("/new", productsController.newProducts);

productsRouter.get("/rating", productsController.popularProducts);

productsRouter.get("/", productsController.readProductPagination);
module.exports = productsRouter