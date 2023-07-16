
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db')
const routes = require('./routes')
const morgan = require('morgan')
dotenv.config()

const app = express()

app.use(express.json())
app.use(morgan(':method :url :status'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server running @ ${PORT}`)
})

connectDB()

app.use('/api', routes)
