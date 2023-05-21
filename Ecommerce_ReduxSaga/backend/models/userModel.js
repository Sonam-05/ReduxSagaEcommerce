const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    sport : {
        type : String,
        required : true
    }
}, {timestamps : true});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;