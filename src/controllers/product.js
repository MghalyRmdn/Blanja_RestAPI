const productsModel = require("../models/product")
const form = require("../helpers/form")
module.exports = {

    createProducts: (req, res) => {
        const {
            body
        } = req;
        const role = req.decodedToken.role;
        const filePath = JSON.stringify(req.files.map((e) =>
            "/images/" + "/" + e.filename + " "
        ))
        console.log(filePath);
        const insertBody = {
            ...body,
            photo: filePath,
            created_at: new Date(Date.now()),
            updated_at: new Date(Date.now()),
        };

        productsModel.createProducts(insertBody, role, filePath)
            .then((data) => {
                const resProduct = {
                    id: data.insertId,
                    ...insertBody,
                };
                form.success(res, resProduct);
            })
            .catch((err) => {
                form.error(res, err);
            });
    },

    readSingleProduct: (req, res) => {
        productsModel.readSingleProduct(req).then((data) => {
            if (!data.length) {
                res.status(404).json({
                    msg: "Data Not Found",
                    status: 404,
                });
            } else {
                form.success(res, data[0]);
            }
        }).catch((err) => {
            form.error(res, err);
        })
    },

    updateProduct: (req, res) => {
        const {
            id
        } = req.body
        const {
            body
        } = req;
        const role = req.decodedToken.role;
        const singlePath = "/images" + req.file.filename;
        const updateBody = {
            ...body,
            updated_at: new Date(Date.now()),
            photo: singlePath
        }
        const idBody = {
            id
        };

        productsModel.updateProduct(updateBody, idBody, role, singlePath)
            .then((data) => {
                if (data.affectedRows === 0) {
                    res.status(404).json({
                        msg: "Data tidak diitemukan",
                        status: 404
                    })
                } else {
                    const successUpdate = {
                        msg: "Data berhasil di update",
                        data: {
                            id: data.updateId,
                            updateBody
                        }
                    }
                    form.success(res, successUpdate)
                }

            })
            .catch((err) => {
                const error = {
                    msg: "Data gagal diupdate",
                    err
                }
                form.error(res, error)
            })
    },

    deleteProduct: (req, res) => {
        const {
            id
        } = req.params;
        let role = req.decodedToken.role;

        productsModel.deleteProduct(id, role).then((data) => {
                if (data.affectedRows === 0) {
                    res.status(404).json({
                        msg: "Data tidak diitemukan",
                        status: 404
                    })
                } else {
                    const successDelete = {
                        msg: "Data berhasil dihapus",
                        status: 200,
                    }
                    form.succes(res, successDelete)
                }
            })
            .catch((err) => {
                res.error(res, err)
            })
    },

    readProduct: (_, res) => {
        productsModel.readProduct().then((data) => {
            form.success(res, data);
        }).catch((err) => {
            form.error(res, err)
        })
    },

}