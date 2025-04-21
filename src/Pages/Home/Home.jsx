import React from "react";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import HeroBanner from "../../Components/HeroBanner";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <HeroBanner />
      <Featured />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
