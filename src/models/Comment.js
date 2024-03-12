import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  text: { type: String, required: [true, "text field is required"] },
  posted_by: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

commentSchema.pre("find", function (next) {
  this.populate({
    path: "posted_by",
    select: "-email -password",
  });
  next();
});

const comment = new mongoose.model("comments", commentSchema);

export { comment };
