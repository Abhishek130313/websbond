import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const SERVICES_LINKS = [
  { label: "Website Design & Development", to: "/services#web-design" },
  { label: "SEO Optimization", to: "/services#seo" },
  { label: "Google Ads / PPC", to: "/services#ppc" },
  { label: "Social Media Marketing", to: "/services#smm" },
  { label: "Branding & UI/UX Design", to: "/services#branding" },
  { label: "E-Commerce Solutions", to: "/services#ecommerce" },
];

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
];

const SOCIAL = [
  { icon: Facebook, href: "https://facebook.com/websbond", label: "Facebook", color: "#1877F2" },
  { icon: Instagram, href: "https://instagram.com/websbond", label: "Instagram", color: "#E1306C" },
  { icon: Linkedin, href: "https://linkedin.com/company/websbond", label: "LinkedIn", color: "#0A66C2" },
  { icon: Youtube, href: "https://youtube.com/@websbond", label: "YouTube", color: "#FF0000" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    try {
      const res = await fetch(getApiUrl("/api/subscribe"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      toast({ title: "🎉 Subscribed!", description: "You'll get our latest insights in your inbox." });
      setEmail("");
    } catch {
      toast({ title: "Subscription failed. Please try again.", variant: "destructive" });
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer style={{ background: "#002b49" }}>
      {/* CTA Banner */}
      <div
        className="py-14"
        style={{ background: "linear-gradient(135deg, #eb560c 0%, #d14b0a 100%)" }}
      >
        <div className="container text-center">
          <h2 className="font-jost font-bold text-white text-3xl md:text-4xl mb-3">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get a free consultation and digital marketing audit — no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ color: "#eb560c" }}
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919306623619"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Column 1: Company Info */}
          <div>
            <Logo size="lg" />
            <p className="text-white/60 text-sm leading-relaxed mt-5 mb-6">
              Websbond is a premium digital marketing and web development agency serving businesses in Delhi NCR, Haryana, and across the globe. We help brands grow online with strategy, creativity, and technology.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a href="tel:+919306623619" className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: "rgba(235,86,12,0.15)" }}>
                  <Phone className="w-3.5 h-3.5" style={{ color: "#eb560c" }} />
                </div>
                +91 9306623619
              </a>
              <a href="mailto:websbond@websbond.com" className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(235,86,12,0.15)" }}>
                  <Mail className="w-3.5 h-3.5" style={{ color: "#eb560c" }} />
                </div>
                websbond@websbond.com
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(235,86,12,0.15)" }}>
                  <MapPin className="w-3.5 h-3.5" style={{ color: "#eb560c" }} />
                </div>
                <span>Sector 48, Sohna Road, Gurugram, Haryana - 122018</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {SOCIAL.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = color)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)")}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="font-jost font-bold text-white text-base mb-6 pb-2"
              style={{ borderBottom: "2px solid #eb560c", display: "inline-block" }}>
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors group-hover:bg-[#eb560c]"
                      style={{ background: "rgba(235,86,12,0.5)" }}
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-jost font-bold text-white text-base mb-6 pb-2"
              style={{ borderBottom: "2px solid #eb560c", display: "inline-block" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors group-hover:bg-[#eb560c]"
                      style={{ background: "rgba(235,86,12,0.5)" }}
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-jost font-bold text-white text-base mb-6 pb-2"
              style={{ borderBottom: "2px solid #eb560c", display: "inline-block" }}>
              Newsletter
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Get the latest digital marketing tips, SEO updates, and business growth insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 bg-white"
                style={{ border: "none" }}
              />
              <button
                type="submit"
                disabled={subscribing}
                className="w-full font-bold py-3 rounded-lg text-white text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                style={{ background: "#eb560c" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
              >
                {subscribing ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>

            {/* Working Hours */}
            <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
              <p className="text-white font-bold text-sm mb-2">Working Hours</p>
              <p className="text-white/60 text-xs leading-relaxed">
                Mon – Sat: 10:00 AM – 9:00 PM<br />
                Sunday: By Appointment
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="container pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Websbond. All rights reserved. | Made with ❤️ in India
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/50 hover:text-white/80 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/50 hover:text-white/80 text-xs transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-white/50 hover:text-white/80 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
