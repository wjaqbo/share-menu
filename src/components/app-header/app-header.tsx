import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import AppHeaderBackground from "./app-header-background";

export default function AppHeader() {
  return (
    <header className="bg-slate-800 relative">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center p-4">
        <Link
          href="/"
          className="flex text-xl items-center gap-3 uppercase font-bold tracking-wider"
        >
          <Image
            src={logoImg}
            alt="Aplate with food on it"
            className="w-16 h-16"
            priority
          />
          NextLevel Food
        </Link>
        <nav>
          <ul className="flex gap-8 font-bold tracking-wider  text-lg">
            <li>
              <Link href="/meals" className="hover:text-amber-400">
                Browse Meals
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-amber-400">
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <AppHeaderBackground />
    </header>
  );
}
