const { Router } = require("express") ;
const permissions = require("../middlewares/permissions")
const UserController = require("../controllers/UserController");

const userController = new UserController()

const usersRoutes = Router()

usersRoutes.get("/users", permissions(["list_users"]), (req, res) => userController.getAllUsers(req, res))
usersRoutes.get("/users/:id", (req, res) => userController.getOneUser(req, res))
usersRoutes.post("/users", permissions(["create_user"]), (req, res) => userController.createUser(req, res))
usersRoutes.put("/users/:id", (req, res) => userController.update(req, res))
usersRoutes.delete("/users/:id", (req, res) => userController.delete(req, res))

module.exports = usersRoutes