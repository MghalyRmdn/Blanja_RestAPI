const categoryModels = require("../models/category");

module.exports = {
    categoryGet: (_, res) => {
        categoryModels.categoryGet().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    }
}