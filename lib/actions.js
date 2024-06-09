"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function invalidText(text) {
  return !text || text.trim() === "";
}
export async function shareMeal(prevState, formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    invalidText(meal.title) ||
    invalidText(meal.summary) ||
    invalidText(meal.creator_email) ||
    invalidText(meal.creator) ||
    invalidText(meal.instructions) ||
    !meal.image ||
    meal.image.size === 0 ||
    !meal.creator_email.includes("@")
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meal");
  redirect("/meals");
}
