// ─────────────────────────────────────────────
//  Page: HomePage
//  Original landing page content
// ─────────────────────────────────────────────

import React from "react";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsStrip from "../components/StatsStrip";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Training from "../components/Training";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <CircuitCanvas />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <WhyUs />
        <Training />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
