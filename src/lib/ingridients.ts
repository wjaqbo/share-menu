import connectDB from "../../mongodb/connect";
import Ingridient from "../../mongodb/models/ingridient";
import dummyIngridients from "../../mongodb/sample-data/dummy-ingridients";

connectDB(process.env.MONGODB_URL!);

export async function getIngridients() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed");
  const allIngridients = (await Ingridient.find({}).lean()) as Ingridient[];
  return allIngridients;
}

export async function insertData() {
  "use server";
  await Ingridient.insertMany(dummyIngridients);
}
