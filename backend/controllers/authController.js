let User = require('../models/user');
let bcrypt = require('bcryptjs');
let JWT = require('jsonwebtoken');

// register 

module.exports.register = async (req, res) => {
    let { username , password , email , role} = req.body;
    let bcryptPassword = await bcrypt.hash(password , 10);

    try{
        const newUser = new User({ username , bcryptPassword , email , role});
        await newUser.save();
        console.log('new User : ' , newUser);    
    }
    catch{
        console.log('error in user creation :',err);
    }
}

//login

module.exports.login = (req , res) => {
    let { username , password } = req.body;
    
}