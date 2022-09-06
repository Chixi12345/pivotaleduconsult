import React from "react";
import "./examSection.css";

const ExamSection = () => {
  return (
    <div className="examProfContFamGenn">
      <div className="examProfContHead">
        <h2>Exams Training/Registration</h2>
      </div>

      <div className="examProfContFamm">
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
          <div className="examProfContEach-btn">
            <h4>LEARN MORE</h4>
          </div>
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
          <div className="examProfContEach-btn">
            <h4>LEARN MORE</h4>
          </div>
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
          <div className="examProfContEach-btn">
            <h4>LEARN MORE</h4>
          </div>
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
          <div className="examProfContEach-btn">
            <h4>LEARN MORE</h4>
          </div>
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
          <div className="examProfContEach-btn">
            <h4>LEARN MORE</h4>
          </div>
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
          <div className="examProfContEach-btn">
            <h4>LEARN MORE</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSection;
