import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userController = new UserController()

const usersRoutes = Router()

usersRoutes.get("/users", (req, res) => userController.getAll(req, res))
usersRoutes.post("/user", (req, res) => userController.create(req, res))

export default usersRoutes