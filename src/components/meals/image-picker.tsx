"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Button from "../ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ImagePicker({
  label,
  name,
  control,
}: {
  label: string;
  name: string;
  control: any;
}) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  function handlePickImage() {
    if (!imageInputRef.current) {
      return;
    }
    imageInputRef.current.click();
  }
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-col items-start gap-4 md:flex-row">
        <div>
          {!pickedImage && (
            <div className="flex h-40 w-40 items-center rounded-md border border-orange-600 text-center ">
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
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
              <FormDescription>This is your image.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          // className="hidden"
          ref={imageInputRef}
          onChange={handleImageChange}
          // required
        /> */}
        <Button type="button" onClick={handlePickImage} noBackground>
          Pick an image
        </Button>
      </div>
    </div>
  );
}
