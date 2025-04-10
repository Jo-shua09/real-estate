import { useEffect, useState } from "react";
import SwiperSlideLayout from "../../../Components/SwiperSlideLayout";
import { Star } from "@mui/icons-material";
import mockData from "../../../assets/mock_data.json"; // Add this import

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const allComments =
      mockData.properties?.flatMap((property) =>
        (property.comments || []).map((comment) => ({
          ...comment,
          uniqueId: `${property.property_id}-${comment.id}`,
        }))
      ) || [];
    setTestimonials(allComments);
  }, []);

  return (
    <SwiperSlideLayout
      items={testimonials}
      title="What our clients say"
      description="Read the success stories and heartfelt testimonials..."
      buttonText="View All Testimonials"
      linkPath=""
      navPrevId="prev-button2"
      navNextId="next-button2"
      breakpoints={{
        400: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      renderSlide={(testimonial) => (
        <div className="border-2 py-10 px-8 border-white/5 rounded-xl w-full p-6 h-[25rem] flex flex-col gap-y-7">
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
          <div className="flex justify-between items-end w-full">
            <div className="flex items-center gap-x-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h4 className="text-2xl font-semibold">{testimonial.author}</h4>
                <p className="text-white/70 text-xl">{testimonial.location}</p>
              </div>
            </div>
            <span className="text-white/70 text-xl">{testimonial.date}</span>
          </div>
        </div>
      )}
    />
  );
};

export default Testimonials;
