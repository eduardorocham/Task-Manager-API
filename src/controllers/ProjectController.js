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
      const project = await projectServices.getUsersProject(id);

      if (!project) {
        return res.status(404).json({ message: `Project with id ${id} don't found` });
      }

      return res.status(200).json(project);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
 }

module.exports = ProjectController;
