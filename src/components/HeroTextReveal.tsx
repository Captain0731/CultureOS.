"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroTextRevealProps {
    line1: string;
    line2: string;
}

export default function HeroTextReveal({ line1, line2 }: HeroTextRevealProps) {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const line1Ref = useRef<HTMLSpanElement>(null);
    const line2Ref = useRef<HTMLSpanElement>(null);
    const hasPlayed = useRef(false);

    useEffect(() => {
        if (!containerRef.current || !line1Ref.current || !line2Ref.current) return;

        // Split line into words, then characters, to allow wrapping
        const splitIntoChars = (el: HTMLSpanElement, text: string) => {
            el.innerHTML = "";
            const words = text.split(" ");

            words.forEach((word, i) => {
                const wordSpan = document.createElement("span");
                wordSpan.style.display = "inline-block";
                wordSpan.style.whiteSpace = "nowrap";
                wordSpan.style.wordBreak = "keep-all"; // Extra safeguard
                wordSpan.className = "word"; // Helper class

                word.split("").forEach((char) => {
                    const wrapper = document.createElement("span");
                    wrapper.className = "char-wrap";

                    const charSpan = document.createElement("span");
                    charSpan.className = "char";
                    charSpan.textContent = char;

                    wrapper.appendChild(charSpan);
                    wordSpan.appendChild(wrapper);
                });

                el.appendChild(wordSpan);

                // Add space after word if not last
                if (i < words.length - 1) {
                    const space = document.createTextNode(" ");
                    el.appendChild(space);
                }
            });
        };

        splitIntoChars(line1Ref.current, line1);
        splitIntoChars(line2Ref.current, line2);

        const allChars = containerRef.current.querySelectorAll(".char");

        // Set initial hidden state
        gsap.set(allChars, {
            y: "110%",
            scale: 1.05,
            filter: "blur(8px)",
            opacity: 0,
        });

        const sub = document.querySelector(".d-sub");
        const btn = document.querySelector(".d-button");
        if (sub) gsap.set(sub, { y: 30, opacity: 0, filter: "blur(4px)" });
        if (btn) gsap.set(btn, { y: 20, opacity: 0 });

        // The animation timeline
        const playReveal = () => {
            if (hasPlayed.current) return;
            hasPlayed.current = true;

            const tl = gsap.timeline();

            // Line 1 characters
            const line1Chars = line1Ref.current!.querySelectorAll(".char");
            tl.to(line1Chars, {
                y: "0%",
                scale: 1,
                filter: "blur(0px)",
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.03,
            });

            // Line 2 characters (overlaps with line 1's tail)
            const line2Chars = line2Ref.current!.querySelectorAll(".char");
            tl.to(
                line2Chars,
                {
                    y: "0%",
                    scale: 1,
                    filter: "blur(0px)",
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.03,
                },
                "-=0.6"
            );

            // Subtitle
            if (sub) {
                tl.to(
                    sub,
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 1,
                        ease: "power4.out",
                    },
                    "-=0.5"
                );
            }

            // Button
            if (btn) {
                tl.to(
                    btn,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power4.out",
                    },
                    "-=0.6"
                );
            }
        };

        // Listen for preloader completion
        const handlePreloaderComplete = () => {
            // Small delay for the preloader exit to fully clear visually
            setTimeout(playReveal, 200);
        };

        window.addEventListener("preloaderComplete", handlePreloaderComplete);

        // Fallback: if preloader already finished (hot reload / fast nav)
        const fallbackTimer = setTimeout(() => {
            playReveal();
        }, 7000);

        return () => {
            window.removeEventListener("preloaderComplete", handlePreloaderComplete);
            clearTimeout(fallbackTimer);
        };
    }, [line1, line2]);

    return (
        <h1 ref={containerRef} className="d-title">
            <span className="title-line" ref={line1Ref}></span>
            <span className="title-line" ref={line2Ref}></span>
        </h1>
    );
}
