import FAQ from "../Home/sections/FAQ";
import AboutProperty from "./sections/AboutProperty";
import Inquire from "./sections/Inquire";
import PricingDetails from "./sections/PricingDetails";

const PropertyDetails = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutProperty />
      <Inquire />
      <PricingDetails />
      <FAQ />
    </div>
  );
};

export default PropertyDetails;
