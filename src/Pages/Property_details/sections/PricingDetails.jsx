import React from "react";
import SectionIntro from "../../../Components/SectionIntro";
import { useLocation } from "react-router-dom";
import { Button2 } from "../../../Components/general/Button";

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
        <div className="w-full sm:flex-[6] flex flex-col gap-10">
          <div className="w-full border-2 border-white/5 rounded-xl md:p-10 p-7">
            <div className="flex justify-between w-full items-center mb-10 pb-10 border-b-2 border-white/5">
              <h3 className="text-3xl font-semibold">additional fees</h3>
              <Button2 name="learn more" />
            </div>
            <div className="flex items-center justify-between gap-10 w-full border-b-2 border-white/5 pb-10">
              <div className="w-full flex flex-col gap-y-2">
                <h4 className="text-xl font-medium text-white/70">property transfer tax</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$25,000</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-full p-2 border-white/5 bg-white/5">
                    Based on the sale price and local regulations
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2 border-l-2 pl-5 border-white/5">
                <h4 className="text-xl font-medium text-white/70">legal fees</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$3,000</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-full p-2 border-white/5 bg-white/5">
                    Approximate cost for legal services, including title transfer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
