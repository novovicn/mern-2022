const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please populate name.']
    },
    email:{
        type: String,
        required: [true, 'Please add email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Password is missing']
    }
}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema);

module.exports = User;