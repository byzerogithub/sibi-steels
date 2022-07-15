import React from "react";
import "./Contact.css";
import Footer from "../Footer_page/Footer";
export default function Contact() {
  return (
    <>
      <div class="banner">
        <div className="banner-inn">
          <h2>Contact us</h2>
        </div>
      </div>

      <div className="cont-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 ol-xs-12 cont-seca">
              <div class="col align-self-center">
                <h1 class="text-center">Get In Touch</h1>
                {/* <!-- contact form --> */}
                <form>
                  {/* <!-- name --> */}
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      type="name"
                      name="name"
                      class="form-control"
                      id="name"
                    />
                  </div>

                  {/* <!-- email --> */}
                  <div class="form-group">
                    <label for="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="email"
                    />
                  </div>

                  {/* <!-- subject --> */}
                  <div class="form-group">
                    <label for="subject">Mobile No</label>
                    <input
                      type="tel"
                      name="subject"
                      class="form-control"
                      id="subject"
                    />
                  </div>

                  <div class="form-group">
                    <label for="email_body">Message</label>
                    <textarea
                      class="form-control"
                      id="email_body"
                      rows="5"
                    ></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 ol-xs-12 cont-secb">
              <div className="add-1">
                <h5>Salem</h5>
                <address>
                  <p>
                    {" "}
                    No 28/5, Seetharaman Road, Near Chatram,
                    <br /> Salem -636009, Tamilnadu, India.
                  </p>
                </address>
                <a href="tel:+914272353822">+91 - 427 - 2353822</a> <br />
                <a href="mailto:sibisteels@gmail.com">sibisteels@gmail.com</a>
              </div>
              <div className="add-1">
                <h5>Erode</h5>
                <address>
                  <p>
                    39/74 KNK Road, Karungalpalayam,
                    <br /> Erode -638 003, Tamilnadu, India.
                  </p>
                </address>

                <a href="tel:+914242222822">+91 - 424 - 2222822</a>
                <br />
                <a href="mailto:sibisteels@gmail.com">sibisteels@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}
