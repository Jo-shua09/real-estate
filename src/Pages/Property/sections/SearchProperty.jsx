import React from "react";
import {
  LocationOnRounded,
  Search,
  Event,
  KeyboardArrowDown,
  Payment,
  Widgets,
  RealEstateAgent,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import mockData from "../../../assets/mock_data.json";

const SearchProperty = () => {
  const [filters, setFilters] = useState({
    location: "location",
    propertyType: "property type",
    priceRange: "pricing range",
    propertySize: "property size",
    buildYear: "build year",
  });
  const [filterOptions, setFilterOptions] = useState({
    location: [],
    propertyType: [],
    priceRange: [],
    propertySize: [],
    buildYear: [],
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
    const years = [
      ...new Set(mockData.properties.map((p) => p.year_built)),
    ].sort();

    setFilterOptions({
      location: locations,
      propertyType: types,
      priceRange: prices,
      propertySize: sizes,
      buildYear: years,
    });
  }, []);

  const handleOptionSelect = (category, option) => {
    setFilters((prev) => ({
      ...prev,
      [category]: option,
    }));
  };

  const FilterDropdown = ({ category, icon }) => (
    <div className="rounded-xl flex items-center bg-black/30 px-3">
      {icon}
      <div className="relative flex-1">
        <select
          className="w-full md:h-[4.5rem] h-[5rem] text-xl capitalize cursor-pointer font-medium py-4 px-4 bg-transparent appearance-none !focus:outline-none"
          value={filters[category]}
          onChange={(e) => handleOptionSelect(category, e.target.value)}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
        >
          <option
            value={filters[category]}
            disabled
            className="bg-zinc-900 text-white"
          >
            {filters[category]}
          </option>
          {filterOptions[category].map((option) => (
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
  );

  return (
    <div className="flex m-auto justify-center w-full flex-col items-center">
      <div className="md:w-[90%] w-full md:rounded-t-xl md:rounded-none rounded-xl border-[.5rem] relative border-white/5 flex mb-5 md:m-0 md:border-b-0">
        <input
          type="search"
          placeholder="Search for a property"
          className="text-2xl rounded-xl font-medium bg-transparent placeholder:text-white/70 normal-case pl-3 w-full md:h-[4.5rem] h-[5rem]"
        />
        <button className="bg-purple-600 py-3 px-5 gap-x-2 flex rounded-xl text-nowrap items-center capitalize text-2xl font-medium hover:scale-95 m-1">
          <Search className="!text-4xl" />
          find property
        </button>
      </div>

      <div className="w-full md:p-3 p-5 rounded-xl bg-white/5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-x-10 gap-y-5">
        <FilterDropdown
          category="location"
          icon={
            <LocationOnRounded className="!text-4xl pr-2 border-r-2 border-white/10" />
          }
        />
        <FilterDropdown
          category="propertyType"
          icon={
            <RealEstateAgent className="!text-4xl pr-2 border-r-2 border-white/10" />
          }
        />
        <FilterDropdown
          category="priceRange"
          icon={
            <Payment className="!text-4xl pr-2 border-r-2 border-white/10" />
          }
        />
        <FilterDropdown
          category="propertySize"
          icon={
            <Widgets className="!text-4xl pr-2 border-r-2 border-white/10" />
          }
        />
        <FilterDropdown
          category="buildYear"
          icon={<Event className="!text-4xl pr-2 border-r-2 border-white/10" />}
        />
      </div>
    </div>
  );
};

export default SearchProperty;
