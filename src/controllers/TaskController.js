const Controller = require("./Controller");
const TaskServices = require("../services/TaskServices");
const ColumnServices = require("../services/ColumnServices")

const taskServices = new TaskServices();
const columnServices = new ColumnServices();

class TaskController extends Controller {
  constructor() {
    super(taskServices, "task");
  }

  async getAllTasks(req, res) {
    try {
      const tasksList = await taskServices.getAllTasks();
      return res.status(200).json(tasksList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getOneTask(req, res) {
    const { id } = req.params;

    try {
      const task = await taskServices.getOneTask(id);

      if (task !== null) {
        return res.status(200).json(task);
      } else {
        return res
          .status(404)
          .json({ message: `${this.entityName} don't found` });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createTask(req, res) {
    const { title, description, column_id, assigned_to } = req.body;

    try {
      const column = await columnServices.getColumnWithProjectData(column_id);

      const userBelongsToProject = column.project.users_project
        .map((user) => user.id)
        .some((userId) => userId === assigned_to)
      ;

      if (!userBelongsToProject) {
        return res
          .status(422)
          .json({ message: "The user you are trying to associate with the task must belong to the project" })
      }

      const newTask = await this.entityService.createRegister({ title, description, column_id, assigned_to });

      const response = {};
      response.message = `${this.entityName} created with success!`;
      response[this.entityName] = newTask;

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TaskController;
