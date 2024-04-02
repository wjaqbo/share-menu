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
        <div className="ml-auto max-w-[31rem]">
          <div className="flex flex-col gap-8">
            <h1 className="bg-gradient-to-t from-amber-400 to-orange-600 bg-clip-text text-5xl font-bold uppercase tracking-wider text-transparent">
              NextLevel Food for Foodies
            </h1>
            <p className="text-lg">Taste & share food with your friends</p>
          </div>
          <div className="mt-10 flex items-center gap-12">
            <Link href="/community" className="text-lg text-orange-600">
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="rounded-md border-orange-500 bg-orange-600 px-4 py-2 text-lg font-bold text-white"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto my-8 flex flex-col text-center text-2xl font-light">
        <h2 className="my-8 text-3xl font-semibold">How it works</h2>
        <p className="">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>

      <section className="mx-auto my-24 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900 px-8 pb-16 text-lg font-light  leading-relaxed text-white">
        <h2 className="my-8 text-center text-3xl font-semibold">
          Why NextLevel Food?
        </h2>
        <div className="flex gap-16">
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
        </div>
      </section>
      {/* <HomeAccordion /> */}
    </>
  );
}
