import { Close } from "@mui/icons-material";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState();
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`w-full h-20 ${!show ? "block" : "hidden"}`}>
      <div className="text-center flex items-center justify-center py-3 px-10 bg-header bg-center bg-no-repeat bg-cover">
        <p className="text-2xl w-full normal-case text-white/70">
          ✨Discover Your Dream Property with Estatein{" "}
          <span className="underline hover:no-underline cursor-pointer font-semibold text-white/85">
            learn more
          </span>
        </p>
        <Close
          onClick={handleShow}
          className="!text-5xl bg-black/20 rounded-full p-2 font-bold cursor-pointer hover:bg-black"
        />
      </div>
    </div>
  );
};

export default Header;
