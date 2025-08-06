import React, { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeTab, setActiveTab] = useState("management-systems");

  const serviceCategories = {
    "management-systems": {
      title: "Management Systems",
      icon: "🛡️",
      description: "Comprehensive ISO consulting across 15+ standards for operational excellence",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      services: [
        {
          name: "ISO 9001 (QMS)",
          description: "Quality Management System for process optimization and customer satisfaction",
          features: ["Process Mapping", "Document Control", "Internal Audits", "Management Review"],
          benefits: "30% improvement in operational efficiency"
        },
        {
          name: "ISO 14001 (EMS)",
          description: "Environmental Management System for sustainability and compliance",
          features: ["Environmental Impact Assessment", "Legal Compliance", "Waste Management", "Carbon Footprint"],
          benefits: "25% reduction in environmental impact"
        },
        {
          name: "ISO 45001 (OHSMS)",
          description: "Occupational Health & Safety Management System",
          features: ["Risk Assessment", "Incident Management", "Safety Training", "Emergency Preparedness"],
          benefits: "40% reduction in workplace incidents"
        },
        {
          name: "ISO 27001 (ISMS)",
          description: "Information Security Management System",
          features: ["Security Risk Assessment", "Access Control", "Incident Response", "Business Continuity"],
          benefits: "60% improvement in security posture"
        },
        {
          name: "ISO 22301 (BCMS)",
          description: "Business Continuity Management System",
          features: ["Business Impact Analysis", "Risk Assessment", "Recovery Strategies", "Testing & Exercises"],
          benefits: "90% reduction in downtime"
        },
        {
          name: "ISO 27701 (PIMS)",
          description: "Privacy Information Management System",
          features: ["Privacy Risk Assessment", "Data Protection", "GDPR Compliance", "Privacy Controls"],
          benefits: "100% privacy compliance"
        },
        {
          name: "ISO 31000 (Risk Management)",
          description: "Enterprise Risk Management Framework",
          features: ["Risk Identification", "Risk Analysis", "Risk Evaluation", "Risk Treatment"],
          benefits: "50% better risk visibility"
        },
        {
          name: "ISO 50001 (EnMS)",
          description: "Energy Management System",
          features: ["Energy Review", "Performance Indicators", "Energy Baseline", "Improvement Plans"],
          benefits: "20% energy cost reduction"
        }
      ]
    },
    "cybersecurity": {
      title: "Cybersecurity & InfoSec",
      icon: "🔒",
      description: "Advanced security solutions protecting digital and operational assets",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      services: [
        {
          name: "VAPT Services",
          description: "Comprehensive Vulnerability Assessment & Penetration Testing",
          features: ["Network Security Testing", "Web Application Security", "Mobile App Security", "API Security Testing"],
          benefits: "95% vulnerability detection rate"
        },
        {
          name: "SOC Services (SOC1,2,3)",
          description: "Security Operations Center with 24/7 monitoring",
          features: ["Real-time Monitoring", "Incident Response", "Threat Intelligence", "Compliance Reporting"],
          benefits: "99.9% uptime guarantee"
        },
        {
          name: "Red Teaming",
          description: "Advanced persistent threat simulation",
          features: ["Social Engineering", "Physical Security", "Advanced Evasion", "Custom Malware"],
          benefits: "Real-world attack scenarios"
        },
        {
          name: "Web & Mobile Security",
          description: "Application security testing and hardening",
          features: ["OWASP Top 10", "Source Code Review", "Runtime Protection", "Security Headers"],
          benefits: "Zero critical vulnerabilities"
        },
        {
          name: "System Config Audit",
          description: "Infrastructure security configuration review",
          features: ["CIS Benchmarks", "Hardening Guidelines", "Compliance Checking", "Remediation Plans"],
          benefits: "90% security improvement"
        },
        {
          name: "Forensic Audits",
          description: "Digital forensics and incident investigation",
          features: ["Evidence Collection", "Timeline Analysis", "Root Cause Analysis", "Legal Reporting"],
          benefits: "100% evidence integrity"
        }
      ]
    },
    "ot-security": {
      title: "OT Security",
      icon: "⚙️",
      description: "Industrial control systems and operational technology protection",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      services: [
        {
          name: "OT Security Assessments",
          description: "IEC 62443, NIST CSF, NERC CIP compliance assessments",
          features: ["Asset Discovery", "Vulnerability Assessment", "Risk Analysis", "Compliance Gap Analysis"],
          benefits: "100% OT asset visibility"
        },
        {
          name: "OT Threat Detection",
          description: "Real-time monitoring and incident response for OT environments",
          features: ["Network Monitoring", "Anomaly Detection", "Threat Hunting", "Incident Response"],
          benefits: "Zero unplanned downtime"
        },
        {
          name: "Network Segmentation",
          description: "OT/IT network isolation and zone-based security",
          features: ["Zone & Conduit Design", "Firewall Rules", "DMZ Implementation", "Access Control"],
          benefits: "99% attack containment"
        },
        {
          name: "SIEM-SOAR for OT",
          description: "Security information and event management for industrial systems",
          features: ["Log Correlation", "Automated Response", "Compliance Reporting", "Dashboard Analytics"],
          benefits: "75% faster incident response"
        }
      ]
    },
    "automotive-cyber": {
      title: "Automotive Cybersecurity",
      icon: "🚗",
      description: "Specialized cybersecurity solutions for automotive industry",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      services: [
        {
          name: "ISO/SAE 21434 Consulting",
          description: "Automotive cybersecurity engineering lifecycle",
          features: ["Cybersecurity Governance", "Risk Assessment", "Threat Analysis", "Validation & Verification"],
          benefits: "100% regulatory compliance"
        },
        {
          name: "ASPICE for Cyber-Security",
          description: "Automotive SPICE cybersecurity process assessment",
          features: ["Process Assessment", "Capability Determination", "Improvement Planning", "Maturity Roadmap"],
          benefits: "Level 3+ ASPICE maturity"
        },
        {
          name: "Vehicle Penetration Testing",
          description: "Comprehensive security testing of connected vehicles",
          features: ["ECU Testing", "CAN Bus Analysis", "Wireless Communication", "Backend Systems"],
          benefits: "Zero critical vulnerabilities"
        },
        {
          name: "TISAX Assessment",
          description: "Trusted Information Security Assessment Exchange",
          features: ["Information Security", "Data Protection", "Prototype Protection", "Supplier Assessment"],
          benefits: "TISAX AL3 certification"
        }
      ]
    },
    "ai-ml": {
      title: "AI, ML & Gen AI",
      icon: "🤖",
      description: "Cutting-edge artificial intelligence solutions and training",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      services: [
        {
          name: "Custom AI Chatbots",
          description: "Intelligent conversational AI for customer service and support",
          features: ["Natural Language Processing", "Multi-language Support", "Integration APIs", "Analytics Dashboard"],
          benefits: "85% reduction in response time"
        },
        {
          name: "AI Agents",
          description: "Autonomous AI agents for business process automation",
          features: ["Task Automation", "Decision Making", "Learning Capabilities", "Process Optimization"],
          benefits: "70% operational efficiency gain"
        },
        {
          name: "Machine Learning Solutions",
          description: "Custom ML models for predictive analytics and insights",
          features: ["Predictive Modeling", "Pattern Recognition", "Anomaly Detection", "Recommendation Systems"],
          benefits: "90% prediction accuracy"
        },
        {
          name: "Computer Vision Applications",
          description: "Image and video analysis solutions",
          features: ["Object Detection", "Facial Recognition", "Quality Inspection", "Document Processing"],
          benefits: "95% automation in visual tasks"
        },
        {
          name: "AI/ML Corporate Training",
          description: "Comprehensive training programs for AI adoption",
          features: ["Executive Workshops", "Technical Training", "Hands-on Labs", "Certification Programs"],
          benefits: "100+ professionals trained"
        }
      ]
    },
    "legal-compliance": {
      title: "Legal & Regulatory Compliance",
      icon: "⚖️",
      description: "Global regulatory compliance solutions and risk advisory",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      services: [
        {
          name: "DPDP Act (India)",
          description: "Digital Personal Data Protection Act compliance",
          features: ["Data Mapping", "Consent Management", "Privacy Impact Assessment", "Data Breach Response"],
          benefits: "100% DPDP compliance"
        },
        {
          name: "GDPR (EU)",
          description: "General Data Protection Regulation compliance",
          features: ["Data Subject Rights", "Privacy by Design", "Impact Assessments", "Cross-border Transfers"],
          benefits: "Zero GDPR violations"
        },
        {
          name: "HIPAA Compliance",
          description: "Healthcare data protection and privacy",
          features: ["PHI Protection", "Access Controls", "Audit Logs", "Business Associate Agreements"],
          benefits: "100% healthcare compliance"
        },
        {
          name: "NIST Frameworks",
          description: "National Institute of Standards and Technology frameworks",
          features: ["Cybersecurity Framework", "Privacy Framework", "Risk Management", "Control Implementation"],
          benefits: "Enhanced security posture"
        },
        {
          name: "PCIDSS Compliance",
          description: "Payment Card Industry Data Security Standard",
          features: ["Cardholder Data Protection", "Network Security", "Vulnerability Management", "Access Control"],
          benefits: "Secure payment processing"
        }
      ]
    },
    "project-management": {
      title: "Project Management & PMC",
      icon: "📊",
      description: "Strategic project management and consulting services",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      services: [
        {
          name: "SOP Development",
          description: "Standard Operating Procedures creation and optimization",
          features: ["Process Documentation", "Workflow Design", "Quality Standards", "Training Materials"],
          benefits: "50% process efficiency gain"
        },
        {
          name: "Risk Advisory",
          description: "Comprehensive risk assessment and mitigation strategies",
          features: ["Risk Identification", "Impact Analysis", "Mitigation Planning", "Monitoring & Review"],
          benefits: "60% risk reduction"
        },
        {
          name: "Implementation Strategy",
          description: "Strategic planning and execution support",
          features: ["Roadmap Development", "Resource Planning", "Timeline Management", "Change Management"],
          benefits: "On-time project delivery"
        },
        {
          name: "Resource Provision",
          description: "Expert resource allocation and management",
          features: ["Skill Assessment", "Resource Matching", "Performance Monitoring", "Knowledge Transfer"],
          benefits: "Optimal resource utilization"
        }
      ]
    }
  };

  return (
    <div className="modern-page">
      {/* Hero Section */}
      <section className="modern-hero" style={{ minHeight: "70vh" }}>
        <div className="hero-background">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
        </div>
        
        <div className="container-modern">
          <div className="hero-content-advanced" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="hero-badge-modern">🛠️ Our Services</div>
            
            <h1 className="hero-title-modern">
              Comprehensive Solutions
              <br />
              <span className="gradient-text-advanced">Across All Domains</span>
            </h1>
            
            <p className="hero-description-modern">
              ACSPL delivers end-to-end consulting services across Management Systems, 
              Cybersecurity, AI/ML, Regulatory Compliance, and Project Management. 
              Our expert team ensures excellence in every engagement.
            </p>
            
            <div className="cta-buttons-advanced">
              <Link to="/contact" className="btn-modern btn-primary-modern">
                <span className="btn-text">Get Free Assessment</span>
                <span className="btn-icon">📋</span>
              </Link>
              <Link to="/industries" className="btn-modern btn-secondary-modern">
                <span className="btn-text">View Industries</span>
                <span className="btn-icon">🏭</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="services-navigation">
        <div className="container-modern">
          <div className="services-tabs">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                className={`service-tab ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-text">{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="container-modern">
          {Object.entries(serviceCategories).map(([key, category]) => (
            <div
              key={key}
              className={`service-category ${activeTab === key ? 'active' : ''}`}
            >
              <div className="category-header">
                <div className="category-info">
                  <div className="category-icon" style={{ background: category.gradient }}>
                    {category.icon}
                  </div>
                  <div className="category-text">
                    <h2 className="category-title">{category.title}</h2>
                    <p className="category-description">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="services-grid">
                {category.services.map((service, index) => (
                  <div key={index} className="service-card-detailed hover-lift">
                    <div className="service-card-header">
                      <h3 className="service-name">{service.name}</h3>
                      <span className="service-benefit">{service.benefits}</span>
                    </div>
                    
                    <p className="service-description">{service.description}</p>
                    
                    <div className="service-features">
                      <h4>Key Features:</h4>
                      <ul className="features-list">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="feature-item">
                            <span className="feature-check">✅</span>
                            <span className="feature-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="service-actions">
                      <Link to="/contact" className="service-cta-btn">
                        Book Assessment
                      </Link>
                      <button className="service-info-btn">
                        Learn More
                      </button>
                    </div>
                    
                    <div className="card-gradient-overlay" style={{ background: category.gradient }} />
                  </div>
                ))}
              </div>

              <div className="category-cta">
                <div className="cta-content">
                  <h3>Ready to get started with {category.title}?</h3>
                  <p>Contact our experts for a free consultation and customized solution.</p>
                  <Link to="/contact" className="cta-button-large">
                    Schedule Free Consultation
                    <span className="cta-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose ACSPL */}
      <section className="why-choose-services">
        <div className="container-modern">
          <div className="section-header-modern">
            <div className="section-badge">⭐ Why Choose ACSPL</div>
            <h2 className="section-title-modern">Our Service Excellence</h2>
            <p className="section-description-modern">
              What sets ACSPL apart in delivering world-class consulting services
            </p>
          </div>

          <div className="excellence-grid">
            <div className="excellence-item hover-lift">
              <div className="excellence-icon">🎯</div>
              <h3>Domain Expertise</h3>
              <p>15+ years of deep industry knowledge across multiple verticals and standards</p>
            </div>
            
            <div className="excellence-item hover-lift">
              <div className="excellence-icon">🚀</div>
              <h3>Proven Methodology</h3>
              <p>Time-tested implementation frameworks ensuring successful project delivery</p>
            </div>
            
            <div className="excellence-item hover-lift">
              <div className="excellence-icon">👥</div>
              <h3>Certified Professionals</h3>
              <p>Team of highly qualified consultants with international certifications</p>
            </div>
            
            <div className="excellence-item hover-lift">
              <div className="excellence-icon">📈</div>
              <h3>Measurable Results</h3>
              <p>Track record of delivering quantifiable business improvements and ROI</p>
            </div>
            
            <div className="excellence-item hover-lift">
              <div className="excellence-icon">🔄</div>
              <h3>Continuous Support</h3>
              <p>24/7 ongoing support and maintenance ensuring sustained success</p>
            </div>
            
            <div className="excellence-item hover-lift">
              <div className="excellence-icon">💎</div>
              <h3>Value Addition</h3>
              <p>Going beyond compliance to add strategic value to your business operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-premium">
        <div className="cta-background">
          <div className="cta-orb-1" />
          <div className="cta-orb-2" />
        </div>
        <div className="container-modern">
          <div className="cta-content-premium">
            <div className="cta-badge-modern">🚀 Ready to Transform?</div>
            <h2 className="cta-title-premium">
              Let's Discuss Your
              <span className="gradient-text-advanced"> Specific Requirements</span>
            </h2>
            <p className="cta-description-premium">
              Every business is unique. Our experts will work with you to create a 
              customized solution that addresses your specific challenges and goals.
            </p>
            
            <div className="cta-buttons-premium">
              <Link to="/contact" className="btn-premium btn-primary-premium">
                <span className="btn-text">Book Free Consultation</span>
                <span className="btn-icon">📞</span>
              </Link>
              <Link to="/about" className="btn-premium btn-secondary-premium">
                <span className="btn-text">Learn About ACSPL</span>
                <span className="btn-icon">🏢</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
