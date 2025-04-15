import React from "react";
import { LocationOnRounded, Search, Event, KeyboardArrowDown, Payment, Widgets, RealEstateAgent } from "@mui/icons-material";
import { useState, useEffect } from "react";
import mockData from "../../../assets/mock_data.json";
import SearchResult from "./SearchResult";

const SearchProperty = () => {
  const [filters, setFilters] = useState({
    location: "location",
    propertyType: "property type",
    priceRange: "pricing range",
    propertySize: "property size",
    buildYear: "build year",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    location: [],
    propertyType: [],
    priceRange: [],
    propertySize: [],
    buildYear: [],
  });

  const isSearchEnabled = () => {
    return (
      searchQuery.trim() !== "" ||
      filters.location !== "location" ||
      filters.propertyType !== "property type" ||
      filters.priceRange !== "pricing range" ||
      filters.propertySize !== "property size" ||
      filters.buildYear !== "build year"
    );
  };

  useEffect(() => {
    const locations = [...new Set(mockData.properties.map((p) => p.location || "Unknown"))];
    const types = [...new Set(mockData.properties.map((p) => p.property_type))];
    const prices = ["0-300k", "300k-600k", "600k-900k", "900k+"];
    const sizes = ["<3000 sqft", "3000-4000 sqft", "4000-5000 sqft", "5000+ sqft"];
    const years = [...new Set(mockData.properties.map((p) => p.year_built))].sort();

    setFilterOptions({
      location: locations,
      propertyType: types,
      priceRange: prices,
      propertySize: sizes,
      buildYear: years,
    });
  }, []);

  const handleSearch = () => {
    let filteredProperties = [...mockData.properties];

    // Filter by property name if search query exists
    if (searchQuery.trim()) {
      filteredProperties = filteredProperties.filter((property) => property.property_name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Apply filters
    if (filters.location !== "location") {
      filteredProperties = filteredProperties.filter((property) => property.location === filters.location);
    }

    if (filters.propertyType !== "property type") {
      filteredProperties = filteredProperties.filter((property) => property.property_type === filters.propertyType);
    }

    if (filters.priceRange !== "pricing range") {
      const [min, max] = filters.priceRange.split("-").map((price) => parseInt(price.replace("k", "000")));
      filteredProperties = filteredProperties.filter((property) => {
        if (max) {
          return property.price >= min && property.price <= max;
        }
        return property.price >= min;
      });
    }

    if (filters.propertySize !== "property size") {
      const sizeRange = filters.propertySize;
      const [min, max] = sizeRange.includes("+")
        ? [parseInt(sizeRange.replace("+ sqft", "")), Infinity]
        : sizeRange.replace(" sqft", "").split("-").map(Number);

      filteredProperties = filteredProperties.filter((property) => property.size_sqft >= min && property.size_sqft <= max);
    }

    if (filters.buildYear !== "build year") {
      filteredProperties = filteredProperties.filter((property) => property.year_built === parseInt(filters.buildYear));
    }

    setSearchResults(filteredProperties);
    setShowResults(true);
  };

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
          <option value={filters[category]} disabled className="bg-zinc-900 text-white">
            {filters[category]}
          </option>
          {filterOptions[category].map((option) => (
            <option key={option} value={option} className="text-xl capitalize bg-zinc-900 text-white hover:bg-zinc-800" style={{ padding: "0.75rem" }}>
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
    <div className="flex m-auto justify-center section-page w-full flex-col items-center">
      <div className="md:w-[90%] w-full md:rounded-t-xl md:rounded-none rounded-xl border-[.5rem] relative border-white/5 flex mb-5 md:m-0 md:border-b-0">
        <input
          type="search"
          placeholder="Search for a property"
          className="text-2xl rounded-xl font-medium bg-transparent placeholder:text-white/70 normal-case pl-3 w-full md:h-[4.5rem] h-[5rem]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          disabled={!isSearchEnabled()}
          className={`py-3 px-5 gap-x-2 flex rounded-xl text-nowrap items-center capitalize text-2xl font-medium hover:scale-95 m-1 ${
            isSearchEnabled() ? "bg-purple-600" : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          <Search className="!text-4xl" />
          find property
        </button>
      </div>

      <div className="w-full md:p-2 p-3 rounded-xl bg-white/5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
        <FilterDropdown category="location" icon={<LocationOnRounded className="!text-4xl pr-2 border-r-2 border-white/10" />} />
        <FilterDropdown category="propertyType" icon={<RealEstateAgent className="!text-4xl pr-2 border-r-2 border-white/10" />} />
        <FilterDropdown category="priceRange" icon={<Payment className="!text-4xl pr-2 border-r-2 border-white/10" />} />
        <FilterDropdown category="propertySize" icon={<Widgets className="!text-4xl pr-2 border-r-2 border-white/10" />} />
        <FilterDropdown category="buildYear" icon={<Event className="!text-4xl pr-2 border-r-2 border-white/10" />} />
      </div>

      {showResults && (
        <div className="w-full">
          <SearchResult properties={searchResults} />
        </div>
      )}
    </div>
  );
};

export default SearchProperty;
