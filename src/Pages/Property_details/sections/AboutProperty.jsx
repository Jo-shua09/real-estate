import { LocationOn } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const AboutProperty = () => {
  const Location = useLocation();
  const { property_name, location, price } = Location.state || [];

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

      <div className="w-full p-10 md:p-7 border-2 border-white/5 bg-white/5 my-10 rounded-xl">
        <div className=""></div>
      </div>
    </div>
  );
};

export default AboutProperty;
