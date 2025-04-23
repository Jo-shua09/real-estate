import React from "react";
import ContactHero from "./sections/ContactHero";
import Connect from "./sections/Connect";
import OurOffice from "./sections/OurOffice";
import Gallery from "./sections/Gallery";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const Contact = () => {
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
          <ContactHero />
        </div>
        <div data-aos="fade-up">
          <Connect />
        </div>
        <div data-aos="fade-left">
          <OurOffice />
        </div>
        <div data-aos="zoom-in">
          <Gallery />
        </div>
      </div>
    </>
  );
};

export default Contact;
