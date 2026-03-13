// ─────────────────────────────────────────────
//  Page: TrainingPage
//  Detailed training programs page
// ─────────────────────────────────────────────

import React from "react";
import { TRAINING_PROGRAMS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages.css";

function TrainingPage() {
  const sectionRef = useScrollReveal();

  const certifications = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure Fundamentals",
    "CompTIA Security+",
    "CISSP",
    "Google Cloud Professional",
    "Certified Kubernetes Administrator",
    "Cisco CCNA",
    "PMP Certification",
  ];

  return (
    <>
      <CircuitCanvas />
      <Navbar />

      <main className="pt-page">
        {/* Hero Section */}
        <section className="pt-page-hero pt-page-hero--training">
          <div className="container">
            <div className="pt-page-hero__content">
              <h1>Training Programs</h1>
              <p>Industry-recognized certifications and skill development</p>
            </div>
          </div>
        </section>

        {/* Training Grid */}
        <section className="pt-page-training" ref={sectionRef}>
          <div className="container">
            <div className="row">
              {TRAINING_PROGRAMS.map((program, index) => (
                <div
                  key={program.title}
                  className="col-md-6 col-lg-3 mb-4 reveal"
                >
                  <div className="pt-page-training-card">
                    <div className="pt-page-training-card__icon">
                      {program.icon}
                    </div>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <div className="pt-page-training-card__badge">
                      Certification Track
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="pt-page-certifications">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="section-title">Certifications We Offer</h2>
                <p className="section-sub">
                  Prepare for world-recognized certifications with our expert
                  instructors
                </p>
                <div className="pt-page-certifications__grid">
                  {certifications.map((cert, index) => (
                    <div key={index} className="pt-page-certifications__item">
                      <span>✓</span> {cert}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pt-page-training-stats">
                  <div className="pt-page-training-stats__card">
                    <div className="pt-page-training-stats__number">95%</div>
                    <div>Pass Rate</div>
                  </div>
                  <div className="pt-page-training-stats__card">
                    <div className="pt-page-training-stats__number">50+</div>
                    <div>Courses</div>
                  </div>
                  <div className="pt-page-training-stats__card">
                    <div className="pt-page-training-stats__number">24/7</div>
                    <div>Lab Access</div>
                  </div>
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

export default TrainingPage;
