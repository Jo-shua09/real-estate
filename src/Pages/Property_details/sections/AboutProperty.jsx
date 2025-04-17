import { useLocation } from "react-router-dom";

const AboutProperty = () => {
  const Location = useLocation();
  const { property_name } = Location.state || [];

  return (
    <div className="w-full section-page">
      <h2 className="text-4xl font-semibold py-5">{property_name}</h2>
      <div className=""></div>
    </div>
  );
};

export default AboutProperty;
