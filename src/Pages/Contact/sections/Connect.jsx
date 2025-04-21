import SectionIntro from "../../../Components/SectionIntro";
import { KeyboardArrowDown } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import mockData from "../../../assets/mock_data.json";

const Connect = () => {
  const [options, setOptions] = useState({
    inquiry: [],
    hear: [],
  });

  const [selectedOptions, setSelectedOptions] = useState({
    inquiry: "",
    hear: "",
  });

  useEffect(() => {
    // Extract unique values from properties
    const inquire = [...new Set(mockData.properties.map((p) => p.property_name || "Unknown"))];
    const heard = ["Friend", "Facebook", "Twitter", "Instagram"];

    setOptions({
      inquiry: inquire,
      hear: heard,
    });
  }, []);

  const handleOptionSelect = (field, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full section">
      <SectionIntro
        title="Let's Connect"
        description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
        hideButton={true}
      />

      <div className="w-full border-2 border-white/5 rounded-xl p-7 md:p-10 mt-20">
        <form className="w-full flex flex-col gap-y-10">
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
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
          </div>

          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
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

            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="inquiry" className="md:text-xl text-[1.4rem]  font-semibold">
                inquiry type
              </label>
              <div className="relative w-full">
                <select
                  id="inquiry"
                  name="inquiry"
                  className="md:text-xl text-[1.4rem]  border-2 capitalize cursor-pointer border-white/5 bg-white/5 placeholder:capitalize focus:border-purple-600 rounded-xl px-3 w-full h-[5rem] md:h-[4.5rem]"
                  value={selectedOptions.inquiry}
                  onChange={(e) => handleOptionSelect("inquiry", e.target.value)}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="" disabled>
                    Select inquiry type
                  </option>
                  {options.inquiry.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="md:text-xl text-[1.4rem]  capitalize bg-zinc-900 text-white hover:bg-zinc-800"
                      style={{ padding: "0.75rem" }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                <KeyboardArrowDown
                  sx={{ fontSize: "2.3rem" }}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/5 rounded-full p-1 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="property-type" className="md:text-xl text-[1.4rem]  font-semibold">
                how did you hear about us?
              </label>
              <div className="relative w-full">
                <select
                  id="type"
                  name="propertytype"
                  className="md:text-xl text-[1.4rem]  border-2 cursor-pointer capitalize border-white/5 bg-white/5 placeholder:capitalize focus:border-purple-600 rounded-xl px-3 w-full h-[5rem] md:h-[4.5rem]"
                  value={selectedOptions.hear}
                  onChange={(e) => handleOptionSelect("hear", e.target.value)}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="" disabled>
                    select
                  </option>
                  {options.hear.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="md:text-xl text-[1.4rem]  capitalize bg-zinc-900 text-white hover:bg-zinc-800"
                      style={{ padding: "0.75rem" }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                <KeyboardArrowDown
                  sx={{ fontSize: "2.3rem" }}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/5 rounded-full p-1 pointer-events-none"
                />
              </div>
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
  );
};

export default Connect;
