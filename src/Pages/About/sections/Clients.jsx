import { useEffect, useState } from "react";
import SwiperSlideLayout from "../../../Components/SwiperSlideLayout";
import mockData from "../../../assets/mock_data.json";
import { Apps, Bolt } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
        disableAt={2}
        description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        breakpoints={{
          400: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        useWFit={true}
        navPrevId="prev-button3"
        navNextId="next-button3"
        renderSlide={(client) => (
          <div className="w-full h-full">
            <div className="w-full lg:h-[32rem] md:h-[35rem] h-full border-[.5rem] border-white/5 rounded-xl p-7">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-2">
                  <h5 className="text-xl text-white/70 font-medium">
                    since {client.since}
                  </h5>
                  <h2 className="text-3xl font-medium">{client.name}</h2>
                </div>

                <button className="text-2xl  md:block hidden font-medium bg-white/10 border-2 rounded-xl py-3 px-6 border-white/5 capitalize">
                  <Link to={client.website}>visit website</Link>
                </button>
              </div>

              <div className="flex md:hidden w-full my-10">
                <button className="text-2xl w-full h-[5rem] hover:scale-95 font-medium bg-white/10 border-2 rounded-xl py-3 px-6 border-white/5 capitalize">
                  <Link to={client.website}>visit website</Link>
                </button>
              </div>

              <div className="my-10 flex justify-between w-full items-center">
                <div className="flex flex-col gap-y-2 border-r-2 w-full border-white/5">
                  <div className="flex items-center text-white/70 gap-x-2">
                    <Apps className="!text-4xl" />
                    <span className="text-xl font-medium">domain</span>
                  </div>
                  <h3 className="text-2xl">{client.domain}</h3>
                </div>

                <div className="flex flex-col gap-y-2 w-full place-content-end items-end">
                  <div className="flex items-center text-white/70 gap-x-2">
                    <Bolt className="!text-4xl" />
                    <span className="text-xl font-medium">category</span>
                  </div>
                  <h3 className="text-2xl">{client.category}</h3>
                </div>
              </div>

              <div className="w-full p-7 rounded-xl border-2 mb-5 border-white/5">
                <h3 className="text-xl text-white/70 pb-5">what they said</h3>
                <p className="text-2xl font-medium normal-case">
                  {client.testimonial}
                </p>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Clients;
