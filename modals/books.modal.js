const mongoose = require('mongoose');

//Schema Schema is a class name 
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
},
//Timestamps we get when insertion or updation are made.
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("Book",bookSchema);
