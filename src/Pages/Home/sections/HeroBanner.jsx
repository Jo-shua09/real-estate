import {
  ArrowForward,
  HotelClassOutlined,
  HouseSidingTwoTone,
  MoneyTwoTone,
  Sunny,
} from "@mui/icons-material";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-full section-page md:!p-0 bg-black/30">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 m-auto justify-between items-center gap-x-3 gap-y-5 border-[.5rem] border-black/20 rounded-xl p-2">
        <div className="rounded-xl w-full relative bg-black/20 h-[15rem] py-10 text-center gap-y-4">
          <div className="border-t border-b rounded-full p-4 w-fit m-auto h-fit border-purple-600 ">
            <HouseSidingTwoTone className="border-t border-b rounded-full p-2 border-purple-600 !text-7xl text-purple-600" />
          </div>
          <p className="text-2xl font-medium my-5 text-white/70">
            find your dream house
          </p>
          <ArrowForward className="-rotate-45 absolute top-4 right-4 !text-5xl text-white/50" />
        </div>

        <div className="rounded-xl w-full relative bg-black/20 h-[15rem] py-10 text-center gap-y-4">
          <div className="border-t border-b rounded-full p-4 w-fit m-auto h-fit border-purple-600 ">
            <MoneyTwoTone className="border-t border-b rounded-full p-2 border-purple-600 !text-7xl text-purple-600" />
          </div>
          <p className="text-2xl font-medium my-5 text-white/70">
            unlock property value
          </p>
          <ArrowForward className="-rotate-45 absolute top-4 right-4 !text-5xl text-white/50" />
        </div>

        <div className="rounded-xl w-full relative bg-black/20 h-[15rem] py-10 text-center gap-y-4">
          <div className="border-t border-b rounded-full p-4 w-fit m-auto h-fit border-purple-600 ">
            <HotelClassOutlined className="border-t border-b rounded-full p-2 border-purple-600 !text-7xl text-purple-600" />
          </div>
          <p className="text-2xl font-medium my-5 text-white/70">
            effortless property management
          </p>
          <ArrowForward className="-rotate-45 absolute top-4 right-4 !text-5xl text-white/50" />
        </div>

        <div className="rounded-xl w-full relative bg-black/20 h-[15rem] py-10 text-center gap-y-4">
          <div className="border-t border-b rounded-full p-4 w-fit m-auto h-fit border-purple-600 ">
            <Sunny className="border-t border-b rounded-full p-2 border-purple-600 !text-7xl text-purple-600" />
          </div>
          <p className="text-2xl font-medium my-5 text-white/70">
            smart investment, informed decisions
          </p>
          <ArrowForward className="-rotate-45 absolute top-4 right-4 !text-5xl text-white/50" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
