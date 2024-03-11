import Services from "./Services.js";
import { project } from "../models/Project.js";

class ProjectServices extends Services {
  constructor() {
    super(project);
  }
}

export default ProjectServices;
