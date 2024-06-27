const Services = require("./Services")
const database = require("../models")
const user = database.users;

class UserServices extends Services {
  constructor() {
    super(user);
  }
}

module.exports = UserServices
