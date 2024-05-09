import React from "react";

export default function IngridientsGrid({
  ingridients,
}: {
  ingridients: Ingridient[];
}) {
  return (
    <section>
      {ingridients.map((ingridient) => (
        <div key={ingridient._id}>{ingridient.name}</div>
      ))}
    </section>
  );
}
