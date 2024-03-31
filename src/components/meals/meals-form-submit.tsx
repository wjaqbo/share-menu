"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-md bg-orange-600 px-4 py-2 font-bold text-white disabled:bg-gray-500 disabled:text-black"
      disabled={pending}
    >
      {pending ? "Sharing..." : "Share meal"}
    </button>
  );
}
