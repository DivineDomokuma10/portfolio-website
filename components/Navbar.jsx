import Store from "@/utils/context";
import { useContext } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const { navItems, handleNavState } = useContext(Store);

  return (
    <nav
      className={`w-full flex items-center backdrop-blur backdrop-filter bg-opacity-70 fixed top-0 justify-between p-5 bg-black
      sm:w-11/12 sm:static sm:border-b-2 sm:border-gray-400 `}
    >
      <h1 className="text-teal-50 text-2xl font-semibold sm:text-4xl sm:font-light">
        Portfolio
      </h1>
      <FaBarsStaggered className="text-teal-50 text-2xl transition font-semibold cursor-pointer hover:text-red-500 hover:scale-110 sm:hidden" />
      <div className="w-fit h-full hidden sm:text-white sm:flex sm:space-x-10 font-light">
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
