import React from "react";
import SectionIntro from "../../../Components/SectionIntro";
import { useLocation } from "react-router-dom";

const PricingDetails = () => {
  const location = useLocation();
  const { price } = location.state || [];

  return (
    <div className="w-full section">
      <SectionIntro
        title="comprehensive pricing details"
        description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
        hideButton={true}
      />
      <div className="w-full border-2 bg-white/5 border-white/5 my-16 p-5 rounded-xl flex items-center gap-x-5 ">
        <h3 className="text-3xl font-semibold border-r-2 px-5 border-white/5">note</h3>
        <p className="text-xl text-white/70 normal-case">
          The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
        </p>
      </div>

      <div className="w-full flex sm:flex-nowrap flex-wrap items-start gap-10 justify-between">
        <div className="flex flex-col gap-y-2 sm:flex-1">
          <h3 className="text-xl text-white/70">listing price</h3>
          <p className="text-3xl font-semibold">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <div className="w-full sm:flex-[6]">
          <div className="">hello</div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
