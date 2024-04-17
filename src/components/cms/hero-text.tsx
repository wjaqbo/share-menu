import React from "react";

export default function HeroText({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto my-24 max-w-screen-lg text-lg font-light leading-loose md:px-4">
      <div className="flex flex-col gap-4 border bg-white px-8 pb-16 text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white md:rounded-3xl">
        {children}
      </div>
    </section>
  );
}
