const { Router } = require("express") ;
const UserController = require("../controllers/UserController");

const userController = new UserController()

const usersRoutes = Router()

usersRoutes.get("/users", (req, res) => userController.getAll(req, res))
usersRoutes.post("/user", (req, res) => userController.create(req, res))
usersRoutes.put("/users/:id", (req, res) => userController.update(req, res))
usersRoutes.delete("/users/:id", (req, res) => userController.delete(req, res))

module.exports = usersRoutes