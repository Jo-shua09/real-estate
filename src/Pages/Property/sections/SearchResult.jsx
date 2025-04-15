import React from "react";
import { useState } from "react";
import SwiperSlideLayout from "../../../Components/SwiperSlideLayout";
import { useNavigate } from "react-router-dom";
import { Bathtub, BedRounded, Villa } from "@mui/icons-material";
import { Button } from "../../../Components/general/Button";

const SearchResult = ({ properties = [] }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const handleShow = (propertyId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [propertyId]: !prev[propertyId],
    }));
  };

  const navigate = useNavigate();
  const handlePropertyClick = (result) => {
    navigate(`/properties/${result.property_name}`, {
      state: {
        ...result,
      },
    });
  };

  if (properties.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center py-10">
        <h3 className="text-3xl font-semibold text-center">No Properties Found</h3>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {properties.length < 3 ? (
        // Single property view
        <div className="flex flex-col mt-10 gap-y-5 justify-center items-center">
          <h3 className="text-3xl font-semibold"> your search results</h3>
          <div className="max-w-4xl flex items-center justify-center gap-5 md:flex-nowrap flex-wrap mx-auto">
            {properties.map((result) => (
              <div key={result.property_id} className="border-2 border-white/5 rounded-xl p-6 w-full h-fit shadow-xl hover:shadow-xl transition-all">
                <div className="">
                  <img src={result.image_url} alt={result.property_name} className="w-full h-[25rem] object-cover rounded-xl" />
                </div>

                <div className="mt-4">
                  <h3 className="text-3xl font-semibold">{result.property_name}</h3>
                  <div className="my-3">
                    <p className={`text-2xl normal-case text-white/70 overflow-hidden ${!expandedCards[result.property_id] ? "line-clamp-2" : ""}`}>
                      {result.description}
                    </p>
                    <span
                      onClick={() => handleShow(result.property_id)}
                      className="font-medium text-2xl text-white cursor-pointer underline hover:no-underline"
                    >
                      {expandedCards[result.property_id] ? "show less" : "read more"}
                    </span>
                  </div>

                  <div className="flex justify-between gap-x-2 my-6 items-center w-full">
                    <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                      <BedRounded className="!text-5xl" />
                      <span className="text-xl text-nowrap font-semibold flex items-center">{result.bedrooms}-bedrooms</span>
                    </div>
                    <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                      <Bathtub className="!text-5xl" />
                      <span className="text-xl text-nowrap font-semibold flex items-center">{result.bathrooms}-bathrooms</span>
                    </div>
                    <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                      <Villa className="!text-5xl" />
                      <span className="text-xl text-nowrap font-semibold flex items-center">{result.property_type}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-10 w-full">
                    <div className="flex flex-col gap-y-2">
                      <span className="text-xl text-white/70">price</span>
                      <p className="text-3xl font-semibold">${result.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                    <div onClick={() => handlePropertyClick(result)}>
                      <Button name="view property details" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Multiple properties view with Swiper
        <SwiperSlideLayout
          items={properties}
          hide={true}
          title="search results"
          hideButton={true}
          disableAt={2}
          description="Here are the properties that match your search criteria"
          breakpoints={{
            400: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          useWFit={true}
          sliceRange={[]}
          navPrevId="prev-button3"
          navNextId="next-button3"
          renderSlide={(result) => (
            <div className="border-2 border-white/5 rounded-xl p-6 w-full h-fit shadow-xl hover:shadow-xl transition-all">
              <div className="">
                <img src={result.image_url} alt={result.property_name} className="w-full h-[25rem] object-cover rounded-xl" />
              </div>

              <div className="mt-4">
                <h3 className="text-3xl font-semibold">{result.property_name}</h3>
                <div className="my-3">
                  <p className={`text-2xl normal-case text-white/70 overflow-hidden ${!expandedCards[result.property_id] ? "line-clamp-2" : ""}`}>
                    {result.description}
                  </p>
                  <span onClick={() => handleShow(result.property_id)} className="font-medium text-2xl text-white cursor-pointer underline hover:no-underline">
                    {expandedCards[result.property_id] ? "show less" : "read more"}
                  </span>
                </div>

                <div className="flex justify-between gap-x-2 my-6 items-center w-full">
                  <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                    <BedRounded className="!text-5xl" />
                    <span className="text-xl text-nowrap font-semibold flex items-center">{result.bedrooms}-bedrooms</span>
                  </div>
                  <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                    <Bathtub className="!text-5xl" />
                    <span className="text-xl text-nowrap font-semibold flex items-center">{result.bathrooms}-bathrooms</span>
                  </div>
                  <div className="flex-1 rounded-full px-2 py-2 flex gap-x-2 bg-white/5 border-white/5 border-2 items-center justify-center">
                    <Villa className="!text-5xl" />
                    <span className="text-xl text-nowrap font-semibold flex items-center">{result.property_type}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-10 w-full">
                  <div className="flex flex-col gap-y-2">
                    <span className="text-xl text-white/70">price</span>
                    <p className="text-3xl font-semibold">${result.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  </div>
                  <div onClick={() => handlePropertyClick(result)}>
                    <Button name="view property details" />
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      )}
    </div>
  );
};

export default SearchResult;
