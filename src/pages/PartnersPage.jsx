// ─────────────────────────────────────────────
//  Page: PartnersPage
//  Technology & training partner showcase
// ─────────────────────────────────────────────

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { PARTNERS } from "../data/partners-content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import "../styles/pages.css";
import "../styles/partners.css";

function PartnersPage() {
  const pageRef = useScrollReveal();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    partnerType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your interest! Our partnerships team will be in touch within 48 hours.",
    );
    setFormData({
      company: "",
      name: "",
      email: "",
      partnerType: "",
      message: "",
    });
  };

  return (
    <>
      <CircuitCanvas />
      <Navbar />

      <main className="pt-page" ref={pageRef}>
        {/* ── Hero ── */}
        <section className="pt-about-hero">
          <div className="container">
            <div className="pt-about-hero__content">
              <h1>{PARTNERS.hero.title}</h1>
              <p>{PARTNERS.hero.subtitle}</p>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="pt-partners-intro">
          <div className="container">
            <p className="pt-partners-intro__text reveal">{PARTNERS.intro}</p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="pt-partners-stats">
          <div className="container">
            <div className="row justify-content-center">
              {PARTNERS.stats.map((stat, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div className="pt-partners-stat reveal">
                    <div className="pt-partners-stat__number">{stat.value}</div>
                    <div className="pt-partners-stat__label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partner Tiers ── */}
        {PARTNERS.tiers.map((tier, tierIndex) => (
          <section key={tierIndex} className="pt-partners-tier">
            <div className="container">
              <div className="pt-partners-tier__header reveal">
                <div className="pt-partners-tier__badge">
                  Tier {tierIndex + 1}
                </div>
                <h2 className="pt-partners-tier__title">{tier.tier}</h2>
                <p className="pt-partners-tier__desc">{tier.description}</p>
              </div>

              <div className="row g-4">
                {tier.partners.map((partner, i) => (
                  <div
                    key={i}
                    className={`col-md-6 ${
                      tier.partners.length === 3 ? "col-lg-4" : "col-lg-3"
                    }`}
                  >
                    <div className="pt-partners-card reveal">
                      <div className="pt-partners-card__top">
                        <div className="pt-partners-card__logo">
                          {partner.logo}
                        </div>
                        <div>
                          <div className="pt-partners-card__name">
                            {partner.name}
                          </div>
                          <div className="pt-partners-card__category">
                            {partner.category}
                          </div>
                        </div>
                      </div>
                      <p className="pt-partners-card__desc">
                        {partner.description}
                      </p>
                      <div className="pt-partners-card__badges">
                        {partner.badges.map((badge, bi) => (
                          <span key={bi} className="pt-partners-card__badge">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── Become a Partner ── */}
        <section className="pt-partners-cta">
          <div className="container">
            <div className="pt-partners-cta__inner reveal">
              {/* Left: Benefits */}
              <div className="pt-partners-cta__left">
                <h2>{PARTNERS.becomePartner.title}</h2>
                <p>{PARTNERS.becomePartner.description}</p>
                <ul className="pt-partners-cta__benefits">
                  {PARTNERS.becomePartner.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Right: Form */}
              <div className="pt-partners-cta__form">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="pt-partners-form-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="pt-partners-form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="pt-partners-form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="pt-partners-form-group">
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Partnership Type
                      </option>
                      <option value="strategic">Strategic Partner</option>
                      <option value="technology">Technology Partner</option>
                      <option value="training">Training & Certification</option>
                      <option value="reseller">Reseller / Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="pt-partners-form-group">
                    <textarea
                      name="message"
                      placeholder="Briefly describe your company and what you're looking to achieve..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary-pt pt-partners-form-submit"
                  >
                    {PARTNERS.becomePartner.cta} →
                  </button>
                </form>
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

export default PartnersPage;
