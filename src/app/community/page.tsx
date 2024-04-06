import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export const metadata = {
  title: "Community",
  description: "Community Page",
};

export default function CommunityPage() {
  return (
    <>
      <header className="mt-40 flex flex-col items-center gap-3 text-center">
        <h1 className="animate-slideUp text-5xl font-bold">
          One shared passion:{" "}
          <span className="bg-gradient-to-tr from-amber-400 to-orange-600 bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        <p className="text-lg font-light">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <section className="my-40">
        <h2 className="text-center text-3xl font-bold">Community Perks</h2>

        <ul className="gap-16 px-14 text-center text-lg font-light md:flex md:px-0">
          <li>
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="animate-fadeIn"
            />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="animate-fadeIn"
            />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="animate-fadeIn"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </section>
    </>
  );
}
