import { Search } from "@mui/icons-material";

const PropertyHero = () => {
  return (
    <div className="w-full h-full section-page bg-gradient-to-br from-white/5 to-black">
      <div className="py-20 w-full">
        <h1 className="text-4xl font-semibold">find your dream property</h1>
        <p className="text-2xl text-white/70 normal-case font-normal my-5">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey
        </p>
      </div>
      <div className="flex m-auto justify-center flex-col items-center">
        <div className="w-[90%] rounded-t-xl border-[.5rem] relative border-white/5 flex">
          <input
            type="text"
            placeholder="Search for a property"
            className="text-2xl font-medium placeholder:text-white/70 normal-case pl-3 bg-transparent w-full md:h-[4.5rem] h-[5rem]"
          />
          <button className="bg-purple-600 py-3 px-5 gap-x-2 flex rounded-xl text-nowrap items-center capitalize text-2xl font-medium hover:scale-95 m-1">
            <Search className="!text-4xl" />
            find property
          </button>
        </div>
        <div className="border-[.5rem] w-full rounded-xl border-white/5"></div>
      </div>
    </div>
  );
};

export default PropertyHero;
