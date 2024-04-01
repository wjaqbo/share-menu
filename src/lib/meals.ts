import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { uploadImage } from "./cloudinary";

const db = sql("db/meals.db");

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed");

  return db.prepare("SELECT * FROM meals").all() as Meal[];
}

export async function getMeal(slug: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
}

export async function createMeal(meal: MealCreateType) {
  const slug = slugify(xss(meal.title), { lower: true });
  meal.instructions = xss(meal.instructions);

  // const extension = meal.imageFile.name.split(".").pop();
  // const fileName = `${slug}.${extension}`;

  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.imageFile.arrayBuffer();

  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("Failed to write image!");
  //   }
  // });

  const uploadedImage = await uploadImage(Buffer.from(bufferedImage));
  const image = uploadedImage.url;

  console.log(image);

  // meal.image = photoUrl;

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions,  creator, creator_email, image, slug)
    VALUES(@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`,
  ).run({ ...meal, image, slug });
}
