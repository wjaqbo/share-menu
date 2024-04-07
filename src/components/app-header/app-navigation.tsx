"use client";

import { useNavContext } from "@/providers/nav-context-provider";

export default function AppNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useNavContext();
  return (
    <nav
      className={`my-0 flex transform-gpu flex-col overflow-hidden pl-12 transition-all duration-300 ease-in-out md:my-0 md:h-auto md:flex-row md:py-2 md:pl-0 md:opacity-100 ${isOpen ? "h-auto py-16 opacity-100" : "h-0 py-0 opacity-0"}`}
    >
      {children}
    </nav>
  );
}
