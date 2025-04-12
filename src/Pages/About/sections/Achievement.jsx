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
      <div className=""></div>
    </div>
  );
};

export default Achievement;
