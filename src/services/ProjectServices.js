const Services = require("./Services");
const database = require("../models");
const project = database.projects;
const users = database.users;
const usersProject = database.users_projects;

class ProjectServices extends Services {
  constructor() {
    super(project);
  }

  async addUserToProject(dto) {
    return usersProject.create(dto);
  }

  async getUsersProject(dto) {
    return project.findByPk(dto, {
      include: [
        {
          model: users,
          as: 'users_project',
          attributes: ['id', 'username', 'first_name', 'last_name', 'email'],
          through: {
            attributes: []
          }
        }
      ]
    })
  }
}

module.exports = ProjectServices;
