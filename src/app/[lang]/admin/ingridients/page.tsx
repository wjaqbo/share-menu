import IngridientsGrid from "@/components/admin/ingridients/ingridients-grid";
import { getIngridients, insertData } from "@/lib/ingridients";
import React, { Suspense } from "react";

async function Ingridients() {
  const ingridients = await getIngridients();

  return <IngridientsGrid ingridients={ingridients} />;
}

export default function IngridientsAdminPage() {
  return (
    <div className="p-10">
      Ingridients Admin Page
      <form action={insertData}>
        <button>Insert dummy data</button>
      </form>
      <Suspense fallback="is loading">
        <Ingridients />
      </Suspense>
    </div>
  );
}
