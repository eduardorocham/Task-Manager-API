const Services = require ("./Services");
const database = require("../models");
const task = database.tasks;

class TaskServices extends Services {
  constructor() {
    super(task);
  }

  async getAllTasks() {
    return task.findAll({
      include: [
        {
          model: database.columns,
          attributes: ['id', 'name']
        },
        {
          model: database.users,
          attributes: [
            'id',
            'username',
            'first_name',
            'last_name'
          ]
        }
      ]
    });
  }

  async getOneTask(id) {
    return task.findOne({
      include: [
        {
          model: database.columns,
          attributes: ['id', 'name']
        },
        {
          model: database.users,
          attributes: [
            'id',
            'username',
            'first_name',
            'last_name'
          ]
        }
      ],
      where: {
        id
      }
    });
  }
}

module.exports = TaskServices;
