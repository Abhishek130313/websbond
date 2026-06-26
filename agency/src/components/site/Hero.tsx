import { useState, useRef } from "react";
import { ArrowRight, Play, Check, Phone, MessageCircle, Loader2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import a1 from "@/assets/avatar1.webp";
import a2 from "@/assets/avatar2.webp";
import a3 from "@/assets/avatar3.webp";

const SERVICES_PILLS = [
  "Website Development",
  "SEO Optimization",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Content Strategy",
  "E-Commerce Solutions",
];

const TRUST_POINTS = [
  "100+ Happy Clients",
  "Result-Driven Strategies",
  "Transparent Reporting",
  "24/7 Dedicated Support",
];

export const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name    = (data.get("name")    as string)?.trim();
    const phone   = (data.get("phone")   as string)?.trim();
    const service = (data.get("service") as string)?.trim();
    if (!name || !phone) {
      toast({ title: "Please fill in your name and phone number.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl("/api/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, source: "Hero Form" }),
      });
      if (!res.ok) throw new Error("Failed");
      toast({ title: "🎉 Thanks! We'll call you back shortly.", description: "Our expert team will reach out within minutes." });
      form.reset();
    } catch {
      toast({ title: "Something went wrong.", description: "Please call us directly at +91 9306623619.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #002b49 0%, #16243E 60%, #010D4C 100%)",
      }}
    >
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #eb560c 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #eb560c 0%, transparent 70%)" }} />

      <div className="container relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Column: Text + CTAs ── */}
          <div>
            {/* Tagline pill */}
            <div className="hero-fu inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3.5 h-3.5 text-[#eb560c] fill-[#eb560c]" />
              <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
                #1 Digital Agency in Delhi NCR & Haryana
              </span>
            </div>

            {/* Main headline */}
            <h1 className="hero-fu-1 font-jost font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.1 }}>
              Grow Your Business With{" "}
              <span style={{ color: "#eb560c" }}>Data-Driven</span>{" "}
              Digital Marketing
            </h1>

            {/* Subtitle */}
            <p className="hero-fu-2 text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
              Websbond delivers premium websites, performance SEO, and high-ROI ad campaigns for businesses in Delhi NCR, Haryana, and worldwide. Get results that actually matter.
            </p>

            {/* Trust points */}
            <ul className="hero-fu-3 grid grid-cols-2 gap-2 mb-8">
              {TRUST_POINTS.map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-white/85 text-sm font-medium">
                  <Check className="w-4 h-4 text-[#eb560c] flex-shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="hero-fu-4 flex flex-wrap items-center gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-bold text-white px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "#eb560c" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 font-bold text-white px-8 py-4 rounded-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <Play className="w-4 h-4" /> View Our Work
              </Link>
            </div>

            {/* Social proof: avatars */}
            <div className="hero-fu-5 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[a1, a2, a3].map((av, i) => (
                  <img key={i} src={av} alt={`client ${i + 1}`}
                    className="w-9 h-9 rounded-full border-2 border-[#002b49] object-cover" />
                ))}
              </div>
              <div>
                <div className="flex">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 text-xs mt-0.5">Trusted by 100+ businesses</p>
              </div>
            </div>

            {/* Service pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {SERVICES_PILLS.map((s) => (
                <span key={s}
                  className="text-xs font-semibold text-white/70 border border-white/20 rounded-full px-3 py-1 hover:border-[#eb560c] hover:text-[#eb560c] transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right Column: Lead Form Card ── */}
          <div className="float-a">
            <div
              id="contact-form"
              className="bg-white rounded-2xl p-8 shadow-2xl"
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.3)" }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-orange-50 text-[#eb560c] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-3">
                  <Phone className="w-3.5 h-3.5" /> Free Strategy Call
                </div>
                <h3 className="text-[#002b49] text-2xl font-bold font-jost leading-tight">
                  Get a Free Digital Marketing Audit
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Fill the form — our expert calls you back in minutes!
                </p>
              </div>

              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
                  <input
                    name="name" type="text" required placeholder="e.g. Rahul Sharma"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#eb560c] focus:ring-2 focus:ring-[#eb560c]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input
                    name="phone" type="tel" required placeholder="+91 XXXXXXXXXX"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#eb560c] focus:ring-2 focus:ring-[#eb560c]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                  <select
                    name="service"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#eb560c] focus:ring-2 focus:ring-[#eb560c]/10 transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES_PILLS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #eb560c, #d14b0a)" }}
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><MessageCircle className="w-4 h-4" /> Get Free Audit Now</>
                  )}
                </button>
              </form>

              {/* Trust badges below form */}
              <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-gray-100">
                {["🔒 100% Confidential", "⚡ Fast Response", "💯 No Obligation"].map((b) => (
                  <span key={b} className="text-xs text-gray-400 font-medium">{b}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};
