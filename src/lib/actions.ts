"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { AuthError } from "next-auth";

import { signIn } from "./auth/auth";
import { createMeal } from "./meals";

function isValidText(text: string | null) {
  return !text || text.trim() === "";
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function shareMeal(
  prevState: any,
  formData: FormData,
): Promise<{ message: string | null }> {
  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    imageFile: formData.get("image") as unknown as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  if (
    isValidText(meal.title) ||
    isValidText(meal.summary) ||
    isValidText(meal.instructions) ||
    isValidText(meal.creator) ||
    isValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.imageFile ||
    meal.imageFile.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }
  await createMeal(meal as MealCreateType);
  revalidatePath("/meals");
  redirect("/meals");
}
