const uploadsRouter = require("express").Router();

let multipleUpload = require("../helpers/middleware/multiUpload")

uploadsRouter.post("/", multipleUpload);

module.exports = uploadsRouter;