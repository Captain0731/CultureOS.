"use client";

import { useEffect, useRef } from "react";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/footer.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // GSAP footer scroll animations
  useEffect(() => {
    if (!footerRef.current) return;

    const grid = footerRef.current.querySelector(".footer-grid");
    const cols = footerRef.current.querySelectorAll(".footer-col");
    const bottom = footerRef.current.querySelector(".footer-bottom");
    const marquee = footerRef.current.querySelector(".footer-marquee");

    // Grid columns stagger
    if (cols.length) {
      gsap.set(cols, { y: 40, opacity: 0, filter: "blur(4px)" });
      gsap.to(cols, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Bottom bar
    if (bottom) {
      gsap.set(bottom, { y: 20, opacity: 0 });
      gsap.to(bottom, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: bottom,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    }

    // Marquee
    if (marquee) {
      gsap.set(marquee, { opacity: 0 });
      gsap.to(marquee, {
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: marquee,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    }



    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">

        {/* Infinite Marquee */}
        <div className="footer-marquee">
          <div className="marquee-track">
            <span className="marquee-text">Culture OS</span>
            <span className="marquee-dot">●</span>
            <span className="marquee-text">Build Culture</span>
            <span className="marquee-dot">●</span>
            <span className="marquee-text">Real Visibility</span>
            <span className="marquee-dot">●</span>
            <span className="marquee-text">Culture OS</span>
            <span className="marquee-dot">●</span>
            <span className="marquee-text">Build Culture</span>
            <span className="marquee-dot">●</span>
            <span className="marquee-text">Real Visibility</span>
            <span className="marquee-dot">●</span>
          </div>
        </div>

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


    </footer>
  );
}