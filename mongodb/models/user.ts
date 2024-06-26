import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const User = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: String, required: true },
});

const UserSchema = mongoose.models.User || mongoose.model("User", User);

export default UserSchema;
