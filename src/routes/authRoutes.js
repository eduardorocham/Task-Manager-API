const { Router } = require('express')
const AuthController = require('../controllers/AuthController.js')

const authController = new AuthController()

const authRoutes = Router()

authRoutes.post("/login", (req, res) => authController.doLogin(req, res))

module.exports = authRoutes