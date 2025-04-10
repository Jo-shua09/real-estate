import {
  Facebook,
  LinkedIn,
  Telegram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="section !pb-16 md:flex gap-10 flex-wrap md:flex-nowrap grid grid-cols-2 place-content-start items-start col-span-5">
        <div className="flex md:flex-[2] flex-col gap-y-7 w-full col-span-2 ">
          <div className="flex items-center gap-x-3">
            <img
              src="Logo.svg"
              alt="Logo image"
              className="object-cover w-12 h-12 "
            />
            <span className="text-3xl font-semibold">estantien</span>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="enter your email"
              className="w-full h-[5rem] text-xl focus:border-purple-600 rounded-xl pl-3 border-2 bg-transparent border-white/5"
            />
            <Telegram className="!text-4xl absolute top-1/4 right-3 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-y-7 border-b-2 pb-5 md:border-0 border-white/5 border-r-2 md:flex-1 w-full h-fit col-span-1">
          <h3 className="text-2xl text-white/70 font-semibold">home</h3>
          <ul className="flex flex-col gap-y-3">
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              hero section
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              features
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              properties
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              testimonials
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              FAQ's
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-7 border-b-2 pb-5 md:border-0 border-white/5 md:flex-1 w-full h-fit col-span-1">
          <h3 className="text-2xl text-white/70 font-semibold">about us</h3>
          <ul className="flex flex-col gap-y-3">
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              our story
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              our works
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              how it works
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              our team
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              our clients
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-7 border-b-2 pb-5 md:border-0 border-white/5 border-r-2 md:flex-1 w-full h-fit col-span-1">
          <h3 className="text-2xl text-white/70 font-semibold">properties</h3>
          <ul className="flex flex-col gap-y-3">
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              portfolio
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              categories
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-7 border-b-2 pb-5 md:border-0 border-white/5 md:flex-1 w-full h-fit col-span-1">
          <h3 className="text-2xl text-white/70 font-semibold">services</h3>
          <ul className="flex flex-col gap-y-3">
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              valuation mastery
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              strategic marketing
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              negotiation wizardry
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              closing success
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              property management
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-7 border-b-2 pb-5 md:border-0 border-white/5 border-r-2 md:flex-1 w-full h-fit col-span-1">
          <h3 className="text-2xl text-white/70 font-semibold">contact us</h3>
          <ul className="flex flex-col gap-y-3">
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              contact form
            </li>
            <li className="cursor-pointer hover:underline list-none text-xl font-medium">
              our offices
            </li>
          </ul>
        </div>
      </div>
      <div className="section-page flex-wrap-reverse md:flex-nowrap !py-7 bg-white/10 w-full flex md:justify-between gap-y-10 justify-center items-center">
        <div className="flex md:flex-row flex-col gap-5 items-center w-full">
          <p className="text-2xl font-semibold">@2025 All rights reserved</p>
          <p className="text-2xl font-semibold">
            estantien{" "}
            <span className="text-purple-600 font-semibold">Tuma</span>
            .dev
          </p>
        </div>

        <div className="justify-center flex gap-x-5 items-end place-items-end w-fit">
          <Facebook className="!text-7xl hover:bg-black/30 cursor-pointer transition-all duration-200 delay-200 border-2 border-white/5 p-4 rounded-full" />
          <LinkedIn className="!text-7xl hover:bg-black/30 cursor-pointer transition-all duration-200 delay-200 border-2 border-white/5 p-4 rounded-full" />
          <Twitter className="!text-7xl hover:bg-black/30 cursor-pointer transition-all duration-200 delay-200 border-2 border-white/5 p-4 rounded-full" />
          <YouTube className="!text-7xl hover:bg-black/30 cursor-pointer transition-all duration-200 delay-200 border-2 border-white/5 p-4 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
