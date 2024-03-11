import { Router } from "express";
import ProjectController from "../controllers/ProjectController.js";

const projectController = new ProjectController();

const projectsRoutes = Router();

projectsRoutes.get("/projects", (req, res) =>
  projectController.getAll(req, res)
);
projectsRoutes.post("/project", (req, res) =>
  projectController.create(req, res)
);

export default projectsRoutes;
