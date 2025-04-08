import React from "react";
import Hero from "./sections/hero";
import HeroBanner from "./sections/HeroBanner";
import Featured from "./sections/Featured";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <HeroBanner />
      <Featured />
    </div>
  );
};

export default Home;
