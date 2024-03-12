import Services from "./Services.js";
import { comment } from "../models/Comment.js";

class CommentServices extends Services {
  constructor() {
    super(comment);
  }
}

export default CommentServices;
