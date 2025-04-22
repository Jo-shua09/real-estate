import React from "react";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import HeroBanner from "../../Components/HeroBanner";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
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
  );
};

export default Home;
