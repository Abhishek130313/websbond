import { useState } from "react";
import { ArrowRight, TrendingUp, Zap, Shield, BarChart3, CheckCircle2, User, Phone, Mail, MessageCircle } from "lucide-react";
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
  const [focused, setFocused] = useState<string | null>(null);

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
        title: "Server Unavailable",
        description: "Redirecting to WhatsApp...",
      });
      const waMsg = encodeURIComponent(
        `Hi Websbond! I need a strategy call.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}`
      );
      window.open(`https://wa.me/919306623619?text=${waMsg}`, "_blank");
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
      >
          <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#030305]/55 via-[#030305]/25 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/30 via-transparent to-transparent z-0" />

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

          {/* ── Right Column: Premium Lead Form ── */}
          <div className="lg:col-span-5 hidden lg:flex items-start justify-center hero-fu-1 lg:sticky lg:top-32">
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 rounded-[2.5rem] blur-2xl animate-glow" />
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/5 via-cyan-500/5 to-purple-500/5 rounded-[2rem] blur-3xl" />

              <div className="relative bg-[#09090b]/95 border border-white/[0.06] backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
                {/* Header */}
                <div className="px-6 py-5 border-b border-white/[0.03] bg-gradient-to-r from-white/[0.02] to-transparent">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#09090b]" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white">Free Strategy Session</span>
                      <p className="text-[10px] text-zinc-500">Get a custom growth roadmap — no obligation.</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-3.5">
                  {/* Name */}
                  <div className="relative">
                    <label className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 block transition-colors duration-300 ${focused === "name" ? "text-amber-400" : "text-zinc-500"}`}>
                      Full Name
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focused === "name" ? "text-amber-400" : "text-zinc-600"}`} />
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 block transition-colors duration-300 ${focused === "phone" ? "text-amber-400" : "text-zinc-500"}`}>
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focused === "phone" ? "text-amber-400" : "text-zinc-600"}`} />
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 block transition-colors duration-300 ${focused === "email" ? "text-amber-400" : "text-zinc-500"}`}>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focused === "email" ? "text-amber-400" : "text-zinc-600"}`} />
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="relative">
                    <label className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 block transition-colors duration-300 ${focused === "service" ? "text-amber-400" : "text-zinc-500"}`}>
                      I'm interested in
                    </label>
                    <select
                      value={formData.service}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv} value={srv} className="bg-zinc-900 text-white">{srv}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 px-6 rounded-xl text-white font-bold flex items-center justify-center gap-2 group transition-all duration-300 disabled:opacity-60 hover:brightness-110 hover:shadow-lg hover:shadow-amber-500/25 active:scale-[0.98] text-sm mt-1 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Claim Your Free Session
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-3 text-[10px] text-zinc-600 pt-1">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500/60" /> No spam</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500/60" /> Response within 24h</span>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
