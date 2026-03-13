// ─────────────────────────────────────────────
//  Component: Footer
//  Site footer with links, social icons & brand
// ─────────────────────────────────────────────

import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "../data/content";
import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter signup logic here
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="pt-footer">
      <div className="container-fluid">
        <div className="row g-4 mb-4">
          {/* Brand */}
          <div className="col-12 col-md-5 pt-footer__brand">
            <Link to="/" className="pt-footer__logo-link">
              <h3>
                PENTA<span>TECH</span>
              </h3>
            </Link>
            <p>
              PentaTech Consultancy Limited — delivering high-quality IT
              consultancy and training services that build industry-relevant
              technical skills.
            </p>

            {/* Contact Info */}
            <div className="pt-footer__contact">
              <p>
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  📧 {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}>
                  📞 {CONTACT_INFO.phone}
                </a>
              </p>
              <p>📍 {CONTACT_INFO.address}</p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
            <div className="col-6 col-md-2 pt-footer__col" key={heading}>
              <h4>{heading}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item.name}>
                    {item.link.startsWith("mailto:") ? (
                      <a href={item.link}>{item.name}</a>
                    ) : (
                      <Link to={item.link}>{item.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="row mb-4">
          <div className="col-12 col-md-6 mx-auto">
            <form
              onSubmit={handleNewsletterSubmit}
              className="pt-footer__newsletter"
            >
              <h4>Subscribe to our Newsletter</h4>
              <div className="pt-footer__newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Email for newsletter"
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-footer__bottom">
          <span>
            © {currentYear} PentaTech Consultancy Limited. All rights reserved.
          </span>

          <div className="pt-footer__socials">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="pt-footer__social-link"
                aria-label={link.aria || link.label}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="pt-footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
