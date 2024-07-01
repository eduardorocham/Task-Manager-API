const Controller = require("./Controller");
const UserServices = require("../services/UserServices");

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices, "user");
  }

  async createUser(req, res) {
    const dataToCreate = req.body;

    try {
      const newUser = await userServices.createUser(dataToCreate);

      const response = {};
      response.message = `User created with success!`;
      response.user = newUser;

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
