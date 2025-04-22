import AppRouter from "./AppRouter";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <AppRouter />;
      <Analytics />
    </>
  );
}

export default App;
