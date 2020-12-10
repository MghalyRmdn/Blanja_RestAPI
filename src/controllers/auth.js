// const { db  = require("../config/mySQL");
const authModel = require("../models/auth")
const form = require("../helpers/form")

module.exports = {

    postNewUser: (req, res) => {
        const {
            body
        } = req;
        authModel.postNewUser(body).then(() => {
            form.success(res, {
                msg: "Register was successfully",
                userData: {
                    username: body.username,
                    role: body.role,
                },
            })
        }).catch(err => {
            form.error(res, err)
        })

    },
    postLogin: (req, res) => {
        const {
            body
        } = req;
        authModel
            .postLogin(body)
            .then(data => {
                form.success(res, data)
            })
            .catch(err => {
                form.error(res, err)
            })
    },

    authLogout: (req, res) => {
        const {
            body
        } = req;

        authModel.authLogout(body)
            .then(data => {
                form.success(res, data)
            })
            .catch(err => {
                form.error(res, err)
            })
    }

}