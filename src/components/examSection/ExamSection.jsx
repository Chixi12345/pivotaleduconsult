import React, { useEffect } from "react";
import "./examSection.css";
import { Link } from "react-router-dom";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useLocation } from "react-router-dom";

const squareVariantsX = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 100 },
};

const ExamSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="examProfContFamGenn">
      <div className="examProfContHead">
        <h2>Exams Training/Registration</h2>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariantsX}
        className="examProfContFamm"
      >
        <div className="examProfContEach">
          <div className="examProfContEach-name">
            <h4>TOEFL</h4>
          </div>
          <div className="examProfContEach-info">
            {" "}
            <p>
              Test of English as a Foreign Language (TOEFL) is conducted to test
              the proficiency of international students (non-native English
              speakers like Nigerians) in the use of English Language for
              everyday academic purpose.
            </p>
          </div>

          <Link
            to="/toefl_page"
            style={{ textDecoration: "none" }}
            className="examProfContEach-btn"
          >
            <h4>LEARN MORE</h4>
          </Link>
        </div>

        <div className="examProfContEach">
          <div className="examProfContEach-name">
            <h4>IELTS</h4>
          </div>
          <div className="examProfContEach-info">
            {" "}
            <p>
              The international English language testing system (IELTS) is the
              world’s most popular English language proficiency test for higher
              education and global migration.
            </p>
          </div>

          <Link
            to="/ielts_page"
            style={{ textDecoration: "none" }}
            className="examProfContEach-btn"
          >
            <h4>LEARN MORE</h4>
          </Link>
        </div>

        <div className="examProfContEach">
          <div className="examProfContEach-name">
            <h4>PTE</h4>
          </div>
          <div className="examProfContEach-info">
            {" "}
            <p>
              The Pearson Test of English Academic (PTE Academic) a
              computer-based test which assesses the Listening, Reading,
              Speaking and Writing abilities of non-native speakers of English
            </p>
          </div>

          <Link
            to="/pte_page"
            style={{ textDecoration: "none" }}
            className="examProfContEach-btn"
          >
            <h4>LEARN MORE</h4>
          </Link>
        </div>

        <div className="examProfContEach">
          <div className="examProfContEach-name">
            <h4>SAT 1 & 2</h4>
          </div>
          <div className="examProfContEach-info">
            {" "}
            <p>
              The SAT exam (Scholastic Aptitude Test) is a recognized university
              admission test in the USA The test lets you show universities what
              you know and how well you can apply that knowledge
            </p>
          </div>
          <Link
            to="/sat_page"
            style={{ textDecoration: "none" }}
            className="examProfContEach-btn"
          >
            <h4>LEARN MORE</h4>
          </Link>
        </div>

        <div className="examProfContEach">
          <div className="examProfContEach-name">
            <h4>GRE</h4>
          </div>
          <div className="examProfContEach-info">
            {" "}
            <p>
              The GRE Computer Based Test (CBT) is required by graduate and
              professional schools, as it is considered a crucial
              prerequisite/component for admission to a graduate program.
            </p>
          </div>
          <Link
            to="/gre_page"
            style={{ textDecoration: "none" }}
            className="examProfContEach-btn"
          >
            <h4>LEARN MORE</h4>
          </Link>
        </div>

        <div className="examProfContEach">
          <div className="examProfContEach-name">
            <h4>GMAT</h4>
          </div>
          <div className="examProfContEach-info">
            {" "}
            <p>
              Leading business schools and management education programs
              worldwide recognize the GMAT as the most effective predictor of
              success.
            </p>
          </div>
          <Link
            to="/gmat_page"
            style={{ textDecoration: "none" }}
            className="examProfContEach-btn"
          >
            <h4>LEARN MORE</h4>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ExamSection;
