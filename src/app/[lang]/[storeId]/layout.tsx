import AppHeader from "@/components/app-header/app-header";
import NavContextProvider from "@/providers/nav-context-provider";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ storeId: "blowfish" }];
}

export default function ClientLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string; storeId: string };
}) {
  return (
    <>
      <header className="flex items-center justify-between p-2">
        <h1 className="text-sm font-bold">top bar</h1>
        <nav className="text-sm">
          <Link href="/" className="p-2">
            For business
          </Link>
          <Link href="/" className="p-2">
            Language
          </Link>
          <Link href="/admin" className="p-2">
            Admin
          </Link>
        </nav>
      </header>
      <NavContextProvider>
        <AppHeader params={params} />
      </NavContextProvider>
      <main>{children}</main>
    </>
  );
}
