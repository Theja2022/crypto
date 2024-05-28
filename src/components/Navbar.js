import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assests/logo.png";
export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOPen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOPen(!mobileDrawerOpen);
  };
  return (
    <nav
      className="sticky top-0 z-50 py-3
    backdrop-blur-lg border-b border-neutral-700/80"
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className=" flex  justify-between items-center flex-shrink-0">
            <img className=" h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight text-orange-300">
              CRYPWEB
            </span>
            <ul className=" hidden lg:flex ml-14 space-x-12 ">
              <li className="hover:text-orange-400">FEATURES</li>
              <li className="hover:text-orange-400">OVERVIEW</li>
              <li className="hover:text-orange-400">TESTIMONIALS</li>
              <li className="hover:text-orange-400">MORE</li>
            </ul>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className="  fixed right-0 z-0 bg-neutral-900 w-full p-12
        flex flex-col justify-center items-center lg:hidden "
          >
            <ul>
              <li className="  hover:text-orange-400 py-4 ">FEATURES</li>
              <li className=" hover:text-orange-400 py-4">OVERVIEW</li>
              <li className=" hover:text-orange-400 py-4">TESTIMONIALS</li>
              <li className=" hover:text-orange-400 py-4">MORE</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
