import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/app-header/app-header";
import NavContextProvider from "@/providers/nav-context-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" suppressHydrationWarning>
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
          <NavContextProvider>
            <AppHeader />
          </NavContextProvider>
          <main className="mx-auto max-w-screen-lg p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
