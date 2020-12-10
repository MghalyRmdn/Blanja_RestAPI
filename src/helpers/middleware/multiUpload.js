const multer = require("multer")
const path = require("path")
const form = require("../form")

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
              file.originalname
          )}`
        cb(null, nameFormat)
    }
})

const upload = multer({
    storage: multerStorage,
    limits: 5 * 1000 * 10000,
})

const multiUpload = (req, res, next) => {
    const uploadMulti = upload.array("image", 4)
    uploadMulti(req, res, (err) => {
        if (!err) {
            form.success(res, {
                msg: "File success uploaded",
                status: 200,
            })
        } else if (err) {
            (form.error(res, {
                msg: "Multer error",
                err,
            }))
        } else {
            next();
        }
    })
}
module.exports = multiUpload;