import Store from "@/utils/context";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import React, { useContext } from "react";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export const DropNav = () => {
  const { navItems, handleNavState } = useContext(Store);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full flex flex-col items-center backdrop-blur backdrop-filter bg-opacity-95 space-y-5 z-30 fixed top-16 bg-black  p-4 sm:hidden"
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
