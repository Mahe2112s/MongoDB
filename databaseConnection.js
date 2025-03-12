const mongoose = require("mongoose");
const env = require("process");

function DbConnection(){
    const DB_URL = process.env.MONGO_URI;
    
    if(!DB_URL){
        console.error("❌ MONGO_URI is not defined in .env file");
        return;
    }

    mongoose.connect(DB_URL)
        .then(()=> console.log("✅DB connected successfully"))
        .catch(err => console.error("❌ DB connection error",err));

}

module.exports = DbConnection;