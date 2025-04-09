import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SectionIntro from "./SectionIntro";
import { Button2 } from "./general/Button";

const PropertyLayout = () => {
  const [properties, setProperties] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("/mock_data.json")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="w-full">
      <SectionIntro
        description="  Explore our handpicked selection of featured properties. Each
       listing offers a glimpse into exceptional homes and investments
       available through Estatein. Click 'View Details' for more
       information."
        title="Featured Properties"
        name="View All Properties"
        linkPath="/property"
      />

      <div className="mt-16">
        <Swiper
          spaceBetween={10}
          onSlideChange={handleSlideChange}
          modules={[Navigation]}
          navigation={{
            nextEl: "#next-button",
            prevEl: "#prev-button",
          }}
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
          <div className="mt-2 flex justify-between w-full items-center">
            <div className="md:flex hidden text-xl normal-case font-semibold">
              {String(currentSlide + 1).padStart(2, "0")} of{" "}
              {properties.slice(0, 30).length}
            </div>
            <div className="md:hidden flex">
              <Button2 name="View All Properties" />
            </div>

            <div className="flex items-center gap-x-5">
              <ArrowBack
                id="prev-button"
                className={`!text-6xl border border-white/5 cursor-pointer flex items-center rounded-full p-3 ${
                  currentSlide == 0
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-black/30"
                }`}
              />

              <div className="md:hidden flex text-xl normal-case font-semibold">
                {String(currentSlide + 1).padStart(2, "0")} of{" "}
                {properties.slice(0, 30).length}
              </div>

              <ArrowForward
                id="next-button"
                className={`!text-6xl border border-white/5 cursor-pointer flex items-center rounded-full p-3 ${
                  currentSlide == properties.slice(0, 27).length
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-black/30"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLayout;
