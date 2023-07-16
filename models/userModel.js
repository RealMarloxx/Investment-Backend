const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },

    phoneNumber: {
        type: Number,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    }

})

const User = new mongoose.model("User", userScheme)

module.exports = User