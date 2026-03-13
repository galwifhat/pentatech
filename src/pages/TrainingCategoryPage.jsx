// ─────────────────────────────────────────────
//  Page: TrainingCategoryPage
//  Dynamic page for training categories
// ─────────────────────────────────────────────

import React from "react";
import { Link, useParams } from "react-router-dom";
import { TRAINING_CATEGORIES } from "../data/content"; // Import the categories
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import "../styles/pages.css";
import "../styles/training-category.css";

function TrainingCategoryPage() {
  const { category } = useParams();
  const sectionRef = useScrollReveal();

  // Get the configuration from the imported object
  const config = TRAINING_CATEGORIES[category];

  if (!config) {
    return (
      <>
        <CircuitCanvas />
        <Navbar />
        <main className="pt-page">
          <div className="container py-5 text-center">
            <h1>Category Not Found</h1>
            <p>The training category you're looking for doesn't exist.</p>
            <Link to="/training" className="btn-primary-pt">
              Back to Training
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

      <main className="pt-page">
        {/* Hero Section */}
        <section className="pt-category-hero">
          <div className="container">
            <div className="pt-category-hero__content">
              <Link to="/training" className="pt-category-hero__back">
                ← Back to Training
              </Link>
              <div className="pt-category-hero__icon">{config.icon}</div>
              <h1>{config.title}</h1>
              <p className="pt-category-hero__description">
                {config.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-category-content" ref={sectionRef}>
          <div className="container">
            {/* Key Features */}
            <div className="pt-category-section">
              <h2 className="pt-category-section__title reveal">
                Key Features
              </h2>
              <div className="row">
                {config.features.map((feature, index) => (
                  <div key={index} className="col-md-6 col-lg-4 mb-3">
                    <div className="pt-category-feature reveal">
                      <span className="pt-category-feature__check">✓</span>
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs Grid (if available) */}
            {config.programs && config.programs.length > 0 && (
              <div className="pt-category-section">
                <h2 className="pt-category-section__title reveal">
                  Available Programs
                </h2>
                <div className="row">
                  {config.programs.map((program, index) => (
                    <div key={program.title} className="col-md-6 col-lg-4 mb-4">
                      <Link
                        to={`/training/course/${program.slug}`}
                        className="pt-category-program-link"
                      >
                        <div className="pt-category-program-card reveal">
                          <div className="pt-category-program-card__icon">
                            {program.icon}
                          </div>
                          <h3>{program.title}</h3>
                          <p>{program.description}</p>
                          <div className="pt-category-program-card__footer">
                            <span>View Program →</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Workshops (for workshops category) */}
            {category === "workshops" && config.upcomingWorkshops && (
              <div className="pt-category-section">
                <h2 className="pt-category-section__title reveal">
                  Upcoming Workshops & Seminars
                </h2>
                <div className="pt-workshops-grid">
                  {config.upcomingWorkshops.map((workshop, index) => (
                    <div key={index} className="pt-workshop-card reveal">
                      <h3>{workshop.title}</h3>
                      <div className="pt-workshop-card__meta">
                        <span>📅 {workshop.date}</span>
                        <span>⏱️ {workshop.duration}</span>
                      </div>
                      <p>{workshop.description}</p>
                      <button className="btn-primary-pt btn-small">
                        Register Interest
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process (for curriculum category) */}
            {category === "curriculum" && config.process && (
              <div className="pt-category-section">
                <h2 className="pt-category-section__title reveal">
                  Our Process
                </h2>
                <div className="pt-process-steps">
                  {config.process.map((step, index) => (
                    <div key={index} className="pt-process-step reveal">
                      <div className="pt-process-step__number">{index + 1}</div>
                      <div className="pt-process-step__content">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="pt-category-cta reveal">
              <h3>Ready to get started?</h3>
              <p>
                Contact us to learn more about our {config.title.toLowerCase()}{" "}
                programs.
              </p>
              <div className="pt-category-cta__buttons">
                <a href="/#contact" className="btn-primary-pt">
                  Contact Us
                </a>
                <Link to="/training" className="btn-secondary-pt">
                  View All Programs
                </Link>
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

export default TrainingCategoryPage;
