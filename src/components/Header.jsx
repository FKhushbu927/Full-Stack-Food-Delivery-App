import React from "react";
import Logo from "../img/logo.png";
import Profile from "../img/profile.jpg";
import { MdLocalGroceryStore } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop and tab device */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="" />
          <p className="text-red-900 text-2xl font-bold">MAK</p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdLocalGroceryStore className="text-textColor text-3xl cursor-pointer" />
            <div className=" absolute -top-1 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">2</p>
            </div>
          </div>
          <div>
            <img
              src={Profile}
              className="w-10 h-10 border rounded-full  min-h-[40px] min-w-[40px] drop-shadow-xl"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* mobile device */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </header>
  );
};

export default Header;
