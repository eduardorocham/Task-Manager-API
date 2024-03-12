import Controller from "./Controller.js";
import CommentServices from "../services/CommentServices.js";

const commentServices = new CommentServices();

class CommentController extends Controller {
  constructor() {
    super(commentServices, "comment");
  }

  async addComment(req, res) {
    const dataToCreate = req.body;

    try {
      const newComment = await commentServices.createComment(dataToCreate);

      const response = {};
      response.message = `${this.entityName} created with success!`;
      response.comment = newComment;

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default CommentController;
