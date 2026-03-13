// ─────────────────────────────────────────────
//  Page: BlogPage
//  Article listing with category filtering
// ─────────────────────────────────────────────

import React, { useState } from "react";
import { BLOG } from "../data/blog-content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CircuitCanvas from "../components/CircuitCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages.css";
import "../styles/blog.css";

function BlogPage() {
  const pageRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const featuredPosts = BLOG.posts.filter((p) => p.featured);
  const regularPosts = BLOG.posts.filter((p) => {
    if (p.featured) return false;
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  // When a category filter is active, also show matching featured posts in the grid
  const gridPosts =
    activeCategory === "All"
      ? regularPosts
      : BLOG.posts.filter((p) => p.category === activeCategory);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll send insights to ${email}.`);
    setEmail("");
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
              <h1>{BLOG.hero.title}</h1>
              <p>{BLOG.hero.subtitle}</p>
            </div>
          </div>
        </section>

        {/* ── Category Filter ── */}
        <section className="pt-blog-filter">
          <div className="container">
            <div className="pt-blog-filter__bar">
              {BLOG.categories.map((cat) => (
                <button
                  key={cat}
                  className={`pt-blog-filter__btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Posts (only shown on "All") ── */}
        {activeCategory === "All" && (
          <section className="pt-blog-featured">
            <div className="container">
              <div className="pt-blog-section-label">Featured Articles</div>
              <div className="row g-4">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="col-md-6">
                    <div className="pt-blog-featured-card reveal">
                      <span className="pt-blog-card__category-pill">
                        {post.category}
                      </span>
                      <h2>{post.title}</h2>
                      <p className="pt-blog-card__excerpt">{post.excerpt}</p>

                      <div className="pt-blog-card__tags">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="pt-blog-card__tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-blog-card__meta">
                        <div className="pt-blog-card__author">
                          <div className="pt-blog-card__author-avatar">
                            {post.author.avatar}
                          </div>
                          <div>
                            <div className="pt-blog-card__author-name">
                              {post.author.name}
                            </div>
                            <div className="pt-blog-card__author-role">
                              {post.author.role}
                            </div>
                          </div>
                        </div>
                        <div className="pt-blog-card__info">
                          <span className="pt-blog-card__date">
                            {post.date}
                          </span>
                          <span className="pt-blog-card__read-time">
                            ⏱ {post.readTime}
                          </span>
                        </div>
                      </div>

                      <a
                        href={`/blog/${post.slug}`}
                        className="pt-blog-card__read-link"
                        style={{ marginTop: "18px" }}
                      >
                        Read Article →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── All / Filtered Posts Grid ── */}
        <section className="pt-blog-grid">
          <div className="container">
            {activeCategory === "All" && (
              <div className="pt-blog-section-label">Latest Articles</div>
            )}
            {activeCategory !== "All" && (
              <div className="pt-blog-section-label">{activeCategory}</div>
            )}

            {gridPosts.length === 0 ? (
              <div className="text-center py-5">
                <p style={{ color: "rgba(240,244,255,0.5)", fontSize: "1rem" }}>
                  No articles in this category yet — check back soon!
                </p>
              </div>
            ) : (
              <div className="row g-4">
                {gridPosts.map((post) => (
                  <div key={post.id} className="col-md-6 col-lg-4">
                    <div className="pt-blog-post-card reveal">
                      <span className="pt-blog-card__category-pill">
                        {post.category}
                      </span>
                      <h3>{post.title}</h3>
                      <p className="pt-blog-card__excerpt">{post.excerpt}</p>

                      <div className="pt-blog-card__tags">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="pt-blog-card__tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-blog-card__meta">
                        <div className="pt-blog-card__author">
                          <div className="pt-blog-card__author-avatar">
                            {post.author.avatar}
                          </div>
                          <div>
                            <div className="pt-blog-card__author-name">
                              {post.author.name}
                            </div>
                          </div>
                        </div>
                        <span className="pt-blog-card__read-time">
                          ⏱ {post.readTime}
                        </span>
                      </div>

                      <a
                        href={`/blog/${post.slug}`}
                        className="pt-blog-card__read-link"
                        style={{ marginTop: "18px" }}
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Newsletter ── */}
        <section className="pt-blog-newsletter">
          <div className="container">
            <div className="pt-blog-newsletter__inner reveal">
              <h2>{BLOG.newsletter.title}</h2>
              <p>{BLOG.newsletter.description}</p>
              <form
                className="pt-blog-newsletter__form"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  className="pt-blog-newsletter__input"
                  placeholder={BLOG.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary-pt">
                  {BLOG.newsletter.cta}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BlogPage;
