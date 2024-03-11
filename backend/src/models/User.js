import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  username: { type: String, required: [true, "username field is required!"] },
  first_name: {
    type: String,
    required: [true, "first_name field is required!"],
  },
  last_name: { type: String, required: [true, "last_name field is required!"] },
  email: { type: String, required: [true, "email field is required!"] },
  password: { type: String, required: [true, "password field is required!"] },
});

const user = mongoose.model("users", userSchema);

export { user, userSchema };
