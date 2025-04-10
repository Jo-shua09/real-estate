import { Close, Menu } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className="w-full h-full section-page border-b border-white/5">
      <div className="flex items-center justify-between w-full md:flex-nowrap flex-wrap gap-y-5">
        <div className="md:w-full w-fit">
          <Link to="/" className="flex items-center gap-x-2">
            <img
              src="/Logo.svg"
              alt="Logo image"
              className="object-cover w-10 h-10"
            />
            <span className="md:text-3xl text-4xl font-bold">Estatein</span>
          </Link>
        </div>

        <div className="w-full md:block hidden">
          <ul className="flex items-center justify-between place-content-center text-2xl font-medium">
            <Link to="/">
              <li
                className={`list-none rounded-lg py-4 px-7 hover:bg-black/20 border-white/5 ${
                  location.pathname === "/" ? "bg-black/20 border-2" : ""
                }`}
              >
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
            <Link to="/property">
              <li
                className={`list-none rounded-lg py-4 px-7 hover:bg-black/20 border-white/5 transition-all duration-200 ${
                  location.pathname === "/property"
                    ? "bg-black/20 border-2"
                    : ""
                }`}
              >
                properties
              </li>
            </Link>
            <Link to="/services">
              <li
                className={`list-none rounded-lg py-4 px-7 hover:bg-black/20 border-white/5 transition-all duration-200 ${
                  location.pathname === "/services"
                    ? "bg-black/20 border-2"
                    : ""
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
          {!open ? (
            <Menu onClick={handleMenu} className="!text-5xl cursor-pointer" />
          ) : (
            <Close onClick={handleMenu} className="!text-5xl cursor-pointer" />
          )}
        </div>
      </div>
      {/* MOBILE MENU */}
      <div className={`md:hidden my-5 ${open ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-y-5 bg-black/20 w-full p-2 text-2xl font-medium">
          <Link to="/">
            <li
              className={`list-none rounded-lg py-4 px-7 hover:bg-black/20 border-white/5 ${
                location.pathname === "/" ? "bg-black/20 border-2" : ""
              }`}
            >
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
          <Link to="/property">
            <li
              className={`list-none rounded-lg py-4 px-7 hover:bg-black/20 border-white/5 transition-all duration-200 ${
                location.pathname === "/property" ? "bg-black/20 border-2" : ""
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
    </div>
  );
};

export default Navbar;
