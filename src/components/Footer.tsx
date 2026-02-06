"use client";

import { useEffect, useState } from "react";
import "../styles/footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* LEFT SECTION — WEBSITE MAP */}
          <div className="footer-left">
            <h3 className="footer-title">Website map</h3>

            <div className="footer-map-columns">
              <ul>
                <li>Home</li>
                <li>Landing</li>
                <li>Contact</li>
              </ul>

              <ul>
                <li>About</li>
                <li>Blog</li>
              </ul>
            </div>

            <h3 className="footer-title newsletter-title">Newsletter</h3>

            <form className="footer-newsletter" onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input') as HTMLInputElement;
              if (input?.value) {
                // Handle newsletter subscription
                alert('Thank you for subscribing!');
                input.value = '';
              }
            }}>
              <input type="email" placeholder="Enter Email Address..." required />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe to newsletter">➜</button>
            </form>
          </div>

          {/* CENTER — BRAND + DESCRIPTION */}
          <div className="footer-center">
            <p className="footer-center-text">
              Drop us a line sed id semper risus in hend rerit.
            </p>

            <h1 className="footer-logo">CultureOS</h1>

            <p className="footer-copy">© {year} CultureOS<br />All rights reserved</p>
          </div>

          {/* RIGHT — CONTACT */}
          <div className="footer-right">
            <h3 className="footer-title">Contact</h3>

            <p className="footer-contact">
              740 NEW SOUTH HEAD RD,<br />
              TRIPLE BAY SWFW 3108,<br />
              NEW YORK
            </p>

            <p className="footer-contact">P: + 725 214 456</p>
            <p className="footer-contact">E: CONTACT@CULTUREOS.COM</p>

            <h3 className="footer-title follow-title">Follow</h3>

            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span>𝕏</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span>◎</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span>in</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}