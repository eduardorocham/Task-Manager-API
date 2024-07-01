const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

class AuthService {
    async doLogin(dto) {
        const user = await database.users.findOne({
            attributes: ['id', 'username', 'password'],
            where: {
                username: dto.username
            }
        })

        if (!user) {
            throw new Error(`User don't found`)
        }

        const equalPasswords = await compare(dto.password, user.password)

        if (!equalPasswords) {
            throw new Error("Incorrect username or password")
        }

        const accessToken = sign({
            id: user.id,
            username: user.username
        }, jsonSecret.secret, {
            expiresIn: 86400 // 1 dia
        })

        return { accessToken }
    }
}

module.exports = AuthService;