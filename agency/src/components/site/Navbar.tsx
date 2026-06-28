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
  { label: "HOME", to: "/" },
  {
    label: "OUR SERVICES",
    to: "#",
    dropdown: true,
  },
  {
    label: "PACKAGES",
    to: "#",
    dropdown: [
      { label: "SEO (Search Engine Optimization)", to: "#" },
      { label: "SMO (Social Media Optimization)", to: "#" },
    ],
  },
  {
    label: "COMPANY",
    to: "/about-us",
    dropdown: [
      { label: "Our Portfolio", to: "/our-portfolio" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
  { label: "ABOUT US", to: "/about-us" },
  { label: "CASE STUDY", to: "/case-studies" },
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
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full relative z-50">
      {/* ── Top Utility Bar ── */}
      <div
        className={`hidden md:block text-white text-sm transition-all duration-300 overflow-hidden ${
          (isHome || scrolled) ? "max-h-0 opacity-0 py-0" : "max-h-16 opacity-100 py-2.5"
        }`}
        style={{ background: "linear-gradient(90deg, #001e36 0%, #002b49 50%, #001e36 100%)" }}
      >
        <div className="container flex justify-between items-center">
          {/* Left: contact info — highlighted */}
          <div className="flex gap-6 items-center">
            <a
              href="tel:+919306623619"
              className="flex items-center gap-2 text-white hover:text-orange-300 transition-colors group"
            >
              <span className="w-7 h-7 rounded-full bg-[#eb560c] flex items-center justify-center shadow-[0_0_10px_rgba(235,86,12,0.5)] group-hover:shadow-[0_0_18px_rgba(235,86,12,0.7)] transition-shadow">
                <Phone className="w-3.5 h-3.5 text-white" />
              </span>
              <span className="font-bold tracking-wide">+91 9306623619</span>
            </a>
            <a
              href="mailto:websbond@websbond.com"
              className="flex items-center gap-2 text-white hover:text-orange-300 transition-colors group"
            >
              <span className="w-7 h-7 rounded-full bg-[#eb560c] flex items-center justify-center shadow-[0_0_10px_rgba(235,86,12,0.5)] group-hover:shadow-[0_0_18px_rgba(235,86,12,0.7)] transition-shadow">
                <Mail className="w-3.5 h-3.5 text-white" />
              </span>
              <span className="font-bold tracking-wide">websbond@websbond.com</span>
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
              className="bg-white hover:bg-slate-50 text-[#003087] text-xs font-black px-3.5 py-1.5 rounded-md transition-all duration-300 flex items-center gap-1.5 hover:scale-105 border border-white/10 shrink-0 shadow-sm"
            >
              {/* PayPal official SVG logo */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 33" className="h-4 w-auto">
                <path fill="#253B80" d="M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z"/>
                <path fill="#179BD7" d="M94.992 6.749h-6.84a.95.95 0 0 0-.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822a.949.949 0 0 0 .939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z" />
                <path fill="#253B80" d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0-.744 1.328l-.055.299-1.924 12.191-.042.215a.293.293 0 0 1-.082.17.277.277 0 0 1-.171.068H7.266z"/>
                <path fill="#179BD7" d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0-1.336-1.03z"/>
                <path fill="#222D65" d="M21.754 7.151a9.757 9.757 0 0 0-1.203-.267 15.284 15.284 0 0 0-2.426-.177h-7.352a1.172 1.172 0 0 0-1.159.992L8.05 17.605l-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0-1.294-.516z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header
        className={`z-50 w-full transition-all duration-300 ${
          isHome && !scrolled
            ? "absolute top-0 left-0 bg-transparent border-b border-gray-200/60 py-5 text-[#16243E]"
            : scrolled
              ? "sticky top-0 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-2 text-[#16243E]"
              : "sticky top-0 bg-white border-b border-gray-100 py-3 text-[#16243E]"
        }`}
      >
        <div className="container flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo light={true} size="md" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative group py-2"
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-wide uppercase transition-colors ${
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
                  key={link.to + link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[13px] font-semibold tracking-wide uppercase transition-colors ${
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
              to="/contact-us"
              className="hidden sm:inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-300 bg-[#eb560c] text-white hover:bg-[#d14b0a] hover:scale-105 shadow-[0_4px_15px_rgba(235,86,12,0.3)]"
            >
              Book a Call
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
                  key={link.to + link.label}
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
