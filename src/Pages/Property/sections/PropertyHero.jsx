import { LocationOnRounded, Search } from "@mui/icons-material";
import { useState } from "react";

const PropertyHero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("all-items");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filterOptions = [
    "all-items",
    ...new Set(ListOfProducts.map((product) => product.type)),
  ];
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedFilter(option);
    setIsDropdownOpen(false);
    setCurrentPage(1);
  };

  const filteredProducts = ListOfProducts.filter((product) => {
    if (selectedFilter === "all-items") return true;
    return product.type === selectedFilter;
  });

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
        <div className="w-[90%] rounded-t-xl border-[.5rem] relative border-white/5 flex">
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

        <div className="w-full p-4 rounded-xl bg-white/5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10">
          <div className="rounded-xl flex items-center bg-black/30 p-2">
            <LocationOnRounded className="!text-4xl pr-2 border-r-2 border-white/10" />
            <div className="relative">
              <div
                className="text-2xl uppercase cursor-pointer font-Rubik font-medium bg-white rounded-2xl py-4 px-7 gap-x-14 flex items-center justify-between"
                onClick={handleDropdownClick}
              >
                {selectedFilter} <KeyboardArrowDown sx={{ fontSize: "2rem" }} />
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lg z-20">
                  {filterOptions.map((option) => (
                    <div
                      key={option}
                      className="text-2xl uppercase cursor-pointer font-Rubik font-medium px-7 py-4 hover:bg-gray-100"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
