import { Router } from "express";
import TaskController from "../controllers/TaskController.js";

const taskController = new TaskController();

const tasksRoutes = Router();

tasksRoutes.get("/tasks", (req, res) => taskController.getAll(req, res));
tasksRoutes.get("/tasks/:id", (req, res) =>
  taskController.getOneById(req, res)
);
tasksRoutes.post("/task", (req, res) => taskController.addTask(req, res));
tasksRoutes.put("/task/:id", (req, res) => taskController.update(req, res));
tasksRoutes.delete("/task/:id", (req, res) => taskController.delete(req, res));

export default tasksRoutes;
