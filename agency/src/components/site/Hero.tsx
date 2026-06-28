import { useState, useRef } from "react";
import { ArrowRight, Loader2, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const SERVICES_OPTIONS = [
  "Website Design & Development",
  "SEO Optimization",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Content Marketing",
  "E-Commerce Solutions",
  "App Development",
  "Google My Business",
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
    const email   = (data.get("email")   as string)?.trim();
    const service = (data.get("service") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    if (!name || !phone) {
      toast({ title: "Please fill in your name and phone number.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl("/api/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, message, source: "Hero Form" }),
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
      className="relative min-h-[88vh] flex items-center overflow-hidden"
    >
      {/* Background video + dark overlay (exactly like reference site) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://labs.google/fx/api/og-video/shared/14b3b69a-687a-4b44-8de0-25928f4e6a16"
          type="video/mp4"
        />
      </video>
      {/* Neutral dark gradient overlay for text readability, removing the blue-navy overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"
      />

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div>
            {/* Tagline - exactly like reference: arrow + orange text */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white">→</span>
              <span
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: "#eb560c" }}
              >
                GROW BUSINESS
              </span>
            </div>

            {/* Main heading - same style as reference */}
            <h1
              className="font-jost font-bold text-white mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.15 }}
            >
              Best Digital Marketing Agency
              <br />
              <span style={{ color: "#eb560c" }}>& SEO Company in Delhi NCR</span>
            </h1>

            {/* Body text - same size and color as reference */}
            <p className="text-white/85 text-base leading-relaxed mb-8 max-w-xl" style={{ fontSize: 15 }}>
              Websbond is a premier, result-oriented <strong>digital marketing agency in Delhi NCR & Haryana</strong>. 
              We specialize in top-performing <strong>SEO services in Delhi</strong>, custom <strong>website design & development</strong>, 
              expert <strong>Google Ads (PPC)</strong> campaigns, and <strong>social media optimization (SMO)</strong>. Our marketing experts 
              help businesses rank on Page 1, capture organic search traffic, and maximize leads ROI.
            </p>

            {/* Explore More button - orange solid like reference */}
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-white px-8 py-4 rounded transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-base"
              style={{ background: "#eb560c" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
            >
              Explore More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── Right: Request A Quote Form ── */}
          <div id="contact-form">
            <div
              className="rounded-3xl p-9 shadow-2xl"
              style={{
                background: "rgba(22, 36, 62, 0.92)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h3
                className="font-jost font-bold text-white text-2xl mb-5"
              >
                Request A Quote
              </h3>

              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                {/* Row 1: Full Name + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Full Name*"
                    className="w-full px-4 py-3.5 text-sm text-gray-800 rounded-lg focus:outline-none focus:ring-2"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#fff",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#eb560c")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone*"
                    className="w-full px-4 py-3.5 text-sm rounded-lg focus:outline-none"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#fff",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#eb560c")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                  />
                </div>

                {/* Email */}
                <input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3.5 text-sm rounded-lg focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#eb560c")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                />

                {/* Select Services */}
                <select
                  name="service"
                  className="w-full px-4 py-3.5 text-sm rounded-lg focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <option value="" style={{ background: "#002b49" }}>Select Services *</option>
                  {SERVICES_OPTIONS.map((s) => (
                    <option key={s} value={s} style={{ background: "#002b49" }}>{s}</option>
                  ))}
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3.5 text-sm rounded-lg focus:outline-none resize-none"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#eb560c")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                />

                {/* Mock ReCAPTCHA */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between">
                  <label className="flex items-center gap-2.5 cursor-pointer text-xs text-white/80 font-bold select-none">
                    <input 
                      type="checkbox" 
                      required 
                      className="w-4 h-4 rounded border-gray-300 text-[#eb560c] focus:ring-[#eb560c] bg-white/20 accent-[#eb560c] cursor-pointer" 
                    />
                    I'm not a robot
                  </label>
                  <div className="flex flex-col items-center">
                    <img 
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                      className="w-5.5 h-5.5 object-contain opacity-70" 
                      alt="recaptcha logo" 
                    />
                    <span className="text-[7px] text-white/30 font-bold tracking-tight mt-0.5">reCAPTCHA</span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:opacity-90 disabled:opacity-60 text-sm uppercase tracking-wider"
                  style={{ background: "#eb560c" }}
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message!</>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
