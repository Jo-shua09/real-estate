import React from "react";
import PropertyHero from "./sections/PropertyHero";
import SearchResult from "./sections/SearchResult";

const Property = () => {
  return (
    <>
      <PropertyHero />
      <div className="lg:mt-20 md:mt-40">
        <SearchResult />
      </div>
    </>
  );
};

export default Property;
