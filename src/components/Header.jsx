import React, { useState } from "react";
import Logo from "../img/logo.png";
import { motion } from "framer-motion";
import Profile from "../img/profile.jpg";
import { MdLocalGroceryStore } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setMenu(!isMenu);
    }
  };
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop and tab device */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="" />
          <p className="text-red-900 text-2xl font-bold">MAK</p>
        </Link>
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
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Profile}
              className="cursor-pointer w-10 h-10 border rounded-full  min-h-[40px] min-w-[40px] drop-shadow-xl"
              alt=""
              onClick={login}
            />
            {isMenu && (
              <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute px-4 py-2 top-12 right-6">
                {user && user.email === "jannateekhushbu927@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                      log out <BsBoxArrowInRight />
                    </p>
                  </Link>
                )}
                <p className=" py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                  New Item <GrFormAdd />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile device */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </header>
  );
};

export default Header;
