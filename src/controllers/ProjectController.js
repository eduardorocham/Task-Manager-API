const Controller = require("./Controller");
const ProjectServices = require("../services/ProjectServices");

const projectServices = new ProjectServices();

class ProjectController extends Controller {
  constructor() {
    super(projectServices, "project");
  }

  // async getOneProject(req, res) {
  //   const { id } = req.params;

  //   try {
  //     const project = await projectServices.getOneProjectById(id);

  //     if (project !== null) {
  //       return res.status(200).json(project);
  //     } else {
  //       return res
  //         .status(404)
  //         .json({ message: `${this.entityName} don't found` });
  //     }
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
}

module.exports = ProjectController;
