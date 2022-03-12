const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');


const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.json(400);
        throw new Error('Email already in use.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name, 
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json(user);
    }else{
        res.status(400)
        throw new Error('User register failed');
    }
    

})

const loginUser = async (req, res) => {
    res.json('user logged in');
}

module.exports = {
    registerUser,
    loginUser
}