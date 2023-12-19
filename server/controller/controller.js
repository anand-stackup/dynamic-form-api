const Layout = require("../model/model");

exports.create = (req, res) => {
    const layout = new Layout({
        title: req.body.title,
        desc: req.body.desc,
        rows: req.body.rows,
    });

    layout
        .save(layout)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({ message: "something went wrong", error });
        });
};

exports.read = (req, res) => {
    // console.log(req.query.id)
    if (req.query.id) {
        const id = req.query.id;

        Layout.findById(id)
            .then((data) => {
                if (!data) {
                    res.status(400).send({
                        message: `form with id ${id} not found`,
                    });
                } else {
                    res.status(201).json({ data });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: "some error occured while fetching data",
                    err,
                });
            });
    } else {
        Layout.find()
            .then((data) => {
                data.reverse();
                res.status(201).json({ data });
            })
            .catch((err) => {
                res.status(500).send({
                    message: "some error occured while fetching data",
                    err,
                });
            });
    }
};

exports.update = (req, res) => {
    Layout.findByIdAndUpdate(req.params.id, req.body, {new : true})
        .then((data) => {
            res.status(201).json({data})
        })
        .catch((error) => {
            res.status(500).send({ message: "something went wrong", error });
        })
}
