import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Business Consulting in 2024",
      excerpt:
        "Explore the emerging trends and technologies shaping the consulting industry and how they impact business transformation.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Industry Insights",
    },
    {
      id: 2,
      title: "Digital Transformation: A Complete Guide",
      excerpt:
        "Learn the essential steps, strategies, and best practices for successfully implementing digital transformation in your organization.",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Digital Strategy",
    },
    {
      id: 3,
      title: "Operational Excellence: Key Performance Indicators",
      excerpt:
        "Discover the critical KPIs that drive operational excellence and how to implement them effectively in your business.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Operations",
    },
    {
      id: 4,
      title: "Strategic Planning in Uncertain Times",
      excerpt:
        "Navigate market volatility and uncertainty with robust strategic planning frameworks and adaptive methodologies.",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Strategy",
    },
    {
      id: 5,
      title: "Building High-Performance Teams",
      excerpt:
        "Proven strategies for creating, developing, and maintaining high-performance teams that drive business success.",
      date: "November 20, 2024",
      readTime: "5 min read",
      category: "Leadership",
    },
    {
      id: 6,
      title: "Customer Experience Optimization",
      excerpt:
        "Transform your customer journey with data-driven insights and proven optimization techniques for better engagement.",
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Customer Success",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-content">
          <div className="hero-badge">📚 Knowledge Hub</div>

          <h1 className="hero-title">Insights & Expertise</h1>

          <p className="hero-subtitle">
            Stay ahead with the latest trends, strategies, and insights from our
            team of business consulting experts.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}
          >
            <div style={{ padding: "3rem" }}>
              <div
                style={{
                  display: "inline-block",
                  background: "var(--primary-50)",
                  color: "var(--primary-600)",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius-lg)",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                Featured Article
              </div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "var(--secondary-800)",
                }}
              >
                The Evolution of Business Consulting: What's Next?
              </h2>
              <p
                style={{
                  color: "var(--secondary-600)",
                  fontSize: "1.125rem",
                  lineHeight: "1.6",
                  marginBottom: "2rem",
                }}
              >
                As we move into 2024, the business consulting landscape
                continues to evolve rapidly. From AI-powered analytics to
                sustainable business practices, discover the key trends that
                will shape the future of consulting.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--secondary-200)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    fontSize: "0.875rem",
                    color: "var(--secondary-500)",
                  }}
                >
                  <span>December 20, 2024</span>
                  <span>10 min read</span>
                </div>
                <Link
                  to="#"
                  className="btn btn-primary"
                  style={{ padding: "0.75rem 1.5rem" }}
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Expert insights and practical advice for business leaders
          </p>

          <div className="cards-grid">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="card"
                style={{ textAlign: "left", height: "fit-content" }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--secondary-100)",
                    color: "var(--secondary-600)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                  }}
                >
                  {post.category}
                </div>

                <h3
                  className="card-title"
                  style={{ textAlign: "left", marginBottom: "1rem" }}
                >
                  {post.title}
                </h3>

                <p
                  className="card-description"
                  style={{ marginBottom: "1.5rem" }}
                >
                  {post.excerpt}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--secondary-200)",
                    fontSize: "0.875rem",
                    color: "var(--secondary-500)",
                  }}
                >
                  <div>
                    <div>{post.date}</div>
                    <div>{post.readTime}</div>
                  </div>
                  <Link
                    to="#"
                    style={{
                      color: "var(--primary-600)",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Explore by Category</h2>
          <p className="section-subtitle">
            Find articles tailored to your specific interests and needs
          </p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">Strategy</h3>
              <p className="card-description">
                Strategic planning, market analysis, competitive positioning,
                and long-term business planning insights.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">💻</div>
              <h3 className="card-title">Digital Transformation</h3>
              <p className="card-description">
                Technology adoption, digital strategy, automation, and
                modernization best practices and case studies.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">👥</div>
              <h3 className="card-title">Leadership</h3>
              <p className="card-description">
                Team management, organizational development, change management,
                and leadership development strategies.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">📊</div>
              <h3 className="card-title">Operations</h3>
              <p className="card-description">
                Process optimization, efficiency improvement, quality
                management, and operational excellence methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 className="cta-title">Stay Updated</h2>
            <p className="cta-subtitle">
              Subscribe to our newsletter and get the latest insights, trends,
              and expert advice delivered directly to your inbox.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Subscribe Now →
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
