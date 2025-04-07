import React from "react";
import HeroImage from "/src/assets/images/home/Hero.png";

const Hero = () => {
  return (
    <div className="w-full flex items-start justify-between flex-wrap-reverse md:flex-nowrap ">
      <div className="relative md:flex-1 w-full h-[52rem] place-content-center bg-black/30 px-12">
        <div className="flex items-start gap-y-10 flex-col py-20">
          <h1 className="text-5xl font-semibold normal-case">
            Discover Your Dream <br /> Property with Estatein
          </h1>
          <p className="text-2xl text-white/70 normal-case">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          <div className="flex items-center flex-wrap md:flex-nowrap justify-between gap-5 md:w-1/3 w-full">
            <button className="w-full text-2xl text-nowrap h-[5rem] md:h-[4.5rem] px-7 bg-black/20 border-gray-800 hover:scale-95 rounded-lg border flex items-center justify-center capitalize font-semibold">
              learn more
            </button>
            <button className="w-full text-2xl text-nowrap h-[5rem] md:h-[4.5rem] px-7 bg-purple-600 rounded-lg hover:scale-95 flex items-center justify-center capitalize font-semibold">
              browse properties
            </button>
          </div>

          <div className="flex items-center justify-between gap-5 flex-wrap md:flex-nowrap w-full">
            <div className="flex items-center justify-between gap-5 w-full sm:flex-[2]">
              <div className="w-full flex flex-col gap-y-3 rounded-xl border border-gray-800 bg-black/10 py-4 px-5">
                <h4 className=" text-4xl font-bold">200+</h4>
                <p className="text-2xl text-white/70 font-medium text-nowrap">
                  happy customers
                </p>
              </div>
              <div className="w-full flex flex-col gap-y-3 rounded-xl border border-gray-800 bg-black/10 py-4 px-5">
                <h4 className=" text-4xl font-bold">10k+</h4>
                <p className="text-2xl text-white/70 font-medium text-nowrap">
                  properties for charts
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-1 gap-y-3 rounded-xl border border-gray-800 bg-black/10 py-4 px-5">
              <h4 className=" text-4xl font-bold">16+</h4>
              <p className="text-2xl text-white/70 font-medium text-nowrap">
                years of experience
              </p>
            </div>
          </div>
        </div>

        <div className=""></div>
      </div>

      <div className="md:flex-1 w-full bg-hero bg-cover bg-no-repeat bg-center">
        <div className="w-full h-[52rem]">
          <img
            src={HeroImage}
            alt="hero image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
