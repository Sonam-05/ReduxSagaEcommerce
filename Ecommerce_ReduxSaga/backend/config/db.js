const mongoose = require("mongoose");

const connectiondb = async () => {
    try{
        let conn = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`mongodb connected successfully on ${mongoose.connection.host}`);
    }catch(error){
        console.log(`mongodb connection issue : ${error}`)
    }
}

module.exports = connectiondb;