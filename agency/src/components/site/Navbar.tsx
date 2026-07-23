import { 
  Menu, X, Phone, Mail, ChevronDown, ChevronRight,
  Home, Facebook, Youtube, Twitter, Instagram, Linkedin, MessageSquare
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";

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
    <div className="w-full fixed top-0 left-0 z-50 bg-[#FAF9FF] shadow-xs">
      {/* Top Slim Utility Bar (Reference Style) */}
      <div className="border-b border-[#4B2874]/15 bg-[#FAF9FF] text-[12px] py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-5 font-bold text-[#4B2874]">
            <a href="tel:+919306623619" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5 text-[#4B2874] fill-[#4B2874]/20" />
              <span>+91 9306623619</span>
            </a>
            <span className="text-[#4B2874]/30">|</span>
            <a href="mailto:connect@websbond.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5 text-[#4B2874]" />
              <span>connect@websbond.com</span>
            </a>
          </div>

          {/* Right: Quick Links + Social Icons + Free Audit Pill */}
          <div className="flex items-center gap-4 font-bold text-[#4B2874]">
            <Link to="/about-us" className="hover:opacity-80 transition-opacity">About Us</Link>
            <span className="text-[#4B2874]/30">|</span>
            <Link to="/about-us" className="hover:opacity-80 transition-opacity">Our Team</Link>
            <span className="text-[#4B2874]/30">|</span>
            <Link to="/blog" className="hover:opacity-80 transition-opacity">Blog</Link>
            <span className="text-[#4B2874]/30">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 text-[#4B2874]">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-3.5 h-3.5 fill-current" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <Youtube className="w-3.5 h-3.5 fill-current" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-3.5 h-3.5 fill-current" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-3.5 h-3.5 fill-current" />
              </a>
            </div>

            {/* Dark Purple Free Website Audit Pill */}
            <Link
              to="/seo-analyzer"
              className="ml-2 bg-[#4B2874] hover:bg-[#3b1f5c] text-white px-4 py-1 rounded-full text-[11px] font-bold transition-all shadow-xs"
            >
              Free Website Audit
            </Link>
          </div>
        </div>
      </div>

      {/* Main Primary Navigation Bar (Reference Style) */}
      <header className={`w-full bg-[#FAF9FF] transition-all duration-300 ${scrolled ? "shadow-md py-2.5" : "py-3 border-b border-slate-200/70"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo light={true} size="md" />

          {/* Center Navigation Links with Dropdowns & Home Icon */}
          <nav className="hidden lg:flex items-center gap-6 font-semibold text-slate-800 text-[14.5px]" aria-label="Main navigation">
            <NavLink to="/" end className={({ isActive }) => `p-1.5 hover:text-indigo-700 transition-colors ${isActive ? "text-indigo-700" : "text-indigo-900"}`}>
              <Home className="w-4 h-4 fill-current" />
            </NavLink>

            {/* Work ∨ */}
            <div className="relative group py-2">
              <NavLink to="/our-portfolio" className="flex items-center gap-1 hover:text-indigo-700 transition-colors">
                <span>Work</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
              </NavLink>
              <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-slate-200/80 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {WORK_DROPDOWN.map((item) => (
                  <Link key={item.label} to={item.to} className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-700 hover:bg-indigo-50/70">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Marketing ∨ (Video 2-Column Nested Mega Dropdown) */}
            <div className="relative group py-2">
              <NavLink to="/digital-marketing-agency" className="flex items-center gap-1 hover:text-indigo-700 transition-colors">
                <span>Marketing</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
              </NavLink>
              
              {/* Flyout Submenu Panel (Matching Video Recording Exact Design) */}
              <div className="absolute top-full left-0 w-[520px] bg-white shadow-2xl border border-slate-200/90 rounded-2xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex gap-2">
                {/* Left Column: Primary Marketing Categories */}
                <div className="w-1/2 border-r border-slate-100 pr-1 flex flex-col gap-0.5">
                  {MARKETING_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      onMouseEnter={() => setActiveMarketingSub(item.label)}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        activeMarketingSub === item.label
                          ? "bg-indigo-50/90 text-indigo-700 font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                      }`}
                    >
                      <Link to={item.to} className="flex-1">
                        {item.label}
                      </Link>
                      {item.subItems && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                    </div>
                  ))}
                </div>

                {/* Right Column: Dynamic Nested Sub-items (Video Style) */}
                <div className="w-1/2 pl-1 py-1 flex flex-col gap-1">
                  {MARKETING_ITEMS.find((m) => m.label === activeMarketingSub)?.subItems ? (
                    MARKETING_ITEMS.find((m) => m.label === activeMarketingSub)?.subItems?.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-indigo-700 hover:bg-indigo-50/70 transition-colors"
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
              <NavLink to="/website-design-service-in-delhi" className="flex items-center gap-1 hover:text-indigo-700 transition-colors">
                <span>UI/UX Design</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
              </NavLink>
              <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-slate-200/80 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {UIUX_DROPDOWN.map((item) => (
                  <Link key={item.label} to={item.to} className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-700 hover:bg-indigo-50/70">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Development ∨ */}
            <div className="relative group py-2">
              <NavLink to="/website-design-service-in-delhi" className="flex items-center gap-1 hover:text-indigo-700 transition-colors">
                <span>Development</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
              </NavLink>
              <div className="absolute top-full left-0 w-72 bg-white shadow-xl border border-slate-200/80 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {DEV_DROPDOWN.map((item) => (
                  <Link key={item.label} to={item.to} className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-700 hover:bg-indigo-50/70">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Career */}
            <NavLink to="/about-us" className="hover:text-indigo-700 transition-colors">
              Career
            </NavLink>

            {/* Contact us */}
            <NavLink to="/contact-us" className="hover:text-indigo-700 transition-colors">
              Contact us
            </NavLink>
          </nav>

          {/* Right Side: WhatsApp Pill + Dark Circular Menu Toggle Button */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Soft Pill Badge (Reference Style) */}
            <a
              href="https://wa.me/919306623619"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2.5 bg-[#F1EBFC] hover:bg-[#e7dcfa] text-slate-900 border border-purple-200/80 px-4 py-1.5 rounded-full transition-all duration-200 shadow-xs"
            >
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-xs">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10.5px] font-bold text-[#4B2874] leading-tight">Chat on WhatsApp</span>
                <span className="text-xs font-extrabold text-slate-900 leading-tight">+91 9306623619</span>
              </div>
            </a>

            {/* Dark Circular Hamburger Menu Button (Reference Style) */}
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-[#1E1B3A] text-white flex items-center justify-center hover:bg-[#2e2a56] transition-colors shadow-sm"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {open && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-4 text-sm font-semibold text-slate-800">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-indigo-700">
              <Home className="w-4 h-4 fill-current" /> Home
            </Link>
            <Link to="/our-portfolio" onClick={() => setOpen(false)} className="hover:text-indigo-600">Work</Link>
            <Link to="/digital-marketing-agency" onClick={() => setOpen(false)} className="hover:text-indigo-600">Marketing</Link>
            <Link to="/website-design-service-in-delhi" onClick={() => setOpen(false)} className="hover:text-indigo-600">UI/UX Design</Link>
            <Link to="/website-design-service-in-delhi" onClick={() => setOpen(false)} className="hover:text-indigo-600">Development</Link>
            <Link to="/about-us" onClick={() => setOpen(false)} className="hover:text-indigo-600">Career</Link>
            <Link to="/contact-us" onClick={() => setOpen(false)} className="hover:text-indigo-600">Contact us</Link>
            <Link to="/seo-analyzer" onClick={() => setOpen(false)} className="mt-2 bg-[#4B2874] text-white text-center py-2.5 rounded-full font-bold">
              Free Website Audit
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;

