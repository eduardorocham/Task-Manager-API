import Services from "./Services.js";
import { task } from "../models/Task.js";
import { comment } from "../models/Comment.js";

class CommentServices extends Services {
  constructor() {
    super(comment);
    this.taskServices = new Services(task);
  }

  async createComment(registerData) {
    const newComment = await super.createRegister(registerData);
    const taskFound = await this.taskServices.getOneRegisterById(
      newComment.task_id
    );
    taskFound.comments.push(newComment._id);
    taskFound.save();

    return newComment;
  }
}

export default CommentServices;
