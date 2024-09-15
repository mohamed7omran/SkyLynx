"use client";
// import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FcMenu } from "react-icons/fc";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../../lib/darkModeSlice";
import { useState, useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  // const dispatch = useDispatch();
  // const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const session = useSession();
  // console.log("session => ", session);
  // const status = session?.status;
  // const userData = session.data?.user;
  // let userName = userData?.username || ""; // Default to an empty string if undefined
  // if (userName.includes(" ")) {
  //   userName = userName.split(" ")[0];
  // }
  // useEffect(() => {
  //   document.documentElement.style.scrollBehavior = "smooth";
  //   document.body.style.scrollBehavior = "smooth";
  //   document.body.style.backgroundColor = darkMode ? "#000000" : "#ffffff";
  // }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode
  };
  return (
    <>
      <header
        className={`sm:hidden text-4xl p-5 flex items-center justify-between ${
          darkMode ? "dark" : ""
        }`}
      >
        <Link
          className="text-lightPrimary dark:text-primary font-semibold text-2xl"
          href="/"
        >
          <span className="text-lightSecondary dark:text-white">AI EX</span>
          CHANGE
        </Link>

        <div
          onClick={toggleMenu}
          className="cursor-pointer flex items-center justify-between"
        >
          <button onClick={handleToggleDarkMode} className=" p-0 border-none">
            {darkMode ? (
              <MdOutlineWbSunny size={25} className="text-yellow-500" />
            ) : (
              <IoMoonOutline size={25} className="text-gray-500" />
            )}
          </button>
          <FcMenu size={40} />
        </div>
      </header>
      {isMenuOpen && (
        <div className={`${darkMode ? "dark" : ""}`}>
          <nav
            className={` sm:hidden text-lg absolute w-full  flex flex-col items-center gap-3 text-white font-semibold bg-lightPrimary dark:bg-primary p-4`}
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

      <header
        className={`${
          darkMode ? "dark" : ""
        }  bg-slate-300 max-sm:hidden flex items-center justify-between  mx-auto p-6`}
      >
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link
            className="text-lightPrimary dark:text-primary font-semibold text-2xl"
            href="/"
          >
            <span className="text-lightSecondary dark:text-white">AI EX</span>
            CHANGE
          </Link>
          <Link
            className="hover:text-lightPrimary dark:hover:text-primary duration-500"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-lightPrimary dark:hover:text-primary duration-500"
            href={"#models"}
          >
            Models
          </Link>
          <Link
            className="hover:text-lightPrimary dark:hover:text-primary duration-500"
            href={"#about"}
          >
            About
          </Link>
          <Link
            className="hover:text-lightPrimary dark:hover:text-primary duration-500"
            href={"#contactUs"}
          >
            Contact
          </Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {status === "authenticated" && (
            <>
              <Link href={"/profile"} className=" whitespace-nowrap">
                Hello, {userName}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="bg-lightPrimary dark:bg-primary rounded-full text-white px-8 py-2"
              >
                Logout
              </button>
            </>
          )}
          {status !== "authenticated" && (
            <>
              <Link className="text-black dark:text-primary" href={"/login"}>
                Login
              </Link>
              <Link
                className="bg-lightPrimary dark:bg-primary rounded-full text-white px-8 py-2"
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
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
