// ─────────────────────────────────────────────
//  Component: CallToAction
//  Full-width CTA section with glow effect
// ─────────────────────────────────────────────

import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CONTACT_INFO } from "../data/content";
import "../styles/cta.css";

function CallToAction() {
  const sectionRef = useScrollReveal();

  return (
    <section className="pt-cta" id="contact" ref={sectionRef}>
      <div className="pt-cta__glow" aria-hidden="true" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <span className="section-label reveal">Let's Work Together</span>

            <h2 className="pt-cta__title reveal">
              Ready to Transform
              <br />
              Your IT Capabilities?
            </h2>

            <p className="pt-cta__description reveal">
              Whether you need expert consultancy, world-class training, or
              end-to-end digital transformation — PentaTech is your trusted
              partner.
            </p>

            <div className="pt-cta__buttons reveal">
              <Link to="/contact" className="btn-primary-pt">
                📧 Contact Us Today
              </Link>
              <a
                href={CONTACT_INFO.whatsapp}
                className="btn-secondary-pt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                💬 WhatsApp Us
              </a>
              <Link to="/services" className="btn-primary-pt">
                View All Services ›
              </Link>
            </div>

            {/* Quick Contact Options */}
            <div className="pt-cta__quick-contact reveal">
              <p>Or reach us directly:</p>
              <div className="pt-cta__quick-links">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}>
                  📞 {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
