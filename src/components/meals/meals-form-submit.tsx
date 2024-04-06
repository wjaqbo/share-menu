"use client";

import { useFormStatus } from "react-dom";
import Button from "../ui/button";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sharing..." : "Share meal"}
    </Button>
  );
}
