import {
  LocationOnRounded,
  Search,
  Home,
  AttachMoney,
  Straighten,
  Event,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import mockData from "../../../assets/mock_data.json";

const PropertyHero = () => {
  const [filters, setFilters] = useState({
    location: "location",
    propertyType: "property type",
    priceRange: "pricing ranges",
    propertySize: "property sizes",
    buildYear: "build year",
  });
  const [activeDropdown, setActiveDropdown] = useState(null);
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

  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleOptionSelect = (category, option) => {
    setFilters((prev) => ({
      ...prev,
      [category]: option,
    }));
    setActiveDropdown(null);
  };

  const FilterDropdown = ({ category, icon }) => (
    <div className="rounded-xl flex items-center bg-black/30 px-2">
      {icon}
      <div className="relative flex-1">
        <div
          className="text-xl uppercase cursor-pointer font-Rubik font-medium  rounded-2xl py-4 px-4 gap-x-4 flex items-center justify-between"
          onClick={() => handleDropdownClick(category)}
        >
          {filters[category]}{" "}
          <KeyboardArrowDown
            sx={{ fontSize: "3rem" }}
            className="bg-white/5 rounded-full p-2"
          />
        </div>
        {activeDropdown === category && (
          <div className="absolute top-full mt-2 w-full bg-black/30 rounded-2xl shadow-lg z-20">
            {filterOptions[category].map((option) => (
              <div
                key={option}
                className="text-xl uppercase cursor-pointer font-Rubik font-medium px-4 py-3"
                onClick={() => handleOptionSelect(category, option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full h-full section-page bg-gradient-to-br from-white/5 to-black">
      <div className="py-20 w-full">
        <h1 className="text-4xl font-semibold">find your dream property</h1>
        <p className="text-2xl text-white/70 normal-case font-normal my-5">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey
        </p>
      </div>

      <div className="flex m-auto justify-center flex-col items-center">
        <div className="w-[90%] rounded-t-xl border-[.5rem] relative border-white/5 flex border-b-0">
          <input
            type="search"
            placeholder="Search for a property"
            className="text-2xl font-medium placeholder:text-white/70 normal-case pl-3 bg-transparent w-full md:h-[4.5rem] h-[5rem]"
          />
          <button className="bg-purple-600 py-3 px-5 gap-x-2 flex rounded-xl text-nowrap items-center capitalize text-2xl font-medium hover:scale-95 m-1">
            <Search className="!text-4xl" />
            find property
          </button>
        </div>

        <div className="w-full p-3 rounded-xl bg-white/5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10">
          <FilterDropdown
            category="location"
            icon={
              <LocationOnRounded className="!text-4xl pr-2 border-r-2 border-white/10" />
            }
          />
          <FilterDropdown
            category="propertyType"
            icon={
              <Home className="!text-4xl pr-2 border-r-2 border-white/10" />
            }
          />
          <FilterDropdown
            category="priceRange"
            icon={
              <AttachMoney className="!text-4xl pr-2 border-r-2 border-white/10" />
            }
          />
          <FilterDropdown
            category="propertySize"
            icon={
              <Straighten className="!text-4xl pr-2 border-r-2 border-white/10" />
            }
          />
          <FilterDropdown
            category="buildYear"
            icon={
              <Event className="!text-4xl pr-2 border-r-2 border-white/10" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
