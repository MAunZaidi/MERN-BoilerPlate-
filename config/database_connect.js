const mongoose = require("mongoose");


const ConnectDataBase = async()  =>{
    try {
        const connect  = await mongoose.connect(process.env.ConnectionString);//check env folder
        console.log("The Database is sucessfully connected",connect.connection.host,connect.connection.name);

    } catch (error) {
        console.log(error);
        process.exit(1)         
    }

};



module.exports = ConnectDataBase;