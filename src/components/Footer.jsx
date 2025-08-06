import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer-logo-icon">
            <span>A</span>
          </div>
          <span className="footer-logo-text">ACSPL</span>
        </div>

        <p className="footer-description">
          We Make Things Possible. Your trusted partner in Business Risk,
          Management Systems, and Technology Consulting for sustainable growth
          and success.
        </p>

        <div className="footer-contact">
          <p>📧 info@ambadnyaconsultancy.com</p>
          <p>🌐 www.acspl.in</p>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 Ambadnya Consultancy Services Pvt. Ltd. (ACSPL). All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
