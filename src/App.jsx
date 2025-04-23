import AppRouter from "./AppRouter";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <AppRouter />
    </>
  );
}

export default App;
