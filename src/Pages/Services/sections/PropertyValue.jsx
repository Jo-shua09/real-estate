import React from "react";
import SectionIntro from "../../../Components/SectionIntro";
import { ControlPointSharp, VerticalAlignTopOutlined } from "@mui/icons-material";

const PropertyValue = () => {
  return (
    <div className="w-full h-full section">
      <SectionIntro
        hideButton={true}
        title="unlock property value"
        description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
      />
      <div className="w-full flex items-center flex-col gap-5 mt-16">
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5">
          <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 border-white/5">
            <div className="flex items-center gap-x-5">
              <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
                <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2  text-purple-700 border-purple-600 rounded-full" />
              </div>
              <span className="text-3xl font-semibold">valuation mastery</span>
            </div>
            <p className="text-white/70 text-2xl font-medium normal-case">Discover the true worth of your property with our expert valuation services.</p>
          </div>

          <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 border-white/5">
            <div className="flex items-center gap-x-5">
              <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
                <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2  text-purple-700 border-purple-600 rounded-full" />
              </div>
              <span className="text-3xl font-semibold">strategy marketing</span>
            </div>
            <p className="text-white/70 text-2xl font-medium normal-case">
              Selling a property requires more than just a listing; it demands a strategic marketing.
            </p>
          </div>

          <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 border-white/5">
            <div className="flex items-center gap-x-5">
              <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
                <ControlPointSharp className="!text-5xl border-t border-b p-2  text-purple-700 border-purple-600 rounded-full" />
              </div>
              <span className="text-3xl font-semibold">negotiation wizardry</span>
            </div>
            <p className="text-white/70 text-2xl font-medium normal-case">
              Negotiating the best deal is an art, and our negotiation experts are masters of it.
            </p>
          </div>
        </div>

        <div className="w-full flex-wrap md:flex-nowrap flex gap-5">
          <div className="border-2 p-10 rounded-xl w-full h-full md:flex-1 flex flex-col gap-y-7 border-white/5">
            <div className="flex items-center gap-x-5">
              <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
                <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2  text-purple-700 border-purple-600 rounded-full" />
              </div>
              <span className="text-3xl font-semibold">closing success</span>
            </div>
            <p className="text-white/70 text-2xl font-medium normal-case">
              A successful sale is not complete until the closing. We guide you through the intricate closing process.
            </p>
          </div>

          <div className="border-2 p-10 rounded-xl md:flex-[2.18] w-full h-full flex flex-col gap-y-7 border-white/5 bg-hero bg-white/5">
            <div className="flex items-center justify-between gap-6">
              <h3 className="md:text-3xl text-4xl font-semibold">Unlock the Value of Your Property Today</h3>
              <button className="py-4  px-7 hover:scale-95 capitalize rounded-xl hidden md:flex items-center font-semibold bg-black/30 text-2xl border-2 border-white/5">
                learn more
              </button>
            </div>
            <button className="py-4  px-7 hover:scale-95 capitalize rounded-xl  md:hidden w-full h-[5rem] justify-center flex items-center font-semibold bg-black/35 text-2xl border-2 border-white/5">
              learn more
            </button>
            <p className="text-white/70 normal-case font-medium text-2xl">
              Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal
              possible for your valuable asset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyValue;
