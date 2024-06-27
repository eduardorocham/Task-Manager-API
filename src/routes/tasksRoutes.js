const { Router } = require("express");
const TaskController = require("../controllers/TaskController.js");

const taskController = new TaskController();

const tasksRoutes = Router();

tasksRoutes.get("/tasks", (req, res) => taskController.getAll(req, res));
tasksRoutes.get("/tasks/:id", (req, res) =>
  taskController.getOneById(req, res)
);
tasksRoutes.post("/task", (req, res) => taskController.create(req, res));
tasksRoutes.put("/task/:id", (req, res) => taskController.update(req, res));
tasksRoutes.delete("/task/:id", (req, res) => taskController.delete(req, res));

module.exports = tasksRoutes;
