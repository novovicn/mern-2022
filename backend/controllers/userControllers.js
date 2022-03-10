const User = require('../models/userModel');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
}

const loginUser = async (req, res) => {
    res.json('user logged in');
}

module.exports = {
    registerUser,
    loginUser
}