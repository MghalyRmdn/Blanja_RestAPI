const db = require("../config/mySQL");

module.exports = {
    newProducts: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rate, p.product_size, p.product_color, p.product_qty, p.product_condition, p.created_at, p.updated_at FROM products AS p JOIN category AS c ON c.id = p.product_category ORDER BY p.created_at DESC";
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }

            });
        });
    },
    popularProducts: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rate, p.product_size, p.product_color, p.product_qty, p.product_condition, p.created_at, p.updated_at FROM products AS p JOIN category AS c ON c.id = p.product_category ORDER BY p.product_rate DESC";
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }

            });
        });
    },

    readProductPagination: (limit, offset, page) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM products AS p JOIN category on category.id = p.product_category LIMIT ? OFFSET ?"
            db.query(queryString, [limit, offset, page], (err, data) => {
                const newResult = {
                    products: data,
                    pageInfo: {
                        currentPage: page || 1,
                        previousPage: page === 1 ? null : `/product?page=${page - 1}&limit=${limit}`,
                        nextpage: limit !== data.length ?
                            null : `/product?page=${page + 1}&limit=${limit}`,
                    },
                };
                if (!err) {
                    resolve(newResult);
                } else {
                    reject(err)
                }
            })
        });
    },
}