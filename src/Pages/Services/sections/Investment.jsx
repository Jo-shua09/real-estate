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
        <div className=""></div>
      </div>
    </div>
  );
};

export default Investment;
