"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];
export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-md">
      {images.map((image, index) => (
        <Image
          className={`${
            index === currentImageIndex
              ? "z-10 translate-x-0 rotate-0 scale-100 transform opacity-100"
              : "translate-x-4 rotate-6 transform opacity-0"
          }  absolute left-0 top-0 h-full w-full object-cover transition-all duration-[3000ms] ease-in-out`}
          key={index}
          src={image.image}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
