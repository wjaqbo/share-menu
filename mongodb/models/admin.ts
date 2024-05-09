import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const Admin = new mongoose.Schema(
  {
    lang: { type: String, required: true },
    storeIds: { type: Array<String>, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

const AdminSchema = mongoose.models.Admin || mongoose.model("Admin", Admin);

export default AdminSchema;
