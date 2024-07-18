const { Router } = require("express");
const ProjectController = require("../controllers/ProjectController.js");

const projectController = new ProjectController();

const projectsRoutes = Router();

projectsRoutes.get("/projects", (req, res) =>
  projectController.getAll(req, res)
);
projectsRoutes.get("/projects/:id", (req, res) =>
  projectController.getOneById(req, res)
);
projectsRoutes.get("/projects/:id/users", (req, res) =>
  projectController.getProjectUsers(req, res)
);
projectsRoutes.post("/projects", (req, res) =>
  projectController.create(req, res)
);
projectsRoutes.post("/projects/add-user", (req, res) =>
  projectController.addUserToProject(req, res)
)
projectsRoutes.put("/projects/:id", (req, res) =>
  projectController.update(req, res)
);
projectsRoutes.delete("/projects/:id", (req, res) =>
  projectController.delete(req, res)
);

module.exports = projectsRoutes;
