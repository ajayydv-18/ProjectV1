import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-25 w-screen bg-[#000000] flex items-center justify-between p-6">
      <div className="h-25 w-25 ">
        <NavLink to="/">
          <img
            className="h-full w-full object-cover object-center"
            src="../../src/assets/Images/sellogo.png"
            alt=""
          />
        </NavLink>
      </div>
      <div className="flex gap-8 p-6 items-center">
        <NavLink
          className={({ isActive }) =>
            `text-l font-bold ${
              isActive ? "text-[#0e3e79]" : "text-white"
            } `
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-l font-semibold ${isActive ? `text-[#0e3e79]` : `text-white`}`
          }
          to="/mentors"
        >
          Mentors
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-l font-semibold ${isActive ? `text-[#0e3e79]` : `text-white`}`
          }
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink to="/signin">
          <button className="text-l text-white font-medium bg-[#0e3e79] rounded px-6 py-2 cursor-pointer active:scale-95">
            SignIn
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
