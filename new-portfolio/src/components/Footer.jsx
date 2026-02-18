import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container-fluid px-5">

        {/* BIG CTA */}
        <div className="footer-cta">
          LET’S BUILD SOMETHING
          <br />
          GREAT. TOGETHER.
        </div>

        {/* BUTTONS */}
        <div className="footer-buttons">

          {/* Contact */}
          <a
            href="mailto:your@email.com"
            className="footer-btn primary"
          >
            Get in touch
          </a>

          {/* View CV */}
          <a
            href="/NikolaosGiovanis-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn secondary"
          >
            View CV
          </a>

          {/* Download CV */}
          <a
            href="/NikolaosGiovanis-Resume.pdf"
            download
            className="footer-btn secondary"
          >
            Download CV
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn secondary icon-btn"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn secondary icon-btn"
          >
            <FaLinkedinIn />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn secondary icon-btn"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nikolaos Giovanis</span>
          <span>Built with Love</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
