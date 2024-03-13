import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: [true, "field name is required"] },
  responsibles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  columns: [{ type: mongoose.Schema.Types.ObjectId, ref: "columns" }],
});

projectSchema.pre("find", function (next) {
  this.populate("responsibles").populate({
    path: "columns",
    select: "-project_id",
  });
  next();
});

const project = mongoose.model("projects", projectSchema);

export { project };
