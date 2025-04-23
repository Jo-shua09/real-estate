import FAQ from "../Home/sections/FAQ";
import AboutProperty from "./sections/AboutProperty";
import Inquire from "./sections/Inquire";
import PricingDetails from "./sections/PricingDetails";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const PropertyDetails = () => {
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
          <AboutProperty />
        </div>
        <div data-aos="fade-up">
          <Inquire />
        </div>
        <div className="fade-right">
          <PricingDetails />
        </div>
        <div data-aos="zoom-in">
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
