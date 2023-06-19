const express = require("express");
const connectDb = require("./db/conn");
const app = express();
const port = process.env.port || 3000;

app.get("/",(req,res)=>{
    res.send("home page")
});

const start = ()=>{
    try {
        app.listen(port,()=>{
            connectDb();
            console.log(`Created a Local sever with Port number : ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();