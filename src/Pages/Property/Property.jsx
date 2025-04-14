import React from "react";
import PropertyHero from "./sections/PropertyHero";
import PropertyLayout from "../../Components/PropertyLayout";

const Property = () => {
  return (
    <>
      <PropertyHero />
      <div className="lg:mt-20 md:mt-40">
        <PropertyLayout />
      </div>
    </>
  );
};

export default Property;
