import { 
  ArrowRight, Menu, X, Phone, Mail, ChevronDown, 
  Search, FileText, Share2, Target, Megaphone, MapPin, Code, ShoppingBag, Palette, Smartphone 
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
  { label: "HOME", to: "/" },
  {
    label: "OUR SERVICES",
    to: "#",
    dropdown: true,
  },
  {
    label: "PACKAGES",
    to: "/seo-packages",
    dropdown: [
      { label: "SEO (Search Engine Optimization)", to: "/seo-packages" },
      { label: "SMO (Social Media Optimization)", to: "/smo-packages" },
    ],
  },
  {
    label: "COMPANY",
    to: "/about-us",
    dropdown: [
      { label: "Our Portfolio", to: "/our-portfolio" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "ABOUT US", to: "/about-us" },
      { label: "CASE STUDY", to: "/case-studies" },
    ],
  },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT", to: "/contact-us" },
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full relative z-50">
      {/* ── Top Utility Bar ── */}
      <div
        className={`hidden md:block bg-[#002b49] text-white text-sm transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0 py-0" : "max-h-16 opacity-100 py-2.5"
        }`}
      >
        <div className="container flex justify-between items-center">
          {/* Left: contact info */}
          <div className="flex gap-6 items-center">
            <a
              href="tel:+919306623619"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              +91 9306623619
            </a>
            <a
              href="mailto:websbond@websbond.com"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-orange-400" />
              websbond@websbond.com
            </a>
          </div>
          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/seo-analyzer"
              className="bg-[#eb560c] hover:bg-[#d14b0a] text-white text-xs font-bold px-4 py-1.5 rounded transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(235,86,12,0.45)] uppercase tracking-wider animate-pulse"
            >
              Get a Free SEO Audit
            </Link>
            <Link
              to="/payment"
              className="bg-white hover:bg-slate-50 text-[#003087] text-xs font-black px-3.5 py-1 rounded-md transition-all duration-300 flex items-center gap-1 hover:scale-105 border border-white/10 shrink-0 shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                <path d="M20.06 8.12c-.1-1.02-.45-2.07-1.12-2.92-.66-.86-1.57-1.49-2.73-1.89C15.06 2.92 13.56 2.75 12 2.75H5.88c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25H9.6c.69 0 1.25-.56 1.25-1.25v-3.75h2.25c2.2 0 4.12-.88 5.25-2.62 1.13-1.74 1.38-4 .76-5.88z" fill="#003087" />
                <path d="M12 9.75H7.38c-.35 0-.62.28-.62.62v6.25c0 .35.28.62.62.62H9.5c.35 0 .62-.28.62-.62v-2.5h1.88c1.55 0 2.87-.62 3.67-1.88.8-1.25.96-2.88.52-4.25-.07-.72-.32-1.46-.78-2.06-.47-.6-1.1-1.05-1.92-1.33A6.16 6.16 0 0 0 12 9.75z" fill="#0079C1" />
              </svg>
              <span className="font-sans font-black italic text-[#003087] tracking-tight text-[10px] sm:text-xs">PayPal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-2"
            : "bg-white border-b border-gray-100 py-3"
        }`}
      >
        <div className="container flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo light={true} size="md" />

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
                      `flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                        isActive
                          ? "text-[#eb560c]"
                          : "text-[#16243E] hover:text-[#eb560c]"
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </NavLink>
                  
                  {link.label === "OUR SERVICES" ? (
                    /* ── 2-Column Services Mega Dropdown ── */
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.15)] border-t-[3px] border-[#002b49] rounded-b-3xl transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 grid grid-cols-2 p-6 gap-x-6 gap-y-2.5 z-50"
                    >
                      {SERVICES_DROPDOWN.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="group/item flex items-center gap-3.5 px-4 py-3 rounded-2xl hover:bg-orange-50/40 text-[#16243E] hover:text-[#eb560c] transition-all duration-300 font-semibold"
                          >
                            <span className="p-2.5 rounded-xl bg-[#002b49]/5 text-[#002b49] group-hover/item:bg-[#eb560c]/10 group-hover/item:text-[#eb560c] transition-all shrink-0">
                              <IconComponent className="w-5 h-5" />
                            </span>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold leading-tight">{item.label}</span>
                              <span className="text-[10px] text-gray-400 font-medium mt-0.5 group-hover/item:text-[#eb560c]/80">{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    /* ── Standard Dropdown (Packages, Company) ── */
                    <div
                      className="absolute top-full left-0 w-72 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] border-t-[3px] border-[#002b49] rounded-b-lg transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50"
                    >
                      {Array.isArray(link.dropdown) && link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-2 px-4 py-3 text-sm text-[#16243E] hover:text-[#eb560c] hover:bg-orange-50 transition-colors border-b border-gray-50 last:border-0 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#eb560c] flex-shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                      isActive
                        ? "text-[#eb560c]"
                        : "text-[#16243E] hover:text-[#eb560c]"
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
            <button
              className="lg:hidden p-2.5 rounded border border-gray-200 text-[#002b49] hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden overflow-y-auto transition-all duration-300 border-t border-gray-100 bg-white ${
            open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4 flex flex-col gap-1">
            {/* Mobile contact */}
            <div className="flex flex-col gap-2 mb-3 pb-3 border-b border-gray-100">
              <a href="tel:+919306623619" className="flex items-center gap-2 text-sm text-[#002b49] font-semibold">
                <Phone className="w-4 h-4 text-[#eb560c]" /> +91 9306623619
              </a>
              <a href="mailto:websbond@websbond.com" className="flex items-center gap-2 text-sm text-[#002b49] font-semibold">
                <Mail className="w-4 h-4 text-[#eb560c]" /> websbond@websbond.com
              </a>
            </div>
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                const sublinks = link.label === "OUR SERVICES" 
                  ? SERVICES_DROPDOWN 
                  : (Array.isArray(link.dropdown) ? link.dropdown : []);
                return (
                  <div key={link.label} className="border-b border-gray-50 py-1">
                    <div className="flex justify-between items-center py-1.5 px-2 text-base font-bold text-[#16243E] uppercase tracking-wide">
                      <span>{link.label}</span>
                    </div>
                    <div className="pl-4 flex flex-col gap-1.5 pb-2">
                      {sublinks.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={() => setOpen(false)}
                          className="py-1 px-2 text-sm text-[#16243E]/80 hover:text-[#eb560c] font-semibold"
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
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-2.5 px-2 text-base font-bold border-b border-gray-50 uppercase tracking-wide transition-colors ${
                      isActive
                        ? "text-[#eb560c]"
                        : "text-[#16243E] hover:text-[#eb560c]"
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
              className="mt-3 flex items-center justify-center gap-2 bg-[#eb560c] text-white font-bold py-3.5 rounded text-center hover:bg-[#d14b0a] transition-colors shadow-[0_4px_15px_rgba(235,86,12,0.4)]"
            >
              Get a Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
