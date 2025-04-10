import bannerLeft from "../../assets/Images/General/banner-left.svg";
import bannerRight from "../../assets/Images/General/banner-right.svg";

const Banner = () => {
  return (
    <div className="w-full my-20 !mb-0 border border-l-0 border-r-0 border-white/5">
      <div className="relative w-full h-full">
        <div className="flex justify-between w-full">
          <img
            src={bannerLeft}
            alt="banner left image"
            className="w-fit h-[32rem] md:h-[28rem] brightness-75"
          />

          <img
            src={bannerRight}
            alt="banner left image"
            className="w-fit brightness-75 h-[32rem] md:h-[28rem]"
          />
        </div>
        <div className="flex section items-center md:flex-nowrap flex-wrap justify-between gap-y-10 w-full absolute md:top-16 top-0 left-0">
          <div className="md:flex-[2] flex flex-col gap-y-5 w-full">
            <h1 className="md:text-5xl text-3xl font-semibold">
              Start Your Real Estate Journey Today
            </h1>
            <p className="text-2xl text-white/70 normal-case font-medium">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <div className="md:flex-1 md:w-fit w-full place-content-end items-end flex">
            <button className="bg-purple-600 hover:scale-95 rounded-xl md:w-fit w-full h-[5rem] text-2xl font-semibold capitalize flex items-center justify-center py-5 px-7 hover:bg-purple-900>">
              explore properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
