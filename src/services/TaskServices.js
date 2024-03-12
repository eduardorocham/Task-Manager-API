import Services from "./Services.js";
import { task } from "../models/Task.js";

class TaskServices extends Services {
  constructor() {
    super(task);
  }
}

export default TaskServices;
