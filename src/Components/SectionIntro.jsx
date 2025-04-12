import React from "react";
import { Button2 } from "./general/Button";
import Abstract from "/src/assets/Images/General/Abstract.png";

const SectionIntro = ({ title, description, name, linkPath, hideButton }) => {
  return (
    <div>
      <div className="w-full">
        <img
          src={Abstract}
          alt="abstract image"
          className="w-fit h-fit object-cover"
        />
        <div className="flex items-end justify-between md:gap-x-96 my-5 w-full">
          <div className="flex-[2] flex flex-col gap-y-5">
            <h3 className="text-5xl font-semibold">{title}</h3>
            <p className="normal-case text-white/70 text-2xl">{description}</p>
          </div>
          {!hideButton && (
            <div className="md:flex hidden">
              <Button2 name={name} linkPath={linkPath} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
