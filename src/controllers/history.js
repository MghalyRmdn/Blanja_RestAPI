const historyModel = require("../models/history")
const form = require("../helpers/form")

module.exports = {
    createHistory: (req, res) => {
        const {
            body
        } = req;
        const role = req.decodedToken.role
        historyModel.createHistory(body, role).then((data) => {
                form.success(res, data)
            })
            .catch((err) => {
                console.log(err)
                form.error(res, err)
            })
    },

    readHistory: (req, res) => {
        historyModel.readHistory().then((data) => {
                form.success(res, data)
            })
            .catch((err) => {
                form.error(res, err)
            })
    }
}