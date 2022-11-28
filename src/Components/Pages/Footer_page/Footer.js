import React from "react";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
// import { GrLocation } from "react-icons/gr";
import { NavLink } from "react-router-dom";

import footlogo from "../../../img/logo.png";

import "./Footer";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row footer-sec">
            <div className="col-md-4 col-sm-6 col-xs-12 foot-sec1">
              <div className="foot-log">
                <NavLink exact to="/">
                  <img src={footlogo} title="Sibi Steels"/>
                </NavLink>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="foot-cont">
                <div className="foot-cont-head">
                  <h5>Salem</h5>
                </div>
                <div className="foot-cont">
                  <address>
                    <FiMapPin />
                    <p>
                      {" "}
                      No 28/5, Seetharaman Road, Near Chatram,
                      <br /> Salem -636009, Tamilnadu, India.
                    </p>
                  </address>
                </div>
                <div className="cont-footer">
                  <FiPhone />
                  <a href="tel:914272353822">+91 - 427 - 2353822</a>
                </div>
                <div className="cont-footer">
                  <FiMail />
                  <a href="mailto:sibisteels@gmail.com">sibisteels@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="foot-bran">
                <div className="foot-bran-head">
                  <h5>Erode</h5>
                </div>
                <div className="foot-cont">
                  <address>
                    <FiMapPin />
                    <p>
                      39/74 KNK Road, Karungalpalayam,
                      <br /> Erode -638 003, Tamilnadu, India.
                    </p>
                  </address>
                </div>
                <div className="cont-footer1">
                  <FiPhone />
                  <a href="tel:+914242222822">+91 - 424 - 2222822</a>
                </div>
                <div className="cont-footer1">
                  <FiMail />
                  <a href="mailto:sibisteels@gmail.com">sibisteels@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="foot-copy">
                &#169; Copyright 2022 sibi steels. Allrights reserved
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="foot-Devlope">
                <p>
                  Devloped by{" "}
                  <a href={"https://www.byzerotechnologies.com/"}>
                    Byzero Technologies
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
