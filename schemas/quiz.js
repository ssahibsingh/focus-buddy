const mongoose = require('mongoose');
const { dbconnect } = require('../db/dbconnect');

const quizSchema = new mongoose.Schema({
    quizDate: {
        type: Date,
        default: Date.now
    },
    link: {
        type: String,
        required: true
    },
    totalMarks:{
        type: Number,
        required: true
    }, 
    marksObtained:{
        type: Number,
        required: true
    }    
})


module.exports = quizSchema;



