const mongoose = require('mongoose');


//Schema should be in upper case since Schema is a class name 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    issuedBook:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: false,
    },
    issuedDate:{
        type: String,
        required : false,
    },
    returnDate: {
        type: String,
        required: false,
    },
    subscriptionType: {
        type: String,
        required: true, 
    },
    subscriptionDate: {
        type: String,
        required: true, 
    },
},
//Timestamps we get when insertion or updation are made.
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("User",userSchema);
