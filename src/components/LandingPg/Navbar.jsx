import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Our Projects", href: "/ourprojects" },
  { name: "FAQs", href: "/faqs" },
  { name: "AboutUs", href: "/aboutus" },
];
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function showMenu() {
    setMenu(true);
    document.body.style.overflow = "hidden";
  }
  function hideMenu() {
    setMenu(false);
    document.body.style.overflow = "auto";
  }
  return (
    <div>
      {/* sidemenu */}
      <div
        onClick={hideMenu}
        className={`bg-black/50 duration-300 h-screen w-screen ${
          menu ? "fixed" : "hidden"
        }`}
      ></div>
      <div
        className={`bg-white h-screen ${
          menu ? "right-[0%]" : "right-[-100%]"
        } w-[60%] duration-300  fixed`}
      >
        <span
          onClick={hideMenu}
          className="float-right mr-8 mt-6 font-bold text-2xl"
        >
          <i class="bx bx-x"></i>
        </span>
        <ul className="mt-20">
          <li onClick={hideMenu} className="m-auto w-fit mt-6 text-[16px]">
            <NavLink to={navigation[0].href}>Home</NavLink>
          </li>
          <li onClick={hideMenu} className="m-auto w-fit mt-6 text-[16px]">
            <NavLink to={navigation[1].href}>Properties</NavLink>
          </li>
          <li onClick={hideMenu} className="m-auto w-fit mt-6 text-[16px]">
            <NavLink to={navigation[2].href}>Our Projects</NavLink>
          </li>
          <li onClick={hideMenu} className="m-auto w-fit mt-6 text-[16px]">
            <NavLink to={navigation[3].href}>FAQs</NavLink>
          </li>
          <li onClick={hideMenu} className="m-auto w-fit mt-6 text-[16px]">
            <NavLink to={navigation[4].href}>About Us</NavLink>
          </li>
          <li onClick={hideMenu} className="m-auto w-fit mt-6 text-[16px]">
            <NavLink to="/welcome">
              <button className="m-1 mr-2 lg:mr-6 bg-black text-white p-1 rounded-xl w-20">
                Login
              </button>
            </NavLink>
          </li>
          <li onClick={hideMenu} className="m-auto w-fit mt-6 text-[16px]">
            <button className="m-1 mr-2 lg:mr-6 bg-black text-white p-1 rounded-xl w-20">
              Sign Up
            </button>
          </li>
        </ul>
      </div>

      {/* Logo and  lg-screen nav*/}
      <div className="py-3 px-10 flex justify-between">
        <h2 className="font-bold text-2xl mt-1 text-black">D-cribs</h2>

        <ul className="md:flex hidden">
          <li className="m-1 mt-2 text-[14px] lg:text-[17px] mr-2 lg:mr-6">
            <NavLink
              to={navigation[0].href}
              className={({ isActive }) =>
                isActive ? "text-gray-500 font-semibold border-b-2" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="m-1 mt-2 text-[14px] lg:text-[17px] mr-2 lg:mr-6">
            <NavLink
              to={navigation[1].href}
              className={({ isActive }) =>
                isActive ? "text-gray-600 font-bold border-b-2" : ""
              }
            >
              Properties
            </NavLink>
          </li>
          <li className="m-1 mt-2 text-[14px] lg:text-[17px] mr-2 lg:mr-6">
            <NavLink
              to={navigation[2].href}
              className={({ isActive }) =>
                isActive ? "text-gray-600 font-bold border-b-2" : ""
              }
            >
              Our Projects
            </NavLink>
          </li>
          <li className="m-1 mt-2 text-[14px] lg:text-[17px] mr-2 lg:mr-6">
            <NavLink
              to={navigation[3].href}
              className={({ isActive }) =>
                isActive ? "text-gray-600 font-bold border-b-2" : ""
              }
            >
              FAQs
            </NavLink>
          </li>
          <li className="m-1 mt-2 text-[14px] lg:text-[17px] mr-2 lg:mr-6">
            <NavLink
              to={navigation[4].href}
              className={({ isActive }) =>
                isActive ? "text-gray-600 font-bold border-b-2" : ""
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <div className="md:block hidden">
          <NavLink to="/welcome">
            <button className="m-1 mr-2 lg:mr-6 bg-black text-white p-1 rounded-xl w-16 lg:w-20">
              Login
            </button>
          </NavLink>
          <button className="m-1 mr-2 lg:mr-6 bg-black text-white p-1 rounded-xl w-16 lg:w-20">
            Sign Up
          </button>
        </div>
        {/* menu icon */}
        <span className="text-2xl font-bold mt-2 md:hidden" onClick={showMenu}>
          <i class="bx bx-menu-alt-right"></i>
        </span>
      </div>

      <hr className="mx-6 hidden sm:block" />
    </div>
  );
};

export default Navbar;
