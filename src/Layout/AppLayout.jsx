import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/general/Navbar';
import Footer from '../Components/general/Footer';
import Loader from '../Components/Loader';

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={`min-h-screen flex flex-col ${isLoading ? 'hidden' : ''}`}>
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
