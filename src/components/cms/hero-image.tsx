import Image from "next/image";
import React from "react";

export default function HeroImage({ src }: { src: string | StaticImport }) {
  return (
    <div className="relative h-96 w-full">
      <Image
        src={src}
        alt="hero image"
        className="absolute left-0 top-0 h-full w-full animate-fadeIn object-cover"
      />
    </div>
  );
}
