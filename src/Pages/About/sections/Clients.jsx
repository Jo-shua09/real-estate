import { useEffect, useState } from "react";
import SwiperSlideLayout from "../../../Components/SwiperSlideLayout";
import mockData from "../../../assets/mock_data.json";

const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    setClients(mockData.clients || []);
  }, []);

  return (
    <div className="w-full h-full">
      <SwiperSlideLayout
        items={clients}
        title=" our value clients"
        hideButton={true}
        description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        breakpoints={{
          400: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        useWFit={true}
        navPrevId="prev-button3"
        navNextId="next-button3"
        renderSlide={(client) => (
          <div className="">
            <div className="">{client.name}</div>
          </div>
        )}
      />
    </div>
  );
};

export default Clients;
