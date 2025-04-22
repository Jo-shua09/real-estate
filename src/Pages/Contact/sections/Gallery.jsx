import React from "react";
import SectionIntro from "../../../Components/SectionIntro";

const Gallery = () => {
  return (
    <div className="w-full section mt-10">
      <div className="bg-hero bg-white/5 p-10 rounded-xl">
        <div className="grid-cols-2 grid items-center justify-center gap-10">
          <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
          <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
          <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
          <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
        </div>

        <div className="flex items-center flex-wrap md:flex-nowrap">
          <div className="w-full py-10 md:flex-1">
            <SectionIntro
              title="Explore Estatein's World"
              description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
              hideButton={true}
            />
          </div>
          <div className="md:flex-1 w-full">
            <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
