const mongoose = require("mongoose");


const connectDb = () =>{
    try {
        console.log("Database connection successful");
        return mongoose.connect("mongodb://127.0.0.1:27017/employerdata");
    } catch (error) {
        console.log(error);
    }
} 

module.exports = connectDb;