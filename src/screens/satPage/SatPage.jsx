import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./satPage.css";
import { useLocation } from "react-router-dom";

const SatPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="maxWidthStyle ">
      <Navbar />
      <div className="ieltsPage-bodyGen">
        <div className="ieltsPage-heading-text">SAT 1 & 2 </div>
        <div className="ieltsPage-textComp">
          The SAT exam (Scholastic Aptitude Test) is a recognized university
          admission test in the USA The test lets you show universities what you
          know and how well you can apply that knowledge.
        </div>

        <div className="ieltsPage-textComp">
          In January 2021, the College Board announced that, effective
          immediately, no further SAT Subject Tests will be offered in the
          United States. SAT Subject Tests (once known as SAT 2s) ended
          internationally in June 2021. It is now no longer possible to take SAT
          Subject Tests. Many students were understandably confused about why
          this announcement happened midyear and what this means for college
          applications going forward.
        </div>

        <div className="ieltsPage-textComp">
          As I touched on above, these are simply out-of-date monikers: the SAT
          I is now known as just as the SAT and the SAT II is more descriptively
          referred to as the SAT Subject Tests. Colleges sometimes still refer
          to the tests as the SAT I and SAT II, so don't worry if you see those
          terms. The SAT started out as a military IQ test and was administered
          as a college admissions assessment for the first time in 1926. Since
          then, it's undergone a series of changes to make it less focused on
          innate ability and more on testing concepts and skills students learn
          in school. It's weathered a few controversies, but it's still
          considered a decent predictor of how students will do in college.
        </div>
        <div className="ieltsPage-textComp">
          The SAT Subject Tests are almost as old as the SAT proper. Officially
          called Scholarship Tests but known colloquially as the Achievement
          Tests, the Subject Tests started in 1937 and were basically the same
          thing they are now: one-hour tests on specific subjects, like biology
          and world history.
        </div>
        <div className="ieltsPage-textComp" style={{ fontWeight: "600" }}>
          What’s the Difference Between the SAT 1 and the SAT 2?
        </div>
        <div className="ieltsPage-textComp">
          Originally, the SAT I was meant to test aptitude and the SAT II was
          meant to test achievement. That is to say, one tested what you were
          capable of, and the other tested what you knew. But when the College
          Board moved away from the idea of the SAT I testing innate ability,
          they reframed it as a reasoning test, making the difference between
          the two SATs less well defined. With changes in 2016, the SAT I (now
          just the SAT) is more focused than ever on testing knowledge rather
          than logic. At this point, I'd say that the SAT tests general
          knowledge and the SAT Subject Tests assess topical knowledge.
        </div>
        <div className="ieltsPage-textComp" style={{ fontWeight: "600" }}>
          How to Determine Whether You Need to Take the SAT, the SAT Subject
          Tests, or Both
        </div>
        <div className="ieltsPage-textComp">
          A good rule of thumb is that you'll almost certainly have to take the
          SAT I (or the ACT), but you'll probably only need to take the SAT II
          if you're applying to highly selective colleges. Nonetheless, you
          should check the testing requirements for each school you're applying
          to since they can differ quite a bit. The majority of colleges have
          one of three basic policies on the SAT Subject Tests. Let's go through
          them one at a time.
        </div>
        <div className="ieltsPage-textComp" style={{ fontWeight: "600" }}>
          Policy 1: They Only Ask For the SAT (or ACT)
        </div>
        <div className="ieltsPage-textComp">
          Most schools, including the major state universities, don't require
          applicants to submit Subject Test scores. However, some colleges will
          consider SAT II scores, so they can be a helpful way to show your
          mastery of a certain subject area (as long as you do well).
        </div>
        <div className="ieltsPage-textComp" style={{ fontWeight: "600" }}>
          Policy 2: They Ask For the SAT (or ACT) and SAT Subject Tests
        </div>
        <div className="ieltsPage-textComp">
          A handful of very selective schools, including Harvard and Rice,
          require applicants to submit scores from both the SAT I and between
          one and three (usually two) SAT II tests. Some colleges have more
          specific guidelines regarding which Subject Tests you need to take.
          For example, MIT requires one Math SAT II and one Science SAT II.
          Other schools—including McGill, Tufts, and Duke—will waive the Subject
          Tests requirement if you submit ACT scores. These schools will still
          look at SAT Subject Test scores if you send them, however.
        </div>

        <div className="ieltsPage-textComp" style={{ fontWeight: "600" }}>
          Policy 3: They Ask For the SAT or SAT Subject Tests
        </div>
        <div className="ieltsPage-textComp" style={{ marginBottom: "100px" }}>
          A growing subset of schools have adopted a test-flexible policy, which
          means they allow students to choose which scores they'd like to submit
          from a number of different tests. Examples of schools that allow
          students to submit SAT II results in place of SAT I or ACT scores
          include NYU, Colorado College, and Middlebury.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SatPage;
