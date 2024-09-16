"use client";
import Image from "next/image";
import Feature from "../FeatuersSection/feature";
import { useState } from "react";
import { useSelector } from "react-redux";

import {
  FcInspection,
  FcLock,
  FcClock,
  FcVoicemail,
  FcPositiveDynamic,
  FcEnteringHeavenAlive,
} from "react-icons/fc";

export default function Features() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  // const [darkMode, setDarkMode] = useState(true);
  return (
    <section className={`${darkMode ? "dark" : ""}`}>
      <div
        style={{ position: "relative" }}
        className="max-sm:h-full md:max-lg:h-full h-screen flex items-center justify-center dark:bg-slate-800  "
      >
        <div className=" inset-0 flex items-center justify-center p-4  ">
          <div className="max-w-6xl grid grid-cols-2 gap-8 max-sm:gap-2 md:max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:h-full  max-sm:py-2 ">
            <Feature
              title={"Accurate report"}
              body={
                "Accelerate innovation with our AI models. Simplify integration across diverse applications and bring your ideas to life."
              }
              icon={<FcInspection size={50} />}
            />
            <Feature
              title={"Security and Privacy"}
              body={
                "Secure your data with our advanced AI API marketplace. Trustworthy and reliable data security solutions."
              }
              icon={<FcLock size={50} />}
            />
            <Feature
              title={"Analytics and Insights"}
              body={
                "Accelerate your product's launch. Experience faster time to market and stay ahead of the competition."
              }
              icon={<FcClock size={50} />}
            />
            <Feature
              title={"Meeting Recording"}
              body={
                "Explore diverse AI models in our marketplace for different industries and use cases."
              }
              icon={<FcVoicemail size={50} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
