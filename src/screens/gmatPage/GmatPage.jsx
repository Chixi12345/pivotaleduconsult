import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./gmatPage.css";
import { useLocation } from "react-router-dom";
const GmatPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="maxWidthStyle ">
      <Navbar />

      <div className="gmatPage-bodyGen">
        <div className="gmatPage-heading-text">
          GRADUATE MANAGEMENT ADMISSION TEST (GMAT)
        </div>
        <div className="gmatPage-textComp">
          Leading business schools and management education programs worldwide
          recognize the GMAT as the most effective predictor of success. You may
          already be on a career path, but you know that a management education
          will lead to even greater opportunities. Your continued success starts
          with the GMAT.
        </div>
        <div className="gmatPage-textComp">
          Consisting of four main parts delivered in English and administered in
          test centers around the world, the GMAT exam measures verbal,
          mathematical, integrated reasoning, analytical and writing skills that
          you’ve developed over time. The examination helps graduate programs
          assess your qualifications for advanced study in business and
          management. Your scores are valid for five years, so you have the
          ability to start your graduate studies now or much later.
        </div>
        <div className="gmatPage-textComp">
          The Analytical Writing Assessment (AWA) of the GMAT is designed as a
          direct measure of your ability to think critically and to communicate
          your ideas. The AWA consists of one 30-minute writing task— Analysis
          of an Argument.
        </div>

        <div className="gmatPage-textComp">
          The arguments presented on the test concern topics of general interest
          related to business or a variety of other subjects. Specific knowledge
          of the essay topic is not necessary; only your capacity to write
          analytically is assessed.
        </div>

        <div className="gmatPage-textComp">
          For the Analysis of an Argument section, you will need to analyze the
          reasoning behind a given argument and write a critique of that
          argument. You are not being asked to present your own views on the
          subject.
        </div>

        <div className="gmatPage-textComp">
          Two types of multiple-choice questions are used in the Quantitative
          section of the GMAT exam—Problem Solving and Data Sufficiency. The
          Quantitative section of the GMAT measures the ability to reason
          quantitatively, solve quantitative problems, and interpret graphic
          data. Problem-Solving and Data-Sufficiency questions are intermingled
          throughout the section. Both types of questions require knowledge of:
        </div>

        <div className="gmatPage-textComp">
          <ul>
            <li>Arithmetic,</li>
            <li>Elementary algebra, and</li>
            <li>Commonly known concepts of geometry.</li>
          </ul>
        </div>
        <div className="gmatPage-textComp">
          Three types of multiple-choice questions are used in the Verbal
          section of the GMAT® exam—Reading Comprehension, Critical Reasoning,
          and Sentence Correction. The Verbal section of the GMAT exam measures
          your ability to:
        </div>

        <div className="gmatPage-textComp">
          <ul>
            <li>read and comprehend written material,</li>
            <li>reason and evaluate arguments, and</li>
            <li>
              correct written material to conform to standard written English.
            </li>
          </ul>
        </div>

        <div className="gmatPage-textComp" style={{ fontWeight: "600" }}>
          Acceptable Document for Identification
        </div>

        <div className="gmatPage-textComp">
          Test takers in Nigeria will need a valid international passport as an
          identifying document on the day of the exam.
        </div>

        <div className="gmatPage-textComp" style={{ fontWeight: "600" }}>
          Test Duration
        </div>
        <div className="gmatPage-textComp">
          The GMAT test lasts for about four(4) hours, so candidates are advised
          to plan their test day properly. No other serious engagement should be
          fixed for that day.
        </div>
        <div className="gmatPage-textComp" style={{ fontWeight: "600" }}>
          Test Preparation
        </div>

        <div className="gmatPage-textComp" style={{ marginBottom: "100px" }}>
          Eight weeks of good preparation is recommended for the GMAT
          examination. For answers to other questions regarding the GMAT test in
          Nigeria, please visit the GMAT FAQ page
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GmatPage;
