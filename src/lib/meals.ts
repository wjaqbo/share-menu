import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed");

  return db.prepare("SELECT * FROM meals").all() as Meal[];
}

export async function getMeal(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
}

export async function createMeal(meal) {
  meal.slug = slugify(xss(meal.title), { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to write image!");
    }
  });

  meal.image = `/images/${fileName}`;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  db.prepare(
    `
    INSERT INTO meals (title, slug, summary, instructions, image, creator, creator_email)
    VALUES(@title, @slug, @summary, @instructions, @image, @creator, @creator_email)`,
  ).run(meal);
}
