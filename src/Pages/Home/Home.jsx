import React from "react";
import HeroBanner from "./sections/HeroBanner";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroBanner />
      <Featured />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
