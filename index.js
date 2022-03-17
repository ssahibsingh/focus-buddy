const express = require('express');
const app = express();

const {register} = require('./src/registration');

let data = {
    name: "Test",
    fatherName: "Hello",
    motherName: "World",
    dob: "1999-12-30",
    phoneNumber: 1234567890,
    email: "test3@example.com",
    fatherEmail: "test1@example.com",
    motherEmail: "test2@example.com",
    schoolName:"TEST",
    studiesIn: 12,
}

app.get('/', (req, res) => {
    res.send("Hello Server");
    register(data);
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

app.listen('3000', (req, res) => {
    console.log("listening on PORT 3000");
})