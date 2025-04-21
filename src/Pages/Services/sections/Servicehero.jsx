import React from "react";
import HeroBanner from "../../../Components/HeroBanner";

const Servicehero = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full px-[2.5rem] h-full py-32 bg-gradient-to-br from-white/5 to-black">
        <h1 className="text-4xl font-semibold"> Elevate Your Real Estate Experience</h1>
        <p className="text-2xl md:w-[80%] text-white/70 normal-case font-normal my-5">
          Welcome to Estatien, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to
          your unique needs and dreams.
        </p>
      </div>
      <HeroBanner />
    </div>
  );
};

export default Servicehero;
