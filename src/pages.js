import React from "react";
import { ProtectedLayout } from "./protected";

import Homepage from "./screens/homepage/Homepage";
import AboutUs from "./screens/aboutUs/AboutUs";
import AdmissionPage from "./screens/admissionPage/AdmissionPage";
import ContactPage from "./screens/contactUsPage/ContactPage";
import GmatPage from "./screens/gmatPage/GmatPage";
import GrePage from "./screens/grePage/GrePage";
import IeltsPage from "./screens/ieltsPage/IeltsPage";
import PtePage from "./screens/ptePage/PtePage";
import RegistrationPage from "./screens/registrationPage/RegistrationPage";
import ToeflPage from "./screens/toeflPage/ToeflPage";
import TrainingCenterPage from "./screens/trainingCenterPage/TrainingCenterPage";

export const ContactPageCont = () => {
  return <ContactPage />;
};

export const HomepageCont = () => {
  return <Homepage />;
};
export const AboutUsCont = () => {
  return <AboutUs />;
};

export const AdmissionPageCont = () => {
  return <AdmissionPage />;
};

export const GmatPageCont = () => {
  return <GmatPage />;
};

export const GrePageCont = () => {
  return <GrePage />;
};

export const IeltsPageCont = () => {
  return <IeltsPage />;
};
export const PtePageCont = () => {
  return <PtePage />;
};
export const RegistrationPageCont = () => {
  return <RegistrationPage />;
};
export const ToeflPageCont = () => {
  return <ToeflPage />;
};

export const TrainingCenterPageCont = () => {
  return <TrainingCenterPage />;
};
