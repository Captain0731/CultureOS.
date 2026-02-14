"use client";

import { useEffect, useRef, useState } from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import gsap from "gsap";
import "../styles/navbar.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  // Scroll detection
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

  // GSAP navbar load animation — after preloader
  useEffect(() => {
    if (!navRef.current || !linksRef.current) return;

    const logo = navRef.current.querySelector(".navbar-logo");
    const links = linksRef.current.querySelectorAll(".navbar-link");
    const socials = navRef.current.querySelectorAll(".social-link");

    // Set initial hidden state
    gsap.set(navRef.current, { y: -30, opacity: 0 });
    gsap.set(links, { y: -20, opacity: 0, filter: "blur(4px)" });
    gsap.set(socials, { y: -15, opacity: 0 });

    const playNavAnim = () => {
      const tl = gsap.timeline();

      // Navbar container slides in
      tl.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      });

      // Stagger menu links
      tl.to(
        links,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.06,
        },
        "-=0.5"
      );

      // Social icons
      tl.to(
        socials,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.08,
        },
        "-=0.4"
      );
    };

    window.addEventListener("preloaderComplete", playNavAnim);
    const fallback = setTimeout(playNavAnim, 7000);

    return () => {
      window.removeEventListener("preloaderComplete", playNavAnim);
      clearTimeout(fallback);
    };
  }, []);

  // Body scroll lock for mobile menu
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
    <nav ref={navRef} className={`navbar ${isScrolled ? "scrolled" : ""}`}>
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
          {/* Navigation Menu */}
          <div className="navbar-menu" ref={linksRef}>
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