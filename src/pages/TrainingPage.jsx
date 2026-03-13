// ─────────────────────────────────────────────
//  Page: TrainingPage
//  Detailed training programs page with section anchors
// ─────────────────────────────────────────────

import React from "react";
import { Link } from "react-router-dom";
import { TRAINING_PROGRAMS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
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

  const trainingCategories = [
    {
      id: "certification",
      title: "Certification Programs",
      description: "Industry-recognized certification preparation courses",
      icon: "🎓",
      programs: TRAINING_PROGRAMS.slice(0, 5), // First 5 programs are certification tracks
    },
    {
      id: "corporate",
      title: "Corporate Training",
      description: "Custom training solutions for organizations",
      icon: "🏢",
      programs: [TRAINING_PROGRAMS[5]], // Corporate Programs
    },
    {
      id: "bootcamps",
      title: "Bootcamps",
      description: "Intensive, immersive learning experiences",
      icon: "⚡",
      programs: [TRAINING_PROGRAMS[6]], // Bootcamps
    },
    {
      id: "workshops",
      title: "Workshops & Seminars",
      description: "Short-term focused training sessions",
      icon: "🎯",
      programs: [], // You can add workshop-specific programs here
    },
    {
      id: "curriculum",
      title: "Curriculum Design",
      description: "Custom learning content development",
      icon: "📝",
      programs: [TRAINING_PROGRAMS[7]], // Curriculum Design
    },
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

        {/* Training Categories */}
        <section className="pt-page-training" ref={sectionRef}>
          <div className="container">
            {trainingCategories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="pt-training-category mb-5"
              >
                <div className="pt-training-category__header mb-4">
                  <span className="pt-training-category__icon">
                    {category.icon}
                  </span>
                  <h2 className="pt-training-category__title">
                    {category.title}
                  </h2>
                  <p className="pt-training-category__description">
                    {category.description}
                  </p>
                </div>

                {category.programs.length > 0 ? (
                  <div className="row">
                    {category.programs.map((program, index) => (
                      <div
                        key={program.title}
                        className="col-md-6 col-lg-3 mb-4 reveal"
                      >
                        <Link
                          to={`/training/course/${program.slug}`}
                          className="pt-page-training-card-link"
                        >
                          <div className="pt-page-training-card">
                            <div className="pt-page-training-card__icon">
                              {program.icon}
                            </div>
                            <h3>{program.title}</h3>
                            <p>{program.description}</p>
                            <div className="pt-page-training-card__badge">
                              {category.title}
                            </div>
                            <div className="pt-page-training-card__footer">
                              <span className="pt-page-training-card__view-details">
                                View Details →
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="pt-training-coming-soon">
                    <p>
                      Coming soon! Check back for upcoming workshops and
                      seminars.
                    </p>
                  </div>
                )}
              </div>
            ))}
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

        <CallToAction />
      </main>

      <Footer />
    </>
  );
}

export default TrainingPage;
