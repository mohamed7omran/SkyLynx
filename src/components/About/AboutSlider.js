"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import { useSelector } from "react-redux";

const AboutSlider = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <section className={`${darkMode ? "dark" : ""}`}>
      <div className=" h-screen dark:bg-darkPrimary">
        <Swiper
          breakpoints={{
            slidesPerView: 1,
            spaceBetween: 20,
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          <SwiperSlide>
            <Slide1
              leftImg={"/doc4.jpg"}
              rightImg={"/doc3.jpg"}
              leftBody={
                " Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor incididunt ut labore"
              }
              leftTitle={"left Title"}
              rightBody={
                " Lorem ipsum dolor sit amet, consectet durit esse cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectetur"
              }
              rightTitle={"right Title"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2
              leftImg={"/doc5.jpg"}
              rightImg={"/doc7.jpg"}
              leftBody={
                " Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor incididunt ut labore"
              }
              leftTitle={"left Title"}
              rightBody={
                " Lorem ipsum dolor sit amet, consectet durit esse cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectetur"
              }
              rightTitle={"right Title"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide1
              leftImg={"/doc8.jpg"}
              rightImg={"/doc11.jpg"}
              leftBody={
                " Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor incididunt ut labore"
              }
              leftTitle={"left Title"}
              rightBody={
                " Lorem ipsum dolor sit amet, consectet durit esse cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectetur"
              }
              rightTitle={"right Title"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutSlider;
