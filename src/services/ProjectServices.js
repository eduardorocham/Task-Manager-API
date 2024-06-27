const Services = require("./Services");
const database = require("../models");
const project = database.projects;

class ProjectServices extends Services {
  constructor() {
    super(project);
  }
}

module.exports = ProjectServices;
