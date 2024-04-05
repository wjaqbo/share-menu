"use client";

import React, { createContext, useState, useContext } from "react";

interface INavContex {
  isOpen?: boolean;
  setIsOpen: (arg: boolean) => void;
}

export const NavContext = createContext<INavContex>({} as INavContex);

export default function NavContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavContext);
}
