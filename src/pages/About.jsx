import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">🏢 About ACSPL</div>

          <h1 className="hero-title animate-slide-up">
            About Ambadnya Consultancy
            <br />
            <span className="gradient-text">Services Pvt. Ltd.</span>
          </h1>

          <p className="hero-description animate-fade-in-delay">
            ACSPL is a Business Risk & Management Consulting Firm providing a
            wide array of value-added services including IT, ML, Gen AI, ISO
            Standards, Regulatory Compliance, Risk Advisory, HR, and Skill
            Development.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title animate-fade-in">Our Story</h2>
              <p className="animate-fade-in-delay">
                Ambadnya Consultancy Services Pvt. Ltd. (ACSPL) stands as a
                premier Business Risk & Management Consulting Firm, dedicated to
                providing comprehensive value-added services across multiple
                domains. Our integrated approach ensures that we deliver
                state-of-the-art service modules and solutions in a time-bound
                manner, focusing on customer delight and continual improvement.
              </p>
              <p className="animate-fade-in-delay-2">
                With deep expertise spanning IT, Machine Learning, Generative
                AI, ISO Standards, Regulatory Compliance, Risk Advisory, HR, and
                Skill Development, we serve as your trusted partner in
                navigating the complex landscape of modern business challenges.
              </p>
            </div>
            <div className="content-visual animate-float">
              <div className="about-stats">
                <div className="stat-card hover-lift">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="stat-card hover-lift">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Successful Projects</div>
                </div>
                <div className="stat-card hover-lift">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-card hover-lift">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section why-choose-section">
        <div className="container">
          <div className="vmv-grid">
            <div className="vmv-card hover-lift animate-slide-up">
              <div className="vmv-icon">🔮</div>
              <h3 className="vmv-title">Our Vision</h3>
              <p className="vmv-description">
                To be a leading Consulting, Auditing, Training, and Advisory
                firm Nationally and Internationally, setting new standards of
                excellence in business transformation and risk management.
              </p>
            </div>

            <div className="vmv-card hover-lift animate-slide-up-delay">
              <div className="vmv-icon">🚀</div>
              <h3 className="vmv-title">Our Mission</h3>
              <p className="vmv-description">
                To achieve customer delight through innovating technologies,
                continual improvement, and dedicated teamwork, while delivering
                exceptional value and sustainable business solutions.
              </p>
            </div>

            <div className="vmv-card hover-lift animate-slide-up-delay-2">
              <div className="vmv-icon">💎</div>
              <h3 className="vmv-title">Our Core Values</h3>
              <div className="values-list">
                <span className="value-item">Leadership</span>
                <span className="value-item">Passion</span>
                <span className="value-item">Enthusiasm</span>
                <span className="value-item">Customer Focus</span>
                <span className="value-item">Transparency</span>
                <span className="value-item">Integrity</span>
                <span className="value-item">Availability</span>
                <span className="value-item">Honesty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <h2 className="section-title animate-fade-in">Our Approach</h2>
          <p className="section-subtitle animate-fade-in-delay">
            How we deliver exceptional results for our clients
          </p>

          <div className="approach-timeline">
            <div className="timeline-item hover-lift animate-slide-up">
              <div className="timeline-number">01</div>
              <div className="timeline-content">
                <h3>Assessment & Analysis</h3>
                <p>
                  We begin with a comprehensive assessment of your current
                  state, identifying opportunities, risks, and areas for
                  improvement.
                </p>
              </div>
            </div>

            <div className="timeline-item hover-lift animate-slide-up-delay">
              <div className="timeline-number">02</div>
              <div className="timeline-content">
                <h3>Strategic Planning</h3>
                <p>
                  Based on our analysis, we develop tailored strategies that
                  align with your business objectives and industry best
                  practices.
                </p>
              </div>
            </div>

            <div className="timeline-item hover-lift animate-slide-up-delay-2">
              <div className="timeline-number">03</div>
              <div className="timeline-content">
                <h3>Implementation</h3>
                <p>
                  We work closely with your team to implement solutions,
                  providing guidance, training, and support throughout the
                  process.
                </p>
              </div>
            </div>

            <div className="timeline-item hover-lift animate-slide-up-delay-3">
              <div className="timeline-number">04</div>
              <div className="timeline-content">
                <h3>Monitoring & Optimization</h3>
                <p>
                  We continuously monitor progress, measure results, and
                  optimize processes to ensure sustained success and continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content animate-fade-in">
            <h2 className="cta-title">Ready to Partner with ACSPL?</h2>
            <p className="cta-subtitle">
              Experience the difference that expertise, integrity, and
              innovation can make for your business transformation journey.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary pulse-animation">
                Start Your Journey
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
