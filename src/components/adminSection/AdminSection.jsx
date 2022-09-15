import React, { useEffect } from "react";
import "./adminSection.css";
import { Link } from "react-router-dom";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useLocation } from "react-router-dom";

const squareVariantsX = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 100 },
};

const AdminSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariantsX}
      className="admissionProcess-FamGen"
    >
      <div className="admissionProcess-FamHead">
        {" "}
        <h2>Admission Processing</h2>
      </div>
      <div className="admissionProcess-Famcont">
        {" "}
        <p>
          At Utopia Educational Consult Ltd, our world wide network of
          associates and affiliates as well as the existence of a well staffed
          U.S.A office manned by one of our directors has made it possible for
          us to assist more than 2,000 Nigerian students in enrolling in more
          than 300 schools in the United States of America and not less 40% of
          these students have received scholarships The visa enrollment in the
          American Embassy is now more hostile and students who have not
          travelled out of the country before are at disadvantage. Our services
          are designed to enable you overcome these disadvantages.{" "}
        </p>
      </div>

      <Link
        to="/admission_page"
        style={{ textDecoration: "none" }}
        className="admissionProcess-FamBtn"
      >
        <h4>LEARN MORE</h4>
      </Link>
    </motion.div>
  );
};

export default AdminSection;
