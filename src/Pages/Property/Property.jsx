import React from "react";
import PropertyHero from "./sections/PropertyHero";
import Properties from "./sections/Properties";
import Message from "./sections/Message";

const Property = () => {
  return (
    <>
      <PropertyHero />
      <div className="lg:mt-20 md:mt-40">
        <Properties />
        <Message />
      </div>
    </>
  );
};

export default Property;
