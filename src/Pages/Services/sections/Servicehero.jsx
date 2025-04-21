import React from "react";
import HeroBanner from "../../../Components/HeroBanner";

const Servicehero = ({ description, title }) => {
  return (
    <div className="w-full h-full">
      <div className="w-full px-[2.5rem] h-full py-32 bg-gradient-to-br from-white/5 to-black">
        <h1 className="text-4xl font-semibold"> {title}</h1>
        <p className="text-2xl md:w-[80%] text-white/70 normal-case font-normal my-5">{description}</p>
      </div>
      <HeroBanner />
    </div>
  );
};

export default Servicehero;
