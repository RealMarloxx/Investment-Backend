
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

dotenv.config()

const userCtrl = {
    registration: async(req, res)=>{
        try {
            
            const { firstName, lastName, phoneNumber, email, password} = req.body

            const userAlreadyExists = await User.findOne({ email })

            if(userAlreadyExists) return res.status(400).json({message: 'This user already exists'})

            const hashedPassword = await bcrypt.hash(password, 15)

            // const num = Math.floor(Math.random() * 1000000000)

            const newUser = new User({ firstName, lastName, phoneNumber, email, password: hashedPassword })

            await newUser.save()

            return res.status(200).json({
                message: 'Registration Successful',
                user: newUser
            })

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    login: async(req, res)=>{

        try {
            
            const {email, password} = req.body

            const user = await User.findOne({ email })

            if (!user) return res.status(400).json({message: 'This user does not exist'})

            const isMatched = await bcrypt.compare(password, user.password)

            if (!isMatched) return res.status(400).json({message: 'Incorrect email or password'})

            const accessToken = await jwt.sign(
                {id: user._id}, 
                process.env.ACCESS_TOKEN, 
                { expiresIn: '30m'} 
                )

            return res.status(200).json({
                message: "Successful",
                accessToken,
                user
            })
        } catch (error) {
            res.status(500).json({message: error.message})            
        }
    },

    update: async(req, res)=>{},

    deposit: async(req, res)=>{},

    withdraw: async(req, res)=>{},

    invest: async(req, res)=>{}

}

module.exports = userCtrl