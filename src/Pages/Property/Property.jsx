import PropertyHero from "./sections/PropertyHero";
import Properties from "./sections/Properties";
import Message from "./sections/Message";

const Property = () => {
  return (
    <>
      <PropertyHero />
      <div className="lg:mt-0 md:mt-0">
        <Properties />
        <Message />
      </div>
    </>
  );
};

export default Property;
