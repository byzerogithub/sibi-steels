import React from "react";
import "./Home.css";
import Slider from "./Slider";
import Ourproduct from "./Ourproduct";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Services from "./Services";
import Slider2 from "./Slider2";
import Role from "../img/Steelrole.png";

const Home = () => (
  <>
    <Slider />
    <div className="abt1-steel">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="tit">
              <div>
                <h2>About Sibi Steels</h2>
              </div>
              <div>
                <p>
                  Sibi Steels is one of the trusted names engaged as a stockist,
                  wholesaler, retailer of stainless steel products. Our wide
                  assortment is used across various industries owing to their
                  salient features such as corrosion resistance, high tensile
                  strength, temperature resistance and ductile.
                  {/* Available in different grades our components undergo several
                  tests to ensure optimum quality. Our vast experience and
                  business expertise is of immense help in creating a niche for
                  ourselves as a principal supplier of stainless steel products. */}
                  {/* Sibi Steels is one of the trusted names engaged as a stockist, wholesaler, 
                                    retailer of stainless steel products like stainless steel sheets, stainless steel coils, 
                                    stainless steel rods, stainless steel angles, stainless steel flats, stainless steel dairy fittings,
                                    seamless stainless steel pipes, welded stainless steel pipes, round stainless steel tubes, etc. */}
                </p>
              </div>
              <div>
                
                <NavLink exact to="/about" className="button12">
                  <em> </em>
                  <span>See more</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-6 col-xs-12 some">
            <img src={Role} />
          </div>
        </div>
      </div>
    </div>
    <div>
      <Slider2 />
    </div>
    <div>
      <Ourproduct />
    </div>
    <div>
      <Services />
    </div>
    <div>
      <Footer />
    </div>
  </>
);

export default Home;
