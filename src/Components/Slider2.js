import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider2.css"
import Steel from "../img/Steelrole.png"

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <>
    <div className="silder2">
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">

            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 pro-sli">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="pro-sli2"
      >
        <SwiperSlide><img src={Steel} /></SwiperSlide>
        <SwiperSlide><img src={Steel} /></SwiperSlide>
        <SwiperSlide><img src={Steel} /></SwiperSlide>

      </Swiper>
      <div className="ourpro-img">
          <h3>Wild Range Of Steel <br/>Products</h3>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
