const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    data: [
        {
            label: String,
            value: String
        }
    ]
});

const Data = mongoose.model("data", schema);

module.exports = Data;
