import React from "react";
import AboutHero from "./sections/AboutHero";
import Values from "./sections/Values";
import Achievement from "./sections/Achievement";
import Navigate from "./sections/Navigate";
import Team from "./sections/Team";
import Clients from "./sections/Clients";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutHero />
      <Values />
      <Achievement />
      <Navigate />
      <Team />
      <Clients />
    </div>
  );
};

export default About;
