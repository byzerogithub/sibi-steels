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
                  <img src={Pipefitting} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Industrial} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Fastners} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Flanges} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Weldingrods} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Abrasive} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={manholecover} />
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
