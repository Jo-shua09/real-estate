import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Property from "./Pages/Property/Property";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import PropertyDetails from "./Pages/Property_details/PropertyDetails";
import ScrollToTop from "./Components/ScrollToTop";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Property />} />
          <Route path="/properties/:property_name" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
