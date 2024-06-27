const Controller = require("./Controller");
const UserServices = require("../services/UserServices");

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices, "user");
  }
}

module.exports = UserController;
