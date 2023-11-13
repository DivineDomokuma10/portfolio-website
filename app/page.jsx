"use client";

import About from "@/components/About";
import { DropNav } from "@/components/DropNav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Stack from "@/components/Stack";
import Store from "@/utils/context";
import { useState } from "react";

export default function Home() {
  const [showDropNav, setShowDropNav] = useState(false);

  const [navItems, setNavItems] = useState([
    { id: 1, text: "Home", path: "#home", isActive: true },
    { id: 2, text: "About", path: "#about", isActive: false },
    { id: 3, text: "Stack", path: "#stack", isActive: false },
    { id: 4, text: "Project", path: "#project", isActive: false },
    { id: 5, text: "Contact", path: "#contact", isActive: false },
  ]);

  const toggleDropNav = () => setShowDropNav((prev) => !prev);

  const handleNavState = (id) => {
    setNavItems((prev) =>
      prev.map((navItem) => {
        if (navItem.id === id) {
          return { ...navItem, isActive: true };
        } else {
          return { ...navItem, isActive: false };
        }
      })
    );
  };

  return (
    <Store.Provider
      value={{ navItems, handleNavState, showDropNav, toggleDropNav }}
    >
      <main className="w-full flex flex-col text-black items-center overflow-hidden">
        {showDropNav && <DropNav />}
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Project />
        <Footer />
      </main>
    </Store.Provider>
  );
}
