"use client";

import { useRef } from "react";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef<HTMLInputElement>();
  function handleImageChange() {
    imageInputRef.current.click();
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <div className="">
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpg"
          className="hidden"
          ref={imageInputRef}
        />
        <button
          className="rounded-md border border-orange-500 px-4 py-2 text-orange-600"
          type="button"
          onClick={handleImageChange}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
