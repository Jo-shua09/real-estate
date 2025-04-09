import React from "react";
import Hero from "./sections/hero";
import HeroBanner from "./sections/HeroBanner";
import Featured from "./sections/Featured";
import Testimonials from "./sections/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <HeroBanner />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
