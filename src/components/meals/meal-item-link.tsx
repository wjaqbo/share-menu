"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function MealItemLink({ slug }: { slug: string }) {
  const { lang, storeId } = useParams();

  return (
    <Link
      href={`/${lang}/${storeId}/meals/${slug}`}
      className="text-md inline-block rounded-md border-orange-500 bg-orange-600 px-4 py-2 font-bold text-white"
    >
      Add to card
    </Link>
  );
}
