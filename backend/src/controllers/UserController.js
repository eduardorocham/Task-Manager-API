import Controller from "./Controller.js";
import UserServices from "../services/UserService.js";

const userServices = new UserServices()

class UserController extends Controller {
    constructor() {
        super(userServices, "user")
    }
}

export default UserController