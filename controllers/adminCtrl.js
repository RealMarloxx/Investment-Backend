
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

dotenv.config()

const pagination = (req) => {

    const page = Number(req.query.page) * 1 || 1;

    const limit = Number(req.query.limit) * 1 || 5;

    const skip = limit * (page - 1)
  
    return { page, limit, skip }; 
}

const adminCtrl = {
    
    findAllUsers: async (req, res)=>{

        try {

            const { page, limit, skip } = pagination(req)

            const users = await User.find().limit(limit).skip(skip).sort('-createdAt')

            return res.status(200).json({
                message: 'successful',
                page,
                count: users.length,
                users
            })
            
        } catch (error) {
            res.status(500).json({message: error.message})            
        } 

    },

    findOneUser: async (req, res)=>{

        try {
            
            const { email } = req.body

            const user = await User.findOne({ email: email})

            return res.status(200).json({
                message: "successful",
                user
            })
        } catch (error) {
            res.status(500).json({message: error.message})            
        }

    },

    deleteUser: async (req, res)=>{

        const { id } = req.params

        const deletedUser = await Student.findOneAndDelete({_id : id})

        return res.status(200).json({
            message: "Deleted!"

        })
    }
}

module.exports = adminCtrl