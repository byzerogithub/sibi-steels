import React from "react";
import "./About.css";
import Footer from "./Footer";
import Abstractbg from "../img/abstract.png"
export default function About() {
  return (
    <>
      <div class="banner">
        <div className="banner-inn">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="about-section">
        <div className="container">
          <div className="row about-section-paragraph-1">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 shadow-box">
              <p>
                Sibi Steels is one of the trusted names engaged as a stockist,
                wholesaler, retailer of stainless steel products like stainless
                steel sheets, stainless steel coils, stainless steel rods,
                stainless steel angles, stainless steel flats, stainless steel
                dairy fittings, seamless stainless steel pipes, welded stainless
                steel pipes, round stainless steel tubes, etc. Our wide
                assortment is used across various industries owing to their
                salient features such as corrosion resistance, high tensile
                strength,temperature resistance and ductile. Available in
                different grades our components undergo several tests to ensure
                optimum quality.. Our vast experience and business expertise is
                of immense help in creating a niche for ourselves as a principal
                supplier of stainless steel products.
              </p>
              <p>
                Keeping a track of the latest market demands for various
                stainless steel products, we are offering top-notch quality
                range which is manufactured from superior quality & certified
                raw materials. Our range includes Stainless Steel Sheets / Coils
                / Strips (CR), Stainless Steel Plate / Coils, Stainless Steel
                Designer Sheets, Stainless Steel Rods / Bars, Stainless Steel
                Angles, Stainless Steel Flats / Circles, Stainless Steel Pipe
                Fittings / Dairy Fittings, Stainless Steel Fasteners, Seamless
                Stainless Steel Pipes, Welded Stainless Steel Pipes, Round /
                Square Stainless Steel Tubes etc.
              </p>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 abut-section-bg1">
            <img src={Abstractbg} />
            </div>
          </div>
          <div className="row about-section-paragraph-1">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 abut-section-bg2"></div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 shadow-box">
              <p>
                Our range has diverse application areas such as Textile, Sago
                Industries, Construction, Automobile Industries, Wet Grinders,
                Poultry, Hostel / Hotel Kitchen Equipment's, Hand railings in
                Construction, Modern Rice Mill, Hospital Equipment's, Water
                treatment / Purification plants, Refrigeration, Furniture etc.
              </p>
              <p>
                Catering to our client requirement is possible owing to our
                reliable and trusted vendors spread across the country. We act
                as a vital link between our vendors and clients and keep both of
                them satisfied with our swiftness. Our cordial relationship with
                our reliable and trusted vendors enables us to avoid delay in
                delivery. Continuous supply of our array of products in timely
                manner has maintained our market credibility and won us the
                trust of our clients.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
