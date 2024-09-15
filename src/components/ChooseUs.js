"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Right from "../components/icons/right";
import { useState } from "react";
// import { useSelector } from "react-redux";

export default function ChooseUs() {
  // const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [darkMode, setDarkMode] = useState();

  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
    triggerOnce: false, // Allows multiple triggers
  });

  return (
    <section className={` ${darkMode ? "dark" : ""}`}>
      <div
        id="models"
        ref={ref}
        className={`flex max-sm:block  items-center w-full h-[700px] max-sm:h-full bg-slate-100 dark:bg-secondary p-4 px-40 lg:max-xl:px-10 md:max-lg:px-5 max-sm:px-10  rounded-lg text-center mx-auto relative overflow-hidden ${
          inView ? "opacity-100" : ""
        }`}
      >
        <div className={`flex-1   ${inView ? "slide-in-left" : ""}`}>
          <Image
            src="/doc3.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div
          className={`flex-1 z-10 text-start md:max-xl:ml-6  max-sm:justify-center max-sm:text-center ${
            inView ? "slide-in-right" : ""
          }`}
        >
          <div className="max-sm:flex max-sm:justify-center max-sm:mt-6">
            <h2 className="mb-5 max-sm:mb-0 bg-blue-400 dark:bg-primary text-slate-100 w-fit px-4 rounded-md  ">
              Why Choose Us
            </h2>
          </div>

          <h4 className="font-semibold text-5xl lg:max-xl:text-4xl md:max-lg:text-3xl  max-sm:text-xl text-blue-400 leading-snug max-sm:mt-5  ">
            Explain The Advanced
            <br /> Technologies Powering
            <br /> FutureBotics Ai Robots.
          </h4>
          <p className="text-gray-400 text-xl mt-6 max-sm:mt-3 max-sm:text-sm">
            Explain the advanced technologies powering FutureBotics AI robots.
            Discuss the use of artificial intelligence, machine learning, and
            advanced sensors,
          </p>
          <div className="max-sm:flex max-sm:justify-center">
            <button className="bg-blue-400 dark:bg-primary mt-10  max-sm:max-lg:mt-5 w-40 md:max-lg:w-32 flex justify-center uppercase  items-center gap-2 text-white px-4  py-2 max-sm:p-0 md:max-lg:py-0 md:max-lg:px-0 rounded-full text-sm hover:bg-[#1f2937] duration-500">
              Read More
              <Right />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
