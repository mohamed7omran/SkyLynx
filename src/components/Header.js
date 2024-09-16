"use client";
// import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FcMenu } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../lib/darkModeSlice";
import { useState, useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = darkMode ? "#000000" : "#ffffff";
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode(!darkMode)); // Toggle dark mode
  };
  return (
    <>
      <header className={`${darkMode ? "dark" : ""}`}>
        <div
          className={`lg:hidden bg-slate-100 text-gray-500 dark:bg-slate-900 text-4xl p-5 flex items-center justify-between `}
        >
          <Link className="text-lightPrimary font-semibold text-2xl" href="/">
            <span className="text-lightSecondary text-secondary">SK</span>
            YLYNX
          </Link>

          <div className="cursor-pointer flex items-center justify-between">
            <button
              onClick={handleToggleDarkMode}
              className=" p-0 border-none mr-3"
            >
              {darkMode ? (
                <MdOutlineWbSunny size={30} className="text-yellow-500" />
              ) : (
                <IoMoonOutline size={30} className="text-gray-500" />
              )}
            </button>
            <div onClick={toggleMenu}>
              <FcMenu size={40} />
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className={`${darkMode ? "dark" : ""}`}>
          <nav
            className={` lg:hidden text-lg absolute w-full  flex flex-col items-center gap-3 text-gray-500 dark:text-secondary font-semibold bg-white dark:bg-gray-800 p-4`}
          >
            <Link onClick={() => setIsMenuOpen(false)} href={"/"}>
              Home
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href={"#models"}>
              Models
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href={"#about"}>
              About
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href={"#contactUs"}>
              Contact us
            </Link>
          </nav>
        </div>
      )}
      {/* desktop */}
      <header className={`${darkMode ? "dark" : ""}  `}>
        <div
          className={` bg-slate-100 dark:bg-slate-900 max-lg:hidden flex items-center justify-between  mx-auto p-6`}
        >
          <nav className="flex items-center gap-8 text-gray-500 font-semibold">
            <Link className="text-lightPrimary font-semibold text-2xl" href="/">
              <span className="text-secondary">SK</span>
              YLYNX
            </Link>
            <Link
              className="hover:text-secondary dark:hover:text-secondary duration-500"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="hover:text-secondary dark:hover:text-secondary duration-500"
              href={"#models"}
            >
              Recorder
            </Link>
            <Link
              className="hover:text-secondary dark:hover:text-secondary duration-500"
              href={"#about"}
            >
              MD Assistant
            </Link>
            <Link
              className="hover:text-secondary dark:hover:text-secondary duration-500"
              href={"#contactUs"}
            >
              Reports
            </Link>
            <Link
              className="hover:text-secondary dark:hover:text-secondary duration-500"
              href={"#contactUs"}
            >
              Settings
            </Link>
          </nav>
          <nav className="flex items-center gap-4 text-gray-500 font-semibold">
            <>
              <Link className="text-black dark:text-primary" href={"/login"}>
                Login
              </Link>
              <Link
                className="bg-blue-400 dark:bg-secondary rounded-full text-white px-8 py-2"
                href={"/register"}
              >
                Register
              </Link>
              <button
                onClick={handleToggleDarkMode}
                className="text-2xl p-0 border-none"
              >
                {darkMode ? (
                  <MdOutlineWbSunny className="text-yellow-500" />
                ) : (
                  <IoMoonOutline className="text-gray-500" />
                )}
              </button>
            </>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
