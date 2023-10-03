import Store from "@/utils/context";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const { navItems, handleNavState, toggleDropNav, showDropNav } =
    useContext(Store);

  return (
    <nav
      className={`w-full flex items-center backdrop-blur backdrop-filter bg-opacity-70 fixed top-0 justify-between p-5 bg-black
      md:w-11/12 md:static md:border-b-2 md:border-gray-400 `}
    >
      <h1 className="text-teal-50 text-2xl font-semibold md:text-4xl md:font-light">
        Portfolio
      </h1>
      {showDropNav ? (
        <FaTimes
          onClick={toggleDropNav}
          className="text-teal-50 text-2xl transition font-semibold cursor-pointer hover:text-red-500 hover:scale-110 md:hidden"
        />
      ) : (
        <FaBarsStaggered
          onClick={toggleDropNav}
          className="text-teal-50 text-2xl transition font-semibold cursor-pointer hover:text-red-500 hover:scale-110 md:hidden"
        />
      )}
      <div className="w-fit h-full hidden md:text-white md:flex md:space-x-10 font-light">
        {navItems.map((navItem) => (
          <a
            key={navItem.id}
            href={navItem.path}
            onClick={() => handleNavState(navItem.id)}
            className={`${
              navItem.isActive && "text-red-500 font-semibold"
            } hover:text-red-500 hover:scale-105`}
          >
            {navItem.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
