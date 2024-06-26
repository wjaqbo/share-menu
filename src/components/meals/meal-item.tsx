import Image from "next/image";
import React from "react";

import Link from "next/link";

export default function MealItem({
  slug,
  title,
  image,
  summary,
  creator,
}: {
  slug: string;
  title: string;
  image: string;
  summary: string;
  creator: string;
}) {
  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md transition dark:border-slate-800 dark:bg-slate-900">
      <header>
        <div className="relative h-56 w-full">
          <Image
            src={process.env.CLOUDINARY_PUBLIC_URL + image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="absolute left-0 top-0 h-full w-full animate-fadeIn object-cover"
          />
        </div>
        <div className="p-4 ">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm">by {creator}</p>
        </div>
      </header>
      <div className="flex h-full flex-col justify-between text-sm dark:text-white">
        <p className="p-4">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="text-md inline-block rounded-md border-orange-500 bg-orange-600 px-4 py-2 font-bold text-white"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </article>
  );
}
