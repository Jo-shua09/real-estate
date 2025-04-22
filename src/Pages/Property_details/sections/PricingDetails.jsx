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
        description="At Estantien, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
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
          <p className="sm:text-3xl text-4xl font-semibold">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>

        <div className="w-full sm:flex-[6] flex flex-col gap-10">
          <div className="w-full border-2 border-white/5 rounded-xl md:p-10 p-7">
            <div className="flex justify-between w-full items-center mb-10 pb-10 border-b-2 border-white/5">
              <h3 className="text-3xl font-semibold">additional fees</h3>
              <Button2 name="learn more" />
            </div>

            <div className="flex items-center md:flex-nowrap flex-wrap justify-between gap-10 w-full border-b-2 border-white/5 pb-10">
              <div className="w-full flex flex-col gap-y-2">
                <h4 className="text-xl font-medium text-white/70">property transfer tax</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$25,000</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    Based on the sale price and local regulations
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2 md:border-l-2 md:pl-5 md:border-t-0 border-t-2 py-5 border-white/5">
                <h4 className="text-xl font-medium text-white/70">legal fees</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$3,000</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    Approximate cost for legal services, including title transfer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center md:flex-nowrap flex-wrap justify-between gap-10 w-full border-b-2 border-white/5 pb-10">
              <div className="w-full flex flex-col gap-y-2 pt-5">
                <h4 className="text-xl font-medium text-white/70">home inspection</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$500</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    Recommended for due deligence
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2 md:border-l-2 md:pl-5 md:border-t-0 border-t-2 py-5 border-white/5">
                <h4 className="text-xl font-medium text-white/70">property insurance</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$1,200</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    Annual cost for comprehensive property insurance
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full flex flex-col gap-y-2 pt-5">
                <h4 className="text-xl font-medium text-white/70">mortage fees</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">varies</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    If applicable, consult with your leader for specific details
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-2 border-white/5 rounded-xl md:p-10 p-7">
            <div className="flex justify-between w-full items-center mb-10 pb-10 border-b-2 border-white/5">
              <h3 className="text-3xl font-semibold">monthly costs</h3>
              <Button2 name="learn more" />
            </div>

            <div className="w-full border-b-2 border-white/5 pb-10">
              <div className="w-full flex flex-col gap-y-2">
                <h4 className="text-xl font-medium text-white/70">property taxes</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$1,250</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    Approximate monthly property tax based on the sale price and local rates
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full flex flex-col gap-y-2 pt-5">
                <h4 className="text-xl font-medium text-white/70"> homeowner's association fee</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$300</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    Monthly fee for common area maintenance and security
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-2 border-white/5 rounded-xl md:p-10 p-7">
            <div className="flex justify-between w-full items-center mb-10 pb-10 border-b-2 border-white/5">
              <h3 className="text-3xl font-semibold">total initial costs</h3>
              <Button2 name="learn more" />
            </div>

            <div className="flex items-center md:flex-nowrap flex-wrap justify-between gap-10 w-full border-b-2 border-white/5 pb-10">
              <div className="w-full flex flex-col gap-y-2">
                <h4 className="text-xl font-medium text-white/70">listing price</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2 md:border-l-2 md:pl-5 md:border-t-0 border-t-2 py-5 border-white/5">
                <h4 className="text-xl font-medium text-white/70">additional fees</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$29,700</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    Property transfer tax, legal fees, inspection, insurance
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center md:flex-nowrap flex-wrap justify-between gap-10 w-full pt-10">
              <div className="w-full flex flex-col gap-y-2 pt-5">
                <h4 className="text-xl font-medium text-white/70">down payment</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">
                    $
                    {Math.round(price * 0.2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">20%</p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2 md:border-l-2 md:pl-5 md:border-t-0 border-t-2 py-5 border-white/5">
                <h4 className="text-xl font-medium text-white/70">mortage amount</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$1,000,000</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    If applicable
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-2 border-white/5 rounded-xl md:p-10 p-7">
            <div className="flex justify-between w-full items-center mb-10 pb-10 border-b-2 border-white/5">
              <h3 className="text-3xl font-semibold">monthly expenses</h3>
              <Button2 name="learn more" />
            </div>

            <div className="flex items-center md:flex-nowrap flex-wrap justify-between gap-10 w-full border-b-2 border-white/5 pb-10">
              <div className="w-full flex flex-col gap-y-2">
                <h4 className="text-xl font-medium text-white/70">property taxes</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$1,250</span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2 md:border-l-2 md:pl-5 md:border-t-0 border-t-2 py-5 border-white/5">
                <h4 className="text-xl font-medium text-white/70">homeowner's association fee</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$300</span>
                </div>
              </div>
            </div>

            <div className="flex items-center md:flex-nowrap flex-wrap justify-between gap-10 w-full pt-10">
              <div className="w-full flex flex-col gap-y-2 pt-5">
                <h4 className="text-xl font-medium text-white/70">mortage payment</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-2xl font-semibold normal-case">Varies based on terms and interest rate</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    if applicable
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2 md:border-l-2 md:pl-5 md:border-t-0 border-t-2 py-5 border-white/5">
                <h4 className="text-xl font-medium text-white/70"> property insurance</h4>
                <div className="flex items-center gap-x-5">
                  <span className="text-3xl font-semibold">$100</span>
                  <p className="text-xl font-medium text-white/70 normal-case border-2 rounded-xl md:rounded-full md:p-2 p-4 border-white/5 bg-white/5">
                    Approximate monthly cost
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
