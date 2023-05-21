const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    slug : {
        type : String,
        lowcase : true
    }
}, {timestamps : true});

const tagModel = mongoose.model("tags", tagSchema);
module.exports = tagModel;