"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useNavContext } from "@/providers/nav-context-provider";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const { setIsOpen } = useNavContext();
  const closingHamburgerAnimation = document.getElementById(
    "reverse",
  ) as unknown as SVGAnimateElement;

  function handleClick() {
    if (closingHamburgerAnimation) {
      setIsOpen(false);
      closingHamburgerAnimation.beginElement();
    }
  }

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={`hover:text-amber-400 ${
        path.startsWith(href) ? "text-amber-400" : ""
      }`}
    >
      {children}
    </Link>
  );
}
