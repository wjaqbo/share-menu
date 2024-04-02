import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import AppHeaderBackground from "./app-header-background";
import NavLink from "./nav-link";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-20 bg-slate-800">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold uppercase tracking-wider"
        >
          <Image
            src={logoImg}
            alt="Aplate with food on it"
            className="h-16 w-16"
            priority
          />
          NextLevel Food
        </Link>
        <nav>
          <ul className="flex gap-8 text-lg font-bold  tracking-wider">
            <li>
              <NavLink href="/meals">Explore Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <AppHeaderBackground />
    </header>
  );
}
