import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./homepage.css";
import Carousel from "nuka-carousel";
import cambridge from "../../assets/images/cambridge.jpg";
import chicago from "../../assets/images/chicago.jpg";
import defaultq from "../../assets/images/defaultq.jpg";
import download from "../../assets/images/download.jpg";
import havard from "../../assets/images/havard.jpg";
import london from "../../assets/images/london.jpg";
import ExamSection from "../../components/examSection/ExamSection";
import AdminSection from "../../components/adminSection/AdminSection";
import { FaWhatsapp } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="whatsappStickbody">
          <div className="whatsappStickActive"></div>
          <FaWhatsapp />
        </div>
        <div className="homepage-carouselGene">
          <Carousel
            renderAnnounceSlideMessage={({ currentSlide, slideCount }) =>
              `Slide ${currentSlide + 1} of ${slideCount}`
            }
            autoplay={true}
            // autoplayInterval={0.1}
            // autoplayReverse={true}
            enableKeyboardControls={true}
            dragging={true}
            // speed={1}
            swiping={true}
            // transitionMode={["scroll3d"]}
            easing="easeInOutElastic"
            speed={500}
            // autoplayReverse={true}
            // infiniteScroll={true}
            autoplayInterval={2000}
            wrapAround={true}
            // renderCenterLeftControls={({ previousSlide }) => (
            //   <button onClick={previousSlide}>Previous</button>
            // )}
            // renderCenterRightControls={({ nextSlide }) => (
            //   <button onClick={nextSlide}>Next</button>
            // )}
          >
            <div className="homepage-slider">
              <div className=" homepage-sliderbac">
                <img src={download} />
              </div>
              <div className="homepage-sliderabso">
                <div className="homepage-sliderabso1">
                  <h1>
                    University Education in <br />
                    <span>America</span> and <span>Canada</span>
                  </h1>
                </div>
                <div className="homepage-sliderabso2">
                  {" "}
                  <h3>
                    We have the EXPERT for the BEST SCORES <br /> and
                    SCHOLARSHIP OPPORTUNITY{" "}
                  </h3>
                </div>
                <div className="homepage-sliderabsobtn">
                  <h3>REGISTER TODAY</h3>
                </div>
              </div>
            </div>

            <div className="homepage-slider">
              <div className=" homepage-sliderbac">
                <img src={london} />
              </div>
              <div className="homepage-sliderabso">
                <div className="homepage-sliderabso1">
                  <h1>
                    University Education in <br />
                    <span>America</span> and <span>Canada</span>
                  </h1>
                </div>
                <div className="homepage-sliderabso2">
                  {" "}
                  <h3>
                    We have the EXPERT for the BEST SCORES <br /> and
                    SCHOLARSHIP OPPORTUNITY{" "}
                  </h3>
                </div>
                <div className="homepage-sliderabsobtn">
                  <h3>REGISTER TODAY</h3>
                </div>
              </div>
            </div>
            <div className="homepage-slider">
              <div className=" homepage-sliderbac">
                <img src={havard} />
              </div>
              <div className="homepage-sliderabso">
                <div className="homepage-sliderabso1">
                  <h1>
                    University Education in <br />
                    <span>America</span> and <span>Canada</span>
                  </h1>
                </div>
                <div className="homepage-sliderabso2">
                  {" "}
                  <h3>
                    We have the EXPERT for the BEST SCORES <br /> and
                    SCHOLARSHIP OPPORTUNITY{" "}
                  </h3>
                </div>
                <div className="homepage-sliderabsobtn">
                  <h3>REGISTER TODAY</h3>
                </div>
              </div>
            </div>
            <div className="homepage-slider">
              <div className=" homepage-sliderbac">
                <img src={defaultq} />
              </div>
              <div className="homepage-sliderabso">
                <div className="homepage-sliderabso1">
                  <h1>
                    University Education in <br />
                    <span>America</span> and <span>Canada</span>
                  </h1>
                </div>
                <div className="homepage-sliderabso2">
                  {" "}
                  <h3>
                    We have the EXPERT for the BEST SCORES <br /> and
                    SCHOLARSHIP OPPORTUNITY{" "}
                  </h3>
                </div>
                <div className="homepage-sliderabsobtn">
                  <h3>REGISTER TODAY</h3>
                </div>
              </div>
            </div>
            <div className="homepage-slider">
              <div className=" homepage-sliderbac">
                <img src={chicago} />
              </div>
              <div className="homepage-sliderabso">
                <div className="homepage-sliderabso1">
                  <h1>
                    University Education in <br />
                    <span>America</span> and <span>Canada</span>
                  </h1>
                </div>
                <div className="homepage-sliderabso2">
                  {" "}
                  <h3>
                    We have the EXPERT for the BEST SCORES <br /> and
                    SCHOLARSHIP OPPORTUNITY{" "}
                  </h3>
                </div>
                <div className="homepage-sliderabsobtn">
                  <h3>REGISTER TODAY</h3>
                </div>
              </div>
            </div>
            <div className="homepage-slider">
              <div className=" homepage-sliderbac">
                <img src={cambridge} />
              </div>
              <div className="homepage-sliderabso">
                <div className="homepage-sliderabso1">
                  <h1>
                    University Education in <br />
                    <span>America</span> and <span>Canada</span>
                  </h1>
                </div>
                <div className="homepage-sliderabso2">
                  {" "}
                  <h3>
                    We have the EXPERT for the BEST SCORES <br /> and
                    SCHOLARSHIP OPPORTUNITY{" "}
                  </h3>
                </div>
                <div className="homepage-sliderabsobtn">
                  <h3>REGISTER TODAY</h3>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="homepage-introFam">
          <div className="homepage-introFamHead">
            {" "}
            <h3>You Deserve Only The Best Training </h3>
          </div>

          <div className="homepage-introFamBody">
            {" "}
            <p>
              Pivotal EduConsult is Nigeria's foremost and highly reputable
              educational consulting institution. At Pivotal, we provide
              educational services for Nigerian students that desire to study
              abroad. Pivotal Edu Consult was established to provide better
              educational services for you. At the top of our leadership
              hierarchy is years of experience in studentship and scholarship
              processing and management.We Hold high our reputation of providing
              credible, affordable and efficient services to clients across the
              country.
            </p>
          </div>
          <div className="homepage-introFamBtn">
            <h4>LEARN MORE </h4>
          </div>
        </div>
      </div>

      <ExamSection />
      <AdminSection />
      <Footer />
    </div>
  );
};

export default Homepage;
