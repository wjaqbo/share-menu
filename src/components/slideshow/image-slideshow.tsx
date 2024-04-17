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
import { cn } from "@/lib/utils";

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
    <div className="relative h-full w-full rounded-3xl shadow-md">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-3xl">
          <Image
            className={cn(
              index === currentImageIndex
                ? "z-10 translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0",
              "absolute left-0 top-0 h-full w-full rounded-3xl object-cover duration-3000 ease-in-out",
            )}
            src={image.image}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}
