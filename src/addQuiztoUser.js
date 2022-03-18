const mongoose = require('mongoose');
const {dbconnect} = require('../db/dbconnect');
const quizSchema = require('../schemas/quiz');
const userSchema = require('../schemas/user');

function addQuiztoUser(user, quizLink ){
    dbconnect();
    const User = mongoose.model('User', userSchema);
    const Quiz = mongoose.model('Quiz', quizSchema);

    Quiz.findOne({link: quizLink}, function(err, res){
        console.log(res);
    })

    // User.updateOne({email: user}, {$push: {quizDetails: quiz}})
}

module.exports = {addQuiztoUser};