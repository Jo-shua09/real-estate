import React, { useEffect, useState } from "react";
import SectionIntro from "../../../Components/SectionIntro";
import mockData from "../../../assets/mock_data.json";
import { KeyboardArrowDown } from "@mui/icons-material";

const Message = () => {
  const [options, setOptions] = useState({
    location: [],
    propertyType: [],
    priceRange: [],
    propertySize: [],
    buildYear: [],
  });

  const [selectedOptions, setSelectedOptions] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    propertySize: "",
    buildYear: "",
  });

  useEffect(() => {
    // Extract unique values from properties
    const locations = [
      ...new Set(mockData.properties.map((p) => p.location || "Unknown")),
    ];
    const types = [...new Set(mockData.properties.map((p) => p.property_type))];
    const prices = ["0-300k", "300k-600k", "600k-900k", "900k+"];
    const sizes = [
      "<3000 sqft",
      "3000-4000 sqft",
      "4000-5000 sqft",
      "5000+ sqft",
    ];
    const bathrooms = ["1", "2", "3", "4", "5", "6"];
    const bedrooms = ["1", "2", "3", "4", "5", "6"];
    const years = [
      ...new Set(mockData.properties.map((p) => p.year_built)),
    ].sort();

    setOptions({
      location: locations,
      propertyType: types,
      priceRange: prices,
      propertySize: sizes,
      buildYear: years,
      bathroom: bathrooms,
      bedroom: bedrooms,
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
        title="let's make it happen"
        description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        hideButton={true}
      />
      
      <div className="w-full border-2 border-white/5 rounded-xl p-7 md:p-10 mt-10">
        <form className="w-full flex flex-col gap-y-10">
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="first-name" className="text-xl font-semibold">
                first name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="enter first name"
                className="text-xl border-2 border-white/5 bg-white/5 placeholder:capitalize normal-case rounded-xl pl-3 w-full h-[5rem] md:h-[4.5rem]"
              />
            </div>

            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="last-name" className="text-xl font-semibold">
                last name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="enter last name"
                className="text-xl border-2 border-white/5 bg-white/5 placeholder:capitalize normal-case rounded-xl pl-3 w-full h-[5rem] md:h-[4.5rem]"
              />
            </div>

            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="email" className="text-xl font-semibold">
                email
              </label>
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                className="text-xl border-2 border-white/5 bg-white/5 placeholder:capitalize normal-case rounded-xl pl-3 w-full h-[5rem] md:h-[4.5rem]"
              />
            </div>

            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="phone" className="text-xl font-semibold">
                phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="enter phone number"
                className="text-xl border-2 border-white/5 bg-white/5 placeholder:capitalize normal-case rounded-xl pl-3 w-full h-[5rem] md:h-[4.5rem]"
              />
            </div>
          </div>

          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="location" className="text-xl font-semibold">
                location
              </label>
              <div className="relative w-full">
                <select
                  id="location"
                  name="location"
                  className="text-xl border-2 capitalize cursor-pointer border-white/5 bg-white/5 placeholder:capitalize rounded-xl px-3 w-full h-[5rem] md:h-[4.5rem]"
                  value={selectedOptions.location}
                  onChange={(e) =>
                    handleOptionSelect("location", e.target.value)
                  }
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  {options.location.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="text-xl capitalize bg-zinc-900 text-white hover:bg-zinc-800"
                      style={{ padding: "0.75rem" }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                <KeyboardArrowDown
                  sx={{ fontSize: "2.3rem" }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/5 rounded-full p-1 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="property-type" className="text-xl font-semibold">
                property type
              </label>
              <div className="relative w-full">
                <select
                  id="type"
                  name="propertytype"
                  className="text-xl border-2 cursor-pointer capitalize border-white/5 bg-white/5 placeholder:capitalize rounded-xl px-3 w-full h-[5rem] md:h-[4.5rem]"
                  value={selectedOptions.propertyType}
                  onChange={(e) =>
                    handleOptionSelect("propertyType", e.target.value)
                  }
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="" disabled>
                    Select property type
                  </option>
                  {options.propertyType.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="text-xl capitalize bg-zinc-900 text-white hover:bg-zinc-800"
                      style={{ padding: "0.75rem" }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                <KeyboardArrowDown
                  sx={{ fontSize: "2.3rem" }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/5 rounded-full p-1 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="bathrooms" className="text-xl font-semibold">
                No. of bathrooms
              </label>
              <div className="relative w-full">
                <select
                  id="bathroom"
                  name="bathroom"
                  className="text-xl border-2 cursor-pointer capitalize border-white/5 bg-white/5 placeholder:capitalize rounded-xl px-3 w-full h-[5rem] md:h-[4.5rem]"
                  value={selectedOptions.bathroom}
                  onChange={(e) =>
                    handleOptionSelect("bathroom", e.target.value)
                  }
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="" disabled>
                    Select property type
                  </option>
                  {options.bathroom.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="text-xl capitalize bg-zinc-900 text-white hover:bg-zinc-800"
                      style={{ padding: "0.75rem" }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                <KeyboardArrowDown
                  sx={{ fontSize: "2.3rem" }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/5 rounded-full p-1 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3 items-start">
              <label htmlFor="bedrooms" className="text-xl font-semibold">
                No. of bedrooms
              </label>
              <div className="relative w-full">
                <select
                  id="bedroom"
                  name="bedroom"
                  className="text-xl border-2 cursor-pointer capitalize border-white/5 bg-white/5 placeholder:capitalize rounded-xl px-3 w-full h-[5rem] md:h-[4.5rem]"
                  value={selectedOptions.bedroom}
                  onChange={(e) =>
                    handleOptionSelect("bedroom", e.target.value)
                  }
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="" disabled>
                    Select property type
                  </option>
                  {options.bedroom.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="text-xl capitalize bg-zinc-900 text-white hover:bg-zinc-800"
                      style={{ padding: "0.75rem" }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                <KeyboardArrowDown
                  sx={{ fontSize: "2.3rem" }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/5 rounded-full p-1 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
