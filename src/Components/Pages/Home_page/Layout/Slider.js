import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";


import banner2 from "../../../../img/slider6.png"
import banner3 from "../../../../img/slider3.png"
import banner4 from "../../../../img/slider4.png"
import banner5 from "../../../../img/slider5.png"

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
        <SwiperSlide modules={[EffectFade]} effect="fade"><img src={banner2} /></SwiperSlide>
        <SwiperSlide modules={[EffectFade]} effect="fade"><img src={banner3} /></SwiperSlide>
        <SwiperSlide modules={[EffectFade]} effect="fade"><img src={banner4} /></SwiperSlide>
        <SwiperSlide modules={[EffectFade]} effect="fade"><img src={banner5} /></SwiperSlide>
       

      </Swiper>
    </>
  );
}
