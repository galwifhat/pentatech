// ─────────────────────────────────────────────
//  Component: WhyUs
//  Two-column: checklist + floating cards visual
// ─────────────────────────────────────────────

import React from 'react';
import { WHY_ITEMS, FLOAT_CARDS } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/whyus.css';

function WhyUs() {
  const sectionRef = useScrollReveal();

  return (
    <section className="pt-whyus" id="why-us" ref={sectionRef}>
      <div className="container-fluid">
        <div className="row align-items-center g-5">

          {/* Left: Checklist */}
          <div className="col-12 col-lg-6">
            <span className="section-label reveal">Why PentaTech</span>
            <h2 className="section-title reveal">
              Built on Innovation,<br />Driven by Excellence
            </h2>

            <ul className="pt-whyus__list">
              {WHY_ITEMS.map((item) => (
                <li className="pt-whyus__item reveal" key={item.title}>
                  <div className="pt-whyus__check">✓</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Floating Cards */}
          <div className="col-12 col-lg-6 d-none d-lg-block">
            <div className="pt-whyus__visual">
              {FLOAT_CARDS.map((card) => (
                <div className="pt-whyus__float-card" key={card.title}>
                  <div className="pt-whyus__float-icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;
