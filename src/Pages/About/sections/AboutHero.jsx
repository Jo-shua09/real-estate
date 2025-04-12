import React from "react";
import AboutImage from "/src/assets/Images/About/about-hero.png";
import Abstract from "/src/assets/Images/General/Abstract.png";

const AboutHero = () => {
  return (
    <div className="w-full h-full flex items-center flex-wrap-reverse md:flex-nowrap gap-x-20 justify-between gap-y-10 section-page">
      <div className="md:flex-1 w-full">
        <img
          src={Abstract}
          alt="abstract image"
          className="w-fit h-fit object-cover"
        />
        <h1 className="text-5xl my-5 font-semibold">our journey</h1>
        <p className="text-white/70 text-2xl normal-case font-medium mb-3">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary. Over the years, we've expanded
          our reach, forged valuable partnerships, and gained the trust of
          countless clients.
        </p>

        <div className="flex items-center justify-between text-center md:text-left gap-5 flex-wrap md:flex-nowrap w-full mt-10">
          <div className="flex items-center justify-between gap-5 w-full sm:flex-[2]">
            <div className="w-full flex flex-col gap-y-3 rounded-xl border-2 border-white/5 bg-white/5 py-4 px-5">
              <h4 className=" text-4xl font-bold">200+</h4>
              <p className="text-2xl text-white/70 font-medium text-nowrap">
                happy customers
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-3 rounded-xl border-2 border-white/5 bg-white/5 py-4 px-5">
              <h4 className=" text-4xl font-bold">10k+</h4>
              <p className="text-2xl text-white/70 font-medium text-nowrap">
                properties for clients
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-1 gap-y-3 rounded-xl border-2 border-white/5 bg-white/5 py-4 px-5">
            <h4 className=" text-4xl font-bold">16+</h4>
            <p className="text-2xl text-white/70 font-medium text-nowrap">
              years of experience
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex-1 w-full mt-5 md:m-0 bg-hero bg-no-repeat md:rounded-none !rounded-xl border-2 border-white/5">
        <div className="w-full h-[40rem] md:rounded-none rounded-xl">
          <img
            src={AboutImage}
            alt="hero image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
