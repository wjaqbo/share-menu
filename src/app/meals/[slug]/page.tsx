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
      <header className="md:flex gap-12 my-20 mx-auto">
        <div className="relative w-[30rem] h-[20rem]">
          <Image
            className="object-cover animate-slideRight"
            fill
            src={image}
            alt={title}
          />
        </div>
        <div className="flex flex-col animate-slideLeft">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="mt-5 italic">
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className="mt-5 text-white text-lg font-light">{summary}</p>
        </div>
      </header>
      <section className="p-4 my-14 bg-slate-800 rounded animate-slideUp">
        <p
          className="text-white text-lg font-light"
          dangerouslySetInnerHTML={{ __html: formattedInstructions }}
        ></p>
      </section>
    </>
  );
}
