import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import Services from "./components/pages/Services";

// Pages
import ServicesProducts from "./pages/ServicesProducts";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import ClientBanner from "./components/pages/ClientBanner";

// Local utility component to handle scrolling
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <Services />
    <ClientBanner />
  </>
);

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
          <Route path="/services" element={<ServicesProducts />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
