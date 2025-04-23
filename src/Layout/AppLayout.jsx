import Header from "../Components/general/Header";
import Navbar from "../Components/general/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/general/Footer";
import Banner from "../Components/general/Banner";

const AppLayout = () => {
  return (
    <>
      <div className={`max-w-[180rem] w-full m-auto `}>
        <Header />
        <Navbar />
        <div className="max-w-[150rem] w-full m-auto">
          <Outlet />
          <Banner />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
