import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate("/login");
  };
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <Link to={"/"}>
        <img
          to="/"
          src={assets.logo}
          alt="logo"
          className="w-44 cursor-pointer"
        />
      </Link>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li className="py-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primaryBlue font-semibold relative after:block after:h-0.5 after:w-3/5 after:bg-primaryBlue after:mx-auto"
                : "text-black"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="py-1">
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive
                ? "text-primaryBlue font-semibold relative after:block after:h-0.5 after:w-3/5 after:bg-primaryBlue after:mx-auto"
                : "text-black"
            }
          >
            All Docters
          </NavLink>
        </li>
        <li className="py-1">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primaryBlue font-semibold relative after:block after:h-0.5 after:w-3/5 after:bg-primaryBlue after:mx-auto"
                : "text-black"
            }
          >
            About
          </NavLink>
        </li>
        <li className="py-1">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primaryBlue font-semibold relative after:block after:h-0.5 after:w-3/5 after:bg-primaryBlue after:mx-auto"
                : "text-black"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="profilepic"
              className="w-8 rounded-full"
            />
            <img src={assets.dropdown_icon} alt="dropdown" className="w-2.5" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => {
                    navigate("/my-profile");
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/my-appoitments");
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={handleCreateAccount}
            className="bg-primaryBlue text-white px-8 rounded-full font-light hidden md:block py-3 cursor-pointer"
          >
            {" "}
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="#"
        />
        {/* mobile menu  */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "w-0 h-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all my-2`}
        >
          <div className="flex items-center justify-between px-5 cursor-pointer">
            <img className="w-36" src={assets.logo} alt="#" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="#"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-10 text-lg font-medium  px-5">
            <NavLink onClick={() => setShowMenu(false)} to={"/"}>
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/doctors"}>
              <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/about"}>
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/contact"}>
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
