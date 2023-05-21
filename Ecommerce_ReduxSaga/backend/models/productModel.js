const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    }, 
    category : {
        type : mongoose.ObjectId,
        ref : "categories",
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    originalPrice : {
        type : Number,
        required : true
    },
    sellingPrice : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
}, {timestamps : true});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;