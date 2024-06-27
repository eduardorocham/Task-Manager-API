const Controller = require("./Controller");
const TaskServices = require("../services/TaskServices");
const taskServices = new TaskServices();

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
}

module.exports = TaskController;
