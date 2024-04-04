import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import AppHeaderBackground from "./app-header-background";
import NavLink from "./nav-link";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-20 bg-black bg-opacity-60 backdrop-blur-xl md:sticky">
      <div className="mx-auto flex max-w-screen-lg flex-col justify-between px-4 py-4 md:flex-row md:items-center md:py-0">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold uppercase tracking-wider md:text-xl"
        >
          <Image
            src={logoImg}
            alt="Aplate with food on it"
            className="h-9 w-9 md:h-16 md:w-16"
            priority
          />
          NextLevel Food
        </Link>
        <button className="fixed right-5 top-5 md:hidden">
          {/* <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect height="0.5" width="16" x="0.5" y="10" />

              <rect height="0.5" width="16" x="0.5" y="5" />
            </g>
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5"
            />
          </svg>
        </button>
        <nav className="my-16 ml-12 md:my-0 md:ml-0">
          <ul className="flex flex-col gap-8 text-lg font-bold tracking-wider md:flex-row">
            <li>
              <NavLink href="/meals">Explore Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
            <li>
              <NavLink href="/login">Log in</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* <AppHeaderBackground /> */}
    </header>
  );
}
