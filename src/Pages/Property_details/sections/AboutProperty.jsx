import { LocationOn } from "@mui/icons-material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const AboutProperty = () => {
  const Location = useLocation();
  const { property_name, location, price, virtual_tour_url, floor_plan_image, image_url } = Location.state || [];

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

      <div className="my-10 md:flex-nowrap sm:flex-wrap w-full flex items-start gap-10 justify-between">
        <div className="flex-1 w-full"></div>
        <div className="flex-1 w-full"></div>
      </div>
    </div>
  );
};

export default AboutProperty;
