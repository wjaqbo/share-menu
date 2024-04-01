type Meal = {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

type MealCreateType = Omit<Meal, "id" | "slug"> & { imageFile: File };
