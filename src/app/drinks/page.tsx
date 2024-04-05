import Link from "next/link";

export const metadata = {
  title: "Drinks",
  description: "Drinks Page",
};
export default function DrinksPage() {
  return (
    <>
      <header className="my-20">
        <h1 className="mb-8 text-5xl font-bold">
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
          <Link
            className="inline-block w-full rounded-md border-orange-500 bg-orange-600 px-4 py-4 text-center text-lg font-bold text-white md:w-auto md:py-2"
            href="/meals/share"
          >
            Share your favorite recipe
          </Link>
        </div>
      </header>
      <section>
        <p>Drinks page is in progress...</p>
      </section>
    </>
  );
}
