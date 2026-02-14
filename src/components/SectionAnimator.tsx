"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionAnimator() {
    const initialized = useRef(false);

    useEffect(() => {
        const initAnimations = () => {
            if (initialized.current) return;
            initialized.current = true;

            // Small delay to ensure DOM is fully painted after preloader
            setTimeout(() => {
                // ── FADE UP ──
                document.querySelectorAll('[data-anim="fade-up"]').forEach((el) => {
                    gsap.set(el, { y: 60, opacity: 0, filter: "blur(6px)" });
                    gsap.to(el, {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    });
                });

                // ── FADE IN ──
                document.querySelectorAll('[data-anim="fade-in"]').forEach((el) => {
                    gsap.set(el, { opacity: 0, filter: "blur(6px)" });
                    gsap.to(el, {
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 1.4,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    });
                });

                // ── SCALE IN ──
                document.querySelectorAll('[data-anim="scale-in"]').forEach((el) => {
                    gsap.set(el, { scale: 0.85, opacity: 0 });
                    gsap.to(el, {
                        scale: 1,
                        opacity: 1,
                        duration: 1.4,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    });
                });

                // ── STAGGER CHILDREN ──
                document.querySelectorAll('[data-anim="stagger-children"]').forEach((el) => {
                    const children = el.children;
                    gsap.set(children, { y: 50, opacity: 0, filter: "blur(4px)" });
                    gsap.to(children, {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 1,
                        ease: "power4.out",
                        stagger: 0.15,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                });

                // ── SPLIT LINES (mask reveal) ──
                document.querySelectorAll('[data-anim="split-lines"]').forEach((el) => {
                    const htmlEl = el as HTMLElement;
                    const text = htmlEl.textContent || "";
                    htmlEl.innerHTML = "";
                    const words = text.trim().split(/\s+/);

                    words.forEach((word, i) => {
                        const wrapper = document.createElement("span");
                        wrapper.style.overflow = "hidden";
                        wrapper.style.display = "inline-block";
                        wrapper.style.verticalAlign = "bottom";

                        const inner = document.createElement("span");
                        inner.style.display = "inline-block";
                        inner.textContent = word;
                        inner.className = "split-word";

                        wrapper.appendChild(inner);
                        htmlEl.appendChild(wrapper);

                        if (i < words.length - 1) {
                            htmlEl.appendChild(document.createTextNode("\u00A0"));
                        }
                    });

                    const splitWords = htmlEl.querySelectorAll(".split-word");
                    gsap.set(splitWords, { y: "100%", opacity: 0 });
                    gsap.to(splitWords, {
                        y: "0%",
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out",
                        stagger: 0.04,
                        scrollTrigger: {
                            trigger: htmlEl,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    });
                });

                // ── PARALLAX ──
                document.querySelectorAll('[data-anim="parallax"]').forEach((el) => {
                    gsap.to(el, {
                        y: -40,
                        ease: "none",
                        scrollTrigger: {
                            trigger: el,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.5,
                        },
                    });
                });

                ScrollTrigger.refresh();
            }, 300);
        };

        // Listen for preloader completion
        window.addEventListener("preloaderComplete", initAnimations);

        // Fallback if preloader already completed or doesn't exist
        const fallback = setTimeout(initAnimations, 7000);

        return () => {
            window.removeEventListener("preloaderComplete", initAnimations);
            clearTimeout(fallback);
        };
    }, []);

    return null;
}
