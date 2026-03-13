// ─────────────────────────────────────────────
//  Page: ServiceDetailPage
//  Dynamic detail page for each IT service
// ─────────────────────────────────────────────

import React from "react";
import { useParams, Link } from "react-router-dom";
import { SERVICE_DETAILS } from "../data/services-content";
import { SERVICES } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import "../styles/pages.css";
import "../styles/service-detail.css";

// Helper: given a slug, get the display title from SERVICES list
function getServiceTitle(slug) {
  const found = SERVICES.find((s) => s.slug === slug);
  return found ? `${found.icon} ${found.title}` : slug;
}

function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const pageRef = useScrollReveal();
  const service = SERVICE_DETAILS[serviceSlug];

  // ── Not Found ──
  if (!service) {
    return (
      <>
        <CircuitCanvas />
        <Navbar />
        <main className="pt-page">
          <div className="container py-5 text-center">
            <p style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔍</p>
            <h1
              style={{
                color: "var(--gold)",
                fontFamily: "var(--font-display)",
              }}
            >
              Service Not Found
            </h1>
            <p style={{ color: "rgba(240,244,255,0.6)", marginBottom: "2rem" }}>
              The service you're looking for doesn't exist or may have moved.
            </p>
            <Link to="/services" className="btn-primary-pt">
              ← Back to Services
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <CircuitCanvas />
      <Navbar />

      <main className="pt-page pt-service-detail" ref={pageRef}>
        {/* ── Hero ── */}
        <section className="pt-service-hero">
          <div className="container">
            <div className="pt-service-hero__content">
              <Link to="/services" className="pt-service-hero__back">
                ← Back to Services
              </Link>
              <span className="pt-service-hero__icon">{service.icon}</span>
              <h1>{service.title}</h1>
              <p className="pt-service-hero__tagline">"{service.tagline}"</p>
              <p className="pt-service-hero__description">
                {service.fullDescription}
              </p>

              {/* Key Highlights */}
              <div className="pt-service-highlights">
                {service.highlights.map((h, i) => (
                  <div key={i} className="pt-service-highlight">
                    <div className="pt-service-highlight__icon">{h.icon}</div>
                    <div className="pt-service-highlight__value">{h.value}</div>
                    <div className="pt-service-highlight__label">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Content + Sidebar ── */}
        <section className="pt-service-content">
          <div className="container">
            <div className="row">
              {/* ── Left: Main Content ── */}
              <div className="col-lg-8">
                {/* What We Offer */}
                <div className="pt-service-section">
                  <h2 className="pt-service-section__title">
                    🛠️ What We Offer
                  </h2>
                  <div className="row g-3">
                    {service.whatWeOffer.map((item, i) => (
                      <div key={i} className="col-md-6">
                        <div className="pt-service-offer-card reveal">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Process */}
                <div className="pt-service-section">
                  <h2 className="pt-service-section__title">⚙️ Our Process</h2>
                  <div className="pt-service-process-steps reveal">
                    {service.process.map((step, i) => (
                      <div key={i} className="pt-service-process-step">
                        <div className="pt-service-process-step__number">
                          {step.step}
                        </div>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expected Outcomes */}
                <div className="pt-service-section">
                  <h2 className="pt-service-section__title">
                    🎯 Expected Outcomes
                  </h2>
                  <ul className="pt-service-outcomes reveal">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-service-section">
                  <h2 className="pt-service-section__title">
                    🧰 Technologies & Tools
                  </h2>
                  <div className="pt-service-tech-grid reveal">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="pt-service-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="pt-service-section">
                  <h2 className="pt-service-section__title">
                    📌 Client Success Story
                  </h2>
                  <div className="pt-service-case-study reveal">
                    <div className="pt-service-case-study__label">
                      Case Study
                    </div>
                    <div className="pt-service-case-study__client">
                      🏢 {service.caseStudy.client}
                    </div>
                    <p className="pt-service-case-study__result">
                      {service.caseStudy.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Right: Sidebar ── */}
              <div className="col-lg-4">
                <div className="pt-service-sidebar">
                  {/* CTA Card */}
                  <div className="pt-service-sidebar-card">
                    <h4>Ready to Get Started?</h4>
                    <p style={{ marginBottom: "20px" }}>
                      Talk to one of our specialists about how {service.title}{" "}
                      can drive results for your organisation.
                    </p>
                    <div className="pt-service-cta">
                      <a
                        href={`mailto:info@pentatech.co.ke?subject=${encodeURIComponent(service.contactSubject)}`}
                        className="btn-primary-pt"
                      >
                        📧 Email Us
                      </a>
                      <Link to="/#contact" className="btn-secondary-pt">
                        Request a Consultation
                      </Link>
                    </div>
                  </div>

                  {/* Related Services */}
                  {service.relatedServices &&
                    service.relatedServices.length > 0 && (
                      <div className="pt-service-sidebar-card">
                        <h4>Related Services</h4>
                        <ul className="pt-service-related-list">
                          {service.relatedServices.map((slug, i) => (
                            <li key={i}>
                              <Link to={`/services/${slug}`}>
                                {getServiceTitle(slug)}
                                <span>→</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* All Services */}
                  <div className="pt-service-sidebar-card">
                    <h4>All Services</h4>
                    <ul className="pt-service-related-list">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${s.slug}`}
                            style={
                              s.slug === serviceSlug
                                ? { color: "var(--gold)", fontWeight: 600 }
                                : {}
                            }
                          >
                            {s.icon} {s.title}
                            {s.slug !== serviceSlug && <span>→</span>}
                            {s.slug === serviceSlug && (
                              <span style={{ color: "var(--gold)" }}>
                                Current
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>

      <Footer />
    </>
  );
}

export default ServiceDetailPage;
