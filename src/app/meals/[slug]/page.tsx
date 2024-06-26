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
      <header className="mx-auto my-20 max-w-screen-lg gap-12 md:flex md:px-4">
        <div className="relative h-[20rem] md:w-[30rem]">
          <Image
            className="animate-slideUp object-cover md:animate-slideRight"
            fill
            src={process.env.CLOUDINARY_PUBLIC_URL + image}
            alt={title}
          />
        </div>
        <div className="mt-20 flex animate-slideUp flex-col px-4 md:animate-slideLeft">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="mt-5 italic">
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className="mt-5 text-lg font-light dark:text-white">{summary}</p>
        </div>
      </header>
      <section className="mx-auto my-14 max-w-screen-lg animate-slideUp border border-slate-100 bg-white px-4 py-16 shadow-md dark:border-slate-800 dark:bg-slate-900 md:rounded-3xl">
        <h2 className="mb-10 text-3xl font-semibold">Instructions</h2>
        <p
          className="text-lg font-light dark:text-white"
          dangerouslySetInnerHTML={{ __html: formattedInstructions }}
        ></p>
      </section>
    </>
  );
}
