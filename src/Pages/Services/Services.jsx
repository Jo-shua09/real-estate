import React from "react";
import Servicehero from "./sections/Servicehero";
import PropertyValue from "./sections/propertyValue";
import PropertyManagement from "./sections/PropertyManagement";

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <Servicehero />
      <PropertyValue />
      <PropertyManagement />
    </div>
  );
};

export default Services;
