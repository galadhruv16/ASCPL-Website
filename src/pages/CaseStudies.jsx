import React, { useState } from "react";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "ISO 27001 Implementation for Leading FinTech",
      industry: "BFSI / FinTech",
      client: "Major Payment Gateway Provider",
      problem:
        "Client needed ISO 27001:2022 certification to expand into European markets and ensure compliance with data protection regulations.",
      solution:
        "Comprehensive gap analysis, risk assessment, policy development, employee training, and end-to-end implementation of Information Security Management System (ISMS).",
      outcome:
        "Successfully achieved ISO 27001:2022 certification in 8 months. 40% reduction in security incidents, enhanced client trust, and successful market expansion.",
      metrics: [
        "8 months implementation",
        "40% reduction in incidents",
        "100% compliance achieved",
      ],
      tags: ["ISO 27001", "ISMS", "Data Protection", "FinTech"],
    },
    {
      id: 2,
      title: "OT Security Implementation for Power Distribution",
      industry: "Power & Energy",
      client: "State Power Distribution Company",
      problem:
        "Critical infrastructure vulnerabilities in SCADA systems and lack of cybersecurity framework for operational technology.",
      solution:
        "Deployed comprehensive OT security framework based on IEC 62443 standard, network segmentation, SIEM implementation, and 24x7 SOC services.",
      outcome:
        "Zero security breaches post-implementation. Enhanced operational efficiency and regulatory compliance. Real-time threat monitoring and response capabilities.",
      metrics: ["Zero breaches", "24x7 monitoring", "100% OT visibility"],
      tags: ["OT Security", "IEC 62443", "SCADA", "SOC"],
    },
    {
      id: 3,
      title: "AI Chatbot Development for Healthcare Chain",
      industry: "Healthcare",
      client: "Multi-location Healthcare Provider",
      problem:
        "High patient inquiry volume, delayed response times, and need for 24x7 customer support without increasing operational costs.",
      solution:
        "Developed AI-powered chatbot with NLP capabilities, integrated with hospital management system, and implemented HIPAA-compliant patient data handling.",
      outcome:
        "85% reduction in response time, 95% patient satisfaction score, and 60% reduction in support staff workload. HIPAA compliance maintained.",
      metrics: [
        "85% faster response",
        "95% satisfaction",
        "60% workload reduction",
      ],
      tags: ["AI Chatbot", "Healthcare", "HIPAA", "NLP"],
    },
    {
      id: 4,
      title: "DPDP Act Compliance for E-commerce Platform",
      industry: "IT & E-commerce",
      client: "Leading Online Marketplace",
      problem:
        "Need to comply with India's Digital Personal Data Protection (DPDP) Act 2023 and avoid hefty penalties.",
      solution:
        "Comprehensive data mapping, privacy impact assessment, consent management system implementation, and employee training programs.",
      outcome:
        "Full DPDP Act compliance achieved. Enhanced customer trust, streamlined data processes, and zero privacy violations since implementation.",
      metrics: ["100% DPDP compliance", "Zero violations", "Enhanced trust"],
      tags: ["DPDP Act", "Privacy", "Compliance", "Data Protection"],
    },
    {
      id: 5,
      title: "Automotive Cybersecurity for OEM",
      industry: "Automotive",
      client: "Global Automotive Manufacturer",
      problem:
        "Need for ISO/SAE 21434 compliance for connected vehicles and cybersecurity throughout vehicle lifecycle.",
      solution:
        "Implemented automotive cybersecurity management system, threat analysis and risk assessment (TARA), and penetration testing for ECUs.",
      outcome:
        "ISO/SAE 21434 compliance achieved. Secure vehicle architecture design and enhanced cybersecurity posture for next-gen connected vehicles.",
      metrics: [
        "ISO/SAE 21434 certified",
        "Secure architecture",
        "Zero vulnerabilities",
      ],
      tags: ["Automotive", "ISO/SAE 21434", "Connected Vehicles", "TARA"],
    },
  ];

  const industries = [
    "All Industries",
    "BFSI / FinTech",
    "Healthcare",
    "Power & Energy",
    "Automotive",
    "IT & E-commerce",
  ];

  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  const filteredCases =
    selectedIndustry === "All Industries"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === selectedIndustry);

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="hero-content-cases">
          <div className="hero-badge-cases">
            <span>🎯</span>
            <span>Success Stories</span>
          </div>
          <h1 className="hero-title-cases">
            Case Studies &{" "}
            <span className="hero-gradient-text">Success Stories</span>
          </h1>
          <p className="hero-subtitle-cases">
            Real-world impact through innovative solutions. See how we've helped
            organizations achieve their compliance, security, and digital
            transformation goals.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section-redesign">
        <div className="filter-container">
          <div className="filter-tabs-redesign">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`filter-tab-redesign ${
                  selectedIndustry === industry ? "active" : ""
                }`}
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="case-studies-grid-redesign">
            {filteredCases.map((caseStudy) => (
              <div key={caseStudy.id} className="case-study-card-redesign">
                <div className="case-header-redesign">
                  <div className="case-industry-tag-redesign">
                    {caseStudy.industry}
                  </div>
                  <h3 className="case-title-redesign">{caseStudy.title}</h3>
                  <p className="case-client-redesign">{caseStudy.client}</p>
                </div>

                <div className="case-content-redesign">
                  <div className="case-section-redesign">
                    <h4 className="case-section-title-redesign">Challenge</h4>
                    <p className="case-text-redesign">{caseStudy.problem}</p>
                  </div>

                  <div className="case-section-redesign">
                    <h4 className="case-section-title-redesign">Solution</h4>
                    <p className="case-text-redesign">{caseStudy.solution}</p>
                  </div>

                  <div className="case-section-redesign">
                    <h4 className="case-section-title-redesign">Results</h4>
                    <p className="case-text-redesign">{caseStudy.outcome}</p>
                  </div>

                  <div className="case-section-redesign">
                    <h4 className="case-section-title-redesign">Key Metrics</h4>
                    <div className="case-metrics-redesign">
                      {caseStudy.metrics.map((metric, idx) => (
                        <div key={idx} className="metric-badge-redesign">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="case-tags-redesign">
                    {caseStudy.tags.map((tag, idx) => (
                      <span key={idx} className="case-tag-redesign">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-cases">
        <div className="cta-content-cases">
          <h2 className="cta-title-cases">Ready to Transform Your Business?</h2>
          <p className="cta-subtitle-cases">
            Let's discuss how we can help you achieve similar success in your
            industry with our proven expertise.
          </p>
          <div className="cta-buttons-cases">
            <a href="/contact" className="btn-primary-modern">
              Schedule Free Consultation
            </a>
            <a href="/services" className="btn-secondary-modern">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
