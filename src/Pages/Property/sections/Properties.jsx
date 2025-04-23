import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import SwiperSlideLayout from "../../../Components/SwiperSlideLayout";
import mockData from "../../../assets/mock_data.json";
import { useNavigate } from "react-router-dom";
import { Bathtub, BedRounded, Villa } from "@mui/icons-material";
import { Button } from "../../../Components/general/Button";

const Properties = () => {
  const [results, setResults] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;

  // Memoize the full properties list
  const allProperties = useMemo(() => mockData.properties || [], []);

  useEffect(() => {
    // Calculate the properties to show based on current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    setResults(allProperties.slice(indexOfFirstProperty, indexOfLastProperty));
  }, [currentPage, allProperties]);

  // Load more properties when reaching the end
  const loadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const toggleDescription = (propertyId) => {
    setExpandedDescriptions((prev) => ({
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

  return (
    <div className="w-full h-full">
      <div className="">
        <SwiperSlideLayout
          items={results}
          title="discover a world of possibilities"
          hideButton={true}
          disableAt={2}
          description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
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
            <div className="border-2 border-white/5 rounded-xl p-6 w-full h-fit shadow-lg hover:shadow-xl transition-all">
              <div className="">
                <img src={result.image_url} alt={result.property_name} className="w-full h-[25rem] object-cover rounded-xl" />
              </div>

              <div className="mt-4">
                <h3 className="text-3xl font-semibold">{result.property_name}</h3>
                <div className="my-3">
                  <p className={`text-2xl normal-case text-white/70 overflow-hidden ${!expandedDescriptions[result.property_id] ? "line-clamp-2" : ""}`}>
                    {result.description}
                  </p>
                  <span
                    onClick={() => toggleDescription(result.property_id)}
                    className="font-medium text-2xl text-white cursor-pointer underline hover:no-underline"
                  >
                    {expandedDescriptions[result.property_id] ? "show less" : "read more"}
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

        {results.length === allProperties.length ? (
          <div className="w-full flex justify-center mt-10">
            <h3 className="text-3xl font-semibold text-center text-white/70">more properties coming soon!</h3>
          </div>
        ) : (
          <div className="w-full flex justify-center mt-10">
            <button onClick={loadMore} className="bg-purple-600 hover:scale-95 text-white font-bold py-4 px-6 rounded-lg text-2xl">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
