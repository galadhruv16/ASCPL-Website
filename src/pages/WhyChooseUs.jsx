import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-content">
          <div className="hero-badge">⭐ Why Ambadnya Consultancy</div>

          <h1 className="hero-title">Your Success is Our Mission</h1>

          <p className="hero-subtitle">
            Discover why businesses worldwide trust Ambadnya Consultancy for
            their transformation journey and sustainable growth.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            Built on a foundation of excellence, integrity, and innovation
          </p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🏆</div>
              <h3 className="card-title">Excellence</h3>
              <p className="card-description">
                We deliver nothing but the highest quality solutions, ensuring
                every project exceeds expectations and drives meaningful
                results.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🤝</div>
              <h3 className="card-title">Integrity</h3>
              <p className="card-description">
                Transparent communication, honest assessments, and ethical
                practices form the backbone of every client relationship.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">💡</div>
              <h3 className="card-title">Innovation</h3>
              <p className="card-description">
                We leverage cutting-edge methodologies and creative thinking to
                solve complex business challenges in unique ways.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">📊</div>
              <h3 className="card-title">Results-Driven</h3>
              <p className="card-description">
                Every strategy is designed with measurable outcomes in mind,
                ensuring tangible value and return on investment.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🌟</div>
              <h3 className="card-title">Client-Centric</h3>
              <p className="card-description">
                Your success is our priority. We tailor every solution to your
                unique needs, challenges, and business objectives.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🚀</div>
              <h3 className="card-title">Agility</h3>
              <p className="card-description">
                We adapt quickly to changing market conditions and business
                needs, ensuring our solutions remain relevant and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-subtitle">
            The Ambadnya advantage that makes the difference
          </p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3 className="card-title">Industry Expertise</h3>
              <p className="card-description">
                Our team brings decades of experience across multiple
                industries, providing deep insights and proven strategies that
                work.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🔄</div>
              <h3 className="card-title">Proven Methodology</h3>
              <p className="card-description">
                Our structured approach combines best practices with innovative
                techniques, ensuring consistent and reliable outcomes.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">📞</div>
              <h3 className="card-title">Ongoing Support</h3>
              <p className="card-description">
                We don't just deliver solutions and disappear. Our team provides
                continuous support throughout your transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">
            Real results from real businesses who chose Ambadnya
          </p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">📈</div>
              <h3 className="card-title">Manufacturing Giant</h3>
              <p className="card-description">
                "Ambadnya helped us streamline operations and reduce costs by
                30% while improving quality. Their strategic insights were
                game-changing."
              </p>
              <div
                style={{
                  marginTop: "1rem",
                  fontWeight: "600",
                  color: "var(--primary-600)",
                }}
              >
                - CEO, Fortune 500 Manufacturing Company
              </div>
            </div>

            <div className="card">
              <div className="card-icon">🏢</div>
              <h3 className="card-title">Tech Startup</h3>
              <p className="card-description">
                "From 50 to 500 employees in 18 months. Ambadnya's growth
                strategy and operational excellence framework made it possible."
              </p>
              <div
                style={{
                  marginTop: "1rem",
                  fontWeight: "600",
                  color: "var(--primary-600)",
                }}
              >
                - Founder, Technology Startup
              </div>
            </div>

            <div className="card">
              <div className="card-icon">🏪</div>
              <h3 className="card-title">Retail Chain</h3>
              <p className="card-description">
                "Digital transformation seemed impossible until Ambadnya showed
                us the way. Revenue increased 65% in the first year."
              </p>
              <div
                style={{
                  marginTop: "1rem",
                  fontWeight: "600",
                  color: "var(--primary-600)",
                }}
              >
                - VP Operations, National Retail Chain
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 className="cta-title">Experience the Ambadnya Difference</h2>
            <p className="cta-subtitle">
              Ready to join the ranks of successful businesses who chose
              excellence? Let's discuss how we can transform your organization.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Schedule Consultation →
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
