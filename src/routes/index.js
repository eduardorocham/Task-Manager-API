// import express from "express";
// import usersRoutes from "./usersRoutes.js";
// import accountsRouter from "./accountsRoutes.js";
// import projectsRoutes from "./projectsRoutes.js";
// import commentsRoutes from "./commentsRoutes.js";
// import tasksRoutes from "./tasksRoutes.js";
// import columnsRoutes from "./columnsRoutes.js";
const express = require("express")
const usersRoutes = require("./usersRoutes")
const projectsRoutes = require("./projectsRoutes")
const columnsRoutes = require("./columnsRoutes")

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send("Bem vindo à To do list API!"));

  app.use(
    express.json(),
    // accountsRouter,
    usersRoutes,
    projectsRoutes,
    columnsRoutes
    // commentsRoutes,
    // tasksRoutes,
    
  );
};

module.exports = routes