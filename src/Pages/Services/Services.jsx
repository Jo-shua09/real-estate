import React from "react";
import Servicehero from "./sections/Servicehero";
import PropertyValue from "./sections/PropertyValue";
import PropertyManagement from "./sections/PropertyManagement";
import Investment from "./sections/Investment";

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <Servicehero
        description="  Welcome to Estatien, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to
          your unique needs and dreams."
        title="Elevate Your Real Estate Experience"
      />
      <PropertyValue />
      <PropertyManagement />
      <Investment />
    </div>
  );
};

export default Services;
