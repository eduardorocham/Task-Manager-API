import { Router } from "express";
import AccountsController from "../controllers/AccountsController.js";

const accountsController = new AccountsController()

const accountsRouter = Router()

accountsRouter.post("/login", (req, res) => accountsController.DoLogin(req, res))

export default accountsRouter