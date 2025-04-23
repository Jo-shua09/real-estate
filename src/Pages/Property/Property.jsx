import PropertyHero from "./sections/PropertyHero";
import Properties from "./sections/Properties";
import Message from "./sections/Message";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const Property = () => {
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
      <div className={`overflow-x-hidden ${isLoading ? "opacity-0" : ""}`}>
        <div data-aos="fade-down">
          <PropertyHero />
        </div>
        <div className="lg:mt-0 md:mt-0">
          <div data-aos="fade-up">
            <Properties />
          </div>
          <div data-aos="fade-left">
            <Message />
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
