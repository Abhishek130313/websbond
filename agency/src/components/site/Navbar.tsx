import { 
  ArrowRight, Menu, X, Phone, Mail, ChevronDown, 
  Search, FileText, Share2, Target, Megaphone, MapPin, Code, ShoppingBag, Palette, Smartphone 
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

const SERVICES_DROPDOWN = [
  { label: "SEO (Search Engine Optimization)", to: "/seo-service-in-delhi", icon: Search, desc: "Rank on Page 1 organic searches" },
  { label: "Content Marketing Services", to: "/content-writing-service-in-delhi", icon: FileText, desc: "Engage clients with custom copies" },
  { label: "SMO (Social Media Optimization)", to: "/smo-service-in-delhi", icon: Share2, desc: "Optimize social profiles authority" },
  { label: "Google Ads Services", to: "/google-ads-services", icon: Target, desc: "Drive instant buyer click leads" },
  { label: "SMM (Social Media Marketing)", to: "/smm-service-in-delhi", icon: Megaphone, desc: "Run paid social media campaigns" },
  { label: "GMB (Google My Business)", to: "/gmb-service-in-delhi", icon: MapPin, desc: "Dominate local maps 3-pack views" },
  { label: "Website Design Services", to: "/website-design-service-in-delhi", icon: Code, desc: "Bespoke clean functional sites" },
  { label: "ECommerce Web Designing", to: "/e-commerce-website-services-in-delhi", icon: ShoppingBag, desc: "Build scalable product online stores" },
  { label: "UI & UX Design Services", to: "/website-design-service-in-delhi", icon: Palette, desc: "User-centered premium wireframes" },
  { label: "App Development", to: "/contact-us", icon: Smartphone, desc: "Custom iOS & Android platforms" },
];

const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "#",
    dropdown: true,
  },
  {
    label: "Packages",
    to: "/seo-service-in-delhi",
    dropdown: [
      { label: "SEO Packages", to: "/seo-service-in-delhi" },
      { label: "SMO Packages", to: "/smo-service-in-delhi" },
    ],
  },
  {
    label: "Company",
    to: "/about-us",
    dropdown: [
      { label: "Our Portfolio", to: "/our-portfolio" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
  { label: "About", to: "/about-us" },
  { label: "Case Study", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact-us" },
];

export const Navbar = ({
  theme = "light",
  onToggleTheme,
}: {
  theme?: "dark" | "light";
  onToggleTheme?: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled ? "pt-4" : "pt-0"}`}>
      {/* ── Top Utility Bar — Premium Gradient ── */}
      <div
        className={`hidden md:block transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0 py-0" : "max-h-16 opacity-100 py-3.5"
        }`}
        style={{ background: "linear-gradient(90deg, #020617 0%, #1e1b4b 50%, #020617 100%)" }}
      >
        <div className="container flex justify-between items-center text-white/90">
          <div className="flex gap-6 items-center">
            <a href="tel:+919306623619" className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400 font-semibold tracking-wide transition-colors">
              <Phone className="w-3.5 h-3.5" /> <span className="text-xs">+91 9306623619</span>
            </a>
            <a href="mailto:websbond@websbond.com" className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400 font-semibold tracking-wide transition-colors">
              <Mail className="w-3.5 h-3.5" /> <span className="text-xs">websbond@websbond.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/seo-analyzer"
              className="group flex items-center gap-2 text-cyan-400 hover:text-white text-[11px] font-bold uppercase tracking-wider transition-all duration-300"
            >
              Free SEO Audit <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Header — Floating Pill on Scroll ── */}
      <header
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? "w-[95%] max-w-6xl bg-white/85 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-white/60 rounded-full py-2.5 px-6 sm:px-8 text-zinc-900"
            : "w-full bg-transparent py-5 text-white"
        }`}
      >
        <div className={scrolled ? "flex items-center justify-between gap-4 w-full" : "container flex items-center justify-between gap-4"}>
          {/* Logo */}
          <Logo light={scrolled} size={scrolled ? "sm" : "md"} />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group py-2">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 text-[13px] font-bold transition-all duration-300 rounded-full ${
                        isActive
                          ? scrolled ? "text-indigo-600" : "text-cyan-400"
                          : scrolled
                            ? "text-zinc-600 hover:text-indigo-600"
                            : "text-zinc-300 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </NavLink>
                  
                  {link.label === "Services" ? (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white/95 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-zinc-200/80 rounded-3xl transition-all duration-300 opacity-0 invisible -translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 grid grid-cols-2 p-5 gap-x-4 gap-y-1 z-50">
                      {SERVICES_DROPDOWN.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-indigo-50/80 text-zinc-700 hover:text-indigo-600 transition-all duration-300"
                          >
                            <span className="p-2.5 rounded-xl bg-zinc-100/80 text-zinc-500 group-hover/item:bg-indigo-100 group-hover/item:text-indigo-600 transition-all duration-300 shrink-0">
                              <IconComponent className="w-4 h-4" />
                            </span>
                            <div className="flex flex-col">
                              <span className="text-[13px] font-bold leading-tight mb-0.5">{item.label}</span>
                              <span className="text-[10px] text-zinc-400 font-medium group-hover/item:text-indigo-400 transition-colors">{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-zinc-200/80 rounded-2xl transition-all duration-300 opacity-0 invisible -translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 z-50 py-2.5">
                      {Array.isArray(link.dropdown) && link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-2 px-5 py-2.5 text-[13px] text-zinc-600 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all duration-300 font-bold"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to + link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[13px] font-bold transition-all duration-300 rounded-full ${
                      isActive
                        ? scrolled ? "text-indigo-600" : "text-cyan-400"
                        : scrolled
                          ? "text-zinc-600 hover:text-indigo-600"
                          : "text-zinc-300 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Right: CTA button + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact-us"
              className={`hidden sm:inline-flex items-center justify-center font-bold text-[11px] uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                !scrolled
                  ? "bg-white text-zinc-900 hover:bg-zinc-100 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                  : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-[0_8px_20px_rgba(99,102,241,0.4)]"
              }`}
            >
              Book a Call
            </Link>
            
            <button
              className={`lg:hidden p-2.5 rounded-full border transition-all duration-300 ${
                !scrolled
                  ? "border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                  : "border-zinc-200 text-zinc-700 hover:bg-zinc-100 bg-white"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <nav
          aria-label="Mobile navigation"
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          className={`lg:hidden overflow-y-auto transition-all duration-500 absolute left-0 right-0 top-full mt-2 mx-4 rounded-3xl border border-zinc-100 bg-white/95 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] ${
            open ? "max-h-[85vh] opacity-100 visible translate-y-0" : "max-h-0 opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="p-6 flex flex-col gap-1">
            <div className="flex flex-col gap-3 mb-4 pb-4 border-b border-zinc-100">
              <a href="tel:+919306623619" className="flex items-center gap-3 text-sm text-zinc-800 font-bold hover:text-indigo-600 transition-colors">
                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Phone className="w-4 h-4" /></span> +91 9306623619
              </a>
              <a href="mailto:websbond@websbond.com" className="flex items-center gap-3 text-sm text-zinc-800 font-bold hover:text-indigo-600 transition-colors">
                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Mail className="w-4 h-4" /></span> websbond@websbond.com
              </a>
            </div>
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                const sublinks = link.label === "Services" 
                  ? SERVICES_DROPDOWN 
                  : (Array.isArray(link.dropdown) ? link.dropdown : []);
                return (
                  <div key={link.label} className="border-b border-zinc-50 py-2">
                    <div className="flex justify-between items-center py-2 px-2 text-[15px] font-black text-zinc-900">
                      <span>{link.label}</span>
                    </div>
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {sublinks.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={() => setOpen(false)}
                          className="py-1.5 px-2 text-[13px] text-zinc-500 hover:text-indigo-600 font-bold transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <NavLink
                  key={link.to + link.label}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 px-2 text-[15px] font-black border-b border-zinc-50 transition-colors ${
                      isActive
                        ? "text-indigo-600"
                        : "text-zinc-900 hover:text-indigo-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
            <Link
              to="/seo-analyzer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold py-4 rounded-2xl text-center transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.5)]"
            >
              Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
