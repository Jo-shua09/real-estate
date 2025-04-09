import { Bathtub, BedRounded, Villa } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./general/Button";

const PropertyCard = ({ property }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const navigate = useNavigate();
  const handlePropertyClick = (property) => {
    navigate(`/property/${property.property_name}`, {
      state: {
        ...property,
      },
    });
  };

  return (
    <div className="border border-white/5 rounded-xl p-6 w-full h-fit shadow-lg hover:shadow-xl transition-all">
      <div className="">
        <img
          src={property.image_url}
          alt={property.property_name}
          className="w-full h-[25rem] object-cover rounded-xl"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-3xl font-semibold">{property.property_name}</h3>
        <div className="my-3">
          <p
            className={`text-2xl normal-case text-white/70 overflow-hidden ${
              !show ? "line-clamp-2" : ""
            }`}
          >
            {property.description}
          </p>
          <span
            onClick={handleShow}
            className={`font-medium text-2xl text-white cursor-pointer underline hover:no-underline`}
          >
            {show ? "show less" : "read more"}
          </span>
        </div>

        <div className="flex justify-between gap-x-3 my-4 items-center w-full">
          <div className="rounded-full px-5 py-2 flex gap-x-2 bg-black/20 border-white/5 border items-center justify-center">
            <BedRounded className="!text-5xl" />
            <span className="text-xl text-nowrap font-semibold flex items-center">
              {property.bedrooms}-bedrooms
            </span>
          </div>

          <div className="rounded-full px-5 py-2 flex gap-x-2 bg-black/20 border-white/5 border items-center justify-center">
            <Bathtub className="!text-5xl" />
            <span className="text-xl text-nowrap font-semibold flex items-center">
              {property.bathrooms}-bathrooms
            </span>
          </div>

          <div className="rounded-full px-5 py-2 flex gap-x-2 bg-black/20 border-white/5 border items-center justify-center">
            <Villa className="!text-5xl" />
            <span className="text-xl text-nowrap font-semibold flex items-center">
              {property.property_type}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 w-full">
          <div className="flex flex-col gap-y-2">
            <span className="text-xl text-white/70">price</span>
            <p className="text-3xl font-semibold">
              ${property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div onClick={() => handlePropertyClick(property)}>
            <Button name="view property details" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
