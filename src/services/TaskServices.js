import Services from "./Services.js";
import { task } from "../models/Task.js";
import ColumnServices from "./ColumnServices.js";

const columnServices = new ColumnServices();

class TaskServices extends Services {
  constructor() {
    super(task);
  }

  async createTask(registerData) {
    const newTask = await super.createRegister(registerData);
    const column = await columnServices.getOneRegisterById(newTask.column_id);
    column.tasks.push(newTask._id);
    column.save();

    return newTask;
  }
}

export default TaskServices;
