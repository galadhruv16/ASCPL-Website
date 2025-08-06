import React from "react";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      icon: "🏦",
      title: "Finance & BFSI",
      subtitle: "Banking, FinTech, NBFC",
      description:
        "Comprehensive compliance solutions for financial institutions, including DPDP Act, RBI guidelines, and cybersecurity frameworks.",
      services: [
        "Regulatory Compliance",
        "Risk Management",
        "Cybersecurity",
        "Data Protection",
      ],
    },
    {
      icon: "🏥",
      title: "Healthcare & Hospitality",
      subtitle: "Medical, Pharma, Hotels",
      description:
        "HIPAA compliance, patient data protection, and operational excellence solutions for healthcare and hospitality sectors.",
      services: [
        "HIPAA Compliance",
        "Data Security",
        "Quality Management",
        "Risk Assessment",
      ],
    },
    {
      icon: "⚡",
      title: "Power & Energy",
      subtitle: "Utilities, Renewable Energy",
      description:
        "OT security, NERC CIP compliance, and operational technology protection for power generation and distribution companies.",
      services: [
        "OT Security",
        "NERC CIP",
        "Industrial Control Systems",
        "Asset Management",
      ],
    },
    {
      icon: "💻",
      title: "IT & Telecom",
      subtitle: "Software, Technology",
      description:
        "Comprehensive cybersecurity, ISO 27001 implementation, and AI/ML solutions for technology companies.",
      services: [
        "ISO 27001",
        "Cybersecurity",
        "AI/ML Solutions",
        "Cloud Security",
      ],
    },
    {
      icon: "🚗",
      title: "Automotive",
      subtitle: "Manufacturing, Supply Chain",
      description:
        "ISO/SAE 21434 automotive cybersecurity, ASPICE, and TISAX compliance for automotive manufacturers.",
      services: ["ISO/SAE 21434", "ASPICE", "TISAX", "Supply Chain Security"],
    },
    {
      icon: "🏗️",
      title: "EPC & Construction",
      subtitle: "HVAC, MEP, Solar",
      description:
        "Project management, safety compliance (ISO 45001), and environmental management systems for construction projects.",
      services: [
        "ISO 45001",
        "Project Management",
        "Environmental Compliance",
        "Safety Audits",
      ],
    },
    {
      icon: "🚢",
      title: "Marine",
      subtitle: "Shipping, Ports",
      description:
        "Maritime security, port facility security assessments, and compliance with international maritime regulations.",
      services: [
        "Maritime Security",
        "Port Security",
        "IMO Compliance",
        "Risk Assessment",
      ],
    },
    {
      icon: "🧵",
      title: "Textile",
      subtitle: "Manufacturing, Export",
      description:
        "Quality management systems, environmental compliance, and supply chain optimization for textile manufacturers.",
      services: [
        "ISO 9001",
        "Environmental Compliance",
        "Supply Chain",
        "Quality Assurance",
      ],
    },
    {
      icon: "💊",
      title: "Pharmaceutical & Chemical",
      subtitle: "Drug Manufacturing, Chemicals",
      description:
        "FDA compliance, Good Manufacturing Practices (GMP), and chemical safety management systems.",
      services: ["FDA Compliance", "GMP", "Chemical Safety", "Quality Systems"],
    },
    {
      icon: "🔌",
      title: "Electronics & Electrical",
      subtitle: "Manufacturing, Components",
      description:
        "Product safety compliance, electromagnetic compatibility testing, and quality management for electronics manufacturers.",
      services: [
        "Product Safety",
        "EMC Testing",
        "ISO 9001",
        "Component Testing",
      ],
    },
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            🏭 Industries We Serve
          </div>

          <h1 className="hero-title animate-slide-up">
            Specialized Expertise
            <br />
            <span className="gradient-text">Across Industries</span>
          </h1>

          <p className="hero-description animate-fade-in-delay">
            ACSPL brings deep domain knowledge and specialized solutions across
            multiple industry verticals, ensuring compliance, security, and
            operational excellence tailored to your specific sector
            requirements.
          </p>

          <div className="hero-buttons animate-slide-up-delay-2">
            <Link to="/contact" className="btn btn-primary pulse-animation">
              Discuss Your Industry Needs
            </Link>
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section-title animate-fade-in">
            Our Industry Expertise
          </h2>
          <p className="section-subtitle animate-fade-in-delay">
            Comprehensive solutions tailored to industry-specific challenges and
            requirements
          </p>

          <div className="industries-detailed-grid">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`industry-detailed-card hover-lift animate-slide-up-delay-${
                  index % 3
                }`}
              >
                <div className="industry-card-header">
                  <div className="industry-card-icon">{industry.icon}</div>
                  <div className="industry-card-title">
                    <h3>{industry.title}</h3>
                    <p className="industry-subtitle">{industry.subtitle}</p>
                  </div>
                </div>

                <p className="industry-description">{industry.description}</p>

                <div className="industry-services">
                  <h4>Key Services:</h4>
                  <div className="services-tags">
                    {industry.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="service-tag">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="industry-cta">
                  Get Industry-Specific Solutions →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">
            Cross-Industry Capabilities
          </h2>
          <p className="section-subtitle animate-fade-in-delay">
            Core competencies that apply across all industry verticals
          </p>

          <div className="capabilities-grid">
            <div className="capability-card hover-lift animate-slide-up">
              <div className="capability-icon">🔒</div>
              <h3>Cybersecurity Excellence</h3>
              <p>
                Advanced threat protection, vulnerability assessments, and
                security operations across all industries.
              </p>
            </div>

            <div className="capability-card hover-lift animate-slide-up-delay">
              <div className="capability-icon">📋</div>
              <h3>Compliance Mastery</h3>
              <p>
                Deep expertise in regulatory frameworks, standards, and
                compliance requirements across sectors.
              </p>
            </div>

            <div className="capability-card hover-lift animate-slide-up-delay-2">
              <div className="capability-icon">🤖</div>
              <h3>AI & Innovation</h3>
              <p>
                Cutting-edge AI/ML solutions, automation, and digital
                transformation initiatives.
              </p>
            </div>

            <div className="capability-card hover-lift animate-slide-up-delay-3">
              <div className="capability-icon">⚖️</div>
              <h3>Risk Management</h3>
              <p>
                Comprehensive risk assessment, mitigation strategies, and
                business continuity planning.
              </p>
            </div>

            <div className="capability-card hover-lift animate-slide-up-delay-4">
              <div className="capability-icon">🎯</div>
              <h3>Quality Assurance</h3>
              <p>
                ISO standards implementation, quality management systems, and
                continuous improvement.
              </p>
            </div>

            <div className="capability-card hover-lift animate-slide-up-delay-5">
              <div className="capability-icon">📊</div>
              <h3>Strategic Consulting</h3>
              <p>
                Business strategy, operational excellence, and transformation
                advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title animate-fade-in">
            Industry Success Stories
          </h2>
          <p className="section-subtitle animate-fade-in-delay">
            Real results across diverse industry sectors
          </p>

          <div className="case-studies-preview">
            <div className="case-study-card hover-lift animate-slide-up">
              <div className="case-study-industry">🏦 BFSI</div>
              <h3>Leading Private Bank</h3>
              <p>
                Achieved DPDP Act compliance and enhanced cybersecurity posture,
                reducing security incidents by 75%.
              </p>
              <div className="case-study-metrics">
                <span className="metric">75% ↓ Security Incidents</span>
                <span className="metric">100% Compliance</span>
              </div>
            </div>

            <div className="case-study-card hover-lift animate-slide-up-delay">
              <div className="case-study-industry">🚗 Automotive</div>
              <h3>Global Auto Manufacturer</h3>
              <p>
                Implemented ISO/SAE 21434 automotive cybersecurity framework
                across entire supply chain.
              </p>
              <div className="case-study-metrics">
                <span className="metric">ISO/SAE 21434 Certified</span>
                <span className="metric">Supply Chain Secured</span>
              </div>
            </div>

            <div className="case-study-card hover-lift animate-slide-up-delay-2">
              <div className="case-study-industry">⚡ Energy</div>
              <h3>Power Generation Company</h3>
              <p>
                Deployed comprehensive OT security solution with NERC CIP
                compliance, protecting critical infrastructure.
              </p>
              <div className="case-study-metrics">
                <span className="metric">NERC CIP Compliant</span>
                <span className="metric">Zero OT Incidents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content animate-fade-in">
            <h2 className="cta-title">
              Ready to Transform Your Industry Operations?
            </h2>
            <p className="cta-subtitle">
              Let ACSPL's industry experts help you navigate challenges, ensure
              compliance, and achieve operational excellence in your specific
              sector.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary pulse-animation">
                Get Industry-Specific Consultation
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

export default Industries;
