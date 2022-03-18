const mongoose = require('mongoose');
const {isEmail} = require ('validator');
const quizSchema = require('./quiz');


var Quiz = mongoose.model('Quiz', quizSchema);

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
        type: Date,
        required: true,
    },
    phoneNumber:{
        type: Number,
        min: 4000000000,
        max: 9999999999
    },
    email:{
        type: String,
        unique: true
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
    quizDetails:[quizSchema]
})


module.exports = userSchema;