import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full section-page border-b border-gray-800">
      <div className="flex items-center justify-between w-full md:flex-nowrap flex-wrap gap-y-5">
        <div className="w-full">
          <Link to="/" className="flex items-center gap-x-2">
            <img
              src="/Logo.svg"
              alt="Logo image"
              className="object-cover w-10 h-10"
            />
            <span className="text-3xl font-bold">Estatein</span>
          </Link>
        </div>

        <div className="w-full md:block hidden">
          <ul className=" flex items-center justify-between place-content-center text-2xl font-medium">
            <Link to="/">
              <li
                className={`list-none  rounded-lg py-4 px-7 hover:bg-black/20 border-gray-800 ${
                  location.pathname == "/" ? "bg-black/20 border" : ""
                }`}
              >
                home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`list-none  rounded-lg py-4 px-7 text-nowrap hover:bg-black/20 border-gray-800 transition-all duration-200 ${
                  location.pathname == "/about" ? "bg-black/20 border" : ""
                }`}
              >
                about us
              </li>
            </Link>
            <Link to="/property">
              <li
                className={`list-none  rounded-lg py-4 px-7 hover:bg-black/20 border-gray-800 transition-all duration-200 ${
                  location.pathname == "/property" ? "bg-black/20 border" : ""
                }`}
              >
                properties
              </li>
            </Link>
            <Link to="/services">
              <li
                className={`list-none  rounded-lg py-4 px-7 hover:bg-black/20 border-gray-800 transition-all duration-200 ${
                  location.pathname == "/services" ? "bg-black/20 border" : ""
                }`}
              >
                services
              </li>
            </Link>
          </ul>
        </div>

        <div className="w-full place-content-end flex">
          <Link to="/contact">
            <button
              className={`rounded-lg py-4 px-7 bg-black/20 shadow-xl hover:bg-purple-600 delay-100 text-2xl border-gray-800 transition-all duration-200 ${
                location.pathname == "/contact" ? "bg-purple-600" : ""
              }`}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
