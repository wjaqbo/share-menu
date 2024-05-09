type Meal = {
  _id: string;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

type MealCreateType = Omit<Meal, "_id" | "slug"> & { imageFile: File };

type User = {
  _id: string;
  email: string;
  password: string;
};

type Ingridient = {
  _id: string;
  storeId: string;
  lang: string;
  name: string;
  isActive: boolean;
};
