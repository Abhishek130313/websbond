import { ArrowRight, Menu, X, Sun, Moon, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const links = [
  { label: "HOME", to: "/" },
  { label: "SERVICES", to: "/services" },
  { label: "OUR WORK", to: "/our-work" },
  { label: "ABOUT US", to: "/about" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT", to: "/contact" },
];

export const Navbar = ({ 
  theme = "dark", 
  onToggleTheme 
}: { 
  theme?: "dark" | "light"; 
  onToggleTheme?: () => void; 
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full relative">
      {/* Utility Top Bar */}
      <div 
        className={`hidden md:block transition-all duration-300 overflow-hidden ${
          scrolled 
            ? "max-h-0 py-0 border-none opacity-0" 
            : theme === "light" 
              ? "py-2.5 bg-slate-100/60 border-b border-slate-200 text-slate-600" 
              : "py-2.5 bg-slate-950 border-b border-white/[0.04] text-slate-300"
        }`}
      >
        <div className="container flex justify-between items-center text-xs font-semibold">
          <div className="flex gap-6 items-center">
            <a href="tel:+919306623619" className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-indigo-500 dark:text-amber-500" /> +91 9306623619
            </a>
            <a href="mailto:websbond@websbond.com" className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-indigo-500 dark:text-amber-500" /> websbond@websbond.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#onboarding-form" 
              onClick={(e) => {
                const el = document.getElementById("onboarding-form");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-1 rounded-full transition-all text-[10px] uppercase tracking-wider shadow-sm hover:shadow-md active:scale-95 animate-pulse"
            >
              Get a Free SEO Audit
            </a>
          </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          scrolled 
            ? theme === "light"
              ? "py-2 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              : "py-2 bg-background/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
            : "py-3 bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between gap-4">
        <Logo light={theme === "light"} size="md" />
        
        <nav className={`hidden lg:flex items-center gap-8 ${
          theme === "light" 
            ? "bg-slate-100/40 border border-slate-200/50" 
            : "bg-white/[0.02] border border-white/[0.05]"
        } rounded-full px-8 py-2.5 backdrop-blur-md`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 ${
                  theme === "light"
                    ? isActive
                      ? "text-indigo-600 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-1.5 after:h-1.5 after:rounded-full after:bg-indigo-600 after:shadow-[0_0_8px_rgba(79,70,229,0.4)]"
                      : "text-slate-500 hover:text-slate-900"
                    : isActive
                      ? "text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-1.5 after:h-1.5 after:rounded-full after:bg-purple-500 after:shadow-[0_0_10px_#a855f7]"
                      : "text-muted-foreground hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                theme === "light"
                  ? "bg-slate-100/80 border-slate-200 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900"
                  : "bg-white/[0.03] border-white/5 text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          )}

          <Link 
            to="/contact" 
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:-translate-y-0.5"
          >
            Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          
          <button 
            className={`lg:hidden p-2.5 rounded-xl border transition-all duration-300 ${
              theme === "light" 
                ? "bg-slate-100/80 border-slate-200 text-slate-600 hover:text-slate-900" 
                : "bg-white/[0.03] border-white/5 text-slate-300 hover:text-white"
            }`} 
            onClick={() => setOpen(!open)} 
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          theme === "light"
            ? "border-b border-slate-200 bg-white/95"
            : "border-b border-white/[0.06] bg-background/95"
        } backdrop-blur-xl ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-6 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink 
              key={l.to} 
              to={l.to} 
              end={l.to === "/"} 
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `text-lg font-bold py-2 border-b ${
                  theme === "light" ? "border-slate-100" : "border-white/[0.03]"
                } transition-colors ${
                  theme === "light"
                    ? isActive ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"
                    : isActive ? "text-purple-400" : "text-muted-foreground hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3.5 rounded-xl w-full text-center"
          >
            Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
    </div>
  );
};
