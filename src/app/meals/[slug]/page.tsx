import Image from "next/image";

import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }
  const { image, title, summary, instructions, creator, creator_email } = meal;

  const formattedInstructions = instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className="mx-auto my-20 gap-12 md:flex">
        <div className="relative h-[20rem] md:w-[30rem]">
          <Image
            className="animate-slideUp object-cover md:animate-slideRight"
            fill
            src={image}
            alt={title}
          />
        </div>
        <div className="mt-20 flex animate-slideUp flex-col md:animate-slideLeft">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="mt-5 italic">
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className="mt-5 text-lg font-light text-white">{summary}</p>
        </div>
      </header>
      <section className="my-14 animate-slideUp rounded-3xl border border-slate-800 bg-slate-900 px-8 py-16">
        <h2 className="mb-10 text-3xl font-semibold">Instructions</h2>
        <p
          className="text-lg font-light text-white"
          dangerouslySetInnerHTML={{ __html: formattedInstructions }}
        ></p>
      </section>
    </>
  );
}
