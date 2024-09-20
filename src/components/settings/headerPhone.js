"use client";
// import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FcMenu } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../lib/darkModeSlice";
import { useState, useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const HeaderPhone = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const activeSidebar = useSelector((state) => state.sidebar.activeSidebar);
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
          className={`md:hidden  bg-slate-100 text-gray-500 dark:bg-slate-900 text-4xl p-5 flex items-center justify-between `}
        >
          <div className="cursor-pointer flex items-center justify-between">
            <div onClick={toggleMenu}>
              <FcMenu size={40} />
            </div>
            <button
              onClick={handleToggleDarkMode}
              className=" p-0 border-none mx-4"
            >
              {darkMode ? (
                <MdOutlineWbSunny size={30} className="text-yellow-500" />
              ) : (
                <IoMoonOutline size={30} className="text-gray-500" />
              )}
            </button>
          </div>

          <Link className="text-lightPrimary font-semibold text-2xl" href="/">
            <span className="text-lightSecondary text-secondary">SK</span>
            YLYNX
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className={`${darkMode ? "dark" : ""}`}>
          {/* Overlay */}
          <div
            className="bg-black bg-opacity-50 w-full h-full"
            onClick={toggleMenu}
          ></div>

          {/* Drawer */}
          <div
            id="drawer-navigation"
            className="fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto bg-white w-64 dark:bg-gray-800 transition-transform transform translate-x-0"
          >
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
            <div class="py-4 overflow-y-auto">
              <ul class="space-y-2 font-medium">
                <li>
                  <Link
                    onClick={toggleMenu}
                    href="/recorder"
                    className={`${
                      activeSidebar === "recorder"
                        ? "text-secondary dark:text-secondary hover:text-secondary"
                        : ""
                    }  group flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                  >
                    <svg
                      className={`w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                        activeSidebar === "recorder"
                          ? "text-secondary dark:text-secondary group-hover:text-secondary"
                          : "text-gray-400"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span class="ms-3">Recorder</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
                    href="/MD-Assistant"
                    // className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    className={`${
                      activeSidebar === "MDAssistant"
                        ? "text-secondary dark:text-secondary hover:text-secondary"
                        : ""
                    } flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                  >
                    <svg
                      className={`w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                        activeSidebar === "MDAssistant"
                          ? "text-secondary dark:text-secondary group-hover:text-secondary"
                          : "text-gray-400"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">
                      MD Assistant
                    </span>
                    <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
                    href="/reports"
                    // class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    className={`${
                      activeSidebar === "reports"
                        ? "text-secondary dark:text-secondary hover:text-secondary"
                        : ""
                    } flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                  >
                    <svg
                      className={`w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                        activeSidebar === "reports"
                          ? "text-secondary dark:text-secondary group-hover:text-secondary"
                          : "text-gray-400"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Reports</span>
                    <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      3
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
                    href="/settings/general"
                    // class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    className={`${
                      activeSidebar === "settings"
                        ? "text-secondary dark:text-secondary hover:text-secondary"
                        : ""
                    } flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                  >
                    <svg
                      className={`flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                        activeSidebar === "settings"
                          ? "text-secondary dark:text-secondary group-hover:text-secondary"
                          : "text-gray-400"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/notifications"
                    // class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    className={`${
                      activeSidebar === "notifications"
                        ? "text-secondary dark:text-secondary hover:text-secondary"
                        : ""
                    } flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                  >
                    <svg
                      className={`w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                        activeSidebar === "notifications"
                          ? "text-secondary dark:text-secondary group-hover:text-secondary"
                          : "text-gray-400"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">
                      Notifications
                    </span>
                  </Link>
                </li> */}
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                      />
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderPhone;
