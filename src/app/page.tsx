import ImageSlideshow from "@/components/slideshow/image-slideshow";
import Link from "next/link";

export default function HomePage() {
  console.log("Executing... page.tsx");
  return (
    <>
      <header className="md:flex gap-12 my-20 mx-auto items-center">
        <div className="md:w-[40rem] h-[25rem]">
          <ImageSlideshow />
        </div>
        <div className="max-w-[31rem] ml-auto">
          <div className="flex flex-col gap-8">
            <h1 className="tracking-wider text-5xl uppercase font-bold bg-clip-text bg-gradient-to-t from-amber-400 to-orange-600 text-transparent">
              NextLevel Food for Foodies
            </h1>
            <p className="text-lg">Taste & share food with your friends</p>
          </div>
          <div className="flex gap-12 items-center mt-10">
            <Link href="/community" className="text-orange-600 text-lg">
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="bg-orange-600 border-orange-500 text-lg text-white font-bold px-4 py-2 rounded-md"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <section className="flex font-light flex-col text-2xl my-8 mx-auto text-center">
        <h2 className="font-semibold text-3xl my-8">How it works</h2>
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

      <section className="flex gap-4 leading-relaxed flex-col text-lg my-14 mx-auto font-light text-center">
        <h2 className="font-semibold text-3xl my-8 text-center">
          Why NextLevel Food?
        </h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>
    </>
  );
}
