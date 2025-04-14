import SwiperSlideLayout from "../../../Components/SwiperSlideLayout";

const Clients = () => {
  return (
    <div className="w-full h-full">
      <SwiperSlideLayout
        title=" our value clients"
        hideButton={true}
        description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        breakpoints={{
          400: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        useWFit={true}
      />
    </div>
  );
};

export default Clients;
