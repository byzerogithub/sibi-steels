import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ocl5u4s",
        "template_xjdinc6",
        form.current,
        "xahhGGlABhjCzqyZz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
 
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
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" required />
                  <label>Mobile No</label>
                  <input type="number" name="user_number" required />
                  <label>Email</label>
                  <input type="email" name="user_email" required />
                  <label>Message</label>
                  <textarea name="message" />

                  <input type="submit" value="Send" />
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
               
                <a href={"tel:+914242222822"}>+91 - 424 - 2222822</a>
                <br />
                <a href={"mailto:sibisteels@gmail.com"}>sibisteels@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
