import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientLogos = [
    "ŠKODA",
    "Godrej",
    "Siyaram's",
    "HDFC ERGO",
    "Volkswagen",
    "Sterling & Wilson",
    "NPCI",
    "Essar Power",
    "Hotel Fidalgo",
    "Kaya Skin Clinic",
    "Drums Food",
    "Fuchs",
    "POSOCO",
    "Aureus Analytics",
    "Mango Box",
    "SRS Pharmaceutical",
    "DNHPDCL",
    "Writer Corporation",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 6));
    }, 3000);
    return () => clearInterval(interval);
  }, [clientLogos.length]);

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="floating-shapes">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            ⚡ We Make Things Possible
          </div>

          <h1 className="hero-title animate-slide-up">
            We Make Things
            <br />
            <span className="gradient-text">Possible</span>
          </h1>

          <h2 className="hero-subtitle-large animate-slide-up-delay">
            Your Partner in Business Risk, Management Systems, and Technology
            Consulting
          </h2>

          <p className="hero-description animate-fade-in-delay">
            ACSPL is a premier Business Risk & Management Consulting Firm
            providing value-added services across Management Systems (ISO),
            Cybersecurity, Artificial Intelligence (AI), Regulatory Compliance,
            and Project Management. We serve a diverse range of industries with
            expertise and integrity.
          </p>

          <div className="hero-buttons animate-slide-up-delay-2">
            <Link to="/services" className="btn btn-primary pulse-animation">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Request Free Consultation
            </Link>
          </div>

          <div className="hero-stats animate-fade-in-delay-3">
            <div className="stat counter-animation">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat counter-animation">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat counter-animation">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat counter-animation">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Service Available</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-float">
          <div className="hero-cards">
            <div className="hero-card hover-lift">
              <div className="card-icon">🔒</div>
              <h3>Cybersecurity</h3>
              <p>Advanced security solutions</p>
            </div>
            <div className="hero-card hover-lift">
              <div className="card-icon">🤖</div>
              <h3>AI Solutions</h3>
              <p>Cutting-edge AI implementation</p>
            </div>
            <div className="hero-card hover-lift">
              <div className="card-icon">📋</div>
              <h3>ISO Standards</h3>
              <p>Comprehensive compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Client Carousel */}
      <section className="trust-bar">
        <div className="container">
          <h3 className="trust-title">Trusted by Industry Leaders</h3>
          <div className="client-carousel">
            <div className="client-logos-wrapper">
              <div
                className="client-logos animate-scroll"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {clientLogos.map((client, index) => (
                  <div key={index} className="client-logo hover-scale">
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Service Pillars Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title animate-fade-in">
            Our Core Service Pillars
          </h2>
          <p className="section-subtitle animate-fade-in-delay">
            Comprehensive solutions across four key domains of business
            excellence
          </p>

          <div className="pillars-grid">
            <div className="pillar-card hover-lift animate-slide-up">
              <div className="pillar-icon">
                <div className="icon-bg management-systems">📋</div>
              </div>
              <h3 className="pillar-title">Management Systems</h3>
              <p className="pillar-description">
                Expert consulting for ISO certifications (9001, 27001, 45001) to
                streamline operations and ensure compliance.
              </p>
              <ul className="pillar-features">
                <li>✓ ISO 9001 Quality Management</li>
                <li>✓ ISO 27001 Information Security</li>
                <li>✓ ISO 45001 Occupational Health & Safety</li>
                <li>✓ ISO 14001 Environmental Management</li>
              </ul>
              <Link to="/services#management-systems" className="pillar-cta">
                Learn More →
              </Link>
            </div>

            <div className="pillar-card hover-lift animate-slide-up-delay">
              <div className="pillar-icon">
                <div className="icon-bg cybersecurity">🔒</div>
              </div>
              <h3 className="pillar-title">Cybersecurity & InfoSec</h3>
              <p className="pillar-description">
                Protecting your digital and operational assets with cutting-edge
                VAPT, OT Security, and SOC services.
              </p>
              <ul className="pillar-features">
                <li>✓ Vulnerability Assessment & Penetration Testing</li>
                <li>✓ Security Operations Center (SOC)</li>
                <li>✓ OT Security & Industrial Control Systems</li>
                <li>✓ Red Teaming & Threat Intelligence</li>
              </ul>
              <Link to="/services#cybersecurity" className="pillar-cta">
                Learn More →
              </Link>
            </div>

            <div className="pillar-card hover-lift animate-slide-up-delay-2">
              <div className="pillar-icon">
                <div className="icon-bg ai-solutions">🤖</div>
              </div>
              <h3 className="pillar-title">AI & Gen AI Solutions</h3>
              <p className="pillar-description">
                Leveraging Artificial Intelligence to build custom chatbots, AI
                agents, and provide transformative corporate training.
              </p>
              <ul className="pillar-features">
                <li>✓ Custom AI Chatbots & Agents</li>
                <li>✓ Machine Learning Solutions</li>
                <li>✓ Computer Vision Applications</li>
                <li>✓ AI/ML Corporate Training</li>
              </ul>
              <Link to="/services#ai-solutions" className="pillar-cta">
                Learn More →
              </Link>
            </div>

            <div className="pillar-card hover-lift animate-slide-up-delay-3">
              <div className="pillar-icon">
                <div className="icon-bg compliance">⚖️</div>
              </div>
              <h3 className="pillar-title">Legal & Regulatory Compliance</h3>
              <p className="pillar-description">
                Comprehensive compliance solutions for DPDP, GDPR, HIPAA, and
                other global regulatory frameworks.
              </p>
              <ul className="pillar-features">
                <li>✓ DPDP Act (India) Compliance</li>
                <li>✓ GDPR (EU) Implementation</li>
                <li>✓ HIPAA & HITRUST Solutions</li>
                <li>✓ Risk Assessment & Advisory</li>
              </ul>
              <Link to="/services#compliance" className="pillar-cta">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">
            Our Strengths, Your Advantage
          </h2>
          <p className="section-subtitle animate-fade-in-delay">
            Discover what makes ACSPL the preferred choice for businesses
            worldwide
          </p>

          <div className="strengths-grid">
            <div className="strength-item hover-lift animate-slide-up">
              <div className="strength-icon">🌐</div>
              <h3>Cross-Industrial Domain Experience</h3>
              <p>
                Deep expertise across diverse sectors from finance to
                manufacturing
              </p>
            </div>

            <div className="strength-item hover-lift animate-slide-up-delay">
              <div className="strength-icon">🎯</div>
              <h3>Commitment to Objectives</h3>
              <p>
                Unwavering focus on your tasks and targets with measurable
                results
              </p>
            </div>

            <div className="strength-item hover-lift animate-slide-up-delay-2">
              <div className="strength-icon">⏰</div>
              <h3>24x7 Service Availability</h3>
              <p>
                We are here when you need us, providing round-the-clock support
              </p>
            </div>

            <div className="strength-item hover-lift animate-slide-up-delay-3">
              <div className="strength-icon">⚡</div>
              <h3>Timely Delivery</h3>
              <p>
                Delivering solutions on schedule without compromising quality
              </p>
            </div>

            <div className="strength-item hover-lift animate-slide-up-delay-4">
              <div className="strength-icon">👥</div>
              <h3>Competent Professionals</h3>
              <p>
                A team of highly skilled and certified experts in their domains
              </p>
            </div>

            <div className="strength-item hover-lift animate-slide-up-delay-5">
              <div className="strength-icon">💎</div>
              <h3>Value Addition</h3>
              <p>We go beyond compliance to add real value to your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section industries-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">Industries We Serve</h2>
          <p className="section-subtitle animate-fade-in-delay">
            Specialized expertise across multiple industry verticals
          </p>

          <div className="industries-grid">
            <div className="industry-card hover-scale animate-fade-in">
              <div className="industry-icon">🏦</div>
              <h3>Finance & BFSI</h3>
              <p>Banking, FinTech, NBFC</p>
            </div>
            <div className="industry-card hover-scale animate-fade-in-delay">
              <div className="industry-icon">🏥</div>
              <h3>Healthcare & Hospitality</h3>
              <p>Medical, Pharma, Hotels</p>
            </div>
            <div className="industry-card hover-scale animate-fade-in-delay-2">
              <div className="industry-icon">⚡</div>
              <h3>Power & Energy</h3>
              <p>Utilities, Renewable Energy</p>
            </div>
            <div className="industry-card hover-scale animate-fade-in-delay-3">
              <div className="industry-icon">💻</div>
              <h3>IT & Telecom</h3>
              <p>Software, Technology</p>
            </div>
            <div className="industry-card hover-scale animate-fade-in-delay-4">
              <div className="industry-icon">🚗</div>
              <h3>Automotive</h3>
              <p>Manufacturing, Supply Chain</p>
            </div>
            <div className="industry-card hover-scale animate-fade-in-delay-5">
              <div className="industry-icon">🏗️</div>
              <h3>EPC & Construction</h3>
              <p>HVAC, MEP, Solar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content animate-fade-in">
            <h2 className="cta-title">Ready to Make Things Possible?</h2>
            <p className="cta-subtitle">
              Let's discuss how ACSPL can transform your business with our
              comprehensive consulting solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary pulse-animation">
                Schedule Free Consultation
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

export default Home;
