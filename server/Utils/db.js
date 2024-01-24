
const mongoose = require("mongoose");
require("dotenv").config();

const Database = () =>{
    mongoose.connect(process.env.DATABASE_URL,{ })
    .then(()=> console.log('MongoDB Connected ...'))
    .catch((err)=>{
        console.log(`error hai bhai ${err}`);
        console.error(err)});
}

module.exports = Database;
  

/*
or  we can write

const connect = async () => {
try{
    await mongoose.connect(URL);
    console.log("connection sucessfull to db");
}catch(error){
    console.error("connection failed to db");
    process.exit(0)
}
};

*/