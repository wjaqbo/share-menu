"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="inline-block w-full rounded-md border-orange-500 bg-orange-600 px-4 py-4 text-center text-lg font-bold text-white disabled:bg-gray-500 disabled:text-black md:w-auto md:py-2"
      disabled={pending}
    >
      {pending ? "Sharing..." : "Share meal"}
    </button>
  );
}
