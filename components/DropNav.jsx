import Store from "@/utils/context";

import React, { useContext } from "react";

export const DropNav = () => {
  const { navItems, handleNavState } = useContext(Store);

  return (
    <nav className="w-3/4 flex flex-col items-center space-y-5 fixed top-20 bg-opacity-70 bg-teal-50 rounded-md p-4 sm:hidden">
      {navItems.map((navItem) => (
        <a
          key={navItem.id}
          href={navItem.path}
          onClick={() => handleNavState(navItem.id)}
          className={`font-semibold text-2xl tracking-[.2rem] ${
            navItem.isActive ? "text-red-500" : ""
          } hover:text-red-500 hover:scale-105`}
        >
          {navItem.text}
        </a>
      ))}
    </nav>
  );
};
