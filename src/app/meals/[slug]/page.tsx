import Image from "next/image";

import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Meals",
  description: "Meals Page",
};

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
        <div className="relative h-[20rem] w-[30rem]">
          <Image
            className="animate-slideRight object-cover"
            fill
            src={image}
            alt={title}
          />
        </div>
        <div className="flex animate-slideLeft flex-col">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="mt-5 italic">
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className="mt-5 text-lg font-light text-white">{summary}</p>
        </div>
      </header>
      <section className="my-14 animate-slideUp rounded bg-slate-800 p-4">
        <p
          className="text-lg font-light text-white"
          dangerouslySetInnerHTML={{ __html: formattedInstructions }}
        ></p>
      </section>
    </>
  );
}
