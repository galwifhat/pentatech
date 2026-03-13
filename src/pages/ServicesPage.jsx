// ─────────────────────────────────────────────
//  Page: ServicesPage
//  Detailed services page with expanded information
// ─────────────────────────────────────────────

import React from "react";
import { SERVICES } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages.css";

function ServicesPage() {
  const sectionRef = useScrollReveal();

  return (
    <>
      <CircuitCanvas />
      <Navbar />

      <main className="pt-page">
        {/* Hero Section */}
        <section className="pt-page-hero">
          <div className="container">
            <div className="pt-page-hero__content">
              <h1>Our Services</h1>
              <p >Comprehensive IT solutions tailored to your business needs</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pt-page-services" ref={sectionRef}>
          <div className="container">
            <div className="row">
              {SERVICES.map((service, index) => (
                <div key={service.title} className="col-lg-6 mb-4">
                  <div className="pt-page-service-card reveal">
                    <div className="pt-page-service-card__icon">
                      {service.icon}
                    </div>
                    <div className="pt-page-service-card__content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <ul className="pt-page-service-card__features">
                        <li>✓ Enterprise-grade solutions</li>
                        <li>✓ Expert consultants</li>
                        <li>✓ 24/7 support available</li>
                      </ul>
                      <a href="/#contact" className="btn-primary-pt">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="pt-page-process">
          <div className="container">
            <h2 className="section-title text-center reveal">Our Process</h2>
            <div className="row mt-5">
              <div className="col-md-3 mb-4">
                <div className="pt-page-process__step reveal">
                  <div className="pt-page-process__number">1</div>
                  <h4>Discovery</h4>
                  <p>We analyze your requirements and business goals</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="pt-page-process__step reveal">
                  <div className="pt-page-process__number">2</div>
                  <h4>Planning</h4>
                  <p>Custom solution architecture and strategy development</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="pt-page-process__step reveal">
                  <div className="pt-page-process__number">3</div>
                  <h4>Execution</h4>
                  <p>Agile implementation with continuous feedback</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="pt-page-process__step reveal">
                  <div className="pt-page-process__number">4</div>
                  <h4>Support</h4>
                  <p>Ongoing maintenance and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;