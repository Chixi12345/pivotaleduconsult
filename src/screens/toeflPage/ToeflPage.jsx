import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./toeflPage.css";

const ToeflPage = () => {
  return (
    <div>
      <Navbar />
      <div className="toeflPage-bodyGen">
        <div className="toeflPage-heading-text">
          Test Of English As A Foreign Language (TOEFL)
        </div>
        <div className="toeflPage-textComp">
          Test of English as a Foreign Language (TOEFL) is conducted to test the
          proficiency of international students (non-native English speakers
          like Nigerians) in the use of English Language for everyday academic
          purpose. It comprises of four sections namely:
        </div>

        <div className="toeflPage-textComp">
          <ul>
            <li>Reading</li>
            <li>Listening</li>
            <li>Speaking</li>
            <li>Writing</li>
          </ul>
        </div>

        <div className="toeflPage-textComp">
          The internet based TOEFL (ibt) is offered round the year and it is a
          major requirement for admission into universities in the United
          States, Canada, United Kingdom and other European countries. All
          students, irrespective of discipline or level of study is required to
          sit for the TOEFL exam. In MET Ltd, our preparatory classes for this
          exam runs throughout the year. Each stream runs for six weeks and
          students are free to choose which session they would prefer.
        </div>

        <div className="toeflPage-textComp" style={{ marginBottom: "100px" }}>
          <ul>
            <li>Morning Session – 11:00am – 1:00pm (Mon-Thurs)</li>
            <li>Afternoon Session- 3:00pm – 5:00pm (Mon-Thurs)</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ToeflPage;
