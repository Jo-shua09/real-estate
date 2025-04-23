import React from "react";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import HeroBanner from "../../Components/HeroBanner";
import { useState, useEffect } from "react";
import Loader from "../../Components/Loader";

const Home = () => {
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
      <div className={`overflow-x-hidden ${isLoading ? "hidden" : ""}`}>
        <div data-aos="fade-down">
          <Hero />
        </div>
        <div data-aos="fade-up">
          <HeroBanner />
        </div>
        <div data-aos="fade-right">
          <Featured />
        </div>
        <div data-aos="fade-left">
          <Testimonials />
        </div>
        <div data-aos="zoom-in">
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default Home;
