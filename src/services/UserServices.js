import Services from "./Services.js";
import { user } from "../models/User.js";

class UserServices extends Services {
  constructor() {
    super(user);
  }
}

export default UserServices;
