import express from "express";
import routes from "./routes/index.js";
import connectDataBase from "./config/dbConnetion.js";

const connection = await connectDataBase()

connection.on("error", (error) => console.error("An error has occcured when trying to connect to the database", error))
connection.once("open", () => console.log("Connection with database made with success!"))

const app = express()

routes(app)

export default app