import React from "react";
import SectionIntro from "../../../Components/SectionIntro";
import { CheckRounded } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const Inquire = () => {
  const Location = useLocation();
  const { property_name, location } = Location.state || [];
  return (
    <div className="w-full section">
      <div className="flex items-start justify-between gap-10 w-full md:flex-nowrap flex-wrap">
        <div className="w-full md:flex-1">
          <SectionIntro
            title={`inquire about ${property_name}`}
            description="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
            hideButton={true}
          />
        </div>

        <div className="w-full md:flex-[2] border-2 p-7 md:p-10 rounded-xl border-white/5">
          <form className="w-full flex flex-col gap-y-10">
            <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-x-5 gap-y-10">
              <div className="flex flex-col gap-y-3 items-start">
                <label htmlFor="first-name" className="md:text-xl text-[1.4rem]  font-semibold">
                  first name
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="enter first name"
                  className="md:text-xl text-[1.4rem]  border-2 border-white/5 bg-white/5 placeholder:capitalize focus:border-purple-600 normal-case rounded-xl pl-3 w-full h-[5rem] md:h-[4.5rem]"
                />
              </div>

              <div className="flex flex-col gap-y-3 items-start">
                <label htmlFor="last-name" className="md:text-xl text-[1.4rem]  font-semibold">
                  last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="enter last name"
                  className="md:text-xl text-[1.4rem]  border-2 border-white/5 bg-white/5 placeholder:capitalize focus:border-purple-600 normal-case rounded-xl pl-3 w-full h-[5rem] md:h-[4.5rem]"
                />
              </div>

              <div className="flex flex-col gap-y-3 items-start">
                <label htmlFor="email" className="md:text-xl text-[1.4rem]  font-semibold">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="enter your email"
                  className="md:text-xl text-[1.4rem]  border-2 border-white/5 bg-white/5 placeholder:capitalize focus:border-purple-600 normal-case rounded-xl pl-3 w-full h-[5rem] md:h-[4.5rem]"
                />
              </div>

              <div className="flex flex-col gap-y-3 items-start">
                <label htmlFor="phone" className="md:text-xl text-[1.4rem]  font-semibold">
                  phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="enter phone number"
                  className="md:text-xl text-[1.4rem]  border-2 border-white/5 bg-white/5 placeholder:capitalize focus:border-purple-600 normal-case rounded-xl pl-3 w-full h-[5rem] md:h-[4.5rem]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3 items-start w-full md:flex-[4]">
              <label htmlFor="budget" className="md:text-xl text-[1.4rem]  font-semibold">
                selected property
              </label>
              <div className="relative w-full">
                <input
                  id="budget"
                  name="budget"
                  disabled
                  value={`${property_name}, ${location}`}
                  className="md:text-xl text-[1.4rem]  border-2 capitalize border-white/5 bg-white/5 placeholder:capitalize focus:border-purple-600 rounded-xl px-3 w-full h-[5rem] md:h-[4.5rem]"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                />
                <CheckRounded
                  sx={{ fontSize: "2.3rem" }}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-purple-600 rounded-full p-1 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3 items-start w-full">
              <label htmlFor="message" className="md:text-xl text-[1.4rem]  font-semibold">
                message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="enter your message"
                className="md:text-xl text-[1.4rem]  border-2 capitalize border-white/5 bg-white/5 placeholder:capitalize focus:border-purple-600 rounded-xl p-3 w-full h-[13rem] md:h-[15rem]"
              ></textarea>
            </div>

            <div className="w-full md:flex-nowrap flex-wrap  gap-y-7 flex items-center justify-center md:justify-between">
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  name="accept"
                  id="accept"
                  className="accent-purple-600 bg-transparent appearance-none w-7 h-7 cursor-pointer checked:bg-purple-600 border-2
                             border-white/10 rounded"
                />

                <p className="md:text-xl text-[1.4rem]  text-white/70 normal-case">
                  i agree with <span className="border-b-2 border-white/5">terms of use</span> and{" "}
                  <span className="border-b-2 border-white/5">Privacy Policy</span>
                </p>
              </div>
              <input
                type="submit"
                value="send your message"
                className="bg-purple-600 cursor-pointer hover:scale-95 md:w-fit w-full rounded-xl text-2xl font-semibold capitalize flex items-center justify-center py-5 px-7 hover:bg-purple-900>"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquire;
