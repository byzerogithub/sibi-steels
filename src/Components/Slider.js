import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import "./Slider.css";
import banner from "../img/slider.jpg"
import banner2 from "../img/slider3.jpg"

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
  
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="ban-Slider"
      >
        <SwiperSlide><img src={banner} /></SwiperSlide>
        <SwiperSlide><img src={banner2} /></SwiperSlide>
       

      </Swiper>
    </>
  );
}
