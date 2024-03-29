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
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
      {images.map((image, index) => (
        <Image
          className={`${
            index === currentImageIndex
              ? "z-10 opacity-100 transform scale-100 translate-x-0 rotate-0"
              : "opacity-0 transform translate-x-4 rotate-6"
          }  w-full h-full object-cover absolute top-0 left-0 transition-all ease-in-out duration-[3000ms]`}
          key={index}
          src={image.image}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
