import mongoose from "mongoose";

const columnSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: [true, "name field is required"] },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "tasks" }],
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
    required: [true, "project_id field is required"],
  },
});

columnSchema.pre("find", function (next) {
  this.populate({
    path: "tasks",
    select: "-column_id",
  });
  next();
});

const column = new mongoose.model("columns", columnSchema);

export { column };
