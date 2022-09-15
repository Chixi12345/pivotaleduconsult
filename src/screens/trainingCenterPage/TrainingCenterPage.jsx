import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const TrainingCenterPage = () => {
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
        TrainingCenterPage
        <Footer />
      </div>
    </div>
  );
};

export default TrainingCenterPage;
