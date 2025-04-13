import SectionIntro from "../../../Components/SectionIntro";

const Navigate = () => {
  return (
    <div className="w-full section h-full flex flex-col gap-y-10">
      <SectionIntro
        title="navigation the estantien experience"
        description="At estantien, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
        hideButton={true}
      />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center w-full gap-10 ">
        <div className="w-full h-fit border-l hover:border transition-all duration-200 cursor-pointer hover:rounded-xl rounded-bl-xl border-purple-600">
          <h4 className="py-5 px-4 text-2xl font-semibold">step 01</h4>
          <div className="border-2 border-white/5 rounded-xl rounded-tl-none p-10 flex flex-col gap-y-5">
            <h2 className="text-2xl font-semibold normal-case">
              Discover a World of Possibilities
            </h2>
            <p className="text-xl font-medium normal-case text-white/70">
              Your journey begins with exploring our carefully curated property
              listings. Use our intuitive search tools to filter properties
              based on your preferences, including location,
            </p>
          </div>
        </div>

        <div className="w-full h-fit border-l hover:border transition-all duration-200 cursor-pointer hover:rounded-xl rounded-bl-xl border-purple-600">
          <h4 className="py-5 px-4 text-2xl font-semibold">step 02</h4>
          <div className="border-2 border-white/5 rounded-xl rounded-tl-none p-10 flex flex-col gap-y-5">
            <h2 className="text-2xl font-semibold normal-case">
              Narrowing Down Your Choices
            </h2>
            <p className="text-xl font-medium normal-case text-white/70">
              Once you've found properties that catch your eye, save them to
              your account or make a shortlist. This allows you to compare and
              revisit your favorites as you make your decision.
            </p>
          </div>
        </div>

        <div className="w-full h-fit border-l hover:border transition-all duration-200 cursor-pointer hover:rounded-xl rounded-bl-xl border-purple-600">
          <h4 className="py-5 px-4 text-2xl font-semibold">step 03</h4>
          <div className="border-2 border-white/5 rounded-xl rounded-tl-none p-10 flex flex-col gap-y-5">
            <h2 className="text-2xl font-semibold normal-case">
              Personalized Guidance
            </h2>
            <p className="text-xl font-medium normal-case text-white/70">
              Have questions about a property or need more information? Our
              dedicated team of real estate experts is just a call or message
              away.
            </p>
          </div>
        </div>

        <div className="w-full h-fit border-l hover:border transition-all duration-200 cursor-pointer hover:rounded-xl rounded-bl-xl border-purple-600">
          <h4 className="py-5 px-4 text-2xl font-semibold">step 04</h4>
          <div className="border-2 border-white/5 rounded-xl rounded-tl-none p-10 flex flex-col gap-y-5">
            <h2 className="text-2xl font-semibold normal-case">
              See It for Yourself
            </h2>
            <p className="text-xl font-medium normal-case text-white/70">
              Arrange viewings of the properties you're interested in. We'll
              coordinate with the property owners and accompany you to ensure
              you get a firsthand look at your potential new home.
            </p>
          </div>
        </div>

        <div className="w-full h-fit border-l hover:border transition-all duration-200 cursor-pointer hover:rounded-xl rounded-bl-xl border-purple-600">
          <h4 className="py-5 px-4 text-2xl font-semibold">step 05</h4>
          <div className="border-2 border-white/5 rounded-xl rounded-tl-none p-10 flex flex-col gap-y-5">
            <h2 className="text-2xl font-semibold normal-case">
              Making Informed Decisions
            </h2>
            <p className="text-xl font-medium normal-case text-white/70">
              Before making an offer, our team will assist you with due
              diligence, including property inspections, legal checks, and
              market analysis. We want you to be fully informed.
            </p>
          </div>
        </div>

        <div className="w-full h-fit border-l hover:border transition-all duration-200 cursor-pointer hover:rounded-xl rounded-bl-xl border-purple-600">
          <h4 className="py-5 px-4 text-2xl font-semibold">step 06</h4>
          <div className="border-2 border-white/5 rounded-xl rounded-tl-none p-10 flex flex-col gap-y-5">
            <h2 className="text-2xl font-semibold normal-case">
              Getting the Best Deal
            </h2>
            <p className="text-xl font-medium normal-case text-white/70">
              We'll help you negotiate the best terms and prepare your offer.
              Our goal is to secure the property at the right price and on
              favorable terms.
            </p>
          </div>
        </div>

        {/* {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="w-full h-fit border-l rounded-bl-xl border-purple-600"
          >
            <h4 className="py-5 px-4 text-2xl font-semibold">step 06</h4>
            <div className="border-2 border-white/5 rounded-xl rounded-tl-none p-10 flex flex-col gap-y-5">
              <h2 className="text-2xl font-semibold normal-case">
                Getting the Best Deal
              </h2>
              <p className="text-xl font-medium normal-case text-white/70">
                We'll help you negotiate the best terms and prepare your offer.
                Our goal is to secure the property at the right price and on
                favorable terms.
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Navigate;
