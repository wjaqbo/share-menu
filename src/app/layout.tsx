import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/app-header/app-header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Great service for foodies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppHeader />
        <main className="mx-auto max-w-screen-lg p-4">{children}</main>
      </body>
    </html>
  );
}
