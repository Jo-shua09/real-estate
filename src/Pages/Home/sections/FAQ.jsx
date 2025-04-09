import React from "react";
import SectionIntro from "../../../Components/SectionIntro";

const FAQ = () => {
  return (
    <div className="w-full section">
      <SectionIntro
        title="frequently asked questions"
        name="view all FAQ's"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      />

      {/* <div className="mt-16">
        <Swiper
          spaceBetween={10}
          onSlideChange={handleSlideChange}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.slice(0, 30).map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="border py-10 px-8 border-white/5 rounded-xl w-full p-6 h-[25rem] flex flex-col gap-y-7 ">
                <div className="flex items-center gap-x-1">
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

                <p className="my-3 normal-case text-2xl font-medium">
                  {testimonial.comment}
                </p>

                <div className=" flex justify-between items-end w-full">
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
              {testimonials.slice(0, 30).length}
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
                {testimonials.slice(0, 30).length}
              </div>

              <ArrowForward
                id="next-button"
                className={`!text-6xl border border-white/5 cursor-pointer flex items-center rounded-full p-3 ${
                  currentSlide == testimonials.slice(0, 26).length
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-black/30"
                }`}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FAQ;
