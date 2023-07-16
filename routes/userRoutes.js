
const express = require('express')
const userCtrl = require('../controllers/userCtrl')
const { validateUserRegistration, validateUserLogin } = require('../middlewares/userMiddleware')

const router = express.Router()

//User Registration

router.post('/signup', validateUserRegistration, userCtrl.registration)

//User Login

router.post('/signin', validateUserLogin, userCtrl.login)



module.exports = router

