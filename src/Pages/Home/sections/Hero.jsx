import React from "react";
import HeroImage from "/src/assets/Images/Home/Hero.png";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full flex items-start justify-between flex-wrap-reverse h-full md:flex-nowrap">
      <div className="relative md:flex-1 w-full h-full place-content-center px-9">
        <div className="flex items-start gap-y-10 flex-col py-20">
          <h1 className="text-5xl font-semibold normal-case leading-[3.5rem]">
            Discover Your Dream <br /> Property with estantien
          </h1>
          <p className="text-2xl text-white/70 normal-case">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>

          <div className="flex items-center flex-wrap md:flex-nowrap justify-between gap-5 md:w-1/3 w-full">
            <Link
              to="/about"
              className="w-full text-nowrap h-[5rem] md:h-[4.5rem] px-7 bg-black/20 border-white/5 hover:scale-95 rounded-xl border-2 flex items-center justify-center capitalize font-semibold"
            >
              <button className=" text-2xl capitalize">learn more</button>
            </Link>
            <Link
              to="/properties"
              className="w-full text-2xl text-nowrap h-[5rem] hover:bg-purple-900 md:h-[4.5rem] px-7 bg-purple-600 rounded-xl hover:scale-95 flex items-center justify-center capitalize font-semibold"
            >
              <button className="text-2xl capitalize">browse properties</button>
            </Link>
          </div>

          <div className="flex items-center justify-between text-center md:text-left gap-5 flex-wrap md:flex-nowrap w-full">
            <div className="flex items-center justify-between gap-5 w-full sm:flex-[2]">
              <div className="w-full flex flex-col gap-y-3 rounded-xl border-2 border-white/5 bg-white/5 py-4 px-5">
                <h4 className=" text-4xl font-bold">200+</h4>
                <p className="text-2xl text-white/70 font-medium text-nowrap">happy customers</p>
              </div>
              <div className="w-full flex flex-col gap-y-3 rounded-xl border-2 border-white/5 bg-white/5 py-4 px-5">
                <h4 className=" text-4xl font-bold">10k+</h4>
                <p className="text-2xl text-white/70 font-medium text-nowrap">properties for clients</p>
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-1 gap-y-3 rounded-xl border-2 border-white/5 bg-white/5 py-4 px-5">
              <h4 className=" text-4xl font-bold">16+</h4>
              <p className="text-2xl text-white/70 font-medium text-nowrap">years of experience</p>
            </div>
          </div>
        </div>

        <div className="absolute md:top-10 md:w-[120px] md:h-[120px] bg-black/30 rounded-full border border-white/10 w-[100px] h-[100px] p-2  md:-right-20 -top-28 right-[70%]">
          <div className="relative w-full h-full -rotate-45">
            <div className="absolute w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="text-xl font-medium fill-white">
                  <textPath href="#circle" startOffset="0%">
                    ✨ discover your dream property ✨
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/5 border border-white/10 p-5 rounded-full">
              <ArrowForward className="!text-5xl rotate-12" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex-1 w-full mt-10 mx-9 md:m-0 bg-hero bg-center bg-no-repeat bg-cover md:rounded-none rounded-xl bg-white/5">
        <div className="w-full h-[40rem] md:rounded-none px-10">
          <img src={HeroImage} alt="hero image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
