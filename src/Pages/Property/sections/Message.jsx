import React from "react";
import SectionIntro from "../../../Components/SectionIntro";

const Message = () => {
  return (
    <div className="w-full section">
      <SectionIntro
        title="let's make it happen"
        description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        hideButton={true}
      />
      <div className="w-full border-2 border-white/5 rounded-xl p-10 mt-10"></div>
    </div>
  );
};

export default Message;
