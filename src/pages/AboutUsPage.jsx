// ─────────────────────────────────────────────
//  Page: AboutUsPage
//  About Us page with company information
// ─────────────────────────────────────────────

import React from "react";
import { Link } from "react-router-dom";
import { ABOUT_US } from "../data/aboutus-content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import "../styles/pages.css";
import "../styles/about-us.css";

function AboutUsPage() {
  const sectionRef = useScrollReveal();

  return (
    <>
      <CircuitCanvas />
      <Navbar />

      <main className="pt-page" ref={sectionRef}>
        {/* Hero Section */}
        <section className="pt-about-hero">
          <div className="container">
            <div className="pt-about-hero__content">
              <h1>{ABOUT_US.introduction.title}</h1>
              <p>Building trust through technology and expertise</p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="pt-about-intro">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {ABOUT_US.introduction.paragraphs.map((paragraph, index) => (
                  <p key={index} className="pt-about-intro__text reveal">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="pt-about-mission-vision">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="pt-about-card reveal">
                  <div className="pt-about-card__icon">🎯</div>
                  <h2>{ABOUT_US.mission.title}</h2>
                  <p>{ABOUT_US.mission.content}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pt-about-card reveal">
                  <div className="pt-about-card__icon">👁️</div>
                  <h2>{ABOUT_US.vision.title}</h2>
                  <p>{ABOUT_US.vision.content}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pt-about-stats">
          <div className="container">
            <div className="row">
              {ABOUT_US.stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3 mb-4">
                  <div className="pt-about-stat reveal">
                    <div className="pt-about-stat__number">{stat.value}</div>
                    <div className="pt-about-stat__label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="pt-about-what-we-do">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="section-title reveal">
                  {ABOUT_US.whatWeDo.title}
                </h2>
                <p className="pt-about-what-we-do__text reveal">
                  {ABOUT_US.whatWeDo.content}
                </p>
              </div>
              <div className="col-lg-6">
                <div className="pt-about-services-grid">
                  {[
                    "☁️ Cloud Computing",
                    "🔐 Cybersecurity",
                    "💻 Software Development",
                    "📊 Data Analytics",
                    "🌐 DevOps & Networking",
                  ].map((service, index) => (
                    <div key={index} className="pt-about-service-tag reveal">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="pt-about-why-us">
          <div className="container">
            <h2 className="section-title text-center reveal">
              {ABOUT_US.whyChooseUs.title}
            </h2>
            <div className="row mt-5">
              {ABOUT_US.whyChooseUs.points.map((point, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-4">
                  <div className="pt-about-why-card reveal">
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="pt-about-approach">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="section-title reveal">
                  {ABOUT_US.approach.title}
                </h2>
                <p className="pt-about-approach__text reveal">
                  {ABOUT_US.approach.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="pt-about-values">
          <div className="container">
            <h2 className="section-title text-center reveal">
              Our Core Values
            </h2>
            <div className="row mt-5">
              {ABOUT_US.values.map((value, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div className="pt-about-value-card reveal">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="pt-about-leadership">
          <div className="container">
            <h2 className="section-title text-center reveal">
              {ABOUT_US.leadership.title}
            </h2>
            <div className="row mt-5">
              {ABOUT_US.leadership.members.map((member, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div className="pt-about-team-card reveal">
                    <div className="pt-about-team-card__avatar">
                      {member.avatar}
                    </div>
                    <h3>{member.name}</h3>
                    <p className="pt-about-team-card__role">{member.role}</p>
                    <p className="pt-about-team-card__expertise">
                      {member.expertise}
                    </p>
                    <p className="pt-about-team-card__bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="pt-about-closing">
          <div className="container">
            <div className="pt-about-closing__content reveal">
              <h2>{ABOUT_US.closing.title}</h2>
              <p>{ABOUT_US.closing.content}</p>
              <div className="pt-about-closing__cta">
                <Link to="/#contact" className="btn-primary-pt">
                  {ABOUT_US.closing.cta}
                </Link>
                <span className="pt-about-closing__cta-description">
                  {ABOUT_US.closing.ctaDescription}
                </span>
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

export default AboutUsPage;
