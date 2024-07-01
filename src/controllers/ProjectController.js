const Controller = require("./Controller");
const ProjectServices = require("../services/ProjectServices");

const projectServices = new ProjectServices();

class ProjectController extends Controller {
  constructor() {
    super(projectServices, "project");
  }

  async addUserToProject(req, res) {
    const { user_id, project_id } = req.body;

    try {
      const newRegister = await projectServices.addUserToProject({ user_id, project_id });

      const response = {};
      response.message = `User ${user_id} added with success to project ${project_id}!`;
      response[this.entityName] = newRegister;

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getUsersProject(req, res) {
    const { id } = req.params;

    try {
      const result = await projectServices.getUsersProject(id);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
 }

module.exports = ProjectController;
