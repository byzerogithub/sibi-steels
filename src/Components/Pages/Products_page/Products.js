import React from "react";
import { NavLink } from "react-router-dom";

// style sheet
import "./Product.css";

// imgae zoom
// import ImageZoom from "react-medium-image-zoom";
// import Productzoom from "../../Productzoom";

// layout images
import Steel from "../../../img/ss-polishpipes.png";
import Handrailings from "../../../img/ss-rod.png";
import Fittings from "../../../img/ss-angle (1).png";
import Tube from "../../../img/ss-sheets.png";
import Bolts from "../../../img/bolt-nut.png";
import Sssteel from "../../../img/sssteel.png";
import Sstube from "../../../img/sstube.png";
import Sshand from "../../../img/sshandrails.png";
import Ssfitting from "../../../img/sspipefitting.png";
import Ssbolts from "../../../img/ssboltsnuts.png";
// import Ssangle from "../img/ssangles.png";
import Abrasivewheel from "../../../img/Abrasivewheels.png";
import Fasteners from "../../../img/fastners.png";
import Flanges from "../../../img/flanges.png";
import Industrialfitting from "../../../img/industrialfitting.png";
import Manholecover from "../../../img/manholecover.png";
import Pipefitting from "../../../img/pipefitting.png";
import Weldingrod from "../../../img/weldingrod.png";
import Flats from "../../../img/ss-flats.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

export default function Products() {
  return (
    <>
      <div class="banner">
        <div className="banner-inn">
          <h2>Products</h2>
        </div>
      </div>
      <div className="products-section">
        <div className="container">
          {/* <div><Productzoom /></div> */}
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card0" data-aos="fade-down" data-aos-delay="300">
                <NavLink exact to="/products" className="nav-link">
                  <img src={Steel} class="card-img-top" alt="Card image cap" />
                </NavLink>
                <div className="product-body-sec">
                  <img
                    src={Sssteel}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </div>
                <h5 className="card-title">
                  <NavLink exact to="/products" className="nav-link">
                    SS Polishpipes
                  </NavLink>
                </h5>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card1" data-aos="fade-down" data-aos-delay="600">
                <NavLink exact to="/products" className="nav-link">
                  {" "}
                  <img src={Tube} class="card-img-top" alt="Card image cap" />
                </NavLink>
                <div className="product-body-sec">
                  <img src={Sstube} class="card-img-top" alt="Card image cap" />
                </div>

                <h5 className="card-title">
                  <NavLink exact to="/products" className="nav-link">
                    SS Sheets & Coils
                  </NavLink>
                </h5>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card2" data-aos="fade-down" data-aos-delay="900">
                <NavLink exact to="/products" className="nav-link">
                  <img
                    src={Handrailings}
                    class="card-img-top"
                    alt="Card image cap"
                  />{" "}
                </NavLink>
                <div className="product-body-sec">
                  <img src={Sshand} class="card-img-top" alt="Card image cap" />
                </div>
                <h5 className="card-title">
                  <NavLink exact to="/products" className="nav-link">
                    SS Rods
                  </NavLink>
                </h5>
              </div>
            </div>
          </div>
          <div className="row our-pro-sec2">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card3" data-aos="fade-down" data-aos-delay="400">
                <NavLink exact to="/products" className="nav-link">
                  <img
                    src={Fittings}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </NavLink>
                <div className="product-body-sec">
                  <img
                    src={Ssfitting}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </div>
                <h5 className="card-title">
                  <NavLink exact to="/products" className="nav-link">
                    SS Angles
                  </NavLink>
                </h5>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card4" data-aos="fade-down" data-aos-delay="700">
                <NavLink exact to="/products" className="nav-link">
                  {" "}
                  <img
                    src={Flats}
                    class="card-img-top"
                    alt="Card image cap"
                  />{" "}
                </NavLink>
                <div className="product-body-sec">
                  <img
                    src={Ssbolts}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </div>
                <h5 className="card-title">
                  <NavLink exact to="/products" className="nav-link">
                    SS Flats
                  </NavLink>
                </h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card4" data-aos="fade-down" data-aos-delay="700">
                <NavLink exact to="/products" className="nav-link">
                  {" "}
                  <img
                    src={Bolts}
                    class="card-img-top"
                    alt="Card image cap"
                  />{" "}
                </NavLink>
                <div className="product-body-sec">
                  <img
                    src={Ssbolts}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </div>
                <h5 className="card-title">
                  <NavLink exact to="/products" className="nav-link">
                    SS Bolts and Nuts
                  </NavLink>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section-2">
        <div className="container">
          <div className="row our-pro-sec2">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card5" data-aos="fade-down" data-aos-delay="1000">
                <NavLink exact to="/products" className="nav-link">
                  <img id="prod-img-2"
                    src={Pipefitting}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card3" data-aos="fade-down" data-aos-delay="400">
                <NavLink exact to="/products" className="nav-link">
                  <img id="prod-img-2"
                    src={Industrialfitting}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </NavLink>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card4" data-aos="fade-down" data-aos-delay="700">
                <NavLink exact to="/products" className="nav-link">
                  {" "}
                  <img id="prod-img-2"
                    src={Fasteners}
                    class="card-img-top"
                    alt="Card image cap"
                  />{" "}
                </NavLink>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card5" data-aos="fade-down" data-aos-delay="1000">
                <NavLink exact to="/products" className="nav-link">
                  <img id="prod-img-2"
                    src={Flanges}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card3" data-aos="fade-down" data-aos-delay="400">
                <NavLink exact to="/products" className="nav-link">
                  <img id="prod-img-2"
                    src={Weldingrod}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card3" data-aos="fade-down" data-aos-delay="400">
                <NavLink exact to="/products" className="nav-link">
                  <img id="prod-img-2"
                    src={Abrasivewheel}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card3" data-aos="fade-down" data-aos-delay="400">
                <NavLink exact to="/products" className="nav-link">
                  <img id="prod-img-2"
                    src={Manholecover}
                    class="card-img-top"
                    alt="Card image cap"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
