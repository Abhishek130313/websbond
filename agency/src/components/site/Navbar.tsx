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
    to: "#",
    dropdown: [
      { label: "SEO (Search Engine Optimization)", to: "#" },
      { label: "SMO (Social Media Optimization)", to: "#" },
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
    <div className="w-full relative z-50">
      {/* ── Top Utility Bar — minimal, refined ── */}
      <div
        className={`hidden md:block text-sm transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0 py-0" : "max-h-12 opacity-100 py-2"
        }`}
        style={{ background: "#09090b" }}
      >
        <div className="container flex justify-between items-center">
          {/* Left: contact info */}
          <div className="flex gap-6 items-center">
            <a
              href="tel:+919306623619"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium text-xs">+91 9306623619</span>
            </a>
            <a
              href="mailto:websbond@websbond.com"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="font-medium text-xs">websbond@websbond.com</span>
            </a>
          </div>
          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/seo-analyzer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full transition-all duration-300"
            >
              Free SEO Audit →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Header — frosted glass on scroll ── */}
      <header
        className={`z-50 w-full transition-all duration-300 ${
          !scrolled
            ? "absolute top-0 left-0 bg-transparent py-5 text-white"
            : "sticky top-0 bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] py-2.5 text-zinc-900"
        }`}
      >
        <div className="container flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo light={scrolled} size="md" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative group py-2"
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${
                        isActive
                          ? "text-indigo-600"
                          : !scrolled
                            ? "text-white/80 hover:text-white"
                            : "text-zinc-600 hover:text-zinc-900"
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </NavLink>
                  
                  {link.label === "Services" ? (
                    /* ── 2-Column Services Mega Dropdown — Frosted Glass ── */
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-zinc-200/60 rounded-2xl transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 grid grid-cols-2 p-5 gap-x-4 gap-y-1 z-50"
                    >
                      {SERVICES_DROPDOWN.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-indigo-50/60 text-zinc-700 hover:text-indigo-600 transition-all duration-200"
                          >
                            <span className="p-2 rounded-lg bg-zinc-100 text-zinc-500 group-hover/item:bg-indigo-100 group-hover/item:text-indigo-600 transition-all shrink-0">
                              <IconComponent className="w-4 h-4" />
                            </span>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium leading-tight">{item.label}</span>
                              <span className="text-[10px] text-zinc-400 mt-0.5 group-hover/item:text-indigo-400">{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    /* ── Standard Dropdown ── */
                    <div
                      className="absolute top-full left-0 w-64 bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-zinc-200/60 rounded-xl transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 py-2"
                    >
                      {Array.isArray(link.dropdown) && link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-zinc-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors font-medium"
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
                    `px-3 py-2 text-[13px] font-medium transition-colors ${
                      isActive
                        ? "text-indigo-600"
                        : !scrolled
                          ? "text-white/80 hover:text-white"
                          : "text-zinc-600 hover:text-zinc-900"
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
              className={`hidden sm:inline-flex items-center justify-center font-semibold text-xs px-5 py-2.5 rounded-full transition-all duration-300 ${
                !scrolled
                  ? "bg-white text-zinc-900 hover:bg-zinc-100"
                  : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-[0_4px_14px_rgba(99,102,241,0.3)]"
              }`}
            >
              Book a Call
            </Link>
            
            <button
              className={`lg:hidden p-2.5 rounded-lg border transition-colors ${
                !scrolled
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-zinc-200 text-zinc-700 hover:bg-zinc-50"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden overflow-y-auto transition-all duration-300 border-t border-zinc-100 bg-white ${
            open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4 flex flex-col gap-1">
            {/* Mobile contact */}
            <div className="flex flex-col gap-2 mb-3 pb-3 border-b border-zinc-100">
              <a href="tel:+919306623619" className="flex items-center gap-2 text-sm text-zinc-700 font-medium">
                <Phone className="w-4 h-4 text-indigo-500" /> +91 9306623619
              </a>
              <a href="mailto:websbond@websbond.com" className="flex items-center gap-2 text-sm text-zinc-700 font-medium">
                <Mail className="w-4 h-4 text-indigo-500" /> websbond@websbond.com
              </a>
            </div>
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                const sublinks = link.label === "Services" 
                  ? SERVICES_DROPDOWN 
                  : (Array.isArray(link.dropdown) ? link.dropdown : []);
                return (
                  <div key={link.label} className="border-b border-zinc-50 py-1">
                    <div className="flex justify-between items-center py-1.5 px-2 text-base font-semibold text-zinc-800">
                      <span>{link.label}</span>
                    </div>
                    <div className="pl-4 flex flex-col gap-1.5 pb-2">
                      {sublinks.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={() => setOpen(false)}
                          className="py-1 px-2 text-sm text-zinc-500 hover:text-indigo-600 font-medium"
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
                    `py-2.5 px-2 text-base font-semibold border-b border-zinc-50 transition-colors ${
                      isActive
                        ? "text-indigo-600"
                        : "text-zinc-800 hover:text-indigo-600"
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
              className="mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3.5 rounded-xl text-center transition-all shadow-[0_4px_14px_rgba(99,102,241,0.3)]"
            >
              Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
