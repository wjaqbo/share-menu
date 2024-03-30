import Image from "next/image";
import React from "react";

import Link from "next/link";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="flex flex-col justify-between h-full rounded shadow-md overflow-hidden transition bg-slate-800">
      <header>
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover animate-fadeIn"
          />
        </div>
        <div className="p-4 ">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-sm">by {creator}</p>
        </div>
      </header>
      <div className="text-sm text-white flex flex-col justify-between h-full">
        <p className="p-4">{summary}</p>
        <div className="text-right p-4">
          <Link
            href={`/meals/${slug}`}
            className="inline-block bg-orange-600 border-orange-500 text-md text-white font-bold px-4 py-2 rounded-md"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </article>
  );
}
