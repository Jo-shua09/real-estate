import React, { useEffect, useState } from "react";
import Abstract from "/src/assets/images/general/Abstract.svg";
import PropertyCard from "../../../Components/PropertyCard";

const Featured = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/mock_data.json")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  return (
    <div className="w-full section">
      <div className="w-full">
        <img
          src={Abstract}
          alt="abstract image"
          className="w-fit h-fit object-cover"
        />
        <div className="flex items-end justify-between md:gap-x-96 my-5 w-full">
          <div className="flex-[2] flex flex-col gap-y-5">
            <h3 className="text-5xl font-semibold">featured properties</h3>
            <p className="normal-case text-white/70 text-2xl">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
          </div>
          <button className="w-fit h-[5rem] hidden items-center md:flex justify-center capitalize rounded-xl py-4 px-7 bg-black/20 border border-white/5 hover:bg-purple-600 text-2xl font-semibold">
            view all properties
          </button>
        </div>
      </div>

      <div className="my-16 grid lg:grid-cols-3 grid-cols-1 m-auto gap-5">
        {properties.slice(0, 30).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
