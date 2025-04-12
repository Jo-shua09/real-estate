import React from "react";
import Abstract from "/src/assets/Images/General/Abstract.png";

const Values = () => {
  return (
    <div className="w-full h-full flex items-center flex-wrap md:flex-nowrap gap-x-20 justify-between gap-y-10 section">
      <div className="w-full md:flex-1">
        <img
          src={Abstract}
          alt="abstract image"
          className="w-fit h-fit object-cover"
        />
        <h1 className="text-5xl my-5 font-semibold">our value</h1>
        <p className="text-white/70 text-2xl normal-case font-medium mb-3">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>
      <div className="w-full md:flex-[2]"></div>
    </div>
  );
};

export default Values;
