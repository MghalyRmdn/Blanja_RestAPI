const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

const db = require("../config/mySQL");

module.exports = {
    postNewUser: (body) => {

        return new Promise((resolve, reject) => {
            const saltRounds = 10;
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if (err) {
                    reject(err);
                }
                bcrypt.hash(body.password, salt, (err, hashedPassword) => {
                    if (err) {
                        reject(err)
                    }
                    const newBody = {
                        ...body,
                        password: hashedPassword
                    };
                    const queryStr = "INSERT INTO users SET ?"
                    db.query(queryStr, newBody, (err, data) => {
                        if (!err) {
                            resolve(data)
                        } else {
                            reject(err)
                        }
                    })
                })
            })
        })
    },
    postLogin: (body) => {
        // query ke DB => SELECT password WHERE username == username body
        // compare body password dengan password DB
        // jwt => sign, verify
        // sign => mendapatkan token dari payload
        // token dikirim ke client
        return new Promise((resolve, reject) => {
            const {
                username,
                password
            } = body;
            const qs = "SELECT password , role_id  FROM users WHERE username = ?";
            db.query(qs, username, (err, data) => {
                if (err) {
                    reject({
                        msg: "ERROR SQL",
                        status: 500,
                        err
                    })
                }
                if (!data[0]) {
                    console.log(data[0])
                    reject({
                        msg: "User not Found",
                        status: 404,
                    });
                } else {
                    bcrypt.compare(password, data[0].password, (err, result) => {
                        if (err) {
                            reject({
                                msg: "Hash Error",
                                status: 500,
                                err,
                            });
                        }
                        if (!result) {
                            reject({
                                msg: "Password is Wrong",
                                status: 401,
                            })
                        } else {
                            const payload = {
                                username,
                                role: data[0].role_id,
                            }
                            const secret = process.env.SECRET_KEY;
                            const token = jwt.sign(payload, secret);
                            resolve(token);
                        }
                    })
                }
            });
        });
    },

    // authLogout: (body) => {
    //     return new Promise((resolve , reject) => {
    //         const { refreshToken } = body;
    //     })
    // }
};