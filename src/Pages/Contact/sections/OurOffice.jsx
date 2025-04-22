import React from "react";
import SectionIntro from "../../../Components/SectionIntro";
import { LocationOn, Mail, Phone } from "@mui/icons-material";
import { Button } from "@mui/material";

const OurOffice = () => {
  return (
    <div className="w-full section">
      <SectionIntro
        title="Discover Our Office Locations"
        description="Estantien is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estantien office nearest to you"
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

        <div className="flex mt-10 flex-wrap md:flex-nowrap items-center justify-between gap-10 w-full">
          <div className="md:flex-1 w-full rounded-xl border-2 border-white/5 p-10">
            <h4 className="text-xl normal-case text-white/70">Main Headquarters</h4>
            <h3 className="text-4xl py-7 font-semibold">123 Estantien Plaza, City Center, Metropolis</h3>
            <p className="text-2xl font-medium normal-case text-white/70">
              Our main headquarters serve as the heart of Estantien. Located in the bustling city center, this is where our core team of experts operates,
              driving the excellence and innovation that define us.
            </p>

            <div className="flex my-12 justify-between gap-x-2 items-center w-full">
              <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                <Mail className="!text-5xl" />
                <span className="text-xl text-nowrap font-semibold flex items-center">info@Estantien.com</span>
              </div>
              <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                <Phone className="!text-5xl" />
                <span className="text-xl text-nowrap font-semibold flex items-center">+1 (123) 456-7890</span>
              </div>
              <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                <LocationOn className="!text-5xl" />
                <span className="text-xl text-nowrap font-semibold flex items-center">Metropolis</span>
              </div>
            </div>

            <button className="bg-purple-600 hover:scale-95 rounded-xl text-2xl font-semibold capitalize flex items-center justify-center py-5 px-7 hover:bg-purple-900 w-full h-[5rem]">
              get direction
            </button>
          </div>

          <div className="md:flex-1 w-full rounded-xl border-2 border-white/5 p-10">
            <h4 className="text-xl normal-case text-white/70">Regional Offices</h4>
            <h3 className="text-4xl py-7 font-semibold">456 Urban Avenue, Downtown District, Metropolis</h3>
            <p className="text-2xl font-medium normal-case text-white/70">
              Estantien's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local
              experts who understand the nuances of their respective markets.
            </p>

            <div className="flex my-12 justify-between gap-x-2 items-center w-full">
              <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                <Mail className="!text-5xl" />
                <span className="text-xl text-nowrap font-semibold flex items-center">info@Estantien.com</span>
              </div>
              <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                <Phone className="!text-5xl" />
                <span className="text-xl text-nowrap font-semibold flex items-center">+1 (123) 456-7890</span>
              </div>
              <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                <LocationOn className="!text-5xl" />
                <span className="text-xl text-nowrap font-semibold flex items-center">Metropolis</span>
              </div>
            </div>

            <button className="bg-purple-600 hover:scale-95 rounded-xl text-2xl font-semibold capitalize flex items-center justify-center py-5 px-7 hover:bg-purple-900 w-full h-[5rem]">
              get direction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
