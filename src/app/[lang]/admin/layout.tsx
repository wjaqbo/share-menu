import Image from "next/image";
import Link from "next/link";
import React from "react";

import logoImg from "@/assets/logo.png";

export default function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string; storeId: string };
}) {
  const { lang, storeId } = params;

  return (
    <div className="flex gap-4">
      <aside className="min-h-screen min-w-52 dark:bg-gray-900">
        <Link href={`/${lang}/${storeId}`} className="flex items-center gap-2">
          <Image src={logoImg} alt="logo" width={50} height={50} />
          <h1 className="uppercase">Admin panel</h1>
        </Link>
        <nav className="my-8 flex flex-col gap-4">
          <Link href={`/${lang}/admin`}>Dashboard</Link>
          <Link href={`/${lang}/admin/meals`}>Meals</Link>
          <Link href={`/${lang}/admin/ingridients`}>Ingridients</Link>
          <Link href={`/${lang}/admin/categories`}>Categories</Link>
          <Link href={`/${lang}/admin/tables`}>Tables</Link>
          <Link href={`/${lang}/admin/orders`}>Orders</Link>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
