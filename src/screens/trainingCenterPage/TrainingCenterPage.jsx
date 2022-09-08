import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";

const TrainingCenterPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="maxWidthStyle ">
      <Navbar />
      TrainingCenterPage
      <Footer />
    </div>
  );
};

export default TrainingCenterPage;
