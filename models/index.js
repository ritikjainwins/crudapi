const { string, date } = require("joi");
const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    epmId:{
        type:Number,
        unique:true,
        required:true
    },
    phone_no:Number,
    city:{
        type:String,
        default:"Mohali"
    }
},
{ timestamps: true });

const EmpData = new mongoose.model("employerinfo",empSchema);

module.exports = EmpData;