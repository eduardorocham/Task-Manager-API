import Controller from "./Controller.js";
import UserServices from "../services/UserServices.js";

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices, "user");
  }
}

export default UserController;
