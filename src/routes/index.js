const express = require("express")
const authRoutes = require("./authRoutes")
const usersRoutes = require("./usersRoutes")
const projectsRoutes = require("./projectsRoutes")
const columnsRoutes = require("./columnsRoutes")
const tasksRoutes = require("./tasksRoutes")
const groupsRoutes = require("./groupsRoutes")
const authMiddleware = require('../middlewares/auth')

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send("Bem vindo à To do list API!"));

  // Rotas públicas
  app.use(
    express.json(), 
    authRoutes
  );

  const protectedRoutes = express.Router();
  protectedRoutes.use(authMiddleware);

  // Rotas privadas
  protectedRoutes.use(usersRoutes);
  protectedRoutes.use(projectsRoutes);
  protectedRoutes.use(columnsRoutes);
  protectedRoutes.use(tasksRoutes);
  projectsRoutes.use(groupsRoutes);

  app.use(
    express.json(),
    protectedRoutes
  );
};

module.exports = routes