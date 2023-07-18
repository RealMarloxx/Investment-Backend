const express = require('express')
const { validateUserRegistration, validateUserLogin } = require('../middlewares/userMiddleware')
const adminCtrl = require('../controllers/adminCtrl')

const router = express.Router()

router.get('/find-user', adminCtrl.findOneUser)

router.get('/find-all-users', adminCtrl.findAllUsers)

router.delete('/delete-user', adminCtrl.deleteUser)