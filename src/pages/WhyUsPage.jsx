// ─────────────────────────────────────────────
//  Page: WhyUsPage
//  Detailed why us page with expanded content
// ─────────────────────────────────────────────

import React from "react";
import { WHY_ITEMS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import "../styles/pages.css";

function WhyUsPage() {
  const sectionRef = useScrollReveal();

  const teamMembers = [
    {
      name: "Dr. James Kimani",
      role: "CTO & Lead Architect",
      expertise: "Cloud Architecture",
    },
    {
      name: "Sarah Wanjiku",
      role: "Head of Training",
      expertise: "Cybersecurity",
    },
    { name: "Michael Ochieng", role: "Senior Consultant", expertise: "DevOps" },
    {
      name: "Grace Mwende",
      role: "Training Lead",
      expertise: "Software Development",
    },
  ];

  const partners = [
    "Microsoft",
    "AWS",
    "Google Cloud",
    "Cisco",
    "CompTIA",
    "Oracle",
  ];

  return (
    <>
      <CircuitCanvas />
      <Navbar />

      <main className="pt-page">
        {/* Hero Section */}
        <section className="pt-page-hero pt-page-hero--whyus">
          <div className="container">
            <div className="pt-page-hero__content">
              <h1>Why Choose PentaTech?</h1>
              <p>Built on innovation, driven by excellence</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="pt-page-values" ref={sectionRef}>
          <div className="container">
            <div className="row">
              {WHY_ITEMS.map((item, index) => (
                <div key={item.title} className="col-md-6 mb-4 reveal">
                  <div className="pt-page-value-card">
                    <div className="pt-page-value-card__number">
                      0{index + 1}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="pt-page-team">
          <div className="container">
            <h2 className="section-title text-center">Our Expert Team</h2>
            <p className="section-sub text-center">
              Industry veterans with real-world experience
            </p>
            <div className="row mt-5">
              {teamMembers.map((member) => (
                <div key={member.name} className="col-md-6 col-lg-3 mb-4">
                  <div className="pt-page-team-card">
                    <div className="pt-page-team-card__avatar">
                      {member.name.charAt(0)}
                    </div>
                    <h4>{member.name}</h4>
                    <p className="pt-page-team-card__role">{member.role}</p>
                    <p className="pt-page-team-card__expertise">
                      {member.expertise}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="pt-page-partners">
          <div className="container">
            <h2 className="section-title text-center">
              Our Technology Partners
            </h2>
            <div className="pt-page-partners__grid">
              {partners.map((partner) => (
                <div key={partner} className="pt-page-partners__item">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}

export default WhyUsPage;
