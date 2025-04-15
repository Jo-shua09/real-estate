import SearchProperty from "./SearchProperty";

const PropertyHero = ({ setSearchResults, setShowResults }) => {
  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className="w-full px-[2.5rem] h-full py-32 bg-gradient-to-br from-white/5 to-black">
          <h1 className="text-4xl font-semibold">find your dream property</h1>
          <p className="text-2xl md:w-[80%] text-white/70 normal-case font-normal my-5">
            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each
            offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey
          </p>
        </div>
        <div className="w-full m-auto flex  items-center justify-center">
          <SearchProperty setSearchResults={setSearchResults} setShowResults={setShowResults} />
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
