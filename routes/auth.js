const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.post('/register', authController.postRegister)
router.post('/login', authController.postLogin)
router.get('/allusers', authController.getUsers)

module.exports = router;