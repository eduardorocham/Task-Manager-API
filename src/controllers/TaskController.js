import Controller from "./Controller.js";

import TaskServices from "../services/TaskServices.js";

const taskServices = new TaskServices();

class TaskController extends Controller {
  constructor() {
    super(taskServices, "task");
  }
}

export default TaskController;
