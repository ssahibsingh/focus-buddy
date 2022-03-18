const express = require('express');
const app = express();

const {register} = require('./src/registration');
const {setQuiz} = require('./src/setQuiz');
const {addQuiztoUser} = require('./src/addQuiztoUser');

let quiz2 = {
    link:"http://localhost:3000/",
    totalMarks:10,
    marksObtained:8
}

let data = {
    name: "Test",
    fatherName: "Hello",
    motherName: "World",
    dob: "1999-12-30",
    phoneNumber: 6234567890,
    email: "test@example.com",
    fatherEmail: "test1@example.com",
    motherEmail: "test2@example.com",
    schoolName:"TEST",
    studiesIn: 12,
}


app.get('/', (req, res) => {
    res.send("Hello Server");
    // register(data);
    // setQuiz(quiz2);
    addQuiztoUser(data, "http://localhost:3000/");
})


app.post('/register', (req, res) => {

    // let data = {
    //     name: req.body.name,
    //     fatherName:req.body.fatherName,
    //     motherName:req.body.motherName,
    //     dob:req.body.dob,
    //     phoneNumber:req.body.phoneNumber,
    //     email:req.body.email,
    //     fatherEmail:req.body.fatherEmail,
    //     motherEmail:req.body.motherEmail,
    //     schoolName:req.body.schoolName,
    //     studiesIn:req.body.studiesIn,
    // }

    


})

app.listen(process.env.PORT,(req, res) => {
    console.log("listening on PORT 3000");
})