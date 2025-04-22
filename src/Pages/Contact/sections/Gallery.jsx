import React from "react";
import SectionIntro from "../../../Components/SectionIntro";

const Gallery = () => {
  return (
    <div className="w-full section mt-10">
      <div className="bg-hero bg-white/5 p-10 rounded-xl grid-cols-2 grid items-center justify-center gap-10">
        <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
        <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
        <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
        <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
        <div className="w-full">
          <SectionIntro
            title="Explore Estatein's World"
            description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
            hideButton={true}
          />
        </div>
        <img src="" alt="gallery image" className="w-full h-full object-cover rounded-xl" />
      </div>
    </div>
  );
};

export default Gallery;
