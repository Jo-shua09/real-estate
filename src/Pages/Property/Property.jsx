import PropertyHero from "./sections/PropertyHero";
import Properties from "./sections/Properties";
import Message from "./sections/Message";

const Property = () => {
  return (
    <div className="overflow-x-hidden">
      <PropertyHero />
      <div className="lg:mt-0 md:mt-0">
        <Properties />
        <Message />
      </div>
    </div>
  );
};

export default Property;
