import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HexagonBadges } from "./HexagonBadges";
import { DualCtaCapsule } from "./DualCtaCapsule";

export const Hero = () => {
  const words = ["Web Design", "Mobile Apps", "Brand Strategy", "Digital Growth"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative w-full pt-36 md:pt-44 pb-16 md:pb-24 select-none overflow-hidden text-center border-b border-purple-100/80 min-h-[600px] flex items-center justify-center">
      
      {/* Fully Covered Hero Background Image */}
      <img
        src="/hero-bg.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Subtitle Eyebrow Line */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-slate-800 tracking-tight mb-4 font-sans leading-tight">
          Global Digital Partner For
        </h2>

        {/* Main Title (Creative Cursive/Italic Serif Accent for Animated Word) */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium text-slate-900 leading-[1.25] tracking-tight mb-6 max-w-4xl font-sans">
          <span>Digital Marketing & </span>
          <span 
            className="inline-block whitespace-nowrap italic font-bold text-[#4B2874] dark:text-indigo-600 px-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {displayText}
          </span>
          <span className="animate-pulse text-indigo-600 font-light ml-0.5">|</span>
        </h1>

        {/* Subheadline Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-6 font-normal">
          We engineer high-speed web platforms, performance marketing campaigns, and data-driven growth strategies that convert visitors into loyal clients.
        </p>

        {/* 5 Hexagon Award Badges */}
        <HexagonBadges />

        {/* Dual Action CTA Capsule */}
        <DualCtaCapsule />

        {/* Sub-Navigation Pill Bar */}
        <div className="inline-flex items-center gap-5 px-5 py-2.5 rounded-full bg-white border border-[#4B2874]/20 shadow-xs text-xs font-bold text-[#4B2874]">
          <Link to="/our-portfolio" className="hover:opacity-80 transition-opacity">Our Projects</Link>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4B2874]/40" />
          <a href="#featured-projects" className="hover:opacity-80 transition-opacity">Client Work</a>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4B2874]/40" />
          <Link to="/contact-us" className="hover:opacity-80 transition-opacity">Contact Us</Link>
        </div>

      </div>
    </section>
  );
};
