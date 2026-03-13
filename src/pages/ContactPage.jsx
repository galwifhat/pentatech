// ─────────────────────────────────────────────
//  Page: ContactPage
//  Contact form with validation + info sidebar
// ─────────────────────────────────────────────

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { CONTACT_INFO, SERVICES } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages.css";
import "../styles/contact.css";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const REQUIRED = ["firstName", "lastName", "email", "service", "message"];

function validate(fields) {
  const errors = {};
  REQUIRED.forEach((key) => {
    if (!fields[key].trim()) errors[key] = "This field is required.";
  });
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

function ContactPage() {
  const pageRef = useScrollReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstKey = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setSubmitting(true);

    // Build mailto link as the submission action (replace with API call if needed)
    const subject = `[PentaTech Enquiry] ${form.service ? `${form.service} — ` : ""}${form.firstName} ${form.lastName}`;
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Company: ${form.company || "Not provided"}`,
      `Service of Interest: ${form.service}`,
      `Budget Range: ${form.budget || "Not specified"}`,
      ``,
      `Message:`,
      form.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Show success after a short delay (email client opens in background)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(INITIAL_FORM);
    }, 800);
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
              <h1>Contact Us</h1>
              <p>
                Tell us about your project — we'll get back to you within one
                business day.
              </p>
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="pt-contact-body">
          <div className="container">
            <div className="row g-5">
              {/* ── Left: Form ── */}
              <div className="col-lg-7 reveal">
                <div className="pt-contact-form-card">
                  {submitted ? (
                    /* ── Success State ── */
                    <div className="pt-contact-success">
                      <span className="pt-contact-success__icon">✅</span>
                      <h3>Message Sent!</h3>
                      <p>
                        Thanks for reaching out. Your email client should have
                        opened with your message. We'll be in touch within one
                        business day.
                      </p>
                      <button
                        className="btn-secondary-pt"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    /* ── Form ── */
                    <>
                      <h2>Send Us a Message</h2>
                      <p>
                        Fill in the form below and one of our consultants will
                        be in touch shortly.
                      </p>

                      <form onSubmit={handleSubmit} noValidate>
                        {/* Name Row */}
                        <div className="pt-contact-row">
                          <div className="pt-contact-group">
                            <label htmlFor="firstName">First Name *</label>
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder="John"
                              value={form.firstName}
                              onChange={handleChange}
                              className={errors.firstName ? "error" : ""}
                            />
                            {errors.firstName && (
                              <span className="pt-contact-group__error">
                                {errors.firstName}
                              </span>
                            )}
                          </div>
                          <div className="pt-contact-group">
                            <label htmlFor="lastName">Last Name *</label>
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder="Doe"
                              value={form.lastName}
                              onChange={handleChange}
                              className={errors.lastName ? "error" : ""}
                            />
                            {errors.lastName && (
                              <span className="pt-contact-group__error">
                                {errors.lastName}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Email + Phone Row */}
                        <div className="pt-contact-row">
                          <div className="pt-contact-group">
                            <label htmlFor="email">Work Email *</label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@company.com"
                              value={form.email}
                              onChange={handleChange}
                              className={errors.email ? "error" : ""}
                            />
                            {errors.email && (
                              <span className="pt-contact-group__error">
                                {errors.email}
                              </span>
                            )}
                          </div>
                          <div className="pt-contact-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+254 700 000 000"
                              value={form.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        {/* Company */}
                        <div className="pt-contact-group">
                          <label htmlFor="company">
                            Company / Organisation
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Your company name"
                            value={form.company}
                            onChange={handleChange}
                          />
                        </div>

                        {/* Service + Budget Row */}
                        <div className="pt-contact-row">
                          <div className="pt-contact-group">
                            <label htmlFor="service">
                              Service of Interest *
                            </label>
                            <select
                              id="service"
                              name="service"
                              value={form.service}
                              onChange={handleChange}
                              className={errors.service ? "error" : ""}
                            >
                              <option value="" disabled>
                                Select a service
                              </option>
                              {SERVICES.map((s) => (
                                <option key={s.slug} value={s.title}>
                                  {s.icon} {s.title}
                                </option>
                              ))}
                              <option value="Training Programme">
                                🎓 Training Programme
                              </option>
                              <option value="General Enquiry">
                                💬 General Enquiry
                              </option>
                            </select>
                            {errors.service && (
                              <span className="pt-contact-group__error">
                                {errors.service}
                              </span>
                            )}
                          </div>
                          <div className="pt-contact-group">
                            <label htmlFor="budget">Budget Range</label>
                            <select
                              id="budget"
                              name="budget"
                              value={form.budget}
                              onChange={handleChange}
                            >
                              <option value="" disabled>
                                Select a range
                              </option>
                              <option value="Under KES 100K">
                                Under KES 100K
                              </option>
                              <option value="KES 100K – 500K">
                                KES 100K – 500K
                              </option>
                              <option value="KES 500K – 1M">
                                KES 500K – 1M
                              </option>
                              <option value="KES 1M – 5M">KES 1M – 5M</option>
                              <option value="Over KES 5M">Over KES 5M</option>
                              <option value="To be discussed">
                                To be discussed
                              </option>
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="pt-contact-group">
                          <label htmlFor="message">Your Message *</label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project, challenge, or question..."
                            value={form.message}
                            onChange={handleChange}
                            className={errors.message ? "error" : ""}
                            rows={5}
                          />
                          {errors.message && (
                            <span className="pt-contact-group__error">
                              {errors.message}
                            </span>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="btn-primary-pt pt-contact-submit"
                          disabled={submitting}
                        >
                          {submitting ? <>⏳ Sending…</> : <>📨 Send Message</>}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* ── Right: Sidebar ── */}
              <div className="col-lg-5 reveal">
                <div className="pt-contact-sidebar">
                  {/* Contact Info */}
                  <div className="pt-contact-info-card">
                    <h3>Get in Touch</h3>

                    <div className="pt-contact-info-item">
                      <div className="pt-contact-info-item__icon">📧</div>
                      <div>
                        <div className="pt-contact-info-item__label">Email</div>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="pt-contact-info-item__value"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="pt-contact-info-item">
                      <div className="pt-contact-info-item__icon">📞</div>
                      <div>
                        <div className="pt-contact-info-item__label">Phone</div>
                        <a
                          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                          className="pt-contact-info-item__value"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="pt-contact-info-item">
                      <div className="pt-contact-info-item__icon">📍</div>
                      <div>
                        <div className="pt-contact-info-item__label">
                          Office
                        </div>
                        <span className="pt-contact-info-item__value">
                          {CONTACT_INFO.address}
                        </span>
                      </div>
                    </div>

                    <div
                      className="pt-contact-info-item"
                      style={{ marginBottom: 0 }}
                    >
                      <div className="pt-contact-info-item__icon">⏱️</div>
                      <div>
                        <div className="pt-contact-info-item__label">
                          Response Time
                        </div>
                        <span className="pt-contact-info-item__value">
                          Within 1 business day
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="pt-contact-info-card">
                    <h3>Business Hours</h3>
                    <ul className="pt-contact-hours">
                      <li>
                        <span>Monday – Friday</span>
                        <span>8:00 AM – 6:00 PM</span>
                      </li>
                      <li>
                        <span>Saturday</span>
                        <span>9:00 AM – 1:00 PM</span>
                      </li>
                      <li>
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                      <li>
                        <span>Emergency Support</span>
                        <span>24/7</span>
                      </li>
                    </ul>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={CONTACT_INFO.whatsapp}
                    className="pt-contact-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 Chat with Us on WhatsApp
                  </a>
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

export default ContactPage;
