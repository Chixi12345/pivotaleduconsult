import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import VscTwitter from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import "./navbar.css";
import pivotalLogohd from "../../assets/icons/pivotalLogohd.png";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

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
    <div>
      <div className="navbar-infoFamFlex">
        <div className="navbar-infoNumber">
          CALL US: 08063828855, 08136964605
        </div>
        <div className="navbar-infoIconsFam">
          <div className="navbar-infoIconEach">
            <FaInstagram />
          </div>
          <div className="navbar-infoIconEach">
            <FaWhatsapp />
          </div>
          <div className="navbar-infoIconEach">
            <FaTwitter />
          </div>
          <div className="navbar-infoIconEach">
            <FaLinkedin />
          </div>

          <div className="navbar-infoIconEach">
            <FaFacebookSquare />
          </div>
        </div>
      </div>

      <div className="navbar-optMenuFam">
        <Link
          to="/"
          className="navbar-optMenulogo"
          style={{ textDecoration: "none" }}
        >
          <img src={pivotalLogohd} />
        </Link>

        <Link
          to="/"
          className={
            splitLocation[1] === "" ? "activeHeader" : "navbar-optMenuopt"
          }
          style={{ textDecoration: "none" }}
        >
          HOME
        </Link>
        <Link
          to="/about_us"
          className={
            splitLocation[1] === "about_us"
              ? "activeHeader"
              : "navbar-optMenuopt"
          }
          style={{ textDecoration: "none" }}
        >
          ABOUT US
        </Link>
        <div>
          <div
            // onMouseEnter={inSide}
            // onMouseLeave={hideDropdown}
            onClick={showDropdown}
            // show={show}
            className="navbar-optMenuopt navbar-optMenuoptExamm"
          >
            EXAMS <FaAngleDown className="navbar-optMenuoptExamArr" />
          </div>
          {show && (
            <div
              //   onMouseEnter={inSide}
              //   onMouseLeave={hideDropdown}
              className="navbar-ExamMenuFam"
            >
              <div
                // onMouseEnter={showDropdown}
                // onMouseLeave={hideDropdown}
                // show={show}
                onClick={() => {
                  greLink();
                }}
                className="navbar-ExamMenuOpt"
              >
                <p>GRE</p>
              </div>
              <div
                onClick={() => {
                  gmatLink();
                }}
                // onMouseEnter={showDropdown}
                // onMouseLeave={hideDropdown}
                className="navbar-ExamMenuOpt"
              >
                <p>GMAT</p>
              </div>
              <div
                onClick={() => {
                  pteLink();
                }}
                // onMouseEnter={showDropdown}
                // onMouseLeave={hideDropdown}
                className="navbar-ExamMenuOpt"
              >
                <p>PTE</p>
              </div>
              <div
                onClick={() => {
                  toeflLink();
                }}
                // onMouseEnter={showDropdown}
                // onMouseLeave={hideDropdown}
                className="navbar-ExamMenuOpt"
              >
                <p>TOEFL</p>
              </div>
              <div
                onClick={() => {
                  ieltsLink();
                }}
                // onMouseEnter={showDropdown}
                // onMouseLeave={hideDropdown}
                className="navbar-ExamMenuOpt"
              >
                <p>IELTS</p>
              </div>
            </div>
          )}
        </div>
        <Link
          to="/registration"
          className={
            splitLocation[1] === "registration"
              ? "activeHeader"
              : "navbar-optMenuopt"
          }
          style={{ textDecoration: "none" }}
        >
          REGISTRATION
        </Link>
        <Link
          to="/admission_page"
          className={
            splitLocation[1] === "admission_page"
              ? "activeHeader"
              : "navbar-optMenuopt"
          }
          style={{ textDecoration: "none" }}
        >
          ADMISSION PROCESS
        </Link>
        <Link
          to="/training"
          className={
            splitLocation[1] === "training"
              ? "activeHeader"
              : "navbar-optMenuopt"
          }
          style={{ textDecoration: "none" }}
        >
          TRAINING CENTER
        </Link>
        <Link
          to="/contact_page"
          className={
            splitLocation[1] === "contact_page"
              ? "activeHeader"
              : "navbar-optMenuopt"
          }
          style={{ textDecoration: "none" }}
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
