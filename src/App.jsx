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
import ServicesPage from "./pages/ServicesPage";
import TrainingPage from "./pages/TrainingPage";
import WhyUsPage from "./pages/WhyUsPage";

function App() {
  return (
    <Router>
      <Loader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
