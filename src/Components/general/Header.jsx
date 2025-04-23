import { Close } from "@mui/icons-material";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState();
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`w-full h-20 border-b-2 border-white/5 ${!show ? "block" : "hidden"}`} data-aos="fade-down" data-aos-duration="1000">
      <div className="text-center flex items-center justify-center py-3 px-7 bg-header bg-center bg-no-repeat bg-cover" data-aos="fade-up" data-aos-delay="200">
        <p className="text-2xl w-full normal-case text-white/70" data-aos="fade-right" data-aos-delay="400">
          ✨Discover Your Dream Property with estantien{" "}
          <span className="underline hover:no-underline cursor-pointer font-semibold text-white/85" data-aos="fade-left" data-aos-delay="600">
            learn more
          </span>
        </p>
        <Close
          onClick={handleShow}
          className="!text-5xl bg-white/5 rounded-full p-2 font-bold cursor-pointer hover:bg-black"
          data-aos="zoom-in"
          data-aos-delay="800"
        />
      </div>
    </div>
  );
};

export default Header;
