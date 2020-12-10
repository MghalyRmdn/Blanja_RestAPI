const productsModels = require("../models/products");
const form = require("../helpers/form");

module.exports = {
    readProductPagination: (req, res) => {
        const {
            query
        } = req;
        const limit = Number(query.limit) || 5;
        const page = Number(query.page) || 1;
        const offset = (page - 1) * limit || 0;

        productsModels.readProductPagination(limit, offset, page).then((data) => {
                if (Math.ceil(data.products / limit) == data.products) {
                    res.status(404).json({
                        msg: "Pages Not Found",
                        status: 404,
                    });
                } else {
                    form.success(res, data);
                }
            })
            .catch((err) => {
                form.error(res, err);
            });
    },


    newProducts: (req, res) => {
        productsModels.newProducts().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },



    popularProducts: (req, res) => {
        productsModels.popularProducts().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    }


}