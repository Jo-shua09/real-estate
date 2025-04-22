import React from "react";
import SectionIntro from "../../../Components/SectionIntro";

const OurOffice = () => {
  return (
    <div className="w-full section">
      <SectionIntro
        title="Discover Our Office Locations"
        description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
        hideButton={true}
      />

      <div className="w-full flex flex-col gap-5 mt-20">
        <div className="flex items-center gap-3 w-fit p-2 rounded-xl bg-white/5">
          <button className="bg-white/5 rounded-xl capitalize md:py-3  hover:scale-95 py-4 px-7 text-2xl font-semibold border-2 border-white/5">all</button>
          <button className="bg-white/5 rounded-xl capitalize md:py-3  hover:scale-95 py-4 px-7 text-2xl font-semibold border-2 border-white/5">
            regional
          </button>
          <button className="bg-white/5 rounded-xl capitalize md:py-3  hover:scale-95 py-4 px-7 text-2xl font-semibold border-2 border-white/5">
            international
          </button>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-10 w-full">
          <div className="md:flex-1 w-full rounded-xl border-2 border-white/5"></div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
