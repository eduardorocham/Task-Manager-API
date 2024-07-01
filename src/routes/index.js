const express = require("express")
const authRoutes = require("./authRoutes")
const usersRoutes = require("./usersRoutes")
const projectsRoutes = require("./projectsRoutes")
const columnsRoutes = require("./columnsRoutes")
const tasksRoutes = require("./tasksRoutes")

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send("Bem vindo à To do list API!"));

  app.use(
    express.json(),
    authRoutes,
    usersRoutes,
    projectsRoutes,
    columnsRoutes,
    tasksRoutes,
  );
};

module.exports = routes