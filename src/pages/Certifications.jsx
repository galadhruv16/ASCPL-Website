import React from "react";

const Certifications = () => {
  const certifications = [
    {
      category: "Information Security",
      certs: [
        {
          name: "ISO 27001:2022",
          description: "Information Security Management System",
          badge: "iso-27001.png",
        },
        {
          name: "ISO 27032",
          description: "Cybersecurity Guidelines",
          badge: "iso-27032.png",
        },
        {
          name: "ISO 27035",
          description: "Security Incident Management",
          badge: "iso-27035.png",
        },
        {
          name: "NIST Cybersecurity Framework",
          description: "Risk Management Framework",
          badge: "nist.png",
        },
      ],
    },
    {
      category: "Healthcare & Privacy",
      certs: [
        {
          name: "HIPAA",
          description: "Health Insurance Portability",
          badge: "hipaa.png",
        },
        {
          name: "HITRUST CSF",
          description: "Healthcare Security Framework",
          badge: "hitrust.png",
        },
        {
          name: "GDPR",
          description: "General Data Protection Regulation",
          badge: "gdpr.png",
        },
        {
          name: "DPDP Act",
          description: "Digital Personal Data Protection",
          badge: "dpdp.png",
        },
      ],
    },
    {
      category: "Quality & Risk Management",
      certs: [
        {
          name: "ISO 9001:2015",
          description: "Quality Management System",
          badge: "iso-9001.png",
        },
        {
          name: "ISO 31000",
          description: "Risk Management Guidelines",
          badge: "iso-31000.png",
        },
        {
          name: "ISO 45001",
          description: "Occupational Health & Safety",
          badge: "iso-45001.png",
        },
        {
          name: "ISO 14001",
          description: "Environmental Management",
          badge: "iso-14001.png",
        },
      ],
    },
    {
      category: "Automotive & Industrial",
      certs: [
        {
          name: "ISO/SAE 21434",
          description: "Automotive Cybersecurity",
          badge: "iso-21434.png",
        },
        {
          name: "ASPICE",
          description: "Automotive Software Process",
          badge: "aspice.png",
        },
        {
          name: "IEC 62443",
          description: "Industrial Cybersecurity",
          badge: "iec-62443.png",
        },
        {
          name: "ISO 50001",
          description: "Energy Management",
          badge: "iso-50001.png",
        },
      ],
    },
    {
      category: "Financial & Regulatory",
      certs: [
        {
          name: "PCI DSS",
          description: "Payment Card Industry Security",
          badge: "pci-dss.png",
        },
        {
          name: "SOX",
          description: "Sarbanes-Oxley Compliance",
          badge: "sox.png",
        },
        {
          name: "DORA",
          description: "Digital Operational Resilience",
          badge: "dora.png",
        },
        {
          name: "NIS2",
          description: "Network & Information Security",
          badge: "nis2.png",
        },
      ],
    },
  ];

  const affiliations = [
    {
      name: "ISO/IEC 27001 Lead Auditor",
      org: "International Register of Certified Auditors (IRCA)",
    },
    { name: "Certified Information Systems Auditor", org: "ISACA" },
    { name: "Certified Ethical Hacker", org: "EC-Council" },
    { name: "Project Management Professional", org: "PMI" },
    { name: "CISSP", org: "ISC2" },
    { name: "CISA", org: "ISACA" },
  ];

  const trustBadges = [
    "ISO Certified Consultancy",
    "24x7 Support Available",
    "Cross-Industry Expertise",
    "500+ Successful Projects",
    "Global Standards Compliance",
    "Expert Team of Auditors",
  ];

  return (
    <div className="modern-page">
      <div className="container-modern">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content-advanced">
            <div className="hero-badge-modern">
              <span>Credentials & Certifications</span>
            </div>
            <h1 className="hero-title-modern">
              Our <span className="gradient-text-advanced">Certifications</span>{" "}
              & Affiliations
            </h1>
            <p className="hero-subtitle-modern">
              Backed by industry-leading certifications and global standards
              expertise to deliver world-class consulting services.
            </p>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="trust-badges-section">
          <div className="trust-badges-grid">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <div className="trust-badge-icon">✓</div>
                <span className="trust-badge-text">{badge}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications by Category */}
        <section className="certifications-section">
          <div className="section-header">
            <h2 className="section-title">
              Standards & Frameworks We Specialize In
            </h2>
            <p className="section-subtitle">
              Our expertise spans across multiple domains and international
              standards
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((category, index) => (
              <div key={index} className="certification-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="category-certs">
                  {category.certs.map((cert, certIndex) => (
                    <div key={certIndex} className="cert-card">
                      <div className="cert-badge">
                        <div className="badge-placeholder">
                          {cert.name.split(" ")[0]}
                        </div>
                      </div>
                      <div className="cert-info">
                        <h4 className="cert-name">{cert.name}</h4>
                        <p className="cert-description">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Affiliations */}
        <section className="affiliations-section">
          <div className="section-header">
            <h2 className="section-title">Professional Affiliations</h2>
            <p className="section-subtitle">
              Our team holds prestigious certifications from leading
              organizations
            </p>
          </div>

          <div className="affiliations-grid">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="affiliation-card">
                <div className="affiliation-icon">🏆</div>
                <h4 className="affiliation-name">{affiliation.name}</h4>
                <p className="affiliation-org">{affiliation.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section-modern">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Work with Certified Experts?</h2>
            <p className="cta-subtitle">
              Leverage our certified expertise to achieve your compliance and
              security goals.
            </p>
            <div className="cta-buttons-advanced">
              <a href="/contact" className="btn-modern btn-primary-modern">
                <span className="btn-text">Get Expert Consultation</span>
                <span className="btn-icon">📞</span>
              </a>
              <a href="/services" className="btn-modern btn-secondary-modern">
                <span className="btn-text">View Our Services</span>
                <span className="btn-icon">→</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
