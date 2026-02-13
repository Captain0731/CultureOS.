"use client";

import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { LuArrowRight } from "react-icons/lu";
import "../styles/footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top - CTA Section */}
        {/* <div className="footer-cta">
          <h2 className="cta-title">Transform your <span>Workplace</span></h2>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Get Started
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <LuArrowRight />
            </svg>
          </button>
        </div> */}

        <div className="footer-grid">
          {/* Column 1 - Brand */}
          <div className="footer-col brand-col">
            <div className="brand-logo">
              <img src="/assets/images/logo.png" alt="Culture OS Logo" />
            </div>
            <p className="footer-desc">
              At Culture OS, we don&apos;t just consult; we architect environments where human potential flourishes.
            </p>
            <div className="social-wrap">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <FaXTwitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="footer-col">
            <h4 className="col-title">Explore</h4>
            <div className="footer-links">
              <span onClick={() => scrollToSection('home')}>Home</span>
              <span onClick={() => scrollToSection('about')}>Our Story</span>
              <span onClick={() => scrollToSection('solution')}>Solutions</span>
              <span onClick={() => scrollToSection('contact')}>Contact</span>
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-col">
            <h4 className="col-title">Connect</h4>
            <div className="footer-info">
              <p>hello@cultureos.com</p>
              <p>+1 (555) 000-0000</p>
              <p>Remote First, HQ in SF</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="bottom-left">
            <p>© {year} CultureOS. All rights reserved.</p>
          </div>
          <div className="bottom-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

      {/* Visual Background Text */}
      <div className="footer-watermark">
        Culture OS
      </div>
    </footer>
  );
}