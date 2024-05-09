import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const Ingridient = new mongoose.Schema(
  {
    storeId: { type: String, required: true },
    lang: { type: String, required: true },
    name: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

const IngridientSchema =
  mongoose.models.Ingridient || mongoose.model("Ingridient", Ingridient);

export default IngridientSchema;
