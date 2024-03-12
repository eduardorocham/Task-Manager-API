import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, "field title is required"] },
  description: { type: String },
  assigned_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
  column_id: { type: mongoose.Schema.Types.ObjectId, ref: "columns" },
});

taskSchema.pre("find", function (next) {
  this.populate({
    path: "assigned_to",
    select: "-email -password",
  }).populate({
    path: "comments",
    select: "-task_id",
  });
  next();
});

const task = new mongoose.model("tasks", taskSchema);

export { task };
