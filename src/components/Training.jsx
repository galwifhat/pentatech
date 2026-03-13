// ─────────────────────────────────────────────
//  Component: Training
//  Training program cards that link to detail pages
// ─────────────────────────────────────────────

import React from "react";
import { Link } from "react-router-dom";
import { TRAINING_PROGRAMS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/training.css";

function TrainingCard({ program }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4 reveal">
      <Link
        to={`/training/course/${program.slug}`}
        className="pt-training__card-link"
      >
        <div className="pt-training__card">
          <div className="pt-training__icon">{program.icon}</div>
          <h3>{program.title}</h3>
          <p>{program.description}</p>
          <div className="pt-training__card-footer">
            <span className="pt-training__view-details">View Details →</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Training() {
  const sectionRef = useScrollReveal();

  return (
    <section className="pt-training" id="training" ref={sectionRef}>
      <div className="container-fluid">
        {/* Header */}
        <div className="row mb-2">
          <div className="col-12">
            <span className="section-label reveal">
              Programs &amp; Certifications
            </span>
            <h2 className="section-title reveal">
              Training Built for
              <br />
              the Modern Tech World
            </h2>
            <p className="section-sub reveal">
              Certification-ready programs, bootcamps, workshops, and bespoke
              corporate training for individuals and organizations.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row reveal-stagger">
          {TRAINING_PROGRAMS.map((program) => (
            <TrainingCard key={program.slug} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Training;
