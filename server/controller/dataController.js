const Data = require('../model/dataModal')

exports.create = (req, res) => {
    const data = new Data({
        data: req.body.data
    })

    data
        .save(data)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.status(500).send({message: "something went wrong", error})
        })
}