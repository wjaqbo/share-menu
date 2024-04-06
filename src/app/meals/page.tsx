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
      <header className="mb-28 mt-40">
        <h1 className="mb-3 text-5xl font-bold">
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
            className="inline-block w-full rounded-md border-orange-500 bg-orange-600 px-4 py-4 text-center text-lg font-bold text-white md:w-auto md:py-2"
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
