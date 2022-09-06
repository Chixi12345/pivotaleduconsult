import React from "react";
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
const Footer = () => {
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
          <div className="topFooter-famteBtn">REGISTER TODAY</div>
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
                info@pivotaleduconsult.com
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="footer-contborfam1">
            <div className="footer-contbor"></div>
            <div className="footer-contbortext">USEFUL LINKS</div>
          </div>
          <div className="footer-contborfam">
            <div className="footer-contboruu">
              <FaCircle />
            </div>
            <div className="footer-EmailTextt2">About Us </div>
          </div>

          <div className="footer-contborfam">
            <div className="footer-contboruu">
              <FaCircle />
            </div>
            <div className="footer-EmailTextt2">Registration </div>
          </div>
          <div className="footer-contborfam">
            <div className="footer-contboruu">
              <FaCircle />
            </div>
            <div className="footer-EmailTextt2">Exams </div>
          </div>
          <div className="footer-contborfam">
            <div className="footer-contboruu">
              <FaCircle />
            </div>
            <div className="footer-EmailTextt2">Contact Us </div>
          </div>
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
              <div className="navbar-infoIconEach">
                <FaInstagram />
              </div>
              <div className="navbar-infoIconEach">
                <FaWhatsapp />
              </div>
              <div className="navbar-infoIconEach">
                <FaTwitter />
              </div>
              <div className="navbar-infoIconEach">
                <FaLinkedin />
              </div>

              <div className="navbar-infoIconEach">
                <FaFacebookSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyrrr">© COPYRIGHT - PIVOTAL EDU CONSULT</div>
    </div>
  );
};

export default Footer;
