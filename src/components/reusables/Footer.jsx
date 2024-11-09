import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black mt-4 py-4 text-white flex flex-col">
      <h2 className="font-bold text-2xl mt-1 text-center">D-cribs</h2>
      <div className="flex justify-center my-4">
        <ul className="m-auto">
          <NavLink className="text-xl font-normal m-2" to="#">
            Home
          </NavLink>
          <NavLink className="text-xl font-normal m-2" to="/properties">
            Properties
          </NavLink>
          <NavLink className="text-xl font-normal m-2" to="/ourprojects">
            Our Projects
          </NavLink>
          <NavLink className="text-xl font-normal m-2" to="/faqs">
            FAQs
          </NavLink>
          <NavLink className="text-xl font-normal m-2" to="/aboutus">
            AboutUs
          </NavLink>
        </ul>
      </div>
      <div className="flex justify-center">
        <i class="bx bxl-instagram"></i>
        <i class="bx bxl-twitter"></i>
        <i class="bx bxl-facebook-circle"></i>
      </div>
    </div>
  );
};

export default Footer;
