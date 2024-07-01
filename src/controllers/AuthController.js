const AuthService = require('../services/AuthService');

const authService = new AuthService();

class AuthController {
    async doLogin(req, res) {
        const { username, password } = req.body;

        try {
            const token = await authService.doLogin({ username, password });

            res.status(200).send(token);
        } catch(error) {
            res.status(401).send({ message: error.message });
        }
    }
}

module.exports = AuthController