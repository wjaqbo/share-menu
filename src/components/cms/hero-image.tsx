import Image, { StaticImageData } from "next/image";
import React from "react";

export default function HeroImage({ src }: { src: string | StaticImageData }) {
  return (
    <div className="relative mx-4 h-96  overflow-hidden rounded-3xl">
      <Image
        src={src}
        alt="hero image"
        className="absolute left-0 top-0 h-full w-full animate-fadeIn object-cover"
      />
    </div>
  );
}
