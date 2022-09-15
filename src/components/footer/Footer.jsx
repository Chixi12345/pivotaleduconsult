import React, { useEffect } from "react";
import footerrr from "../../assets/images/footerrr.jpg";
import bottomm from "../../assets/images/bottomm.jpg";
import "./footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import VscTwitter from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useLocation } from "react-router-dom";

const squareVariantsX = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <div className="topFooter-fam">
        <div className="topFooter-famImg">
          <img src={bottomm} />
        </div>
        <div className="topFooter-famText">
          <div className="topFooter-famtext22">
            Let's Prepare You For Success
          </div>

          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariantsX}
          >
            <Link
              to="/registration"
              style={{ textDecoration: "none" }}
              className="topFooter-famteBtn"
            >
              REGISTER TODAY
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="footer-general-flexx">
        <div className="footer-fffff">
          <div className="footer-contborfam1">
            <div className="footer-contbor"></div>
            <div className="footer-contbortext">CONTACT INFO</div>
          </div>
          <div className="footer-Addresborfam">
            <div className="footer-AddressIcon">
              <FaMapMarkerAlt />
            </div>
            <div className="footer-AddressTexttt">
              <div className="footer-AddressTextt1">Address:</div>
              <div className="footer-AddressTextt2">
                43 ADEMOLA ABOGUNRIN OMOLAYO BUS STOP MEIRAN LAGOS STATE
              </div>
            </div>
          </div>

          <div className="footer-Addresborfam">
            <div className="footer-AddressIcon">
              <FaPhoneSquareAlt />
            </div>
            <div className="footer-AddressTexttt">
              <div className="footer-AddressTextt1">Phone:</div>
              <div className="footer-PhoneTextt2">08063828855, 08136964605</div>
            </div>
          </div>

          <div className="footer-Addresborfam">
            <div className="footer-AddressIcon">
              <FaEnvelope />
            </div>
            <div className="footer-AddressTextt">
              <div className="footer-AddressTextt1">Email:</div>
              <div className="footer-EmailTextt2">
                utopiaeduconsult@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="footer-contborfamOnne">
          <div className="footer-contborfam1">
            <div className="footer-contbor"></div>
            <div className="footer-contbortext">USEFUL LINKS</div>
          </div>

          <Link
            to="/about_us"
            style={{ textDecoration: "none" }}
            className="footer-contborfam"
          >
            <div className="footer-contboruu">
              <FaCircle />
            </div>
            <div className="footer-EmailTextt2">About Us </div>
          </Link>

          <Link
            to="/registration"
            style={{ textDecoration: "none" }}
            className="footer-contborfam"
          >
            <div className="footer-contboruu">
              <FaCircle />
            </div>
            <div className="footer-EmailTextt2">Registration </div>
          </Link>

          <Link
            to="/contact_page"
            style={{ textDecoration: "none" }}
            className="footer-contborfam"
          >
            <div className="footer-contboruu">
              <FaCircle />
            </div>
            <div className="footer-EmailTextt2">Contact Us </div>
          </Link>
        </div>

        <div className="footer-newsFamGen">
          <div className="footer-contborfam1">
            <div className="footer-contbor"></div>
            <div className="footer-contbortext">NEWSLETTER</div>
          </div>

          <div className="footer-newsinpSec">
            <div className="footer-newsinptext">
              Get all latest content delivered to your email a few times a
              month.
            </div>
            <div className="footer-newsinpmain">
              <div className="footer-newsinpmainrr">
                <input type="email" placeholder="Your email address" />{" "}
              </div>
              <div className="footer-newsinpmainbtn">SUBMIT</div>
            </div>
            <div className="navbar-infoIconsFam">
              <a
                aria-label="Chat on WhatsApp"
                href="https://www.instagram.com/utopiaconsulthq/"
                style={{ textDecoration: "none", cursor: "pointer" }}
                target="_blank"
              >
                <div className="navbar-infoIconEach">
                  <FaInstagram />
                </div>
              </a>
              <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/2347030916267"
                style={{ textDecoration: "none", cursor: "pointer" }}
                target="_blank"
              >
                <div className="navbar-infoIconEach">
                  <FaWhatsapp />
                </div>
              </a>
              <a
                aria-label="Chat on WhatsApp"
                href="https://twitter.com/utopiaconsulthq"
                style={{ textDecoration: "none", cursor: "pointer" }}
                target="_blank"
              >
                <div className="navbar-infoIconEach">
                  <FaTwitter />
                </div>
              </a>
              <div className="navbar-infoIconEach">
                <FaLinkedin />
              </div>

              <a
                aria-label="Chat on WhatsApp"
                href="https://web.facebook.com/utopiaconsulthq/"
                style={{ textDecoration: "none", cursor: "pointer" }}
                target="_blank"
              >
                <div className="navbar-infoIconEach">
                  <FaFacebookSquare />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyrrr">
        © COPYRIGHT - UTOPIA EDUCATIONAL CONSULT LTD
      </div>
    </div>
  );
};

export default Footer;
