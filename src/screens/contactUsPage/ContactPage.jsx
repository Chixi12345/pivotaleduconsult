import React, { useRef, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import "./contactPage.css";

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7ad82s",
        "template_yo7a5yi",
        form.current,
        "mHLHpX5U6wZmhSfEM"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="maxWidthStyle ">
      <Navbar />
      <div>
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/2347030916267"
          style={{ textDecoration: "none", cursor: "pointer" }}
          target="_blank"
        >
          <div className="whatsappStickbody">
            <div className="whatsappStickActive"></div>
            <FaWhatsapp />
          </div>
        </a>
        <div className="contactUs-gen">
          <div className="contactUs-Famd">
            <div className="contactUs-Icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contactUs-Text">
              43 ADEMOLA ABOGUNRIN OMOLAYO BUS STOP MEIRAN LAGOS STATE
            </div>
          </div>
          <div className="contactUs-Famd">
            <div className="contactUs-Icon">
              <FaPhoneAlt />
            </div>
            <div className="contactUs-Text">
              07030916267, 08091609312, 09019171273
            </div>
          </div>

          <div className="contactUs-Famd">
            <div className="contactUs-Icon">
              <FaEnvelope />
            </div>
            <div className="contactUs-Text"> utopiaeduconsult@gmail.com</div>
          </div>
        </div>
        <div className="contactPage-genFam">
          <div className="contactUs-MessageT">Send Us A Message</div>
          {/* <div className="contactUs-fillFormHead">Send Us A Message</div> */}
          <div className="contactUs-fillFormGuide">
            {" "}
            Fields marked with an * are required
          </div>
          <form onSubmit={sendEmail} ref={form}>
            <div className="contactUs-genFam-inputField">
              <input
                type="text"
                placeholder=" "
                name="name"
                required
                // onChange={(e) => {
                //   setAuth({ ...auth, email: e.target.value });
                //   validateEmail(e);
                //   setEmailAd(e.target.value);
                // }}
              />
              <span>Name *</span>
            </div>

            <div className="contactUs-genFam-inputField">
              <input
                type="email"
                placeholder=" "
                name="email"
                required
                // onChange={(e) => {
                //   setAuth({ ...auth, email: e.target.value });
                //   validateEmail(e);
                //   setEmailAd(e.target.value);
                // }}
              />
              <span>Enter Email *</span>
            </div>

            <div className="contactUs-genFam-inputField">
              <input
                type="tel"
                placeholder=" "
                name="phone_no"
                required
                // onChange={(e) => {
                //   setAuth({ ...auth, email: e.target.value });
                //   validateEmail(e);
                //   setEmailAd(e.target.value);
                // }}
              />
              <span>Phone Number *</span>
            </div>

            <div className="inputFieldPersonalfc">
              {/* <input
              type="email"
              placeholder=" "
              name="email"
              required
              // onChange={(e) => {
              //   setAuth({ ...auth, email: e.target.value });
              //   validateEmail(e);
              //   setEmailAd(e.target.value);
              // }}
            /> */}

              <textarea
                rows={4}
                cols={22}
                maxLength={250}
                placeholder="Enter short message *"
                name="email"
                required
              />
            </div>

            <div className="contactUs-genFam-inputFieldSubmit">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
