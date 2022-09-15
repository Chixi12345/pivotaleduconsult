import React, { useState } from "react";

import "./leftNav.css";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const LeftNav = ({ open, openLogoutBtn, closeLogoutBtn, openLogoutPage }) => {
  const location = useLocation();

  const { pathname } = location;
  const navigate = useNavigate();

  const splitLocation = pathname.split("/");

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const inSide = (e) => {
    setShow(true);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const greLink = () => {
    navigate("/gre_page");
    showDropdown();
  };
  const gmatLink = () => {
    navigate("/gmat_page");
    showDropdown();
  };
  const pteLink = () => {
    navigate("/pte_page");
    showDropdown();
  };
  const toeflLink = () => {
    navigate("/toefl_page");
    showDropdown();
  };
  const ieltsLink = () => {
    navigate("/ielts_page");
    showDropdown();
  };

  return (
    <>
      <div
        open={open}
        style={{
          transform: `${open ? "translateX(0)" : "translateX(100%)"}`,
          transition: "transform 0.3s ease-in-out",
        }}
        className="sidemenu-family-cont"
      >
        <div className="top-navbar-rel">
          <div className="cont-main">
            <Link
              to="/"
              className={
                splitLocation[1] === ""
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              HOME
            </Link>

            <Link
              to="/about_us"
              className={
                splitLocation[1] === "about_us"
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              ABOUT US
            </Link>
            <Link
              to="/registration"
              className={
                splitLocation[1] === "registration"
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              REGISTRATION
            </Link>

            <div>
              <div
                // onMouseEnter={inSide}
                // onMouseLeave={hideDropdown}
                onClick={showDropdown}
                // show={show}
                className="leftNavbar-opt"
                style={{ display: "flex", flexDirection: "row" }}
              >
                EXAMS{" "}
                <div
                  className={
                    show === true ? "Faq-titleArrowRota" : "Faq-titleArrow "
                  }
                >
                  <FaAngleDown className="navbar-optMenuoptExamArr" />
                </div>
              </div>
              {show && (
                <div
                //   onMouseEnter={inSide}
                //   onMouseLeave={hideDropdown}
                >
                  <Link
                    to="/gre_page"
                    className={
                      splitLocation[1] === "gre_page"
                        ? "leftNavbar-opt-active"
                        : "leftNavbar-optExam"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    {/* <div
                    // onMouseEnter={showDropdown}
                    // onMouseLeave={hideDropdown}
                    // show={show}
                    onClick={() => {
                      greLink();
                    }}
                    className="leftNavbar-opt"
                    style={{ background: "#f7acb0", color: "#000" }}
                  > */}
                    GRE
                    {/* </div> */}
                  </Link>

                  <Link
                    to="/gmat_page"
                    className={
                      splitLocation[1] === "gmat_page"
                        ? "leftNavbar-opt-active"
                        : "leftNavbar-optExam"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    GMAT
                  </Link>
                  <Link
                    to="/pte_page"
                    className={
                      splitLocation[1] === "pte_page"
                        ? "leftNavbar-opt-active"
                        : "leftNavbar-optExam"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    PTE
                  </Link>

                  <Link
                    to="/toefl_page"
                    className={
                      splitLocation[1] === "toefl_page"
                        ? "leftNavbar-opt-active"
                        : "leftNavbar-optExam"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    TOEFL
                  </Link>
                  <Link
                    to="/ielts_page"
                    className={
                      splitLocation[1] === "ielts_page"
                        ? "leftNavbar-opt-active"
                        : "leftNavbar-optExam"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    IELTS
                  </Link>

                  <Link
                    to="/sat_page"
                    className={
                      splitLocation[1] === "sat_page"
                        ? "leftNavbar-opt-active"
                        : "leftNavbar-optExam"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    SAT 1 & 2
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/admission_page"
              className={
                splitLocation[1] === "admission_page"
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              ADMISSION PROCESS
            </Link>
            {/* <Link
              to="/training"
              className={
                splitLocation[1] === "training"
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              TRAINING CENTER
            </Link> */}

            <Link
              to="/contact_page"
              className={
                splitLocation[1] === "contact_page"
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none", marginBottom: "100px" }}
            >
              CONTACT US
            </Link>
            <div
              // to="/contact_page"
              // className={
              //   splitLocation[1] === "contact_page"
              //     ? "leftNavbar-opt-active"
              //     : "leftNavbar-opt"
              // }
              style={{ textDecoration: "none", paddingBottom: "300px" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
