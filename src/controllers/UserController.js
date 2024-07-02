const Controller = require("./Controller");
const UserServices = require("../services/UserServices");

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices, "user");
  }

  async getAllUsers(req, res) {
    try {
      const usersList = await this.entityService.getAllUsers();
      return res.status(200).json(usersList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getOneUser(req, res) {
    const { id } = req.params;

    try {
      const user = await this.entityService.getOneUser(id);

      if (user !== null) {
        return res.status(200).json(user);
      } else {
        return res
          .status(404)
          .json({ message: `${this.entityName} don't found` });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
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
