import React from "react";
import SectionIntro from "../../../Components/SectionIntro";

const Achievement = () => {
  return (
    <div className="w-full section h-full flex flex-col gap-y-10">
      <div className="">
        <SectionIntro
          title="our achievements"
          description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          hideButton={true}
        />
      </div>

      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-10 justify-between">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full border-[.5rem] border-white/5 hover:shadow-[1px_1px_6px_rgba(0,0,0.2)] hover:-translate-y-5 transition-all duration-200 cursor-pointer p-10 rounded-xl"
        >
          <h3 className="text-2xl font-semibold pb-5">3+ Years of Excellence</h3>
          <p className="text-xl font-medium text-white/70 normal-case">
            With over 3 years in the industry, we've amassed a wealth of knowledge and experience.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full border-[.5rem] border-white/5 hover:shadow-[1px_1px_6px_rgba(0,0,0.2)] hover:-translate-y-5 transition-all duration-200 cursor-pointer p-10 rounded-xl"
        >
          <h3 className="text-2xl font-semibold pb-5">happy clients </h3>
          <p className="text-xl font-medium text-white/70 normal-case">
            Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="w-full border-[.5rem] border-white/5 hover:shadow-[1px_1px_6px_rgba(0,0,0.2)] hover:-translate-y-5 transition-all duration-200 cursor-pointer p-10 rounded-xl"
        >
          <h3 className="text-2xl font-semibold pb-5">industrial recognition</h3>
          <p className="text-xl font-medium text-white/70 normal-case">
            We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
