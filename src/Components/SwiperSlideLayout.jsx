import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SectionIntro from "./SectionIntro";
import { Button2 } from "./general/Button";
import "swiper/css";
import "swiper/css/navigation";

const SwiperSlideLayout = ({
  items = [],
  title,
  description,
  buttonText,
  linkPath,
  renderSlide,
  navPrevId,
  navNextId,
  breakpoints,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="w-full section h-full">
      <SectionIntro
        title={title}
        description={description}
        name={buttonText}
        linkPath={linkPath}
      />

      <div className="mt-16">
        <Swiper
          spaceBetween={10}
          onSlideChange={handleSlideChange}
          modules={[Navigation]}
          navigation={{
            nextEl: `#${navNextId}`,
            prevEl: `#${navPrevId}`,
          }}
          breakpoints={
            breakpoints || {
              400: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }
          }
        >
          {items.slice(0, 30).map((item) => (
            <SwiperSlide key={item.uniqueId || item.property_id}>
              {renderSlide(item)}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="border-t border-white/5 mt-10">
          <div className="mt-2 flex justify-between w-full items-center">
            <div className="md:flex hidden text-xl normal-case font-semibold">
              {String(currentSlide + 1).padStart(2, "0")} of{" "}
              {items.slice(0, 30).length}
            </div>

            <div className="md:hidden flex">
              <Button2 name={buttonText} linkPath={linkPath} />
            </div>

            <div className="flex items-center gap-x-5">
              <ArrowBack
                id={navPrevId}
                className={`!text-6xl border border-white/5 cursor-pointer flex items-center rounded-full p-3 ${
                  currentSlide === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-black/30"
                }`}
              />

              <div className="md:hidden flex text-xl normal-case font-semibold">
                {String(currentSlide + 1).padStart(2, "0")} of{" "}
                {items.slice(0, 30).length}
              </div>

              <ArrowForward
                id={navNextId}
                className={`!text-6xl border border-white/5 cursor-pointer flex items-center rounded-full p-3 ${
                  currentSlide === items.slice(0, 30).length - 1
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

export default SwiperSlideLayout;
