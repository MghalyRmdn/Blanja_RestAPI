const uploadROuter = require("express").Router();

const singleUpload = require("../helpers/middleware/upload");

uploadROuter.post("/", singleUpload, (req, res) => {
    const filePath = "/img/" + req.file.filename;
    res.json({
        filePath,
    })
})

module.exports = uploadROuter;