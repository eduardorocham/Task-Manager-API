import { Router } from "express";
import CommentController from "../controllers/CommentController.js";

const commentController = new CommentController();

const commentsRoutes = Router();

commentsRoutes.get("/comments", (req, res) =>
  commentController.getAll(req, res)
);
commentsRoutes.get("/comment/:id", (req, res) =>
  commentController.getOneById(req, res)
);
commentsRoutes.post("/comment", (req, res) =>
  commentController.addComment(req, res)
);
commentsRoutes.put("/comment/:id", (req, res) =>
  commentController.update(req, res)
);
commentsRoutes.delete("/comment/:id", (req, res) =>
  commentController.delete(req, res)
);

export default commentsRoutes;
