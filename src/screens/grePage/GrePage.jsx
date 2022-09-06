import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./grePage.css";

const GrePage = () => {
  return (
    <div>
      <Navbar />
      <div className="grePage-bodyGen">
        <div className="grePage-heading-text">
          GRADUATE RECORD EXAMINATION (GRE)
        </div>
        <div className="grePage-textComp">
          The GRE Computer Based Test (CBT) is required by graduate and
          professional schools, as it is considered a crucial
          prerequisite/component for admission to a graduate program. Applicants
          for graduate school courses are usually required to submit the GRE
          test results together with other undergraduate records as part of the
          application/admission process. The test simply examines your
          analytical and critical reasoning skills. These are skills that have
          been established to contribute to successful achievement in a graduate
          program. The examination does not test prior knowledge of data or
          facts specific to any field of study.
        </div>
        <div className="grePage-textComp">
          The computer-based GRE contains three distinct sections with various
          types of questions:
        </div>
        <div className="grePage-textComp">
          Analytical Writing Assessment: One 30-minute “Analyze an Issue” task,
          and one 30-minute “Analyze an Argument” task.
        </div>
        <div className="grePage-textComp">
          Quantitative Reasoning: Two 20-question sections containing
          arithmetic, algebra, geometry, quantitative comparisons, and data
          interpretation questions. Average time for each section is 35minutes.
          Verbal Reasoning: Two 20-question sections containing
          analogies/synonyms, sentence completions, and comprehension reading
          questions.
        </div>
        <div className="grePage-textComp">
          Prospective graduate and business school applicants from all around
          the world take the GRE revised General Test. Applicants usually come
          from different educational and cultural backgrounds and the GRE
          revised General Test provides a common measure for comparing
          candidates’ qualifications.
        </div>

        <div className="grePage-textComp">
          GRE scores are used by admissions or fellowship panels to supplement
          your undergraduate records, recommendation letters and other
          qualifications for graduate-level study. Here’s a look at content
          covered in the three test sections — Verbal Reasoning, Quantitative
          Reasoning and Analytical Writing.
        </div>

        <div className="grePage-textComp">
          Verbal Reasoning The Verbal Reasoning section measures your ability
          to:
        </div>

        <div className="grePage-textComp">
          <ul>
            <li>
              analyze and draw conclusions from discourse; reason from
              incomplete data; identify author’s assumptions and/or perspective;
              understand multiple levels of meaning, such as literal, figurative
              and author’s intent
            </li>
            <li>
              select important points; distinguish major from minor or relevant
              points; summarize text; understand the structure of a text
            </li>
            <li>
              understand the meanings of words, sentences and entire texts;
              understand relationships among words and among concepts
            </li>
          </ul>
        </div>
        <div className="grePage-textComp">
          Featuring new types of questions, the Verbal Reasoning section
          measures your ability to understand what you read and how you apply
          your reasoning skills.
        </div>

        <div className="grePage-textComp">
          Quantitative Reasoning The Quantitative Reasoning section measures
          your ability to:
        </div>

        <div className="grePage-textComp">
          <ul>
            <li>understand quantitative information</li>
            <li>interpret and analyze quantitative information</li>
            <li>solve problems using mathematical models</li>
            <li>
              apply basic mathematical skills and elementary mathematical
              concepts of arithmetic, algebra, geometry, probability and
              statistics
            </li>
          </ul>
        </div>

        <div className="grePage-textComp">
          With increased emphasis on data interpretation and real-life
          scenarios, this section has new types of questions that require you to
          show your quantitative reasoning ability. To reduce the emphasis on
          computation, the computer-based test includes an on-screen calculator.
          And, if you are taking the paper-based test, a calculator will be
          provided at the test center. Analytical Writing The Analytical Writing
          section measures your ability to:
        </div>

        <div className="grePage-textComp">
          <ul>
            <li>articulate complex ideas clearly and effectively</li>
            <li>support ideas with relevant reasons and examples</li>
            <li>examine claims and accompanying evidence</li>
            <li>sustain a well-focused, coherent discussion</li>
            <li>control the elements of standard written English</li>
          </ul>
        </div>

        <div className="grePage-textComp">
          The Analytical Writing section requires you to provide focused
          responses based on the tasks presented, so you can accurately
          demonstrate your skill in directly responding to a task.
        </div>

        <div className="grePage-textComp">
          GRE test takers in Nigeria will need an international passport as an
          of identifying document on the examination day.
        </div>
        <div className="grePage-textComp" style={{ marginBottom: "100px" }}>
          We recommend that prospective GRE test takers should prepare for at
          least eight(8) weeks before sitting for the test. This will help them
          get familiar with the examination content and ensure proper time
          management.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GrePage;
