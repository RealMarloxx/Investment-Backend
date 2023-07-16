
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const URI = process.env.MONGODB_URL 

const connectDB = ()=>{
    mongoose.connect(URI)
    .then(()=>{
        console.log('Connected to the database...')
    })
}

module.exports = connectDB