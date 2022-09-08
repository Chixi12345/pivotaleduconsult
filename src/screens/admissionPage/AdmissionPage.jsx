import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./admissionPage.css";
import { useLocation } from "react-router-dom";

const AdmissionPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="maxWidthStyle ">
      <Navbar />
      <div className="admissionPage-bodyGen">
        <div className="admissionPage-heading-text">Admission Processing</div>
        <div className="admissionPage-textComp">
          At UTOPIA EDUCATIONAL CONSULT LTD, our worldwide network of associates
          and affiliates as well as the existence of a well staffed U.S.A office
          manned by one of our directors has made it possible for us to assist
          more than 2,000 Nigerian students in enrolling in more than 300
          schools in the United States of America and not less 40% of these
          students have received scholarships The visa enrollment in the
          American Embassy is now more hostile and students who have not
          travelled out of the country before are at disadvantage. Our services
          are designed to enable you overcome these disadvantages. High scores
          notwithstanding, students chances of getting admission into an
          American university as well as his or her chances of getting a visa
          might be destroyed due to poor knowledge and skills when it comes to
          application and admission processing. This is due to the fact that
          there are so many intricate processes involved in the processing of
          applications and admissions into American universities. This state of
          affairs is further aggravated by the deadlines which are scrupulously
          adhered to by American universities as well as the various financial
          implications of application and admission processing. Our team of
          counselors at UTOPIA EDUCATIONAL CONSULT LTD are head above shoulders
          of their peers when it comes to this crucial part of the quest for
          American education , they are experts at giving good advice and
          counseling when it comes to the choice of universities as well as
          courses. UTOPIA EDUCATIONAL CONSULT LTD’s team of experienced
          counselors guides you through the arcane and often unfamiliar terrain
          of American university admission process. Our high success rate can be
          attributed to our one on one relationship with the Admission Officers
          of the various universities we deal with. Over the years we have
          succeeded in developing a mutually benefiting relationship with many
          universities in the United States The Counseling Department also gives
          students the information they need to make good career decisions. At
          UTOPIA EDUCATIONAL CONSULT LTD, counseling is available for those with
          academic difficulties and others who desire test interpretation.
        </div>

        <div className="admissionPage-textComp">
          UTOPIA EDUCATIONAL CONSULT LTD counselors give special bits of advice
          to students on the following related matters:
        </div>

        <div className="admissionPage-textComp">
          <ul>
            <li>Test Requirements.</li>
            <li>Choice of school</li>
            <li>Admission Procedure/Admission processing.</li>
            <li>Career choice</li>
            <li>Academic Requirements/Selection criteria.</li>
            <li>Annual Expenses.</li>
            <li>Financial Aids/Scholarships.</li>
            <li>Room and Board etc.</li>
          </ul>
        </div>
        <div className="admissionPage-textComp">
          Our major concern is to advise students on how to make use of the
          available resources to get what they want. Career counseling begins
          with the student taking SAT. This is so because the educational system
          and admission process into the higher institution of learning in the
          United States begin with the SAT.
        </div>

        <div className="admissionPage-textComp">Courses</div>

        <div className="admissionPage-textCompFlex">
          <div className="admissionPage-textCompFlexA">
            <div className="admissionPage-textComp">
              {" "}
              <div className="admissionPage-textComp">A</div>
              <div>
                <ul>
                  <li>Accounting (ACCT)</li>
                  <li>Accounting Technology (ACTT)</li>
                  <li>Adolescent and Adult Education (ADED)</li>
                  <li>Aeronautics (AERN)</li>
                  <li>Aerospace Studies (ASTU)</li>
                  <li>Agribusiness (AGRI)</li>
                  <li>Allied Health Sciences (AHS)</li>
                  <li>American Sign Language (ASL)</li>
                  <li>Anthropology (ANTH)</li>
                  <li>Arabic (ARAB)</li>
                  <li>Architectural Studies (ARCS)</li>
                  <li>Architecture and Environmental Design (AED)</li>
                  <li>Architecture (ARCH)</li>
                  <li>Art (ART)</li>
                  <li>Art Education (ARTE)</li>
                  <li>Art History (ARTH)</li>
                  <li>Arts and Sciences (AS)</li>
                  <li>Art Studio Art (ARTS)</li>
                  <li>ASL English Interpreting (ASEI)</li>
                  <li>Athletic Training (ATTR)</li>
                  <li>Aviation Maintenance Technology (AMRT)</li>
                </ul>
              </div>
            </div>
            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">B</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Biological Sciences (BSCI)</li>
                  <li>Biomedical Sciences (BMS)</li>
                  <li>Biostatistics (BST)</li>
                  <li>Biotechnology (BTEC)</li>
                  <li>Business Administration (BAD)</li>
                  <li>Business Administration Interdisciplinary (BUS)</li>
                  <li>Business Management and Related Technologies (BMRT)</li>
                </ul>
              </div>
            </div>
            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">C</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Career and Community Studies (CCS)</li>
                  <li>Career and Technical Teacher Education (CTTE)</li>
                  <li>Chemical Physics (CPHY)</li>
                  <li>Chemistry (CHEM)</li>
                  <li>Chinese (CHIN)</li>
                  <li>Classics (CLAS)</li>
                  <li>Clinical Education (CLI)</li>
                  <li>Clinical Laboratory Sciences (CLS)</li>

                  <li>College of the Arts (CA)</li>
                  <li>Communication and Information (CCI)</li>
                  <li>Communication Studies (COMM)</li>
                  <li>Computer Information Systems (CIS)</li>
                  <li>Computer Science (CS)</li>
                  <li>Construction Management (CMGT)</li>
                  <li>Cooperative Education (COOP)</li>
                  <li>Counselor Education and Supervision (CES)</li>
                  <li>Courses A-Z</li>
                  <li>Criminology and Justice Studies (CRIM)</li>
                  <li>Cultural Foundations (CULT)</li>
                  <li>Curriculum and Instruction (CI)</li>
                </ul>
              </div>
            </div>
            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">D</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Dance (DAN)</li>
                  <li>Design Innovation (DI)</li>
                  <li>Digital Sciences (DSCI)</li>
                </ul>
              </div>
            </div>
            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">E</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Early Childhood Education (ECED)</li>
                  <li>Early Childhood Education Technology (ECET)</li>
                  <li>Economics (ECON)</li>
                  <li>Educational Leadership K-12 (EDLE)</li>
                  <li>Educational Psychology (EPSY)</li>
                  <li>Educational Studies (EDST)</li>
                  <li>Educational Technology (ETEC)</li>
                  <li>Education, Health and Human Services (EHHS)</li>
                  <li>
                    Electrical Engineering and Related Technologies (EERT)
                  </li>
                  <li>Engineering Technology (ENGT)</li>
                  <li>English (ENG)</li>
                  <li>Enology (ENOL)</li>
                  <li>Entrepreneurship (ENTR)</li>
                  <li>Environmental Health and Safety (EVHS)</li>
                  <li>Environmental Health Sciences (EHS)</li>
                  <li>Environmental Studies (ENVS)</li>
                  <li>Epidemiology (EPI)</li>
                  <li>Evaluation and Measurement (EVAL)</li>
                  <li>Executive Master Business Administration (EMBA)</li>
                  <li>Exercise Physiology (EXPH)</li>
                  <li>Exercise Science (EXSC)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">F</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Fashion Design and Merchandising (FDM)</li>
                  <li>Finance (FIN)</li>
                  <li>French (FR)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">G</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>General Medicine (GMD)</li>
                  <li>Geography (GEOG)</li>
                  <li>Geology (GEOL)</li>
                  <li>German (GER)</li>
                  <li>Gerontology (GERO)</li>
                  <li>Greek (GRE)</li>
                  <li>Green and Alternate Energy (GAE)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">H</div>

              <div className="admissionPage-textComp">
                <ul>
                  <li>Healthcare Design (HCD)</li>
                  <li>Health Education (HED)</li>
                  <li>Health Informatics (HI)</li>
                  <li>Health Policy and Management (HPM)</li>
                  <li>Hebrew (HEBR)</li>
                  <li>Heritage Languages (HRTG)</li>
                  <li>Higher Education (HIED)</li>
                  <li>History (HIST)</li>
                  <li>Honors (HONR)</li>
                  <li>Horticulture (HORT)</li>
                  <li>Hospitality Management (HM)</li>
                  <li>Human Development and Family Studies (HDFS)</li>
                  <li>Human Resource Management (HRM)</li>
                  <li>Human Services (HSRV)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="admissionPage-textCompFlexB">
            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">I</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Information Technology (IT)</li>
                  <li>Insurance Studies (INS)</li>
                  <li>Integrated Health Studies (IHS)</li>
                  <li>Integrated Life Sciences (ILS)</li>
                  <li>Integrative Studies (IGST)</li>
                  <li>Interior Design (ID)</li>
                  <li>Italian (ITAL)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">J</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Japanese (JAPN)</li>
                  <li>Jewish Studies (JWST)</li>
                  <li>Journalism and Mass Communication (JMC)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">K</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Kent Blossom Music (KBM)</li>
                  <li>Kent Blossom Theatre (KBT)</li>
                  <li>Knowledge Management (KM)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">L</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Landscape Architecture (LARC)</li>
                  <li>Latin (LAT)</li>
                  <li>
                    Lesbian, Gay, Bisexual, Transgender and Queer Studies (LGBT)
                  </li>
                  <li>Library and Information Science (LIS)</li>
                </ul>
              </div>
            </div>
            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">M</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Management and Information Systems (MIS)</li>
                  <li>Management (MGMT)</li>
                  <li>Managerial Marketing (MMTG)</li>
                  <li>Marketing (MKTG)</li>
                  <li>Mathematics (MATH)</li>
                  <li>Mechanical Engineering and Related Technology (MERT)</li>
                  <li>Middle Childhood Education (MCED)</li>
                  <li>Military Science (MSCI)</li>

                  <li>Modeling, Animation and Game Creation (MAGC)</li>
                  <li>Modern and Classical Language Studies (MCLS)</li>
                  <li>Music (MUS)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">N</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>National Student Exchange (NSE)</li>
                  <li>Neuroscience (NEUR)</li>
                  <li>Nursing (NURS)</li>
                  <li>Nursing Technology (NRST)</li>
                  <li>Nutrition (NUTR)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">O</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Occupational Therapy Assistant Technology (OCAT)</li>
                  <li>Office of Global Education (OGE)</li>
                  <li>Office Technology (OTEC)</li>
                </ul>
              </div>
            </div>
            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">P</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Pan-African Studies (PAS)</li>
                  <li>Paralegal Studies (PLST)</li>
                  <li>Peace and Conflict Studies (PACS)</li>
                  <li>Peace Officer Training Academy (POTA)</li>
                  <li>Philosophy (PHIL)</li>
                  <li>Physical Activity, Wellness and Sport (PWS)</li>
                  <li>Physical Education – Professional (PEP)</li>
                  <li>Physical Therapist Assisting Technology (PTST)</li>
                  <li>Physics (PHY)</li>
                  <li>Podiatric Biomechanics and Orthopedics (ORT)</li>
                  <li>Podiatric Medicine (PMD)</li>
                  <li>Podiatric Surgery (SUR)</li>
                  <li>Political Science (POL)</li>
                  <li>Preclinical Sciences (PCS)</li>
                  <li>Psychology (PSYC)</li>
                  <li>Public Administration (PADM)</li>
                  <li>Public Health (PH)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">R</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Radiologic and Imaging Science (RIS)</li>
                  <li>Radiologic Technology (RADT)</li>
                  <li>Real Estate and Related Technologies (RERT)</li>
                  <li>Recreation, Park and Tourism Management (RPTM)</li>
                  <li>Regional College (RC)</li>
                  <li>Rehabitation Counseling and Training (RHAB)</li>
                  <li>Religion (REL)</li>
                  <li>Respiratory Care (RSPC)</li>
                  <li>Respiratory Therapy Technology (RTT)</li>
                  <li>Russian (RUSS)</li>
                </ul>
              </div>
            </div>
            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">S</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>School Psychology (SPSY)</li>
                  <li>Social and Behavioral Sciences (SBS)</li>
                  <li>Sociology (SOC)</li>
                  <li>Spanish (SPAN)</li>
                  <li>Special Education (SPED)</li>
                  <li>Speech Pathology and Audiology (SPA)</li>
                  <li>Sport and Recreation Management (SRM)</li>
                  <li>Sports Administration (SPAD)</li>
                  <li>Summer Visual Communication Design (SVCD)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">T</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Technical and Applied Studies (TAS)</li>
                  <li>Technology (TECH)</li>
                  <li>Theatre (THEA)</li>
                  <li>Translation Studies (TRST)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">U</div>

              <div className="admissionPage-textComp">
                <ul>
                  <li>University College (UC)</li>
                  <li>University Libraries (LIB)</li>
                  <li>Urban Design (UD)</li>
                  <li>User Experience Design (UXD)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">V</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Veterinary Technology (VTEC)</li>
                  <li>Visual Communication Design (VCD)</li>
                  <li>Viticulture and Enology (VIN)</li>
                </ul>
              </div>
            </div>

            <div className="admissionPage-textComp">
              <div className="admissionPage-textComp">W</div>
              <div className="admissionPage-textComp">
                <ul>
                  <li>Women’s Studies (WMST)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdmissionPage;
