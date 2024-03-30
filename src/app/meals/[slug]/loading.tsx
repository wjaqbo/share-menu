import React from "react";

export default function LoadingMeal() {
  return (
    <svg
      className="animate-spin w-52 h-52 mx-auto p-0 stroke-orange-600 mt-40"
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
