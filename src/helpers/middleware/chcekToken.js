const jwt = require("jsonwebtoken");

const form = require("../form")

module.exports = (req, res, next) => {
    const bearerToken = req.header("token")
    if (!bearerToken) {
        form.error(res, {
            msg: "Harap login dahulu",
            status: 401,
        })
    } else {
        const token = bearerToken.split(" ")[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
            // console.log(decodedToken);
            req.decodedToken = decodedToken;
            next();
        } catch (error) {
            form.error(res, {
                msg: "Invalid Token",
                error,
                status: 401,
            })
        }
    }

}