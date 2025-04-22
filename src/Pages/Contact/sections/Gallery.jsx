import React from "react";
import SectionIntro from "../../../Components/SectionIntro";
import gallery1 from "/src/assets/Images/Contact/gallery1.jpg";
import gallery2 from "/src/assets/Images/Contact/gallery2.jpg";
import gallery3 from "/src/assets/Images/Contact/gallery3.jpg";
import gallery4 from "/src/assets/Images/Contact/gallery4.jpg";
import gallery5 from "/src/assets/Images/Contact/gallery5.jpg";

const Gallery = () => {
  return (
    <div className="w-full section mt-10">
      <div className="bg-hero bg-white/5 md:p-20 p-10 rounded-xl">
        <div className="grid-cols-2 grid items-center justify-center gap-7">
          <img src={gallery1} alt="gallery image" className="w-full md:h-full h-[12rem] object-cover rounded-xl" />
          <img src={gallery2} alt="gallery image" className="w-full md:h-full h-[12rem] object-cover rounded-xl" />
          <img src={gallery3} alt="gallery image" className="w-full md:h-full h-[12rem] object-cover rounded-xl" />
          <div className="grid grid-cols-2 items-center gap-x-3 w-full">
            <img src={gallery4} alt="gallery image" className="w-full md:h-full h-[12rem] object-cover rounded-xl" />
            <img src={gallery2} alt="gallery image" className="w-full md:h-full h-[12rem] object-cover rounded-xl" />
          </div>
        </div>

        <div className="flex items-center flex-wrap md:flex-nowrap mt-3 md:mt-7">
          <div className="w-full py-10 md:flex-1">
            <SectionIntro
              title="Explore Estatein's World"
              description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
              hideButton={true}
            />
          </div>
          <div className="md:flex-1 w-full">
            <img src={gallery5} alt="gallery image" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
