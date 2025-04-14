import SearchProperty from "./SearchProperty";

const PropertyHero = () => {
  return (
    <div className="w-full h-full section-page bg-gradient-to-br from-white/5 to-black">
      <div className="py-20 md:pb-32 relative">
        <div className="w-full">
          <h1 className="text-4xl font-semibold">find your dream property</h1>
          <p className="text-2xl text-white/70 normal-case font-normal my-5">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        </div>
        <div className="w-full md:z-10 md:absolute m-auto flex items-center mt-16 justify-center">
          <SearchProperty />
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
