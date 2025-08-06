import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert(
      "Thank you for your message! We will get back to you within 24 hours."
    );
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-content">
          <div className="hero-badge">📞 Get In Touch</div>

          <h1 className="hero-title">Contact ACSPL</h1>

          <p className="hero-subtitle">
            Ready to make things possible for your business? Schedule a free
            consultation to discuss how ACSPL can help you achieve compliance,
            security, and operational excellence.
          </p>

          {/* Quick Contact Actions */}
          <div className="hero-buttons">
            <a
              href="https://wa.me/919876543210?text=Hi%20ACSPL,%20I%20would%20like%20to%20schedule%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>📱 WhatsApp Now</span>
            </a>
            <a href="tel:+919876543210" className="btn btn-secondary">
              <span>📞 Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section">
        <div className="container">
          <div className="form-grid">
            {/* Contact Form */}
            <div className="card" style={{ padding: "3rem" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "var(--secondary-800)",
                }}
              >
                Send us a Message
              </h2>
              <p
                style={{
                  color: "var(--secondary-600)",
                  marginBottom: "2rem",
                }}
              >
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    <option value="management-systems">
                      Management Systems (ISO)
                    </option>
                    <option value="cybersecurity">
                      Cybersecurity & InfoSec
                    </option>
                    <option value="ai-ml">AI, ML & Gen AI Solutions</option>
                    <option value="automotive-cybersecurity">
                      Automotive Cybersecurity
                    </option>
                    <option value="legal-compliance">
                      Legal & Regulatory Compliance
                    </option>
                    <option value="project-management">
                      Project Management & PMC
                    </option>
                    <option value="vapt">VAPT Services</option>
                    <option value="soc">SOC Operations</option>
                    <option value="training">Corporate Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your business challenges and goals..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Schedule a Free Consultation →
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div
                className="card"
                style={{ padding: "3rem", marginBottom: "2rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "1.5rem",
                    color: "var(--secondary-800)",
                  }}
                >
                  Get in Touch
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div className="contact-info-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-info">
                      <h4>Email</h4>
                      <p>info@ambadnyaconsultancy.com</p>
                      <p>business@acspl.in</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">📞</div>
                    <div className="contact-info">
                      <h4>Phone</h4>
                      <p>+91 98765 43210 (India)</p>
                      <p>+1 (555) 123-4567 (International)</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">🌐</div>
                    <div className="contact-info">
                      <h4>Website</h4>
                      <p>www.acspl.in</p>
                      <p>www.ambadnyaconsultancy.com</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">📱</div>
                    <div className="contact-info">
                      <h4>WhatsApp</h4>
                      <p>
                        <a
                          href="https://wa.me/919876543210?text=Hi%20ACSPL,%20I%20need%20consultation"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#25D366", textDecoration: "none" }}
                        >
                          +91 98765 43210 - Click to Chat
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">🕒</div>
                    <div className="contact-info">
                      <h4>Availability</h4>
                      <p>
                        24x7 Emergency Support Available
                        <br />
                        Business Hours: 9:00 AM - 6:00 PM IST
                        <br />
                        Response Time: Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="card"
                style={{
                  padding: "2rem",
                  background: "var(--primary-50)",
                  border: "2px solid var(--primary-200)",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                    color: "var(--primary-700)",
                  }}
                >
                  Quick Response Guarantee
                </h4>
                <p style={{ color: "var(--primary-600)", lineHeight: "1.6" }}>
                  We pride ourselves on quick response times. All inquiries are
                  answered within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-subtitle">
              Located in the heart of the business district for easy access
            </p>
          </div>

          <div className="card" style={{ padding: "2rem", overflow: "hidden" }}>
            <div
              style={{
                width: "100%",
                height: "400px",
                background: "#e2e8f0",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                color: "#64748b",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🗺️</div>
                <p>
                  <strong>Google Maps Integration</strong>
                </p>
                <p>Interactive map will be embedded here</p>
                <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
                  <strong>Office Address:</strong>
                  <br />
                  ACSPL Corporate Office
                  <br />
                  Business District, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about our services and processes
          </p>

          <div className="cards-grid">
            <div className="card" style={{ textAlign: "left" }}>
              <h3 className="card-title" style={{ textAlign: "left" }}>
                What is your typical project timeline?
              </h3>
              <p className="card-description">
                Project timelines vary based on scope and complexity. Most
                strategic consulting projects range from 3-6 months, while
                operational improvements can be implemented in 6-12 weeks.
              </p>
            </div>

            <div className="card" style={{ textAlign: "left" }}>
              <h3 className="card-title" style={{ textAlign: "left" }}>
                Do you work with small businesses?
              </h3>
              <p className="card-description">
                Yes! We work with businesses of all sizes, from startups to
                Fortune 500 companies. Our solutions are tailored to fit your
                specific needs and budget.
              </p>
            </div>

            <div className="card" style={{ textAlign: "left" }}>
              <h3 className="card-title" style={{ textAlign: "left" }}>
                What industries do you specialize in?
              </h3>
              <p className="card-description">
                We have expertise across multiple industries including
                manufacturing, technology, retail, healthcare, financial
                services, and education.
              </p>
            </div>

            <div className="card" style={{ textAlign: "left" }}>
              <h3 className="card-title" style={{ textAlign: "left" }}>
                How do you measure project success?
              </h3>
              <p className="card-description">
                We establish clear KPIs and success metrics at the project
                outset. Success is measured through quantifiable improvements in
                efficiency, revenue, cost reduction, or other agreed-upon
                objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
