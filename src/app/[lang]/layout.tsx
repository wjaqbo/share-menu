import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Great service for foodies",
};

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "pl-PL" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={`${montserrat.className} bg-slate-50 dark:bg-black dark:text-[#80ffd4]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
