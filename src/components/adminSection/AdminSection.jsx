import React from "react";
import "./adminSection.css";
import { Link } from "react-router-dom";

const AdminSection = () => {
  return (
    <div className="admissionProcess-FamGen">
      <div className="admissionProcess-FamHead">
        {" "}
        <h2>Admission Processing</h2>
      </div>
      <div className="admissionProcess-Famcont">
        {" "}
        <p>
          At Utopia Educational Consult Ltd, our world wide network of
          associates and affiliates as well as the existence of a well staffed
          U.S.A office manned by one of our directors has made it possible for
          us to assist more than 2,000 Nigerian students in enrolling in more
          than 300 schools in the United States of America and not less 40% of
          these students have received scholarships The visa enrollment in the
          American Embassy is now more hostile and students who have not
          travelled out of the country before are at disadvantage. Our services
          are designed to enable you overcome these disadvantages.{" "}
        </p>
      </div>

      <Link
        to="/admission_page"
        style={{ textDecoration: "none" }}
        className="admissionProcess-FamBtn"
      >
        <h4>LEARN MORE</h4>
      </Link>
    </div>
  );
};

export default AdminSection;
