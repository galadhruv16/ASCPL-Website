import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const observerRef = useRef();

  const clientLogos = [
    { name: "ŠKODA", industry: "Automotive" },
    { name: "Godrej", industry: "Consumer Goods" },
    { name: "Siyaram's", industry: "Textile" },
    { name: "HDFC ERGO", industry: "Insurance" },
    { name: "Volkswagen", industry: "Automotive" },
    { name: "Sterling & Wilson", industry: "EPC" },
    { name: "NPCI", industry: "FinTech" },
    { name: "Essar Power", industry: "Energy" },
    { name: "Hotel Fidalgo", industry: "Hospitality" },
    { name: "Kaya Skin Clinic", industry: "Healthcare" },
    { name: "Drums Food", industry: "FMCG" },
    { name: "Fuchs", industry: "Chemical" },
    { name: "POSOCO", industry: "Power Grid" },
    { name: "Aureus Analytics", industry: "IT Services" },
    { name: "Mango Box", industry: "Retail" },
    { name: "SRS Pharmaceutical", industry: "Pharma" },
    { name: "DNHPDCL", industry: "Power Distribution" },
    { name: "Writer Corporation", industry: "Manufacturing" },
  ];

  const testimonials = [
    {
      quote:
        "ACSPL transformed our cybersecurity posture completely. Their ISO 27001 implementation was flawless and delivered 40% faster than expected.",
      author: "CTO, Leading FinTech Company",
      rating: 5,
      company: "Fortune 500 Financial Services",
      result: "40% faster implementation",
    },
    {
      quote:
        "The AI chatbot solution ACSPL developed for us has revolutionized our customer service. 85% reduction in response time and 95% customer satisfaction.",
      author: "Head of Digital, Healthcare Chain",
      rating: 5,
      company: "Multi-location Healthcare Provider",
      result: "85% faster response time",
    },
    {
      quote:
        "DPDP Act compliance seemed impossible until ACSPL showed us the way. Seamless implementation across all our business units.",
      author: "Chief Compliance Officer",
      rating: 5,
      company: "National Retail Chain",
      result: "100% compliance achieved",
    },
  ];

  const services = [
    {
      icon: "🛡️",
      title: "Management Systems",
      subtitle: "ISO Standards Excellence",
      description: "Comprehensive ISO consulting across 15+ standards",
      features: [
        "ISO 9001 QMS",
        "ISO 27001 ISMS",
        "ISO 45001 OHSMS",
        "ISO 14001 EMS",
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stats: "500+ Certifications",
    },
    {
      icon: "🔒",
      title: "Cybersecurity & InfoSec",
      subtitle: "Advanced Security Solutions",
      description: "Cutting-edge VAPT, SOC, and threat intelligence",
      features: [
        "VAPT Services",
        "SOC Operations",
        "Red Teaming",
        "Threat Intel",
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stats: "99.9% Threat Detection",
    },
    {
      icon: "🤖",
      title: "AI & Gen AI Solutions",
      subtitle: "Intelligent Automation",
      description: "Custom AI agents and ML solutions",
      features: [
        "Custom Chatbots",
        "ML Models",
        "Computer Vision",
        "AI Training",
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stats: "200+ AI Deployments",
    },
    {
      icon: "⚖️",
      title: "Legal & Regulatory",
      subtitle: "Compliance Excellence",
      description: "Global regulatory compliance solutions",
      features: ["DPDP Act", "GDPR", "HIPAA", "NIST Frameworks"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stats: "100% Compliance Rate",
    },
  ];

  const industries = [
    { icon: "🏦", name: "BFSI", count: "50+" },
    { icon: "🏥", name: "Healthcare", count: "30+" },
    { icon: "⚡", name: "Power & Energy", count: "25+" },
    { icon: "🚗", name: "Automotive", count: "40+" },
    { icon: "💻", name: "IT & Telecom", count: "60+" },
    { icon: "🏗️", name: "EPC & Construction", count: "35+" },
  ];

  // Auto-advance sliders
  useEffect(() => {
    const clientInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 4));
    }, 4000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => {
      clearInterval(clientInterval);
      clearInterval(testimonialInterval);
      clearInterval(serviceInterval);
    };
  }, [clientLogos.length, testimonials.length, services.length]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="modern-page">
      {/* Advanced Hero Section */}
      <section className="modern-hero">
        {/* Dynamic Background */}
        <div className="hero-background">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
          <div className="particle-system">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i}`} />
            ))}
          </div>
        </div>

        {/* Interactive Cursor Follower */}
        <div
          className="cursor-follower"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: `translate(-50%, -50%) scale(${
              Math.sin(Date.now() * 0.003) * 0.2 + 1
            })`,
          }}
        />

        <div className="hero-container">
          <div className="hero-content-advanced">
            {/* Animated Badge */}
            <div className="hero-badge-modern pulse-glow">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">We Make Things Possible</span>
              <div className="badge-shimmer" />
            </div>

            {/* Main Title with Advanced Typography */}
            <div className="hero-title-container">
              <h1 className="hero-title-modern">
                <span className="title-line">
                  <span className="word-animate" style={{ "--delay": "0s" }}>
                    Transforming
                  </span>
                  <span className="word-animate" style={{ "--delay": "0.2s" }}>
                    Business
                  </span>
                </span>
                <span className="title-line">
                  <span
                    className="word-animate gradient-text-advanced"
                    style={{ "--delay": "0.4s" }}
                  >
                    Excellence
                  </span>
                  <span className="word-animate" style={{ "--delay": "0.6s" }}>
                    Through
                  </span>
                </span>
                <span className="title-line">
                  <span className="word-animate" style={{ "--delay": "0.8s" }}>
                    Innovation
                  </span>
                </span>
              </h1>
            </div>

            {/* Enhanced Subtitle */}
            <div className="hero-subtitle-container">
              <h2 className="hero-subtitle-modern slide-up-stagger">
                Your Partner in{" "}
                <span className="highlight-text">Business Risk</span>,
                <span className="highlight-text"> Management Systems</span>, and
                <span className="highlight-text"> Technology Consulting</span>
              </h2>
            </div>

            {/* Rich Description */}
            <div className="hero-description-container">
              <p className="hero-description-modern fade-in-delay">
                <strong>ACSPL</strong> is a premier Business Risk & Management
                Consulting Firm providing value-added services across{" "}
                <em>Management Systems (ISO)</em>, <em>Cybersecurity</em>,
                <em>Artificial Intelligence (AI)</em>,{" "}
                <em>Regulatory Compliance</em>, and <em>Project Management</em>.
                We serve a diverse range of industries with expertise and
                integrity.
              </p>
            </div>

            {/* Advanced CTA Buttons */}
            <div className="hero-cta-container">
              <div className="cta-buttons-advanced">
                <Link
                  to="/services"
                  className="btn-modern btn-primary-modern group"
                >
                  <span className="btn-text">Explore Our Services</span>
                  <span className="btn-icon">→</span>
                  <div className="btn-ripple" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-modern btn-secondary-modern group"
                >
                  <span className="btn-text">Free Consultation</span>
                  <span className="btn-icon">📞</span>
                  <div className="btn-ripple" />
                </Link>
              </div>
            </div>

            {/* Advanced Stats */}
            <div className="hero-stats-modern">
              <div className="stats-grid">
                <div className="stat-item-modern counter-up">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Clients</div>
                  <div className="stat-progress" style={{ "--width": "90%" }} />
                </div>
                <div className="stat-item-modern counter-up">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Success Rate</div>
                  <div className="stat-progress" style={{ "--width": "98%" }} />
                </div>
                <div className="stat-item-modern counter-up">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                  <div className="stat-progress" style={{ "--width": "85%" }} />
                </div>
                <div className="stat-item-modern counter-up">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Service Available</div>
                  <div
                    className="stat-progress"
                    style={{ "--width": "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Hero Visual */}
          <div className="hero-visual-modern">
            <div className="service-carousel-3d">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card-3d ${
                    index === currentService ? "active" : ""
                  }`}
                  style={{ "--gradient": service.gradient }}
                >
                  <div className="card-header-3d">
                    <div className="service-icon-3d">{service.icon}</div>
                    <div className="service-badge">{service.stats}</div>
                  </div>
                  <h3 className="service-title-3d">{service.title}</h3>
                  <p className="service-subtitle-3d">{service.subtitle}</p>
                  <ul className="service-features-3d">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="card-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Trust Bar */}
      <section className="trust-bar-premium">
        <div className="trust-container">
          <div className="trust-header">
            <h3 className="trust-title-modern">Trusted by Industry Leaders</h3>
            <p className="trust-subtitle-modern">
              Join 500+ companies who chose excellence
            </p>
          </div>

          <div className="client-carousel-premium">
            <div className="carousel-track">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div key={index} className="client-card-premium hover-float">
                  <div className="client-logo-premium">
                    <span className="client-name">{client.name}</span>
                    <span className="client-industry">{client.industry}</span>
                  </div>
                  <div className="client-shine" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars with Advanced Design */}
      <section className="service-pillars-modern" id="services">
        <div className="container-modern">
          <div className="section-header-modern">
            <div className="section-badge">🏆 Our Expertise</div>
            <h2 className="section-title-modern">Core Service Pillars</h2>
            <p className="section-description-modern">
              Comprehensive solutions across four key domains of business
              excellence, delivered with cutting-edge technology and deep
              industry expertise.
            </p>
          </div>

          <div className="pillars-grid-modern">
            {services.map((service, index) => (
              <div key={index} className="pillar-card-modern group">
                <div
                  className="card-background"
                  style={{ background: service.gradient }}
                />
                <div className="card-content-modern">
                  <div className="service-header-modern">
                    <div className="service-icon-modern">{service.icon}</div>
                    <div className="service-stats-badge">{service.stats}</div>
                  </div>

                  <h3 className="service-title-modern">{service.title}</h3>
                  <p className="service-subtitle-modern">{service.subtitle}</p>
                  <p className="service-description-modern">
                    {service.description}
                  </p>

                  <div className="service-features-modern">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item-modern">
                        <span className="feature-check">✓</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/services" className="service-cta-modern">
                    Learn More
                    <span className="cta-arrow">→</span>
                  </Link>
                </div>
                <div className="card-hover-effect" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Showcase */}
      <section className="industries-showcase">
        <div className="container-modern">
          <div className="section-header-modern">
            <div className="section-badge">🌐 Global Reach</div>
            <h2 className="section-title-modern">Industries We Transform</h2>
            <p className="section-description-modern">
              Specialized expertise across multiple industry verticals with
              proven track record
            </p>
          </div>

          <div className="industries-grid-modern">
            {industries.map((industry, index) => (
              <div key={index} className="industry-item-modern hover-tilt">
                <div className="industry-icon-modern">{industry.icon}</div>
                <h4 className="industry-name-modern">{industry.name}</h4>
                <div className="industry-count-modern">
                  {industry.count} Projects
                </div>
                <div className="industry-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <section className="testimonials-premium">
        <div className="container-modern">
          <div className="section-header-modern">
            <div className="section-badge">⭐ Client Success</div>
            <h2 className="section-title-modern">What Our Clients Say</h2>
            <p className="section-description-modern">
              Real results from real businesses who chose ACSPL for their
              transformation journey
            </p>
          </div>

          <div className="testimonial-carousel-modern">
            <div className="testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-card-modern ${
                    index === currentTestimonial ? "active" : ""
                  }`}
                >
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-meta">
                      <div className="testimonial-author">
                        <h4>{testimonial.author}</h4>
                        <p>{testimonial.company}</p>
                      </div>
                      <div className="testimonial-result">
                        <span className="result-badge">
                          {testimonial.result}
                        </span>
                      </div>
                    </div>
                    <div className="star-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${
                    index === currentTestimonial ? "active" : ""
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="cta-premium">
        <div className="cta-background">
          <div className="cta-orb-1" />
          <div className="cta-orb-2" />
        </div>
        <div className="container-modern">
          <div className="cta-content-premium">
            <div className="cta-badge-modern">🚀 Ready to Transform?</div>
            <h2 className="cta-title-premium">
              Let's Make Your Business
              <span className="gradient-text-advanced">
                {" "}
                Transformation
              </span>{" "}
              Possible
            </h2>
            <p className="cta-description-premium">
              Experience the difference that expertise, integrity, and
              innovation can make for your business. Schedule a free
              consultation with our experts today.
            </p>

            <div className="cta-features-grid">
              <div className="cta-feature">
                <span className="feature-icon">🎯</span>
                <span>Free Strategy Session</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">⚡</span>
                <span>24/7 Expert Support</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✅</span>
                <span>Proven Results</span>
              </div>
            </div>

            <div className="cta-buttons-premium">
              <Link to="/contact" className="btn-premium btn-primary-premium">
                <span className="btn-text">Schedule Free Consultation</span>
                <span className="btn-icon">📅</span>
                <div className="btn-particles">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={`particle-btn particle-${i}`} />
                  ))}
                </div>
              </Link>
              <Link
                to="/services"
                className="btn-premium btn-secondary-premium"
              >
                <span className="btn-text">Explore All Services</span>
                <span className="btn-icon">🔍</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
