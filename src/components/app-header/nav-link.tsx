"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { useNavContext } from "@/providers/nav-context-provider";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const { lang, storeId } = useParams();
  const { setIsOpen } = useNavContext();

  function handleClick() {
    setIsOpen(false);
  }

  return (
    <Link
      onClick={handleClick}
      href={`/${lang}/${storeId}${href}`}
      className={`hover:text-amber-400 ${
        path.startsWith(href) ? "text-amber-400" : ""
      }`}
    >
      {children}
    </Link>
  );
}
