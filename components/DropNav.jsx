import Store from "@/utils/context";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import React, { useContext } from "react";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export const DropNav = () => {
  const { navItems, handleNavState } = useContext(Store);

  return (
    <motion.nav
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-[90%] flex flex-col items-center backdrop-blur backdrop-filter space-y-5 z-30 fixed top-20 bg-gray-200 rounded-md p-4 sm:hidden"
    >
      {navItems.map((navItem) => (
        <a
          key={navItem.id}
          href={navItem.path}
          onClick={() => handleNavState(navItem.id)}
          className={`${
            pacifico.className
          } font-semibold text-2xl tracking-[.2rem] ${
            navItem.isActive ? "text-red-500" : "text-black"
          } hover:text-red-500 hover:scale-105`}
        >
          {navItem.text}
        </a>
      ))}
    </motion.nav>
  );
};
