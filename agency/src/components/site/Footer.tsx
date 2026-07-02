import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo3d from "@/assets/websbond-logo-3d.webp";

const QUICK_LINKS = [
  { label: "Services Area", to: "/website-design-service-in-delhi" },
  { label: "Home", to: "/" },
  { label: "About Company", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "Our Work", to: "/our-portfolio" },
  { label: "Digital Marketing", to: "/seo-service-in-delhi" },
];

export const Footer = () => (
  <>
    {/* ── Main Footer — near-black minimal ── */}
    <footer
      className="relative overflow-hidden"
      style={{ background: "#09090b" }}
    >
      {/* Subtle top-edge light bar */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Logo + description + social */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="inline-flex items-center justify-center rounded-xl overflow-hidden border border-white/10 bg-[#09090b] w-10 h-10">
                <img
loading="lazy" decoding="async"                   src={logo3d}
                  alt="Websbond logo"
                  className="w-8 h-8 object-contain p-0.5"
                />
              </span>
              <span className="font-semibold text-lg text-white tracking-tight">
                websbond<span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">.com</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6" style={{ marginBottom: 24 }}>
              Websbond is always considered for its high valued and supportive services that make clients gratifying when it comes to real time solutions.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                { href: "https://facebook.com/websbond", label: "Facebook", color: "#1877F2", svg: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { href: "https://instagram.com/websbond", label: "Instagram", color: "#E1306C", svg: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 transition-all duration-300 border border-zinc-800 hover:-translate-y-0.5"
                  style={{
                    transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease, color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = s.color;
                    e.currentTarget.style.borderColor = s.color;
                    e.currentTarget.style.boxShadow = `0 4px 15px ${s.color}40`;
                    e.currentTarget.style.transform = "perspective(200px) rotateX(-2deg) rotateY(2deg) translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.transform = "";
                  }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="flex items-center gap-2 text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-zinc-800 bg-zinc-900">
                  <Phone className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-wider mb-0.5">Phone</div>
                  <a href="tel:+919306623619" className="text-zinc-300 text-sm font-medium hover:text-white transition-colors">
                    +91 9306623619
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-zinc-800 bg-zinc-900">
                  <Mail className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-wider mb-0.5">E-mail</div>
                  <a href="mailto:websbond@websbond.com" className="text-zinc-300 text-sm font-medium hover:text-white transition-colors">
                    websbond@websbond.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-zinc-800 bg-zinc-900">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-wider mb-0.5">Location</div>
                  <p className="text-zinc-300 text-sm font-medium" style={{ marginBottom: 0 }}>
                    Delhi NCR & Haryana, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar — ultra minimal ── */}
      <div className="border-t border-zinc-800/50 py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs text-center" style={{ marginBottom: 0 }}>
            © {new Date().getFullYear()} Websbond. All rights reserved.
            <span className="opacity-15 hover:opacity-100 transition-opacity text-[10px] ml-4 space-x-2">
              <Link to="/admin" className="text-zinc-500">Admin</Link>
              <span className="text-zinc-700">|</span>
              <Link to="/blog-admin" className="text-zinc-500">Blog Admin</Link>
            </span>
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            {[
              { label: "Payment Option", to: "/payment" },
              { label: "Terms & Conditions", to: "/terms-and-condition" },
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Refund Policy", to: "/refund-policy" }
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
);
