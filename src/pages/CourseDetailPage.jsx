// ─────────────────────────────────────────────
//  Page: CourseDetailPage
//  Detailed course information page
// ─────────────────────────────────────────────

import React from "react";
import { useParams, Link } from "react-router-dom";
import { COURSE_DETAILS } from "../data/content";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages.css";
import "../styles/course-detail.css";

function CourseDetailPage() {
  const { courseSlug } = useParams();
  const course = COURSE_DETAILS[courseSlug];

  if (!course) {
    return (
      <>
        <CircuitCanvas />
        <Navbar />
        <main className="pt-page">
          <div className="container py-5 text-center">
            <h1>Course Not Found</h1>
            <p>
              The course you're looking for doesn't exist or is coming soon.
            </p>
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

      <main className="pt-page pt-course-detail">
        {/* Hero Section */}
        <section className="pt-course-hero">
          <div className="container">
            <div className="pt-course-hero__content">
              <Link to="/training" className="pt-course-hero__back">
                ← Back to Training
              </Link>
              <div className="pt-course-hero__icon">{course.icon}</div>
              <h1>{course.title}</h1>
              <p className="pt-course-hero__description">
                {course.fullDescription}
              </p>
              <div className="pt-course-hero__meta">
                <span>⏱️ {course.duration}</span>
                <span>🏷️ {course.level}</span>
                <span>💻 {course.format}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-course-content">
          <div className="container">
            <div className="row">
              {/* Left Column - Main Content */}
              <div className="col-lg-8">
                {/* What You'll Learn */}
                <div className="pt-course-section">
                  <h2>📚 What You'll Learn</h2>
                  <div className="row">
                    {course.learnTopics.map((topic, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="pt-course-topic">
                          <span className="pt-course-topic__check">✓</span>
                          {topic}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification Pathways */}
                <div className="pt-course-section">
                  <h2>🎓 Certification Pathways</h2>
                  <div className="pt-course-certs">
                    {course.certifications.map((cert, index) => (
                      <div key={index} className="pt-course-cert">
                        <div className="pt-course-cert__name">{cert.name}</div>
                        <div className="pt-course-cert__level">
                          {cert.level}
                        </div>
                        <div className="pt-course-cert__badge">
                          {cert.badge}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Modules */}
                <div className="pt-course-section">
                  <h2>📋 Course Modules</h2>
                  <div className="pt-course-modules">
                    {course.modules.map((module, index) => (
                      <details key={index} className="pt-course-module">
                        <summary>
                          <span className="pt-course-module__title">
                            {module.title}
                          </span>
                          <span className="pt-course-module__duration">
                            {module.duration}
                          </span>
                        </summary>
                        <ul className="pt-course-module__topics">
                          {module.topics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="col-lg-4">
                <div className="pt-course-sidebar">
                  {/* Quick Info */}
                  <div className="pt-course-card">
                    <h3>Quick Info</h3>
                    <ul className="pt-course-info">
                      <li>
                        <strong>Duration:</strong> {course.duration}
                      </li>
                      <li>
                        <strong>Level:</strong> {course.level}
                      </li>
                      <li>
                        <strong>Format:</strong> {course.format}
                      </li>
                      <li>
                        <strong>Prerequisites:</strong> {course.prerequisites}
                      </li>
                      <li>
                        <strong>Price:</strong> {course.price}
                      </li>
                    </ul>
                  </div>

                  {/* Upcoming Sessions */}
                  <div className="pt-course-card">
                    <h3>Upcoming Sessions</h3>
                    {course.dates.map((date, index) => (
                      <div key={index} className="pt-course-date">
                        <span>{date.start}</span>
                        <span
                          className={`pt-course-date__badge pt-course-date__badge--${date.status.toLowerCase().replace(" ", "-")}`}
                        >
                          {date.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Instructor */}
                  <div className="pt-course-instructor">
                    <h3>Your Instructor</h3>
                    <div className="pt-course-instructor__info">
                      <div className="pt-course-instructor__avatar">
                        {course.instructor.avatar}
                      </div>
                      <div>
                        <div className="pt-course-instructor__name">
                          {course.instructor.name}
                        </div>
                        <div className="pt-course-instructor__title">
                          {course.instructor.title}
                        </div>
                      </div>
                    </div>
                    <p>{course.instructor.bio}</p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-course-cta">
                    <a href="/#contact" className="btn-primary-pt w-100 mb-2">
                      Enroll Now
                    </a>
                    <a
                      href={`/training/${course.slug}/syllabus`}
                      className="btn-secondary-pt w-100"
                    >
                      Download Syllabus
                    </a>
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

export default CourseDetailPage;
