import { Close, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <div className="w-full h-full section-page border-b border-white/5 overflow-hidden">
      <div className="flex items-center justify-between w-full md:flex-nowrap flex-wrap gap-y-5">
        <div className="md:w-full w-fit">
          <Link to="/" className="flex items-center gap-x-2">
            <img src="/Logo.svg" alt="Logo image" className="object-cover md:w-10 md:h-10 w-14 h-14" />
            <span className="md:text-3xl text-[2.5rem] font-bold">estantien</span>
          </Link>
        </div>

        <div className="w-full md:block hidden">
          <ul className="flex items-center justify-between place-content-center text-2xl font-medium">
            <Link to="/">
              <li className={`list-none rounded-lg py-4 px-7 hover:bg-black/20 border-white/5 ${location.pathname === "/" ? "bg-black/20 border-2" : ""}`}>
                home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`list-none rounded-lg py-4 px-7 text-nowrap hover:bg-black/20 border-white/5 transition-all duration-200 ${
                  location.pathname === "/about" ? "bg-black/20 border-2" : ""
                }`}
              >
                about us
              </li>
            </Link>
            <Link to="/properties">
              <li
                className={`list-none rounded-lg py-4 px-7 hover:bg-black/20 border-white/5 transition-all duration-200 ${
                  location.pathname === "/properties" ? "bg-black/20 border-2" : ""
                }`}
              >
                properties
              </li>
            </Link>
            <Link to="/services">
              <li
                className={`list-none rounded-lg py-4 px-7 hover:bg-black/20 border-white/5 transition-all duration-200 ${
                  location.pathname === "/services" ? "bg-black/20 border-2" : ""
                }`}
              >
                services
              </li>
            </Link>
          </ul>
        </div>

        <div className="w-full place-content-end md:flex hidden">
          <Link to="/contact">
            <button
              className={`rounded-lg py-4 px-7 bg-black/20 shadow-xl hover:bg-purple-600 delay-100 text-2xl border-white/5 transition-all duration-200 ${
                location.pathname === "/contact" ? "bg-purple-600" : ""
              }`}
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* MOBILE MENU HANDLER */}
        <div className="md:hidden w-fit">
          <Menu onClick={handleMenu} className="transition-all duration-200 delay-200 !text-6xl cursor-pointer" />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`!overflow-hidden transition-all duration-200 md:hidden absolute top-0 left-0 px-5 ease-in-out w-full !h-screen bg-white/5 shadow-[1px_1px_5px_rgba(0,0,0,0.5)] backdrop-blur-2xl backdrop-brightness-90 z-[999999] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between w-full py-5">
          <div className="md:w-full w-fit">
            <Link to="/" className="flex items-center gap-x-2">
              <img src="/Logo.svg" alt="Logo image" className="object-cover md:w-10 md:h-10 w-14 h-14" />
              <span className="md:text-3xl text-[2.5rem] font-bold">estantien</span>
            </Link>
          </div>
          <Close onClick={handleMenu} className="transition-all duration-200 delay-200 !text-6xl cursor-pointer" />
        </div>

        <ul className="flex flex-col gap-y-5 w-full h-full mt-10 text-3xl rounded-xl font-semibold">
          <Link to="/">
            <li className={`list-none rounded-xl py-6 px-7 hover:bg-black/20 border-white/5 ${location.pathname === "/" ? "bg-black/20 border-2" : ""}`}>
              home
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`list-none rounded-xl py-6 px-7 text-nowrap hover:bg-black/20 border-white/5 transition-all duration-200 ${
                location.pathname === "/about" ? "bg-black/20 border-2" : ""
              }`}
            >
              about us
            </li>
          </Link>
          <Link to="/properties">
            <li
              className={`list-none rounded-xl py-6 px-7 hover:bg-black/20 border-white/5 transition-all duration-200 ${
                location.pathname === "/properties" ? "bg-black/20 border-2" : ""
              }`}
            >
              properties
            </li>
          </Link>
          <Link to="/services">
            <li
              className={`list-none rounded-xl py-6 px-7 hover:bg-black/20 border-white/5 transition-all duration-200 ${
                location.pathname === "/services" ? "bg-black/20 border-2" : ""
              }`}
            >
              services
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`list-none rounded-xl py-6 px-7 hover:bg-black/20 border-white/5 transition-all duration-200 ${
                location.pathname === "/contact" ? "bg-black/20 border-2" : ""
              }`}
            >
              contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
