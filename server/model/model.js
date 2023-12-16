const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    title: String,
    desc: String,
    rows: [
        {
            Index: Number,
            cols: [
                {
                    Index: Number,
                    value: String,
                    label: String,
                    placeholder: String,
                },
            ],
        },
    ],
});

const Layout = mongoose.model("layout", schema);

module.exports = Layout;
