type Meal = {
  id: number;
  slug: string;
  title: string;
  image: File;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

type MealCreateType = Omit<Meal, "id" | "slug">;
