import AppRouter from "./AppRouter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Type of animation easing
      delay: 100, // Delay before starting the animation
      offset: 100, // Offset from the element's position
      once: true, // Whether animation should happen once or every scroll
      mirror: false, // Animate elements when scrolling past them
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <SpeedInsights />
      <Analytics />
      <AppRouter />
    </>
  );
}

export default App;
