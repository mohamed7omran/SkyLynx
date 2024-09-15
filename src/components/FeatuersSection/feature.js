"use client";
import { useInView } from "react-intersection-observer";
// import { useSelector } from "react-redux";
import { useState } from "react";
const Feature = ({ icon, title, body }) => {
  // const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [darkMode, setDarkMode] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
    triggerOnce: false, // Allows multiple triggers
  });

  return (
    <div
      ref={ref}
      className={` group p-5 flex justify-between items-center text-center opacity-90 rounded-lg  bg-white dark:bg-secondary duration-300 ${
        inView ? "animate-fade-in-up" : "opacity-0"
      } ${darkMode ? "dark" : ""}`}
    >
      <div className=" flex justify-center items-center ">
        <div className="rounded-full border-2 p-2 mr-5 border-SecondText group-hover:border-blue-400 dark:group-hover:border-primary duration-500 ">
          {icon}
        </div>
      </div>
      <div>
        <h5 class=" text-2xl max-sm:text-lg text-start font-semibold tracking-tight group-hover:text-blue-400 dark:group-hover:text-primary duration-500 text-black dark:text-black">
          {title}
        </h5>
        <p class="mb-3 text-gray-400 text-start font-normal max-sm:text-sm text-SecondText">
          {body}
        </p>
      </div>
    </div>
  );
};

export default Feature;
