import React from "react";
import SectionIntro from "../../../Components/SectionIntro";

const Investment = () => {
  return (
    <div className="w-full h-full section flex items-center justify-between gap-7">
      <div className="flex flex-col gap-7 w-full flex-1">
        <SectionIntro
          title="Smart Investments, Informed Decisions"
          description="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
        />
        <div className="bg-hero p-10 rounded-xl bg-white/5 flex flex-col gap-y-6">
          <h3 className="text-3xl font-semibold">Unlock Your Investment Potential</h3>
          <p className="text-white/70 font-medium normal-case">
            Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
          </p>
          <button className="py-4  px-7 hover:scale-95 capitalize rounded-xl  md:hidden w-full h-[5rem] justify-center flex items-center font-semibold bg-black/35 text-2xl border-2 border-white/5">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Investment;
