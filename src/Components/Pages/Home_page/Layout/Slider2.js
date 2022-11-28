import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import "..src/Components/Pages/Home_page/Slider2.css";
import Pipefitting from "../../../../img/pipefitting.png";
import Industrial from "../../../../img/industrialfitting.png"
import Fastners from "../../../../img/fastners.png"
import Flanges from "../../../../img/flanges.png"
import Weldingrods from "../../../../img/weldingrod.png"
import Abrasive from "../../../../img/Abrasivewheels.png"
import manholecover from "../../../../img/manholecover.png"



// import required modules
import { Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <div className="silder2">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12"></div>
            <div className="col-md-4 col-sm-4 col-xs-12 pro-sli">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                effect={"creative"}
                navigation={true}
                modules={[Autoplay, Navigation]}
               className="pro-sli2"
                
              >
                <SwiperSlide>
                  <img src={Pipefitting} title="Pipefitting" alt="Pipefitting"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Industrial} title="Industrial Fitting" alt="Industrial Fitting"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Fastners} title="Fastners" alt="Fastners"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Flanges} title="Flanges" alt="Flanges"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Weldingrods} title="Weldingrods" alt="Weldingrods"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Abrasive} title="Abrasive" alt="Abrasive"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={manholecover} title="manholecover" alt="manholecover"/>
                </SwiperSlide>
              </Swiper>
              <div className="ourpro-img">
                <h3>Wide Range Of Stainless Steel Products</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
