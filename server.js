const express = require("express");
const app = express();
//initialization of express

const dotenv = require("dotenv").config();

app.use(express.json()); //this is a parser use to handle user giving data

//database connectivity
ConnectDataBase();

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('SERVER IS RUNNING ON PORT: ',`${port}`);
}); //initialization of a server