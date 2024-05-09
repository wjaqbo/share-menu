import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const Category = new mongoose.Schema(
  {
    storeId: { type: String, required: true },
    lang: { type: String, required: true },
    name: { type: String, required: true },
    parentId: { type: String },
    ancestors: { type: Array<String> },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

const CategorySchema =
  mongoose.models.Category || mongoose.model("Category", Category);

export default CategorySchema;
