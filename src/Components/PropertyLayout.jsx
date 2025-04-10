import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import SwiperSlideLayout from "./SwiperSlideLayout";

const PropertyLayout = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/mock_data.json")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties || []);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <SwiperSlideLayout
      items={properties}
      title="Featured Properties"
      description="Explore our handpicked selection of featured properties..."
      buttonText="View All Properties"
      linkPath="/property"
      navPrevId="prev-button"
      navNextId="next-button"
      renderSlide={(property) => <PropertyCard property={property} />}
    />
  );
};

export default PropertyLayout;
