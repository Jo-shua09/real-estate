import React from "react";
import SectionIntro from "../../../Components/SectionIntro";
import { VerticalAlignTopOutlined } from "@mui/icons-material";

const Investment = () => {
  return (
    <div className="w-full h-full section flex flex-wrap md:flex-nowrap justify-between gap-x-16 gap-y-7">
      <div className="flex flex-col gap-7 w-full md:flex-1">
        <SectionIntro
          hideButton={true}
          title="Smart Investments, Informed Decisions"
          description="Building a real estate portfolio requires a strategic approach. Estantien's Investment Advisory Service empowers you to make smart investments and informed decisions."
        />

        <div className="bg-hero p-10 rounded-xl bg-white/5 flex flex-col gap-y-6">
          <h3 className="text-4xl font-semibold">Unlock Your Investment Potential</h3>
          <p className="text-white/70 font-medium normal-case text-2xl">
            Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
          </p>
          <button className="py-4  px-7 hover:scale-95 capitalize rounded-xl w-full h-[5rem] justify-center flex items-center font-semibold bg-black/35 text-2xl border-2 border-white/5">
            learn more
          </button>
        </div>
      </div>

      <div className="w-full md:flex-[2] grid sm:grid-cols-2 grid-cols-1 bg-white/5 md:p-3 p-5 md:gap-2 gap-5 rounded-xl">
        <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 bg-black/30 border-white/5">
          <div className="flex items-center gap-x-5">
            <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
              <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2 text-purple-700 border-purple-600 rounded-full" />
            </div>
            <span className="text-3xl font-semibold">Market Insight</span>
          </div>
          <p className="text-white/70 text-2xl font-medium normal-case">
            Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions
          </p>
        </div>

        <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 bg-black/30 border-white/5">
          <div className="flex items-center gap-x-5">
            <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
              <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2 text-purple-700 border-purple-600 rounded-full" />
            </div>
            <span className="text-3xl font-semibold">ROI Assessment</span>
          </div>
          <p className="text-white/70 text-2xl font-medium normal-case">
            Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments
          </p>
        </div>

        <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 bg-black/30 border-white/5">
          <div className="flex items-center gap-x-5">
            <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
              <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2 text-purple-700 border-purple-600 rounded-full" />
            </div>
            <span className="text-3xl font-semibold">Customized Strategies</span>
          </div>
          <p className="text-white/70 text-2xl font-medium normal-case">
            Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs
          </p>
        </div>

        <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 bg-black/30 border-white/5">
          <div className="flex items-center gap-x-5">
            <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
              <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2 text-purple-700 border-purple-600 rounded-full" />
            </div>
            <span className="text-3xl font-semibold">Diversification Mastery</span>
          </div>
          <p className="text-white/70 text-2xl font-medium normal-case">
            Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investment;
