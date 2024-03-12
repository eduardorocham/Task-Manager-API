import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import { user } from "../models/User.js";

dotenv.config();

class AccountsController {
  async DoLogin(req, res) {
    const { username, password } = req.body;

    if (username && password) {
      let userFound = await user.findOne({
        username,
        password,
      });

      if (userFound) {
        const token = JWT.sign(
          { username, password },
          process.env.JWT_SECRET_KEY
        );

        return res.status(200).json({ token: token });
      }

      return res.status(401).json({
        message: "Authentication failed. Please provide valid credentials.",
      });
    }

    res.json({ message: "One or more credentials were not provided" });
  }
}

export default AccountsController;
