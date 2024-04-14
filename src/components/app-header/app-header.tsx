import Link from "next/link";
import Image from "next/image";

import { auth } from "@/lib/auth/auth";
import logoImg from "@/assets/logo.png";
import AppHeaderBackground from "./app-header-background";
import NavLink from "./nav-link";
import AppNavigation from "./app-navigation";
import Hamburger from "./hamburger";
import { ModeToggle } from "./mode-toggle";
import LogoutButton from "../login/logout-button";

export default async function AppHeader() {
  const user = await auth();

  return (
    <header className="fixed top-0 z-20 w-full border-b border-slate-300 bg-slate-200 bg-opacity-60 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900 md:sticky">
      <div className="mx-auto flex max-w-screen-lg flex-col justify-between  px-4 py-4 md:flex-row md:items-center md:py-0">
        <Link
          href="/"
          className="mr-auto inline-flex items-center gap-3 font-bold uppercase tracking-wider md:text-sm"
        >
          <Image
            src={logoImg}
            alt="Aplate with food on it"
            className="h-9 w-9 md:h-16 md:w-16 md:p-1"
            priority
          />
          NextLevel Food
        </Link>
        <Hamburger />
        <div className="fixed right-14 top-6 md:right-5">
          <ModeToggle />
        </div>
        <AppNavigation>
          <ul className="flex flex-col gap-8 text-lg font-bold tracking-wider md:flex-row md:items-center md:text-sm">
            <li>
              <NavLink href="/meals">Explore Meals</NavLink>
            </li>
            <li>
              <NavLink href="/drinks">Explore Drinks</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
            <li>
              <NavLink href="/qrcode">Scan QR Code</NavLink>
            </li>
            <li>
              {user ? (
                <LogoutButton />
              ) : (
                <NavLink href="/login">Log in</NavLink>
              )}
            </li>
          </ul>
        </AppNavigation>
      </div>
      {/* <AppHeaderBackground /> */}
    </header>
  );
}
