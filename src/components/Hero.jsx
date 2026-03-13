// ─────────────────────────────────────────────
//  Component: Hero
//  Landing hero with animated 3D rotating cube
// ─────────────────────────────────────────────

import React from "react";
import { Link } from "react-router-dom";
import { CUBE_FACES } from "../data/content";
import "../styles/hero.css";

const CUBE_FACE_CLASSES = ["front", "back", "left", "right", "top", "bottom"];

function Hero() {
  return (
    <section className="pt-hero" id="home">
      {/* Text Content */}
      <div className="pt-hero__content">
        <div className="pt-hero__badge">
          <span className="pt-hero__badge-dot" />
          IT Consultancy &amp; Training
        </div>

        <h1 className="pt-hero__title">
          <span className="line1">
            Empowering Businesses
            <br />
            Through{" "}
          </span>
          <span className="line2">Smart Technology</span>
        </h1>

        <p className="pt-hero__description">
          PentaTech Consultancy Limited delivers cutting-edge IT solutions,
          corporate training, and digital transformation services — helping
          individuals and organizations thrive in a connected world.
        </p>

        <div className="pt-hero__buttons">
          <Link to="/services" className="btn-primary-pt">
            Explore Services ›
          </Link>
          <Link to="/training" className="btn-secondary-pt">
            View Training ›
          </Link>
        </div>
      </div>

      {/* 3D Rotating Cube */}
      <div className="pt-hero__3d">
        <div className="pt-hero__cube">
          <div className="pt-hero__cube-inner">
            {CUBE_FACES.map((icon, index) => (
              <div
                key={index}
                className={`pt-hero__cube-face pt-hero__cube-face--${CUBE_FACE_CLASSES[index]}`}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
