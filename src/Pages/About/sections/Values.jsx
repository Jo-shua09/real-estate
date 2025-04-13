import React from "react";
import Abstract from "/src/assets/Images/General/Abstract.png";
import { PeopleAltRounded, SchoolRounded, Star } from "@mui/icons-material";

const Values = () => {
  return (
    <div className="w-full h-full flex items-center flex-wrap md:flex-nowrap gap-x-20 justify-between gap-y-10 section">
      <div className="w-full md:flex-1">
        <img
          src={Abstract}
          alt="abstract image"
          className="w-fit h-fit object-cover"
        />
        <h1 className="text-5xl my-5 font-semibold">our value</h1>
        <p className="text-white/70 text-2xl normal-case font-medium mb-3">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>
      <div className="w-full md:flex-[2] flex-col border-2 p-10 border-white/5 rounded-xl shadow-[1px_1px_6px_rgba(0,0,0.2)]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 relative">
          <div className="flex flex-col gap-y-5 md:border-r border-white/5 md:border-b-0 border-b pb-5">
            <div className="flex gap-x-3 items-center">
              <Star className="!text-6xl rounded-full p-3 border text-purple-600 border-purple-600" />
              <h4 className="text-2xl font-semibold">trust</h4>
            </div>
            <p className="text-xl font-medium text-white/70 normal-case">
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <hr className="absolute top-1/2 border border-white/5 w-full md:block hidden" />

          <div className="flex flex-col gap-y-5  border-white/5 md:border-b-0 border-b pb-5">
            <div className="flex gap-x-3 items-center">
              <SchoolRounded className="!text-6xl rounded-full p-3 border text-purple-600 border-purple-600" />
              <h4 className="text-2xl font-semibold">excellence</h4>
            </div>
            <p className="text-xl font-medium text-white/70 normal-case">
              We set the bar high for ourselves. From the properties we list to
              the services we provide.
            </p>
          </div>

          <div className="flex flex-col gap-y-5 md:border-r border-white/5 md:border-b-0 border-b pb-5">
            <div className="flex gap-x-3 items-center">
              <PeopleAltRounded className="!text-6xl rounded-full p-3 border text-purple-600 border-purple-600" />
              <h4 className="text-2xl font-semibold">client-centric</h4>
            </div>
            <p className="text-xl font-medium text-white/70 normal-case">
              Your dreams and needs are at the center of our universe. We
              listen, understand.
            </p>
          </div>

          <div className="flex flex-col gap-y-5  border-white/5">
            <div className="flex gap-x-3 items-center">
              <Star className="!text-6xl rounded-full p-3 border text-purple-600 border-purple-600" />
              <h4 className="text-2xl font-semibold">our commitment</h4>
            </div>
            <p className="text-xl font-medium text-white/70 normal-case">
              We are dedicated to providing you with the highest level of
              service, professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
