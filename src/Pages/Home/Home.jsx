import React from "react";
import HeroBanner from "./sections/HeroBanner";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <HeroBanner />
      <Featured />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
