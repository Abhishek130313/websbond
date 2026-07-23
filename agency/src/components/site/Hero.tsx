import { useState, useEffect } from "react";
import { MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { HexagonBadges } from "./HexagonBadges";

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
    <section className="relative w-full bg-[#F8FAFC] pt-36 md:pt-44 pb-16 md:pb-24 select-none overflow-hidden text-center border-b border-slate-200/80">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-indigo-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[550px] h-[300px] bg-cyan-400/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Subtitle Eyebrow Line (Larger & Prominent) */}
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

        {/* 5 Hexagon Award Badges (Matching Screenshot 5) */}
        <HexagonBadges />

        {/* Dual Action CTA Capsule */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/10 mb-7 max-w-md w-full sm:w-auto">
          <button
            onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all duration-200"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Request Proposal</span>
          </button>

          <span className="w-7 h-7 rounded-full bg-slate-800 text-indigo-300 font-bold text-[10px] flex items-center justify-center mx-1.5 shrink-0 border border-slate-700">
            OR
          </span>

          <a
            href="https://wa.me/919306623619"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all duration-200"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

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




