"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef<HTMLInputElement>();

  function handlePickImage() {
    imageInputRef.current.click();
  }
  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <div className="flex items-start gap-4">
        <div>
          {!pickedImage && (
            <div className="flex h-40 w-40 items-center border border-orange-600 text-center ">
              <p>No image selected</p>
            </div>
          )}
          {pickedImage && (
            <div className="relative h-40 w-40">
              <Image
                className="object-cover"
                fill
                src={pickedImage}
                alt="Picked image"
              />
            </div>
          )}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className="hidden"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className="rounded-md border border-orange-500 px-4 py-2 text-orange-600"
          type="button"
          onClick={handlePickImage}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
