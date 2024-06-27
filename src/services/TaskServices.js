const Services = require ("./Services");
const database = require("../models");
const task = database.tasks;

class TaskServices extends Services {
  constructor() {
    super(task);
  }

  // async createTask(registerData) {
  //   const newTask = await super.createRegister(registerData);
  //   const column = await columnServices.getOneRegisterById(newTask.column_id);
  //   column.tasks.push(newTask._id);
  //   column.save();

  //   return newTask;
  // }
}

module.exports = TaskServices;
