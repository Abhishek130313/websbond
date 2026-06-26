import { ArrowRight, Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "HOME", to: "/" },
  {
    label: "OUR SERVICES",
    to: "/services",
    dropdown: [
      { label: "Website Design & Development", to: "/services#web-design" },
      { label: "SEO (Search Engine Optimization)", to: "/services#seo" },
      { label: "Google Ads / PPC Management", to: "/services#ppc" },
      { label: "Social Media Marketing", to: "/services#smm" },
      { label: "Content Marketing", to: "/services#content" },
      { label: "E-Commerce Solutions", to: "/services#ecommerce" },
    ],
  },
  { label: "OUR WORK", to: "/our-work" },
  { label: "ABOUT US", to: "/about" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT", to: "/contact" },
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
  const [servicesOpen, setServicesOpen] = useState(false);

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
            <a
              href="#contact-form"
              onClick={(e) => {
                const el = document.getElementById("contact-form");
                if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
              }}
              className="bg-[#eb560c] hover:bg-[#d14b0a] text-white text-xs font-bold px-4 py-1.5 rounded transition-colors uppercase tracking-wider"
            >
              Get a Free Consultation
            </a>
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
          <Logo light={false} size="md" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.to}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
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
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 w-72 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] border-t-[3px] border-[#002b49] rounded-b-lg transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-[#16243E] hover:text-[#eb560c] hover:bg-orange-50 transition-colors border-b border-gray-50 last:border-0 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb560c] flex-shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
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
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-[#002b49] hover:bg-[#eb560c] text-white text-sm font-bold px-6 py-2.5 rounded transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>

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
          className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 bg-white ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-2 text-base font-bold border-b border-gray-50 uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-[#eb560c]"
                      : "text-[#16243E] hover:text-[#eb560c]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-[#eb560c] text-white font-bold py-3.5 rounded text-center hover:bg-[#d14b0a] transition-colors"
            >
              Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
