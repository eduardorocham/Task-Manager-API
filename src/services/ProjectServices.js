const Services = require("./Services");
const database = require("../models");
const project = database.projects;
const usersProject = database.users_projects;

class ProjectServices extends Services {
  constructor() {
    super(project);
  }

  // async getAllProjects() {
  //   return usersProject.findAll({
  //     include: [
  //       {
  //         model: usersProject,
  //         as: 'projects_user',
  //         attributes: ['id', 'name']
  //       }
  //     ]
  //   });
  // }

  async addUserToProject(dto) {
    return usersProject.create(dto);
  }
}

module.exports = ProjectServices;
