import { FaBars } from "react-icons/fa";
import { Quicksand } from "next/font/google";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-5 bg-red-600">
      <h1 className="text-teal-50 text-lg">Portfolio</h1>

      <FaBars className="text-teal-50 font-light text-lg" />
    </nav>
  );
};

export default Navbar;
