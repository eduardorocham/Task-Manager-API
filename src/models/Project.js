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
});

projectSchema.pre("find", function (next) {
  this.populate("responsibles");
  next();
});

const project = mongoose.model("projects", projectSchema);

export { project };
