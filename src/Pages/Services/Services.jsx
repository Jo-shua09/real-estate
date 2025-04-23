import React from "react";
import Servicehero from "./sections/Servicehero";
import PropertyValue from "./sections/PropertyValue";
import PropertyManagement from "./sections/PropertyManagement";
import Investment from "./sections/Investment";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        handleLoad();
      }, 500);
    } else {
      window.addEventListener("load", () => {
        setTimeout(() => {
          handleLoad();
        }, 500);
      });
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={`overflow-x-hidden ${isLoading ? "hidden" : ""}`}>
        <div data-aos="fade-down">
          <Servicehero
            description="  Welcome to Estatien, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to
        your unique needs and dreams."
            title="Elevate Your Real Estate Experience"
          />
        </div>
        <div data-aos="fade-up">
          <PropertyValue />
        </div>
        <div data-aos="fade-left">
          <PropertyManagement />
        </div>
        <div data-aos="fade-right">
          <Investment />
        </div>
      </div>
    </>
  );
};

export default Services;
