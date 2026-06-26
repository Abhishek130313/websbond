import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    {/* ── Main Footer ── */}
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)",
        backgroundImage: `linear-gradient(135deg, #002b49 0%, #16243E 100%), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: Logo + description + social */}
          <div>
            {/* Logo text ring - reference has a circular text logo */}
            <div className="mb-5">
              <div
                className="inline-flex items-center justify-center w-24 h-24 rounded-full font-jost font-bold text-white text-xl mb-3"
                style={{ background: "rgba(235,86,12,0.15)", border: "2px solid rgba(235,86,12,0.3)" }}
              >
                <span style={{ color: "#eb560c" }}>W</span>
                <span>B</span>
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
                { href: "https://facebook.com/websbond", icon: <Facebook className="w-4 h-4" />, bg: "#1877F2" },
                { href: "https://instagram.com/websbond", icon: <Instagram className="w-4 h-4" />, bg: "#E1306C" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded flex items-center justify-center text-white transition-transform hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  {s.icon}
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
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
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
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
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
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
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
