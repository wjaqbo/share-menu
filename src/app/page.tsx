import HomeAccordion from "@/components/home/home-accordion";
import ImageSlideshow from "@/components/slideshow/image-slideshow";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="mx-auto my-20 items-center gap-12 md:flex">
        <div className="h-[25rem] md:w-[40rem]">
          <ImageSlideshow />
        </div>
        <div className="mt-8 md:ml-auto md:mt-0 md:max-w-[31rem]">
          <div className="flex flex-col gap-8">
            <h1 className="inline-block bg-gradient-to-t from-amber-400 to-orange-600 bg-clip-text text-4xl font-bold uppercase leading-snug tracking-wider text-transparent md:text-5xl">
              NextLevel Food for Foodies
            </h1>
            <p className="text-lg">Taste & share food with your friends</p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-8 text-center md:flex-row md:gap-12">
            <Link
              href="/community"
              className="w-full rounded-md border border-orange-500 px-4 py-4 text-lg text-orange-600 md:w-auto md:py-2"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="w-full rounded-md border-orange-500 bg-orange-600 px-4 py-4 text-lg font-bold text-white md:w-auto md:py-2"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto my-8 flex flex-col text-center text-2xl font-light leading-relaxed">
        <h2 className="my-8 text-3xl font-semibold">How it works</h2>
        <p className="mb-8">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>

      <section className="mx-auto my-24 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900 px-8 pb-16 text-lg font-light  leading-loose text-white">
        <h2 className="my-8 text-center text-3xl font-semibold">
          Why NextLevel Food?
        </h2>
        <div className="gap-16 md:flex">
          <div>
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
        </div>
      </section>
      <section className="my-24">
        <h2 className="my-8 text-center text-3xl font-semibold">FAQ</h2>
        <HomeAccordion />
      </section>
    </>
  );
}
