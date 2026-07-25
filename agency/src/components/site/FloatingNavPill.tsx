import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

/* ────────────────────────────────────────────────────────────
 * FloatingNavPill
 * Global floating bottom navigation bar that appears on every page.
 * Exact match to reference screenshot: "Portfolio  Clients  Contact" with X close button.
 * ──────────────────────────────────────────────────────────── */

export const FloatingNavPill = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  // Reset visibility on page navigation if closed previously (so it reappears on new page as requested)
  useEffect(() => {
    setIsVisible(true);
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[92vw] animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="bg-white/95 backdrop-blur-xl border border-purple-200/90 shadow-[0_12px_40px_rgba(30,18,56,0.22)] rounded-full px-7 sm:px-9 py-3 flex items-center gap-6 sm:gap-9 text-xs sm:text-sm font-extrabold text-[#1E1238] relative select-none">
        
        {/* Portfolio Link */}
        <Link 
          to="/our-portfolio" 
          className="hover:text-[#552782] transition-colors relative py-0.5 group"
        >
          <span>Portfolio</span>
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#552782] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
        </Link>

        {/* Clients Link */}
        <Link 
          to="/our-portfolio" 
          className="hover:text-[#552782] transition-colors relative py-0.5 group"
        >
          <span>Clients</span>
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#552782] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
        </Link>

        {/* Contact Link */}
        <Link 
          to="/contact" 
          className="hover:text-[#552782] transition-colors relative py-0.5 group"
        >
          <span>Contact</span>
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#552782] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
        </Link>

        {/* Top-Right Purple X Close Button (Exact Screenshot Design) */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#552782] text-white flex items-center justify-center shadow-lg hover:bg-[#3D1A60] hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/60"
          aria-label="Dismiss navigation popup"
          title="Dismiss"
        >
          <X className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>

      </div>
    </div>
  );
};
