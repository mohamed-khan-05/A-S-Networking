import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

// Local utility component to handle scrolling
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      {/* The utility is called here inside the Router */}
      <ScrollToTop />

      <div className="min-h-screen bg-white">
        <Navbar />

        <Routes>
          {/* The Home route renders the main landing page components */}
          <Route path="/" element={<Home />} />

          {/* These routes switch to their specific pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
