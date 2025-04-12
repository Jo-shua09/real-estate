import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import SwiperSlideLayout from "./SwiperSlideLayout";
import mockData from "../assets/mock_data.json";

const PropertyLayout = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProperties(mockData.properties || []);
    setIsLoading(false);
  }, []);

  if (isLoading) return <div>Loading contents</div>;

  return (
    <SwiperSlideLayout
      items={properties}
      title="Featured Properties"
      description="Explore our handpicked selection of featured properties..."
      buttonText="View All Properties"
      linkPath="/properties"
      navPrevId="prev-button"
      navNextId="next-button"
      renderSlide={(property) => <PropertyCard property={property} />}
    />
  );
};

export default PropertyLayout;
