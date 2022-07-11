import React from "react";
import { NavLink } from "react-router-dom";
import "./ourproduct.css";
import Steel from "../img/ss-steel.png";
import Handrailings from "../img/ss-handralings.png";
import Fittings from "../img/ss-fittings.png";
import Tube from "../img/ss-tube.png";
import Bolts from "../img/ss-bolts.png";
import Angles from "../img/ss-angle.png";
import Sssteel from "../img/sssteel.png";
import Sstube from "../img/sstube.png";
import Sshand from "../img/sshandrails.png";
import Ssfitting from "../img/sspipefitting.png";
import Ssbolts from "../img/ssboltsnuts.png";
import Ssangle from "../img/ssangles.png";
import polishpipes from "../img/ss-polishpipes.png";
import SheetsCoils from "../img/ss-sheets.png";
import SSRods from "../img/ss-rod.png";
import SSAngles from "../img/ss-angle (1).png";
import Ssflats from "../img/ss-flats.png";
import Ssboltsnuts from "../img/bolt-nut.png";







import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

export default function Ourproduct() {
  return (
    <>
      <div className="our-pr">
        <div className="container">
          <h2>Products</h2>
          <p>
            We provide a wide range products. We have products in aluminum and{" "}
            <br />
            stainless steel, beams, stainless steel tubes, bearings and
            stainless steel bars.
          </p>
        </div>

        <div className="our-pro-sec1">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div
                  className="card0"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <NavLink exact to="/products" className="nav-link">
                    <img
                      src={polishpipes}
                      class="card-img-top"
                      alt="Card image cap"
                    />
                  </NavLink>
                  <div className="card-body">
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
                <div
                  className="card1"
                  data-aos="fade-down"
                  data-aos-delay="600"
                >
                  <NavLink exact to="/products" className="nav-link">
                    {" "}
                    <img src={SheetsCoils} class="card-img-top" alt="Card image cap" />
                  </NavLink>
                  <div className="card-body">
                    <img
                      src={Sstube}
                      class="card-img-top"
                      alt="Card image cap"
                    />
                  </div>

                  <h5 className="card-title">
                    <NavLink exact to="/products" className="nav-link">
                    SS Sheets & Coils
                    </NavLink>
                  </h5>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div
                  className="card2"
                  data-aos="fade-down"
                  data-aos-delay="900"
                >
                  <NavLink exact to="/products" className="nav-link">
                    <img
                      src={SSRods}
                      class="card-img-top"
                      alt="Card image cap"
                    />{" "}
                  </NavLink>
                  <div className="card-body">
                    <img
                      src={Sshand}
                      class="card-img-top"
                      alt="Card image cap"
                    />
                  </div>
                  <h5 className="card-title">
                    <NavLink exact to="/products" className="nav-link">
                    SS Rods{" "}
                    </NavLink>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row our-pro-sec2">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div
                  className="card3"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <NavLink exact to="/products" className="nav-link">
                    <img
                      src={SSAngles}
                      class="card-img-top"
                      alt="Card image cap"
                    />
                  </NavLink>
                  <div className="card-body1">
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
                <div
                  className="card4"
                  data-aos="fade-down"
                  data-aos-delay="700"
                >
                  <NavLink exact to="/products" className="nav-link">
                    {" "}
                    <img
                      src={Ssflats}
                      class="card-img-top"
                      alt="Card image cap"
                    />{" "}
                  </NavLink>
                  <div className="card-body1">
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
                <div
                  className="card5"
                  data-aos="fade-down"
                  data-aos-delay="1000"
                >
                  <NavLink exact to="/products" className="nav-link">
                    <img
                      src={Ssboltsnuts}
                      class="card-img-top"
                      alt="Card image cap"
                    />
                  </NavLink>
                  <div className="card-body1">
                    <img
                      src={Ssangle}
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
      </div>
    </>
  );
}
