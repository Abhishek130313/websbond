import { useState } from "react";
import { ArrowRight, TrendingUp, Zap, Shield, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { getApiUrl } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Website Design",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICES = [
    "Website Design",
    "SEO & Ranking",
    "Social Media Optimization",
    "Google Ads / PPC",
    "Social Media Marketing",
    "App Development",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Fields Required",
        description: "Please fill in your Name, Phone, and Email.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: "Strategy Call - " + formData.service,
          message: "Requested Service: " + formData.service,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      toast({
        title: "Strategy Call Booked!",
        description: "Thank you! Our team will contact you within 24 hours.",
      });
      setFormData({ name: "", phone: "", email: "", service: "Website Design" });
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden select-none"
      style={{ backgroundColor: "#030305" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.7)" }}
      >
        <source src="https://labs.google/fx/api/og-video/shared/57512328-33d9-49b3-b7c0-e5b401a78106" type="video/mp4" />
      </video>

      {/* Heavy left gradient — text area stays solid dark */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030305] via-[#030305]/85 to-[#030305]/20 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/50 to-transparent z-0" />

      {/* Premium warm + cool accent glows — Indian premium aesthetic */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/8 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/12 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-rose-500/5 blur-[100px] pointer-events-none z-0" />



      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 relative z-10 pt-36 lg:pt-44 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── Left Column ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left hero-fu">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] text-zinc-300 font-semibold mb-6 tracking-wide backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Delhi NCR's Premium Digital Agency
            </div>

            <h1 className="font-extrabold text-white mb-5 leading-[1.05] tracking-[-0.04em] font-jost"
              style={{
                fontSize: "clamp(40px, 5.5vw, 72px)",
                textShadow: "0 4px 40px rgba(0,0,0,0.6), 0 2px 10px rgba(0,0,0,0.4)",
              }}>
              We Build{" "}
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Digital Growth
              </span>
              {" "}Machines
            </h1>

            <p className="text-zinc-200 text-base md:text-[17px] leading-relaxed mb-8 max-w-xl font-medium drop-shadow-2xl" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              From high-performance websites to SEO that actually ranks — we engineer digital products that drive revenue, not just likes.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary py-4 px-8 text-white font-bold flex items-center justify-center gap-2 group shadow-xl shadow-indigo-500/15 hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 rounded-xl text-sm"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <Link
                to="/case-studies"
                className="py-4 px-8 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.07] text-zinc-300 hover:text-white font-semibold text-center transition-all duration-200 backdrop-blur-sm text-sm"
              >
                View Our Work →
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-zinc-400 w-full max-w-xl">
              {[
                { icon: Zap, label: "100/100 PageSpeed" },
                { icon: Shield, label: "Rank Guarantee" },
                { icon: TrendingUp, label: "ROI Focused" },
                { icon: BarChart3, label: "Data Driven" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right Column: Lead Form ── */}
          <div className="lg:col-span-5 hidden lg:flex items-start justify-center hero-fu-1 lg:sticky lg:top-32">
            <div className="relative w-full max-w-[400px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 rounded-[2.5rem] blur-2xl" />

              <div className="relative bg-[#09090b]/90 border border-white/[0.08] backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <div className="px-6 py-5 border-b border-white/[0.04]">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-bold text-white">Free Strategy Session</span>
                  </div>
                  <p className="text-[11px] text-zinc-500">Get a custom growth roadmap — no obligation.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-3.5">
                  <div>
                    <label className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-1 block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-1 block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-1 block">I'm interested in</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv} value={srv} className="bg-zinc-900 text-white">{srv}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 px-6 rounded-xl text-white font-bold flex items-center justify-center gap-2 group transition-all duration-300 disabled:opacity-50 hover:brightness-110 shadow-lg shadow-amber-500/20 text-sm mt-1"
                  >
                    {isSubmitting ? "Submitting..." : "Claim Your Free Session"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-zinc-600 text-center pt-1">✓ No spam. Response within 24 hours.</p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
