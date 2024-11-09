import { Route, Routes, useLocation } from "react-router-dom";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Login from "./pages/Login";
import LandingPg from "./pages/LandingPg";
import PropertiesPg from "./pages/PropertiesPg";
import AboutUsPg from "./pages/AboutUsPg";
import FaqsPg from "./pages/FaqsPg";
import OurProjectsPg from "./pages/OurProjectsPg";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // React Router hook to detect route changes

  // Show loading before new page
  useEffect(() => {
    // Set loading to true when the route changes
    setLoading(true);

    // Set loading to false once the new page has fully loaded
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // You can adjust the timing based on your needs

    return () => clearTimeout(timer); // Cleanup timeout
  }, [location]);
  return (
    <div className="duration-300">
      {loading ? (
        <Loader /> // Show loading component
      ) : (
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPg />} />
          <Route path="/properties" element={<PropertiesPg />} />
          <Route path="/aboutus" element={<AboutUsPg />} />
          <Route path="/faqs" element={<FaqsPg />} />
          <Route path="/ourprojects" element={<OurProjectsPg />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
