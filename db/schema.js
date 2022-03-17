const mongoose = require('mongoose');
const {isEmail} = require ('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    fatherName:{
        type: String,
        required: true,
    },
    motherName:{
        type: String,
        required: true,
    },
    dob:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: Number,
        min: 1000000000,
        max: 9999999999
    },
    email:{
        type: String,
        unique: true,
        validate: [isEmail, 'invalid email']
    },
    fatherEmail:{
        type: String,
        validate: [isEmail, 'invalid email']
    },
    motherEmail:{
        type: String,
        validate: [isEmail, 'invalid email']
    },
    schoolName: String,
    studiesIn: Number,
})


module.exports = userSchema;