const express = require("express");
const colors = require('colors')
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv");
const connectiondb = require("./config/db");

const app = express();

//config
dotenv.config();

//database-connection
connectiondb();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'));

const port = process.env.PORT || 8080;

//routes
app.use('/api/v1/user', require('./routes/userRoute'));
app.use('/api/v1/product', require('./routes/productRoute'));
app.use('/api/v1/category', require('./routes/categoryRoute'));
app.use('/api/v1/tag', require('./routes/tagRoute'))

//app listen
app.listen(port, () => {
    console.log(`Server is running on port ${port} in ${process.env.MODE} mode`.bgGreen);
});