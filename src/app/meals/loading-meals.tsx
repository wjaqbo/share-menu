import React from "react";

export default function LoadingMeals() {
  return (
    <div className="p-10">
      <svg
        className="mx-auto h-52 w-52 animate-spin stroke-orange-600 p-0"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="400"
          cy="400"
          fill="none"
          r="200"
          strokeWidth="50"
          strokeDasharray="725 1400"
        />
      </svg>
    </div>
  );
}
