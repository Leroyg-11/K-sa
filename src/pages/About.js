import React from "react";
import AboutGrid from "../components/AboutGrid";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="bannerAbout"></div>
      <AboutGrid />
    </div>
  );
};

export default About;
