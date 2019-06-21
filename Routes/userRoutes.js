const userRoutes = require('express').Router()
const controller = require('../controller/userController')
userRoutes.post('/login',controller.signIn)
module.exports = userRoutes