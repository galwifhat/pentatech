// ─────────────────────────────────────────────
//  Component: Navbar
//  Fixed navigation with router links
// ─────────────────────────────────────────────

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { NAV_LINKS } from "../data/content";
import "../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`pt-navbar${scrolled ? " scrolled" : ""}`}>
      {/* Logo */}
      <Link to="/" className="pt-navbar__logo">
        PENTA<span>TECH</span>
      </Link>

      {/* Links */}
      <ul className={`pt-navbar__links ${mobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/why-us" className={isActive("/why-us") ? "active" : ""}>
            Why Us
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={isActive("/services") ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/training"
            className={isActive("/training") ? "active" : ""}
          >
            Training
          </Link>
        </li>
        <li>
          <a href="/#contact" className="pt-navbar__cta">
            Get Started
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="pt-navbar__hamburger"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
