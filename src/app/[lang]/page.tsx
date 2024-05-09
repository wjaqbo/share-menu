import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="p-4 text-3xl font-black">Choose your restaruant</h1>
        <nav className="flex flex-col gap-4">
          <Link href="/blowfish">Blowfish</Link>
          <Link href="/muchacio">Muchacio</Link>
          <Link href="/joe-burger">Joe Burger</Link>
        </nav>
      </div>
    </section>
  );
}
