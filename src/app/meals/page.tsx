import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import LoadingMeals from "./loading-meals";

export const metadata = {
  title: "Meals",
  description: "Meals Page",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className="my-20">
        <h1 className="text-5xl font-bold mb-8">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="text-lg font-light">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <div className="mt-8">
          <Link
            className="bg-orange-600 border-orange-500 text-lg text-white font-bold px-4 py-2 rounded-md"
            href="/meals/share"
          >
            Share your favorite recipe
          </Link>
        </div>
      </header>
      <section>
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </section>
    </>
  );
}
