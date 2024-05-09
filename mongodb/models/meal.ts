import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const Meal = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    summary: { type: String, required: true },
    instructions: { type: String, required: true },
    creator: { type: String, required: true },
    creator_email: { type: String, required: true },
  },
  { timestamps: true },
);

const MealSchema = mongoose.models.Meal || mongoose.model("Meal", Meal);

export default MealSchema;
