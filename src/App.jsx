// ─────────────────────────────────────────────
//  App.jsx — Root Component with Routing
// ─────────────────────────────────────────────

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Global styles
import "./styles/global.css";
import "./styles/animations.css";

// Components
import Loader from "./components/Loader";

// Pages
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import TrainingPage from "./pages/TrainingPage";
import TrainingCategoryPage from "./pages/TrainingCategoryPage";
import WhyUsPage from "./pages/WhyUsPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import PartnersPage from "./pages/PartnersPage"; 
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";     

function App() {
  return (
    <Router>
      <Loader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route
          path="/training/category/:category"
          element={<TrainingCategoryPage />}
        />
        <Route
          path="/training/course/:courseSlug"
          element={<CourseDetailPage />}
        />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
