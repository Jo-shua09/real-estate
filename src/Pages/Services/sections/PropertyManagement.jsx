import { ControlPointSharp, VerticalAlignTopOutlined } from "@mui/icons-material";
import React from "react";
import SectionIntro from "../../../Components/SectionIntro";

const PropertyManagement = () => {
  return (
    <div className="w-full h-full section">
      <SectionIntro
        hideButton={true}
        title="Effortless Property Management"
        description="Owning a property should be a pleasure, not a hassle. Estantien's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
      />
      <div className="w-full flex items-center flex-col gap-5 mt-16">
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5">
          <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 border-white/5">
            <div className="flex items-center gap-x-5">
              <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
                <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2  text-purple-700 border-purple-600 rounded-full" />
              </div>
              <span className="text-3xl font-semibold">Tenant Harmony</span>
            </div>
            <p className="text-white/70 text-2xl font-medium normal-case">
              Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.
            </p>
          </div>

          <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 border-white/5">
            <div className="flex items-center gap-x-5">
              <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
                <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2  text-purple-700 border-purple-600 rounded-full" />
              </div>
              <span className="text-3xl font-semibold">Maintenance Ease</span>
            </div>
            <p className="text-white/70 text-2xl font-medium normal-case">
              Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.
            </p>
          </div>

          <div className="border-2 p-10 rounded-xl  flex flex-col gap-y-7 border-white/5">
            <div className="flex items-center gap-x-5">
              <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
                <ControlPointSharp className="!text-5xl border-t border-b p-2  text-purple-700 border-purple-600 rounded-full" />
              </div>
              <span className="text-3xl font-semibold">Financial Peace of Mind</span>
            </div>
            <p className="text-white/70 text-2xl font-medium normal-case">
              Managing property finances can be complex. Our financial experts take care of rent collection{" "}
            </p>
          </div>
        </div>

        <div className="w-full flex-wrap md:flex-nowrap flex gap-5">
          <div className="border-2 p-10 rounded-xl w-full h-full md:flex-1 flex flex-col gap-y-7 border-white/5">
            <div className="flex items-center gap-x-5">
              <div className="border-t-2 border-b-2 border-purple-600 rounded-full p-2">
                <VerticalAlignTopOutlined className="!text-5xl border-t border-b p-2  text-purple-700 border-purple-600 rounded-full" />
              </div>
              <span className="text-3xl font-semibold">Legal Guardian</span>
            </div>
            <p className="text-white/70 text-2xl font-medium normal-case">Stay compliant with property laws and regulations effortlessly. </p>
          </div>

          <div className="border-2 p-10 rounded-xl md:flex-[2.18] w-full h-full flex flex-col gap-y-7 border-white/5 bg-hero bg-white/5">
            <div className="flex items-center justify-between gap-6">
              <h3 className="md:text-3xl text-4xl font-semibold">Experience Effortless Property Management</h3>
              <button className="py-4  px-7 hover:scale-95 capitalize rounded-xl hidden md:flex items-center font-semibold bg-black/30 text-2xl border-2 border-white/5">
                learn more
              </button>
            </div>
            <button className="py-4  px-7 hover:scale-95 capitalize rounded-xl  md:hidden w-full h-[5rem] justify-center flex items-center font-semibold bg-black/35 text-2xl border-2 border-white/5">
              learn more
            </button>
            <p className="text-white/70 normal-case font-medium text-2xl">
              Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while
              you enjoy the benefits of property ownership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;
