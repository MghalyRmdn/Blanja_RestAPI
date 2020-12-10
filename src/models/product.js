const db = require("../config/mySQL");

module.exports = {
    createProducts: (insertBody, role, filePath) => {
        return new Promise((resolve, reject) => {
            const queryStr = "INSERT INTO products SET ?"
            if (role > 1) {
                reject({
                    msg: "You don't have permission",
                    status: 401,
                });
            } else {
                db.query(queryStr, [insertBody, role, filePath], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                });
            }
        });
    },

    readSingleProduct: (req) => {
        const {
            id
        } = req.params;
        return new Promise((resolve, reject) => {
            const qs = "SELECT p.id, p.product_name, p.product_price, p.product_brand, p.product_color, category.category_name, p.product_size, p.product_qty, p.product_condition, p.product_description, p.product_rate, p.created_at, p.updated_at FROM products AS p JOIN category on category.id = p.product_category WHERE p.id = ?"
            db.query(qs, id, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    updateProduct: (updateBody, idBody, role, singlepath) => {
        return new Promise((resolve, reject) => {
            const queryStr = "UPDATE products SET ? WHERE ?"
            if (role === 2) {
                reject({
                    msg: "You don't have permission",
                    status: 401,
                })
            } else {
                db.query(queryStr, [updateBody, idBody, singlepath], (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
            }
        })
    },

    deleteProduct: (id, deleteBody, role) => {
        return new Promise((resolve, reject) => {
            if (role === 2) {
                reject({
                    msg: "You don't have permission",
                })
            } else {
                const postQUeryString = "DELETE FROM products WHERE id = ?"
                db.query(postQUeryString, [id, deleteBody, role], (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
            }
        })
    },

    readProduct: () => {
        return new Promise((resolve, reject) => {
            // const limit = 5;
            // //  limit - 
            // //  page  -
            // // offset -
            // const offset = (Number(query.page) - 1) * limit;
            const queryString = "SELECT * FROM products AS p JOIN category on category.id = p.product_category"
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        });
    },




}