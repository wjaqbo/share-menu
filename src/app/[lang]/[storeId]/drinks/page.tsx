import Button from "@/components/ui/button";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Drinks",
  description: "Drinks Page",
};

export default function DrinksPage() {
  return (
    <>
      <header className="m-auto mb-28 mt-40 max-w-screen-lg px-4">
        <h1 className="mb-3 animate-slideUp text-5xl font-bold">
          Delicious drinks, created{" "}
          <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="text-lg font-light">
          Choose your favorite recipe and invite your friends for delicious
          coctails. It is easy and fun!
        </p>
        <div className="mt-8">
          <Button href="/meals/share">Share your favorite recipe</Button>
        </div>
      </header>
      <section className="mx-auto max-w-screen-lg px-4">
        <p>Drinks page is in progress...</p>
      </section>
    </>
  );
}
