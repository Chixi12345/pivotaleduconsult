import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./ptePage.css";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const PtePage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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

        <div className="ptePage-bodyGen">
          <div className="ptePage-heading-text">
            PEARSON TEST OF ENGLISH ACADEMIC (PTE)
          </div>
          <div className="ptePage-textComp">
            The Pearson Test of English Academic (PTE Academic) a computer-based
            test which assesses the Listening, Reading, Speaking and Writing
            abilities of non-native speakers of English who need to demonstrate
            their academic English capability — often to obtain places at
            English-speaking universities, higher education institutions or as
            proof of their language ability for a visa application. PTE Academic
            is endorsed by, and the preferred test of GMAC® — the owners of the
            Graduate Management Admission Test® (GMAT®). The test is recognized
            by universities and colleges worldwide and is officially approved by
            the UK Border Agency for Tiers 1, 2 and 4 visa applications.
          </div>
          <div
            className="ptePage-textComp"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            ABOUT THE TEST
          </div>

          <div className="ptePage-textComp">
            It is a computer-based exam which focuses on real-life English used
            in academic surroundings. This is to say that integrated language is
            used throughout the test and students will listen to a variety of
            accents and academic language which they will encounter at
            English-speaking higher education institutions.
          </div>
          <div className="ptePage-textComp">
            The exam will include an unmarked voice recording of the candidate,
            which is part of advanced biometric data that should assist
            institutions in verifying the identity of candidates and should aid
            them with their admission decisions. The test will be a maximum of 3
            hours long and takers can expect their results to be delivered to
            them, online, within 5 working days.
          </div>
          <div className="ptePage-textComp">
            Test scores are reported on the Global Scale of English, a
            standardized, numeric scale from 10 to 90 which can measure English
            language proficiency more precisely with reference to the widely
            known set of levels distinguished in the Common European Framework
            of Reference for Languages, or CEFR.
          </div>

          <div
            className="ptePage-textComp"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            WHO ACCEPTS PTE?
          </div>

          <div className="ptePage-textComp">
            The test is internationally recognized and is accepted for
            admissions for thousands of programs. PTE Academic acceptance
            includes top UK universities, top US universities and government
            organizations.
          </div>

          <div
            className="ptePage-textComp"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            Format
          </div>
          <div className="ptePage-textComp">
            <ul>
              <li>
                Computer-based test measures all four language areas: listening,
                reading, speaking, writing.
              </li>
              <li>20 innovative and integrated item types.</li>
            </ul>
          </div>

          <div
            className="ptePage-textComp"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            Content
          </div>

          <div className="ptePage-textComp">
            <ul>
              <li>
                Authentic academic test content from a variety of international
                contexts and scenario.
              </li>
            </ul>
          </div>

          <div
            className="ptePage-textComp"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            Duration{" "}
          </div>

          <div className="ptePage-textComp">
            <ul>
              <li>Approximately 3 hours.</li>
            </ul>
          </div>
          <div
            className="ptePage-textComp"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            Availability
          </div>

          <div className="ptePage-textComp">
            <ul>
              <li>
                PTE Academic is available in 43 territories including China,
                India, the US, Japan, South Korea, Australia, the UK, Hong Kong,
                Taiwan, Nigeria and Canad.
              </li>
            </ul>
          </div>
          <div
            className="ptePage-textComp"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            Registration
          </div>
          <div className="ptePage-textComp">
            <ul>
              <li>Registration is easy and flexible.</li>
            </ul>
          </div>

          <div
            className="ptePage-textComp"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            Scores
          </div>

          <div className="ptePage-textComp" style={{ marginBottom: "100px" }}>
            <ul>
              <li>
                Available online typically within 5 business days of taking the
                test.
              </li>

              <li>Secure online results service</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PtePage;
