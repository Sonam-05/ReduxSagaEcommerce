const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        lowercase : true
    }
}, { timestamps: true });

const categoryModel = mongoose.model("categories", categorySchema);
module.exports = categoryModel;

