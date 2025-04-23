import React from "react";
import AboutHero from "./sections/AboutHero";
import Values from "./sections/Values";
import Achievement from "./sections/Achievement";
import Navigate from "./sections/Navigate";
import Team from "./sections/Team";
import Clients from "./sections/Clients";
import { useState, useEffect } from "react";
import Loader from "../../Components/Loader";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        handleLoad();
      }, 500);
    } else {
      window.addEventListener("load", () => {
        setTimeout(() => {
          handleLoad();
        }, 500);
      });
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={`overflow-hidden ${isLoading ? "opacity-0" : ""}`}>
        <div data-aos="fade-down">
          <AboutHero />
        </div>
        <div data-aos="fade-up">
          <Values />
        </div>
        <div data-aos="fade-right">
          <Achievement />
        </div>
        <div data-aos="fade-left">
          <Navigate />
        </div>
        <div data-aos="zoom-in">
          <Team />
        </div>
        <div data-aos="fade-up">
          <Clients />
        </div>
      </div>
    </>
  );
};

export default About;
