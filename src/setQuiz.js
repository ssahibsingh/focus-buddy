const mongoose = require('mongoose');
const {dbconnect} = require('../db/dbconnect');
const quizSchema = require('../schemas/quiz');

function setQuiz(quiz){
    dbconnect();
    const Quiz = mongoose.model('Quiz', quizSchema);

    Quiz.find({ link: quiz.link }, (err, res) => {
        if (!err) {
            if (res.length > 0) {
                console.log("Quiz Already Exists!!!");
            }
            else {
                Quiz.insertMany([quiz], (error, result) => {
                    if (!error) {
                        console.log(result);
                        return result;
                    }
                    else {
                        console.log(error);
                        return error;
                    }
                });
            }
        }
        else {
            console.log(err);
        }
    })
}


module.exports = { setQuiz };