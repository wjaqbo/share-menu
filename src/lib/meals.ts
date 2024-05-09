import slugify from "slugify";
import xss from "xss";

import connectDB from "../../mongodb/connect";
import { uploadImage } from "./cloudinary";
import Meal from "../../mongodb/models/meal";
import dummyMeals from "../../mongodb/sample-data/dummy-meals";

connectDB(process.env.MONGODB_URL!);

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed");
  const allMeals = (await Meal.find({}).lean()) as Meal[];
  return allMeals;
}

export async function getMeal(slug: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const meal = (await Meal.findOne({ slug })) as Meal;
  return meal;
}

export async function createMeal(meal: MealCreateType) {
  const slug = slugify(xss(meal.title), { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.imageFile.name.split(".").pop();
  const fileName = `${slug}.${extension}`;

  const bufferedImage = await meal.imageFile.arrayBuffer();

  const uploadedImage = await uploadImage(Buffer.from(bufferedImage), slug);
  const image = fileName;

  await Meal.create({ ...meal, image, slug });
}

export async function deleteMeal(slug: string) {
  await Meal.deleteOne({ slug });
}

export async function updateMeal(meal: Meal) {
  await Meal.updateOne({ slug: meal.slug }, meal);
}

export async function insertData() {
  await Meal.insertMany(dummyMeals);
}
