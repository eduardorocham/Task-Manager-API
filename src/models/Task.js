import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, "field title is required"] },
  description: { type: String },
  assigned_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

taskSchema.pre("find", function (next) {
  this.populate({
    path: "assigned_to",
    select: "-email -password",
  });
  next();
});

const task = new mongoose.model("tasks", taskSchema);

export { task };
