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
  imageRef,
}: {
  label: string;
  name: string;
  control: any;
  imageRef: any;
}) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const { ref, ...rest } = imageRef;

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
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
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
              <FormControl>
                <Input
                  className="hidden"
                  type="file"
                  {...rest}
                  ref={(e) => {
                    ref(e);
                    imageInputRef.current = e;
                  }}
                  onChange={(e) => {
                    imageRef.onChange(e);
                    handleImageChange(e);
                  }}
                />
              </FormControl>
              <FormDescription>This is your meal image.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="button" onClick={handlePickImage} noBackground>
          Pick an image
        </Button>
      </div>
    </div>
  );
}
