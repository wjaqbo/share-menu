import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import LoadingMeals from "./loading-meals";
import Button from "@/components/ui/button";

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
        <h1 className="mb-3 animate-slideUp text-5xl  font-bold">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="text-lg font-light">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <div className="mt-8">
          <Button href="/meals/share">Share your favorite recipe</Button>
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
