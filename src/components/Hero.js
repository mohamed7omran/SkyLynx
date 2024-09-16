"use client";
import Image from "next/image";
import Right from "./icons/right";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [part1, setPart1] = useState(""); // "Everything"
  const [part2, setPart2] = useState(""); // "is better"
  const [part3, setPart3] = useState(""); // "with AI"

  useEffect(() => {
    const text1 = "Everything";
    const text2 = "is better";
    const text3 = "with SKYLYNX";

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    let interval1, interval2, interval3;

    // Typing first part
    interval1 = setInterval(() => {
      setPart1(text1.slice(0, index1));
      index1++;

      if (index1 > text1.length) {
        clearInterval(interval1);

        // Start typing second part
        interval2 = setInterval(() => {
          setPart2(text2.slice(0, index2));
          index2++;

          if (index2 > text2.length) {
            clearInterval(interval2);

            // Start typing third part
            interval3 = setInterval(() => {
              setPart3(text3.slice(0, index3));
              index3++;

              if (index3 > text3.length) {
                clearInterval(interval3);
              }
            }, 150);
          }
        }, 150);
      }
    }, 150);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <section
      className={`${
        darkMode ? "dark" : ""
      } bg-[url('/doc5.jpg')] bg-opacity-50 bg-cover bg-center bg-fixed h-screen md:max-lg:h-full max-sm:h-[600px] bg-no-repeat hero mx-auto md:max-lg:flex md:max-lg:items-center md:max-lg:justify-between`}
    >
      <div className="py-32 md:max-lg:px-16 max-sm:px-6  text-slate-100 dark:teg7 max-sm:py-6 bg-black/30  p-32 h-full">
        <h1 className="text-6xl md:max-lg:text-4xl max-sm:text-3xl font-semibold typing-text text-lightPrimary dark:text-primary h-[147px]">
          <span className="typing-text">{part1}</span>
          <br />
          <span className="typing-text">{part2}</span>
          <br />
          <span className="typing-text">{part3}</span>
        </h1>
        <p className="my-6 md:max-lg:mt-0 max-sm:my-0 max-sm:mb-5 text-white dark:text-gray-700 text-sm">
          Connecting patients and doctors for a healthier tomorrow, where every
          interaction improves well-being and care.
        </p>
        <div className="flex gap-4 text-sm">
          <button
            onClick={redirectToLogin}
            className="bg-secondary dark:bg-secondary flex justify-center uppercase  items-center gap-2 text-slate-100 px-4 py-2 max-sm:p-0  rounded-full text-sm hover:bg-lightSecondary dark:hover:bg-secondary duration-500"
          >
            Get started
            <Right />
          </button>
          <button
            className="flex gap-2
           py-2 items-center border-0 text-slate-100 font-semibold"
          >
            Learn more <Right />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
