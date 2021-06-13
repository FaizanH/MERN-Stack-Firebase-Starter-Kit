const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    exampleField: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Data = mongoose.model("data", dataSchema);

module.exports = Data;
