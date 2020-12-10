const db = require("../config/mySQL")

module.exports = {
    categoryGet: () => {
        return new Promise((resolve , reject) => {
            const queryStr = "SELECT * FROM category";
            db.query(queryStr , (err ,data) => {
                if(!err){
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }
}