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

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="homepage-carouselGene">
          <Carousel
            renderAnnounceSlideMessage={({ currentSlide, slideCount }) =>
              `Slide ${currentSlide + 1} of ${slideCount}`
            }
            // autoplay={true}
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
                  <h1>University Education in America and Canada</h1>
                </div>
                <div className="homepage-sliderabso2">
                  {" "}
                  We have the EXPERT for the BEST SCORES <br /> and SCHOLARSHIP
                  OPPORTUNITY
                </div>
                <div className="homepage-sliderabsobtn">REGISTER TODAY</div>
              </div>
            </div>

            <div className="homepage-slider">
              <img src={london} />
            </div>
            <div className="homepage-slider">
              <img src={havard} />
            </div>
            <div className="homepage-slider">
              <img src={defaultq} />
            </div>
            <div className="homepage-slider">
              <img src={chicago} />
            </div>
            <div className="homepage-slider">
              <img src={cambridge} />
            </div>
          </Carousel>
        </div>
        Homepage
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
