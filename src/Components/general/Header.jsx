import { Close } from "@mui/icons-material";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState();
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className={`w-full h-20 border-b border-white/5 ${
        !show ? "block" : "hidden"
      }`}
    >
      <div className="text-center flex items-center justify-center py-3 px-7 bg-header bg-center bg-no-repeat bg-cover">
        <p className="text-2xl w-full normal-case text-white/70">
          ✨Discover Your Dream Property with estantien{" "}
          <span className="underline hover:no-underline cursor-pointer font-semibold text-white/85">
            learn more
          </span>
        </p>
        <Close
          onClick={handleShow}
          className="!text-5xl bg-white/5 rounded-full p-2 font-bold cursor-pointer hover:bg-black"
        />
      </div>
    </div>
  );
};

export default Header;
