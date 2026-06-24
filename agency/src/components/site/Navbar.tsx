import { ArrowRight, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/our-work" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
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
  );
};
