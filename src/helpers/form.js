module.exports = {
    success: (res, data) => {
        const resObject = {
            msg: "Data success",
            status: 200,
            data: data
        };
        res.json(resObject)
    },

    error: (res, err) => {
        res.status(500).json(err)
    }
}