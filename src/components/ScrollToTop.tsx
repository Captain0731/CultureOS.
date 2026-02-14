"use client";

import React, { useRef, useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import gsap from "gsap";
import "../styles/scrollToTop.scss";

const ScrollToTop = () => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const circleRef = useRef<SVGCircleElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Scroll progress + visibility
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollTop / docHeight, 1);

            // Update progress ring
            if (circleRef.current) {
                const circumference = 2 * Math.PI * 20; // r=20
                circleRef.current.style.strokeDashoffset = `${circumference * (1 - progress)}`;
            }

            setIsVisible(scrollTop > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // GSAP entrance/exit
    useEffect(() => {
        if (!btnRef.current) return;

        if (isVisible) {
            gsap.to(btnRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
            });
        } else {
            gsap.to(btnRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power4.in",
            });
        }
    }, [isVisible]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const circumference = 2 * Math.PI * 20;

    return (
        <button
            ref={btnRef}
            type="button"
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            {/* Progress ring */}
            <svg className="progress-ring" viewBox="0 0 44 44">
                <circle
                    className="progress-ring__bg"
                    cx="22"
                    cy="22"
                    r="20"
                    fill="none"
                    strokeWidth="1.5"
                />
                <circle
                    ref={circleRef}
                    className="progress-ring__circle"
                    cx="22"
                    cy="22"
                    r="20"
                    fill="none"
                    strokeWidth="2"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                />
            </svg>
            <LuArrowUp className="arrow-icon" size={18} />
        </button>
    );
};

export default ScrollToTop;
