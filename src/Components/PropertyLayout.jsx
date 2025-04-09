import Abstract from "/src/assets/images/general/Abstract.png";
import "swiper/css";
import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button2 } from "./general/Button";
import { Link } from "react-router-dom";

const PropertyLayout = ({ title, description }) => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/mock_data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to load data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src={Abstract}
          alt="abstract image"
          className="w-fit h-fit object-cover"
        />
        <div className="flex items-end justify-between md:gap-x-96 my-5 w-full">
          <div className="flex-[2] flex flex-col gap-y-5">
            <h3 className="text-5xl font-semibold">{title}</h3>
            <p className="normal-case text-white/70 text-2xl">{description}</p>
          </div>
          <Link to="/property">
            <div className="">
              <Button2 name="View All Properties" />
            </div>
          </Link>
        </div>
      </div>

      <div className="my-16">
        <Swiper
          spaceBetween={10}
          onSlideChange={handleSlideChange}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {properties.slice(0, 30).map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="border-t border-white/5 mt-10">
          <div className="mt-2 flex justify-between w-full">
            <div className="text-xl normal-case font-semibold">
              {String(currentSlide + 1).padStart(2, "0")} of{" "}
              {properties.slice(0, 30).length}
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLayout;
