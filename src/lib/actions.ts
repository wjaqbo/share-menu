"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createMeal } from "./meals";

function isValidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isValidText(meal.title) ||
    isValidText(meal.summary) ||
    isValidText(meal.instructions) ||
    isValidText(meal.creator) ||
    isValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }
  await createMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
