import React from "react";

export default function LoadingMeal() {
  return (
    <svg
      className="mx-auto mt-40 h-52 w-52 animate-spin stroke-orange-600 p-0"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="400"
        cy="400"
        fill="none"
        r="200"
        stroke-width="50"
        stroke-dasharray="725 1400"
      />
    </svg>
  );
}
