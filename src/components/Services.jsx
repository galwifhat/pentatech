// ─────────────────────────────────────────────
//  Component: Services
//  IT services grid with hover card effects
// ─────────────────────────────────────────────

import React from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/services.css";

function ServiceCard({ icon, title, description, slug }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4 reveal">
      <Link to={`/services/${slug}`} className="pt-services__card-link">
        <div className="pt-services__card">
          <div className="pt-services__icon">{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="pt-services__learn-more">Learn More →</span>
        </div>
      </Link>
    </div>
  );
}

function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section className="pt-services" id="services" ref={sectionRef}>
      <div className="container-fluid">
        {/* Header */}
        <div className="row mb-2">
          <div className="col-12">
            <span className="section-label reveal">What We Offer</span>
            <h2 className="section-title reveal">
              Comprehensive IT Services
              <br />& Consultancy
            </h2>
            <p className="section-sub reveal">
              From cloud infrastructure to cybersecurity, we bring
              enterprise-grade IT expertise to businesses of every size.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="row reveal-stagger">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
