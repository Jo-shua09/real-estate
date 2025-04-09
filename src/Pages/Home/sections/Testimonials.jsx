import "swiper/css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowBack, ArrowForward, Star } from "@mui/icons-material";
import HeaderIntro from "../../../Components/HeaderIntro";
import { Button2 } from "../../../Components/general/Button";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/mock_data.json")
      .then((res) => res.json())
      .then((data) => {
        // Collect all comments from all properties
        const allComments = data.flatMap((property) => property.comments);
        setTestimonials(allComments);
      });
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="w-full section h-full">
      <HeaderIntro
        name="view all testimonials"
        title="what our client say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      />

      <div className="mt-16">
        <Swiper
          spaceBetween={10}
          onSlideChange={handleSlideChange}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="border py-10 px-8 border-white/5 rounded-xl p-6 h-full">
                <div className="flex items-center gap-x-1 mb-14">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`bg-white/5 border border-white/5 p-2 rounded-full !text-5xl ${
                        index < testimonial.rating
                          ? "text-yellow-500"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>

                <p className="my-10 normal-case text-2xl font-medium">
                  {testimonial.comment}
                </p>

                <div className=" flex items-end border justify-between">
                  <div className="flex items-center gap-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-2xl font-semibold">
                        {testimonial.author}
                      </h4>
                      <p className="text-white/70 text-xl">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-white/70 text-xl">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="border-t border-white/5 mt-10">
          <div className="mt-2 flex justify-between w-full items-center">
            <div className="md:flex hidden text-xl normal-case font-semibold">
              {String(currentSlide + 1).padStart(2, "0")} of{" "}
              {testimonials.length}
            </div>
            <div className="md:hidden flex">
              <Button2 name="View All Testimonials" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
