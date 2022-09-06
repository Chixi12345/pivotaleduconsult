import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutUs-heading-text">About Pivotal EduConsult</div>
      <div className="aboutUs-heading-body">
        <p>
          Pivotal EduConsult is a registered company in Nigeria and a highly
          regarded educational consulting firm in Nigeria. In Pivotal
          EduConsult, we provide educational services for Nigerian students that
          have interest in studying abroad. Pivotal EduConsult is established to
          provide a better educational servicse to our growing clientele. The
          Director has years of experience in student recruitment and marketing.
          He has gained reputation through provision of credible, affordable and
          efficient services to clients across the country. Our priority as an
          organization is for our students to take advantage of scholarships for
          undergraduate and post graduate studies in America and Canada
          universities. Over the years, our students have excelled in SAT I&II,
          GRE, GMAT, TOEFL and IELTS through our in-depth training and constant
          practice. We take extra steps to make weak students become successful
          in all exams. We partner with recognized and accredited institutions
          to provide study options in Canada and America with full scholarships
          in all courses. We have trained professionals to provide the best
          services possible in order to guarantee our clients’ satisfaction.
          Pivotal EduConsult offers visa counseling to students who apply
          through the agency, placing emphasis on recruiting right to enhance a
          good visa chance. Students who apply through Pivotal EduConsult also
          gets professional counseling about the academic and social environment
          of their choice of place of study. A very high percentage of students
          who have applied through Pivotal EduConsult has maintained successful
          academic and social records in their institutions . For further
          information, visit our contact page to either reach us through phone
          call, whatsapp, e-mail or in person.
        </p>
      </div>
      <div className="aboutUs-MissionText">
        <div className="aboutUs-MissionEach">
          <div className="aboutUs-MissionEachHead">
            <h3>Our Mission</h3>
          </div>
          <div className="aboutUs-MissionEachBody">
            <p>
              Pivotal EduConsult will continue to offer Professional and best
              GMAT, GRE, TOEFL, SAT and IELTS training in Ogun State as part of
              its mission. To succeed, you’ll need to analyze information from a
              variety of sources, and develop strategies and make decisions
              based on that information. It’s called Integrated Reasoning and
              it’s something you do every day. Beginning on June 5, 2012, the
              GMAT exam will measure your ability to problem solving in this
              area.
            </p>
          </div>
        </div>

        <div className="aboutUs-MissionEach">
          <div className="aboutUs-MissionEachHead">
            <h3>Our Vision</h3>
          </div>
          <div className="aboutUs-MissionEachBody">
            <p>
              Our vision is to train as many willing Nigerian students as
              possible to attain full scholarship (abroad) to America and Canada
              High Schools, Universities, etc through SAT I&II, IELTS, TOEFL,
              GRE, GMAT, etc.; to help minimize if not solve the huge challenges
              of qualitative education in Nigeria educational system-using
              experienced instructors with vast knowledge of the aforementioned
              examinations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
