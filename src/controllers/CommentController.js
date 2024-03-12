import Controller from "./Controller.js";
import CommentServices from "../services/CommentServices.js";

const commentServices = new CommentServices();

class CommentController extends Controller {
  constructor() {
    super(commentServices, "comment");
  }
}

export default CommentController;
