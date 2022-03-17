const mongoose = require('mongoose');
const {dbconnect} = require('../db/dbconnect');
const userSchema = require('../db/schema');


function register(data) {
    dbconnect();
    const User = mongoose.model('User', userSchema);

    User.find({ email: data.email }, (err, res) => {
        if (!err) {
            if (res.length > 0) {
                console.log("User Already Exists!!!");
            }
            else {
                User.insertMany([data], (error, result) => {
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

module.exports = { register };