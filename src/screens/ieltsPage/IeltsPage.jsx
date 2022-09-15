import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./ieltsPage.css";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const IeltsPage = () => {
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
        <div className="ieltsPage-bodyGen">
          <div className="ieltsPage-heading-text">
            International English Language Testing System (IELTS)
          </div>
          <div className="ieltsPage-textComp">
            IELTS is the International English Language Testing System which
            tests English proficiency across the globe. It was established in
            1989 and is accepted by more than 7,000 organisations worldwide
            which include universities, immigration departments, government
            agencies, professional bodies and multinational companies.
          </div>

          <div className="ieltsPage-textComp">
            IELTS is jointly owned by British Council, IDP: IELTS Australia and
            the University of Cambridge ESOL Examinations (Cambridge ESOL) and
            offered through over 800 test centres and locations in over 130
            countries. IELTS has two versions – Academic and General Training.
            The Academic test is for those who want to study at a tertiary level
            in an English-speaking country. The General Training test is for
            those who want to do work experience or training programs, secondary
            school or migrate to an English-speaking country. All candidates
            take the same Listening and Speaking tests but different Reading and
            Writing tests. As a student, you will take the academic version of
            the exam. Just like the TOEFL, IELTS has four sections:
          </div>

          <div className="ieltsPage-textComp">
            <ul>
              <li>Listening (30 minutes)</li>
              <li>Reading (60 minutes)</li>
              <li>Writing (60 minutes)</li>
              <li>Speaking (11–14 minutes)</li>
            </ul>
          </div>
          <div className="ieltsPage-textComp">
            The total test time is 2 hours and 45 minutes. The Listening,
            Reading and Writing tests are done in one sitting. The Speaking test
            may be on the same day or up to seven days before or after the other
            tests.
          </div>
          <div className="ieltsPage-textComp" style={{ fontWeight: "600" }}>
            LISTENING
          </div>
          <div className="ieltsPage-textComp">
            The module comprises four sections. Each section begins with a short
            introduction telling the candidates about the situation and the
            speakers. Then they have some time to look through questions. The
            first three sections have a break in the middle allowing candidates
            to look at the remaining questions. Each section is heard only once.
          </div>
          <div className="ieltsPage-textComp" style={{ fontWeight: "600" }}>
            READING
          </div>
          <div className="ieltsPage-textComp">
            In the academic module the reading test comprises three sections,
            with 3 texts normally followed by 13 or 14 questions for a total of
            40 questions overall. The General test also has 3 sections. However
            the texts are shorter, so there can be up to 5 texts to read.
          </div>
          <div className="ieltsPage-textComp" style={{ fontWeight: "600" }}>
            WRITING
          </div>
          <div className="ieltsPage-textComp">
            In the Academic module, there are two tasks: in Task 1 candidates
            describe a diagram, graph, process or chart, and in Task 2 they
            respond to an argument. Task 1 is expected to be about 150 words in
            length while task 2 is 250 words. The writing general test also has
            two sections(tasks) but the point of difference is in the task 1.
            The general writing task 1 requires test takers to write a letter
            describing a situation, evaluating or complaining about an issue.
            The timing and numbers of words are required
          </div>
          <div className="ieltsPage-textComp" style={{ fontWeight: "600" }}>
            SPEAKING
          </div>
          <div className="ieltsPage-textComp" style={{ marginBottom: "100px" }}>
            The speaking test contains three sections. The first section takes
            the form of an interview during which candidates may be asked about
            their hobbies, interests, reasons for taking IELTS exam as well as
            other general topics such as clothing, free time, computers and the
            internet or family. In the second section candidates are given a
            topic card and then have one minute to prepare after which they must
            speak about the given topic. The third section involves a discussion
            between the examiner and the candidate, generally on questions
            relating to the theme which they have already spoken about in part
            2. This last section is more abstract, and is usually considered the
            most difficult.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IeltsPage;
