import React from "react";
import Servicehero from "./sections/Servicehero";
import PropertyValue from "./sections/propertyValue";

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <Servicehero />
      <PropertyValue
        title="unlock property value"
        description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
      />
    </div>
  );
};

export default Services;
