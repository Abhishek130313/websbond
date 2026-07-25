import { 
  Menu, X, Phone, Mail, ChevronDown, ChevronRight,
  Home, Facebook, Youtube, Twitter, Instagram, Linkedin, MessageSquare
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { MegaDrawerOverlay } from "./MegaDrawerOverlay";

const WORK_DROPDOWN = [
  { label: "Web Portfolio", to: "/our-portfolio" },
  { label: "SEO Portfolio", to: "/our-portfolio" },
  { label: "Case Study", to: "/case-studies" },
];

const UIUX_DROPDOWN = [
  { label: "Logo Design", to: "/website-design-service-in-delhi" },
  { label: "Graphic Design", to: "/website-design-service-in-delhi" },
  { label: "Website Design", to: "/website-design-service-in-delhi" },
];

const DEV_DROPDOWN = [
  { label: "Website Development", to: "/website-design-service-in-delhi" },
  { label: "Ecommerce Web Development", to: "/e-commerce-website-services-in-delhi" },
  { label: "WooCommerce Development Services India", to: "/e-commerce-website-services-in-delhi" },
  { label: "CRM Development", to: "/contact-us" },
  { label: "Mobile App Development", to: "/contact-us" },
  { label: "IT Solutions", to: "/contact-us" },
];

const MARKETING_ITEMS = [
  {
    label: "Digital Marketing",
    to: "/digital-marketing-agency",
    subItems: [
      { label: "Best Digital Marketing Agency", to: "/digital-marketing-agency" },
      { label: "Digital Marketing Services India", to: "/digital-marketing-agency" },
      { label: "Digital Marketing For Small Business", to: "/digital-marketing-agency" },
      { label: "Digital Marketing Company Delhi", to: "/digital-marketing-agency" },
      { label: "Digital Marketing Lead Generation Services", to: "/digital-marketing-agency" },
      { label: "Digital Marketing Packages", to: "/digital-marketing-agency" },
    ]
  },
  {
    label: "SEO Services",
    to: "/seo-service-in-delhi",
    subItems: [
      { label: "SEO Packages", to: "/seo-service-in-delhi" },
      { label: "Small Business SEO", to: "/seo-service-in-delhi" },
      { label: "Local SEO Services", to: "/gmb-service-in-delhi" },
      { label: "Top SEO Companies in India", to: "/seo-service-in-delhi" },
      { label: "SEO Services in Delhi", to: "/seo-service-in-delhi" },
      { label: "SEO Cost in India", to: "/seo-service-in-delhi" },
      { label: "SEO Audit Services", to: "/seo-analyzer" },
      { label: "AI SEO Services", to: "/seo-service-in-delhi" },
    ]
  },
  { label: "SEO Outsourcing", to: "/seo-service-in-delhi" },
  {
    label: "SMM Services",
    to: "/smm-service-in-delhi",
    subItems: [
      { label: "Facebook Marketing", to: "/smm-service-in-delhi" },
      { label: "Instagram Marketing", to: "/smm-service-in-delhi" },
    ]
  },
  { label: "Content Marketing", to: "/content-writing-service-in-delhi" },
  { label: "Performance Marketing", to: "/google-ads-services" },
  { label: "PPC Advertising", to: "/google-ads-services" },
  { label: "ORM Services", to: "/smo-service-in-delhi" },
];

const OfficialWhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.473-8.413" />
  </svg>
);

const ZigZagMenuIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3.5" y1="6" x2="20.5" y2="6" />
    <line x1="8.5" y1="12" x2="20.5" y2="12" />
    <line x1="3.5" y1="18" x2="15.5" y2="18" />
  </svg>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMarketingSub, setActiveMarketingSub] = useState<string | null>("Digital Marketing");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#F2EAFF] shadow-xs">
      {/* Top Slim Utility Bar (Reference Style Match) */}
      <div className="border-b border-purple-200/70 bg-[#EBE0FE] text-[12.5px] py-1.5 hidden md:block select-none">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-5 font-semibold text-[#1E1238] whitespace-nowrap">
            <a href="tel:+919306623619" className="flex items-center gap-1.5 hover:text-[#5B2180] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#1E1238] fill-[#1E1238]/20" />
              <span>+91 9306623619</span>
            </a>
            <span className="text-[#1E1238]/25 font-light">|</span>
            <a href="mailto:connect@websbond.com" className="flex items-center gap-1.5 hover:text-[#5B2180] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#1E1238]" />
              <span>connect@websbond.com</span>
            </a>
          </div>

          {/* Right: Quick Links + Vector Crisp Social Icons + Free Audit Pill */}
          <div className="flex items-center gap-3.5 font-medium text-[#1E1238] whitespace-nowrap">
            <Link to="/about-us" className="hover:text-[#5B2180] transition-colors">About Us</Link>
            <span className="text-[#1E1238]/25 font-light">|</span>
            <Link to="/about-us" className="hover:text-[#5B2180] transition-colors">Our Team</Link>
            <span className="text-[#1E1238]/25 font-light">|</span>
            <Link to="/blog" className="hover:text-[#5B2180] transition-colors">Blog</Link>
            <span className="text-[#1E1238]/25 font-light">|</span>

            {/* Clean Vector Social Icons (Reference Match) */}
            <div className="flex items-center gap-3.5 text-[#1E1238]">
              <a 
                href="https://www.facebook.com/profile.php?id=61591671059139" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#5B2180] hover:scale-110 transition-all flex items-center" 
                aria-label="Facebook"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a 
                href="https://youtube.com/@websbond" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#5B2180] hover:scale-110 transition-all flex items-center"
                aria-label="YouTube"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a 
                href="https://twitter.com/websbond" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#5B2180] hover:scale-110 transition-all flex items-center"
                aria-label="Twitter X"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/websbond/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#5B2180] hover:scale-110 transition-all flex items-center" 
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a 
                href="https://www.linkedin.com/company/websbond/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#5B2A8A] hover:scale-110 transition-all flex items-center" 
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Dark Purple Free Website Audit Pill (Reference Match) */}
            <Link
              to="/seo-analyzer"
              className="ml-2 bg-[#6B2896] hover:bg-[#571F7C] text-white px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all shadow-xs shrink-0"
            >
              Free Website Audit
            </Link>
          </div>
        </div>
      </div>

      {/* Main Primary Navigation Bar (Light Violet Tint Background, Balanced Gap) */}
      <header className={`w-full bg-[#F2EAFF] transition-all duration-300 ${scrolled ? "shadow-md py-2.5" : "py-3 border-b border-purple-200/80"}`}>
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-5 lg:gap-7">
          {/* Logo */}
          <div className="shrink-0">
            <Logo light={true} size="md" showTagline={true} />
          </div>

          {/* Center Navigation Links with Dropdowns & Unfilled Clean Home Icon */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 font-bold text-[#2C1352] text-[14px] xl:text-[14.5px] whitespace-nowrap" aria-label="Main navigation">
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => 
                `p-1 transition-colors flex items-center justify-center ${
                  isActive ? "text-[#4B2874] font-extrabold scale-110" : "text-[#4B2874]/80 hover:text-[#4B2874]"
                }`
              }
              aria-label="Home"
              title="Home"
            >
              <Home className="w-4.5 h-4.5 stroke-[2.2]" />
            </NavLink>

            {/* Work ∨ */}
            <div className="relative group py-2">
              <NavLink to="/our-portfolio" className="flex items-center gap-1 hover:text-purple-700 transition-colors whitespace-nowrap">
                <span className="whitespace-nowrap">Work</span>
                <ChevronDown className="w-3.5 h-3.5 text-purple-700/60 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
              </NavLink>
              <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-purple-100 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {WORK_DROPDOWN.map((item) => (
                  <Link key={item.label} to={item.to} className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50/70">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Marketing ∨ (Video 2-Column Nested Mega Dropdown) */}
            <div className="relative group py-2">
              <NavLink to="/digital-marketing-agency" className="flex items-center gap-1 hover:text-purple-700 transition-colors whitespace-nowrap">
                <span className="whitespace-nowrap">Marketing</span>
                <ChevronDown className="w-3.5 h-3.5 text-purple-700/60 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
              </NavLink>
              
              {/* Flyout Submenu Panel */}
              <div className="absolute top-full left-0 w-[520px] bg-white shadow-2xl border border-purple-100 rounded-2xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex gap-2">
                {/* Left Column */}
                <div className="w-1/2 border-r border-slate-100 pr-1 flex flex-col gap-0.5">
                  {MARKETING_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      onMouseEnter={() => setActiveMarketingSub(item.label)}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        activeMarketingSub === item.label
                          ? "bg-purple-50 text-purple-800 font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-purple-700"
                      }`}
                    >
                      <Link to={item.to} className="flex-1">
                        {item.label}
                      </Link>
                      {item.subItems && <ChevronRight className="w-3.5 h-3.5 text-purple-400" />}
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="w-1/2 pl-1 py-1 flex flex-col gap-1">
                  {MARKETING_ITEMS.find((m) => m.label === activeMarketingSub)?.subItems ? (
                    MARKETING_ITEMS.find((m) => m.label === activeMarketingSub)?.subItems?.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-purple-800 hover:bg-purple-50/70 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))
                  ) : (
                    <div className="px-3 py-4 text-xs text-slate-400 font-normal italic">
                      Click to explore {activeMarketingSub} services
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* UI/UX Design ∨ */}
            <div className="relative group py-2">
              <NavLink to="/website-design-service-in-delhi" className="flex items-center gap-1 hover:text-purple-700 transition-colors whitespace-nowrap">
                <span className="whitespace-nowrap">UI/UX Design</span>
                <ChevronDown className="w-3.5 h-3.5 text-purple-700/60 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
              </NavLink>
              <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-purple-100 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {UIUX_DROPDOWN.map((item) => (
                  <Link key={item.label} to={item.to} className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50/70">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Development ∨ */}
            <div className="relative group py-2">
              <NavLink to="/website-design-service-in-delhi" className="flex items-center gap-1 hover:text-purple-700 transition-colors whitespace-nowrap">
                <span className="whitespace-nowrap">Development</span>
                <ChevronDown className="w-3.5 h-3.5 text-purple-700/60 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
              </NavLink>
              <div className="absolute top-full left-0 w-72 bg-white shadow-xl border border-purple-100 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {DEV_DROPDOWN.map((item) => (
                  <Link key={item.label} to={item.to} className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50/70">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Career */}
            <NavLink to="/about-us" className="hover:text-purple-700 transition-colors whitespace-nowrap">
              Career
            </NavLink>

            {/* Contact us */}
            <NavLink to="/contact-us" className="hover:text-purple-700 transition-colors whitespace-nowrap">
              Contact us
            </NavLink>
          </nav>

          {/* Right Side: WhatsApp Pill + Increased Gap + Staggered ZigZag Drawer Button */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 whitespace-nowrap">
            {/* Official WhatsApp Soft Pill Badge */}
            <a
              href="https://wa.me/919306623619"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2.5 bg-white hover:bg-purple-50/90 text-slate-900 border border-purple-200 shadow-xs px-3.5 py-1.5 rounded-full transition-all duration-200 group shrink-0 whitespace-nowrap"
            >
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover:scale-105">
                <OfficialWhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              </div>
              <div className="flex flex-col text-left whitespace-nowrap">
                <span className="text-[10px] font-bold text-[#4B2874] leading-tight whitespace-nowrap">Chat on WhatsApp</span>
                <span className="text-xs font-extrabold text-[#241442] leading-tight whitespace-nowrap">+91 9306623619</span>
              </div>
            </a>

            {/* Dark Circular Hamburger Menu Button with Staggered ZigZag Icon (MateBiz Style) */}
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-[#1E1535] text-white flex items-center justify-center hover:bg-[#322354] transition-all duration-200 shadow-md ring-2 ring-purple-900/10 active:scale-95 shrink-0"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5 stroke-[2.5]" /> : <ZigZagMenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Full-Screen Mega Drawer Overlay (Reference Video Style) */}
        <MegaDrawerOverlay isOpen={open} onClose={() => setOpen(false)} />
      </header>
    </div>
  );
};

export default Navbar;

