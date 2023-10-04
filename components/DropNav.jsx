import Store from "@/utils/context";

import { motion } from "framer-motion";
import React, { useContext } from "react";

export const DropNav = () => {
  const { navItems, handleNavState } = useContext(Store);

  return (
    <motion.nav
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-full flex flex-col items-center space-y-5 z-30 fixed top-16 bg-stone-900 rounded-md p-4 sm:hidden"
    >
      {navItems.map((navItem) => (
        <a
          key={navItem.id}
          href={navItem.path}
          onClick={() => handleNavState(navItem.id)}
          className={`font-semibold text-2xl tracking-[.2rem] ${
            navItem.isActive ? "text-red-500" : "text-teal-50"
          } hover:text-red-500 hover:scale-105`}
        >
          {navItem.text}
        </a>
      ))}
    </motion.nav>
  );
};
