import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import {
  ContactPageCont,
  HomepageCont,
  AboutUsCont,
  AdmissionPageCont,
  GmatPageCont,
  GrePageCont,
  IeltsPageCont,
  PtePageCont,
  RegistrationPageCont,
  ToeflPageCont,
  TrainingCenterPageCont,
} from "./pages";

const RoutesE = () => {
  let routes = useRoutes([
    { path: "/contact_page", element: <ContactPageCont /> },
    { path: "/", element: <HomepageCont /> },
    { path: "/about_us", element: <AboutUsCont /> },
    { path: "/admission_page", element: <AdmissionPageCont /> },
    { path: "/gmat_page", element: <GmatPageCont /> },
    { path: "/gre_page", element: <GrePageCont /> },
    { path: "/ielts_page", element: <IeltsPageCont /> },
    { path: "/pte_page", element: <PtePageCont /> },
    { path: "/registration", element: <RegistrationPageCont /> },
    { path: "/toefl_page", element: <ToeflPageCont /> },
    { path: "/training", element: <TrainingCenterPageCont /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <RoutesE />
    </Router>
  );
};

export default AppWrapper;
