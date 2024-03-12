import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, "field title is required"] },
  description: { type: String },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

taskSchema.pre("find", function (next) {
  this.populate("assignedTo");
  next();
});

const task = mongoose.model("tasks", taskSchema);

export { task };
