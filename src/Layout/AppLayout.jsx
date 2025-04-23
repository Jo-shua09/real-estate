import React, { useEffect, useState } from "react";
import Header from "../Components/general/Header";
import Navbar from "../Components/general/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/general/Footer";
import Banner from "../Components/general/Banner";
import Loader from "../Components/Loader";

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        handleLoad();
      }, 500);
    } else {
      window.addEventListener("load", () => {
        setTimeout(() => {
          handleLoad();
        }, 500);
      });
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={`max-w-[180rem] w-full m-auto ${isLoading ? "hidden" : ""}`}>
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
