import React from "react";
import { NavLink } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center justify ">
          <NavLink className="flex items-center justify-center" to="/">
            <img
              className="h-30 w-30 "
              src="../../src/assets/Images/sellogo.png"
              alt=""
            />
            <h1 className="text-[#031b38] text-3xl font-bold">
              Lex
              <span className="text-[#dbaa2f] textl-3xl font-semibold">
                Bridge
              </span>
            </h1>
          </NavLink>
        </div>
        <div className="text-white p-10 text-l text-center">
          <p>Copyright @2026 LEXBRIDGE Pvt.Ltd.<br/> All rights Reserved.</p>
        </div>
        <div className="text-white pr-8 flex gap-6">
            <NavLink><i class="ri-instagram-line"></i></NavLink>
            <NavLink><i class="ri-facebook-circle-fill"></i></NavLink>
            <NavLink><i class="ri-twitter-x-line"></i></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
