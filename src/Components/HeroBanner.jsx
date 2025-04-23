import { Apartment, ArrowForward, HouseSidingTwoTone, Payments, WbSunny } from "@mui/icons-material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full section-page md:!p-0">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 m-auto justify-between items-center gap-x-3 gap-y-5 border-[.5rem] border-white/5 rounded-xl p-2">
        <div data-aos="fade-up" data-aos-delay="100" className="rounded-xl w-full relative bg-white/5 h-[15rem] py-10 text-center gap-y-4">
          <div className="border-t border-b rounded-full p-4 w-fit m-auto h-fit border-purple-600">
            <HouseSidingTwoTone className="border-t border-b rounded-full p-2 border-purple-600 !text-7xl text-purple-600" />
          </div>
          <p className="text-2xl font-medium my-5 text-white/70">find your dream house</p>
          <ArrowForward className="-rotate-45 absolute top-4 right-4 !text-5xl text-white/50" />
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="rounded-xl w-full relative bg-white/5 h-[15rem] py-10 text-center gap-y-4">
          <div className="border-t border-b rounded-full p-4 w-fit m-auto h-fit border-purple-600">
            <Payments className="border-t border-b rounded-full p-2 border-purple-600 !text-7xl text-purple-600" />
          </div>
          <p className="text-2xl font-medium my-5 text-white/70">unlock property value</p>
          <ArrowForward className="-rotate-45 absolute top-4 right-4 !text-5xl text-white/50" />
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="rounded-xl w-full relative bg-white/5 h-[15rem] py-10 text-center gap-y-4">
          <div className="border-t border-b rounded-full p-4 w-fit m-auto h-fit border-purple-600">
            <Apartment className="border-t border-b rounded-full p-2 border-purple-600 !text-7xl text-purple-600" />
          </div>
          <p className="text-2xl font-medium my-5 text-white/70">effortless property management</p>
          <ArrowForward className="-rotate-45 absolute top-4 right-4 !text-5xl text-white/50" />
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="rounded-xl w-full relative bg-white/5 h-[15rem] py-10 text-center gap-y-4">
          <div className="border-t border-b rounded-full p-4 w-fit m-auto h-fit border-purple-600">
            <WbSunny className="border-t border-b rounded-full p-2 border-purple-600 !text-7xl text-purple-600" />
          </div>
          <p className="text-2xl font-medium my-5 text-white/70">smart investment, informed decisions</p>
          <ArrowForward className="-rotate-45 absolute top-4 right-4 !text-5xl text-white/50" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
