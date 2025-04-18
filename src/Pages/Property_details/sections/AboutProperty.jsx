import { Bathroom, Bed, Bolt, Calculate, Light, LocationOn } from "@mui/icons-material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const AboutProperty = () => {
  const Location = useLocation();
  const { property_name, location, price, virtual_tour_url, floor_plan_image, image_url, description, bedrooms, bathrooms, size_sqft, features, amenities } =
    Location.state || [];

  const [mainImage, setMainImage] = useState(image_url);
  const [secondaryImages, setSecondaryImages] = useState({
    first: floor_plan_image,
    second: virtual_tour_url,
  });

  const handleImageSwap = (clickedImage) => {
    setMainImage((prevMain) => {
      if (clickedImage === secondaryImages.first) {
        setSecondaryImages({
          first: prevMain,
          second: secondaryImages.second,
        });
      } else {
        setSecondaryImages({
          first: secondaryImages.first,
          second: prevMain,
        });
      }
      return clickedImage;
    });
  };

  return (
    <div className="w-full section">
      <h2 className="text-4xl font-semibold py-3">{property_name}</h2>
      <div className="flex items-center justify-between w-full gap-10">
        <div className="flex items-center gap-x-2">
          <LocationOn className="!text-4xl" />
          <span className="text-2xl font-medium text-white/70">{location}</span>
        </div>
        <div className="text-3xl font-semibold">
          <h5 className="text-xl text-white/70 font-medium">price</h5>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      </div>

      <div className="w-full p-5 md:p-10 border-2 border-white/5 bg-white/5 my-10 rounded-xl">
        <div className="flex flex-col gap-10 w-full">
          <div className="w-full h-full">
            <img src={mainImage} alt="image of property" className="w-full h-[45rem] object-cover rounded-xl" />
          </div>

          <div className="flex items-center justify-between gap-10">
            <div className="w-full h-full flex-1">
              <img
                src={secondaryImages.first}
                alt="floor plan image"
                onClick={() => handleImageSwap(secondaryImages.first)}
                className="w-full sm:h-[20rem] h-[15rem] cursor-pointer object-cover rounded-xl sm:brightness-50 sm:hover:brightness-95"
              />
            </div>

            <div className="w-full h-full flex-1">
              <img
                src={secondaryImages.second}
                alt="virtual tour image"
                onClick={() => handleImageSwap(secondaryImages.second)}
                className="w-full sm:h-[20rem] h-[15rem] cursor-pointer object-cover rounded-xl sm:brightness-50 sm:hover:brightness-95"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 md:flex-nowrap flex-wrap w-full flex items-start md:gap-10 gap-7 justify-between">
        <div className="md:flex-1 w-full border-2 flex flex-col gap-10 sm:gap-12 border-white/5 p-10 md:p-5 rounded-xl">
          <div className="w-full flex flex-col gap-y-3">
            <h3 className="text-4xl font-semibold">description</h3>
            <p className="text-white/70 normal-case font-medium text-2xl">{description}</p>
          </div>

          <div className="border-t-2 pt-5 border-white/5 w-full flex items-center justify-between">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex gap-x-2 items-center text-2xl text-white/70 w-full">
                <Bed className="!text-4xl" /> bedrooms
              </div>
              <div className="text-3xl font-semibold">0{bedrooms}</div>
            </div>
            <div className="flex flex-col gap-y-4 w-full border-l-2 border-white/5 pl-5">
              <div className="flex gap-x-2 items-center text-2xl text-white/70 w-full">
                <Bathroom className="!text-4xl" /> bathrooms
              </div>
              <div className="text-3xl font-semibold">0{bathrooms}</div>
            </div>
            <div className="sm:flex hidden flex-col gap-y-4 w-full border-l-2 border-white/5 pl-5">
              <div className="flex gap-x-2 items-center text-2xl text-white/70 w-full">
                <Calculate className="!text-4xl" /> area
              </div>
              <div className="text-3xl font-semibold">{size_sqft} square feet</div>
            </div>
          </div>
          <div className="flex sm:hidden flex-col gap-y-4 w-full border-t-2 border-white/5 pt-5">
            <div className="flex gap-x-2 items-center text-2xl text-white/70 w-full">
              <Calculate className="!text-4xl" /> area
            </div>
            <div className="text-3xl font-semibold">{size_sqft} square feet</div>
          </div>
        </div>

        <div className="md:flex-1 w-full border-2 border-white/5 p-10 md:p-5 rounded-xl">
          <h2 className="text-4xl font-semibold mb-8">key features and amenities</h2>

          <div className="flex flex-col gap-y-8">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Features</h3>
              <div className="space-y-3">
                {features?.map((feature, index) => (
                  <div
                    key={index}
                    className="text-2xl border-purple-600 px-2 py-5 gap-x-2 items-center flex border-l-2 bg-gradient-to-r from-white/5 to-transparent font-medium text-white/70"
                  >
                    <Bolt className="!text-4xl !text-white" /> {feature}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-4">Amenities</h3>
              <div className="space-y-3">
                {amenities?.map((amenity, index) => (
                  <div
                    key={index}
                    className="text-2xl border-purple-600 px-2 py-5 gap-x-2 items-center flex border-l-2 bg-gradient-to-r from-white/5 to-transparent font-medium text-white/70"
                  >
                    <Bolt className="!text-4xl !text-white" /> {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default AboutProperty;
