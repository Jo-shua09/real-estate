import React from "react";
import ContactHero from "./sections/ContactHero";
import Connect from "./sections/Connect";
import OurOffice from "./sections/OurOffice";
import Gallery from "./sections/Gallery";

const Contact = () => {
  return (
    <div className="">
      <ContactHero />
      <Connect />
      <OurOffice />
      <Gallery />
    </div>
  );
};

export default Contact;
