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

/* Rotating text ring around logo */
const RotatingTextRing = () => {
  const text = "WEBSBOND • DIGITAL MARKETING • SEO • SMO • ";
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full animate-spin-slow group-hover:animate-spin-fast transition-all"
    >
      <defs>
        <path
          id="footerCirclePath"
          d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
        />
      </defs>
      <text
        fill="rgba(255,255,255,0.45)"
        fontSize="13"
        fontWeight="700"
        letterSpacing="3"
        fontFamily="'Jost', sans-serif"
      >
        <textPath href="#footerCirclePath" startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export const Footer = () => (
  <>
    {/* ── Main Footer ── */}
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)",
        backgroundImage: `linear-gradient(135deg, #004b75 0%, #0c203b 100%), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: Logo with rotating ring + description + social */}
          <div>
            {/* Logo with rotating text ring */}
            <div className="mb-5">
              <div className="relative w-32 h-32 group cursor-pointer mb-4">
                {/* Rotating text ring */}
                <RotatingTextRing />
                {/* Center logo — same as header */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-shadow"
                    style={{ background: "#0a0f1c", border: "2px solid rgba(168,85,247,0.3)" }}
                  >
                    <img
                      src={logo3d}
                      alt="Websbond logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="text-white font-jost font-bold text-xl">WEBSBOND</div>
              <div className="text-white/50 text-xs uppercase tracking-widest">Digital Marketing</div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-6" style={{ marginBottom: 20 }}>
              Websbond is always considered for its high valued and supportive services that make clients gratifying when it comes to real time solutions.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { href: "https://facebook.com/websbond", label: "Facebook", svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { href: "https://instagram.com/websbond", label: "Instagram", svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:bg-[#eb560c]"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="font-jost font-bold text-white text-lg mb-6"
              style={{ borderBottom: "2px solid rgba(235,86,12,0.4)", paddingBottom: 10 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="flex items-center gap-2 text-white/65 text-sm hover:text-[#eb560c] transition-colors py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#eb560c" }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4
              className="font-jost font-bold text-white text-lg mb-6"
              style={{ borderBottom: "2px solid rgba(235,86,12,0.4)", paddingBottom: 10 }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Phone</div>
                  <a href="tel:+919306623619" className="text-white text-sm font-medium hover:text-[#eb560c] transition-colors">
                    +91 9306623619
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">E-mail</div>
                  <a href="mailto:websbond@websbond.com" className="text-white text-sm font-medium hover:text-[#eb560c] transition-colors">
                    websbond@websbond.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Location</div>
                  <p className="text-white text-sm font-medium" style={{ marginBottom: 0 }}>
                    Delhi NCR & Haryana, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t py-4"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm text-center" style={{ marginBottom: 0 }}>
            Websbond Digital Marketing All Rights Reserved
            <span className="opacity-15 hover:opacity-100 transition-opacity text-[10px] ml-4 space-x-2">
              <Link to="/admin" className="text-white/70">Admin Panel</Link>
              <span className="text-white/40">|</span>
              <Link to="/blog-admin" className="text-white/70">Blog Admin</Link>
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
                className="text-white/50 text-xs hover:text-white transition-colors"
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
