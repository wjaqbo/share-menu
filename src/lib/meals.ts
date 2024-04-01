import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import streamifier from "streamifier";

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

async function uploadImage(buffer: Buffer): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "images",
        // upload_preset: "ml_default",
      },
      (error: Error, result: UploadApiResponse) => {
        if (result) resolve(result);
        else reject(error);
      },
    );
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
}
export async function createMeal(meal: MealCreateType) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const slug = slugify(xss(meal.title), { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.imageFile.name.split(".").pop();
  const fileName = `${slug}.${extension}`;

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

  await new Promise((resolve) => setTimeout(resolve, 2000));

  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions,  creator, creator_email, image, slug)
    VALUES(@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`,
  ).run({ ...meal, image, slug });
}
