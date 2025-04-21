import React from "react";
import Servicehero from "./sections/Servicehero";
import PropertyValue from "./sections/propertyValue";
import PropertyManagement from "./sections/PropertyManagement";
import Investment from "./sections/Investment";

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <Servicehero />
      <PropertyValue />
      <PropertyManagement />
      <Investment />
    </div>
  );
};

export default Services;
