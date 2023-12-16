const Layout = require('../model/model')

exports.create = (req, res) => {
    const layout = new Layout({
        title: req.body.title,
        desc: req.body.desc,
        rows: req.body.rows,
    })

    layout
        .save(layout)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.status(500).send({message: "something went wrong", error})
        })
}

exports.read = (req, res) => {
    Layout.find()
    .then((data) => {
        data.reverse()
        res.status(201).json({data})
    })
    .catch((err) => {
        res.status(500).send({
            message: "some error occured while fetching data", err
        });
    });
}