"use client";

import { useEffect, useState } from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import "../styles/navbar.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}>
          <img src="/assets/images/logo.png" alt="Culture OS Logo" />
        </a>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu & Social Icons Wrapper */}
        <div className={`navbar-right ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          {/* Close button for mobile */}


          {/* Navigation Menu */}
          <div className="navbar-menu">
            <a href="#home" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}>
              Home
            </a>
            <a href="#about" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}>
              Why
            </a>
            <a href="#problem" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("problem");
            }}>
              Problem
            </a>
            <a href="#cost" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("cost");
            }}>
              Cost
            </a>
            <a href="#story" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("story");
            }}>
              Fact
            </a>
            <a href="#solution" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("solution");
            }}>
              Solution
            </a>
            <a href="#contact" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}>
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="navbar-social">
            <a href="#twitter" className="social-link" aria-label="Twitter">
              <FaXTwitter size={18} />
            </a>
            <a href="#facebook" className="social-link" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href="#instagram" className="social-link" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}