import CreateMealForm from "@/components/meals/create-meal-form";

export const metadata = {
  title: "Share",
  description: "Share Page",
};
export default function ShareMealPage() {
  return (
    <>
      <header className="mx-auto my-20 max-w-screen-lg space-y-8">
        <h1 className="text-5xl font-bold">
          Share your{" "}
          <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="text-lg font-light">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <section className="mx-auto my-8 max-w-screen-lg text-lg">
        <CreateMealForm />
      </section>
    </>
  );
}
