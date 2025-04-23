import AppRouter from "./AppRouter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });

    const observer = new MutationObserver(() => AOS.refresh());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
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
