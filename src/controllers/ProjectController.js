import Controller from "./Controller.js";
import ProjectServices from "../services/ProjectServices.js";

const projectServices = new ProjectServices();

class ProjectController extends Controller {
  constructor() {
    super(projectServices, "project");
  }
}

export default ProjectController;
