const { verify, decode } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Invalid token format" });
    }

    const [, accessToken] = token.split(" ")

    try {
        //  verificar a validade do token JWT
        verify(accessToken, jsonSecret.secret)

        const { id, username } = await decode(accessToken)

        req.userId = id
        req.username = username

        return next()
    } catch(error) {
        res.status(401).json({ message: "User don't authorized" })
    }
}