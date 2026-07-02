import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import { ArrowRight, Phone, Mail, User, MessageCircle, CheckCircle2 } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Design",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const SERVICES = [
    "Website Design",
    "SEO & Ranking",
    "Social Media Optimization (SMO)",
    "Google Ads / PPC",
    "Social Media Marketing (SMM)",
    "App Development",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Fields Required",
        description: "Please fill in your Name, Email, and Phone number.",
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
        title: "Strategy Call Booked! 🎉",
        description: "Thank you! Our digital expert will contact you shortly.",
      });
      setFormData({ name: "", email: "", phone: "", service: "Website Design" });
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
    <section id="contact-section" className="relative py-24 md:py-32 bg-[#09090b] overflow-hidden border-t border-white/[0.05]">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 bg-indigo-500 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 bg-cyan-500 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Context / Value Prop */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              ✦ Ready to grow?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's engineer your <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                growth strategy
              </span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
              Claim your free 30-minute consultation call. We will analyze your current digital footprint and map out a tailored roadmap for design, SEO, and automation.
            </p>

            <div className="pt-6 space-y-4">
              <a href="tel:+919306623619" className="flex items-center gap-3.5 text-zinc-300 hover:text-cyan-400 transition-colors group">
                <span className="p-3 bg-white/5 rounded-xl border border-white/10 text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Call Directly</p>
                  <p className="text-base font-semibold">+91 9306623619</p>
                </div>
              </a>

              <a href="mailto:websbond@websbond.com" className="flex items-center gap-3.5 text-zinc-300 hover:text-cyan-400 transition-colors group">
                <span className="p-3 bg-white/5 rounded-xl border border-white/10 text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Email Us</p>
                  <p className="text-base font-semibold">websbond@websbond.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Lead Form */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-[2.5rem] blur-3xl" />

              <div className="relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-3xl rounded-3xl p-8 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Shimmer border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

                <div className="mb-6 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Book Free Consultation</h3>
                      <p className="text-zinc-500 text-xs">Fill in details and get a call within 24 hours.</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 block transition-colors duration-300 ${focused === "name" ? "text-indigo-400" : "text-zinc-500"}`}>
                        Full Name
                      </label>
                      <div className="relative">
                        <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focused === "name" ? "text-indigo-400" : "text-zinc-600"}`} />
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 block transition-colors duration-300 ${focused === "phone" ? "text-indigo-400" : "text-zinc-500"}`}>
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focused === "phone" ? "text-indigo-400" : "text-zinc-600"}`} />
                        <input
                          type="tel"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 block transition-colors duration-300 ${focused === "email" ? "text-indigo-400" : "text-zinc-500"}`}>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focused === "email" ? "text-indigo-400" : "text-zinc-600"}`} />
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 block transition-colors duration-300 ${focused === "service" ? "text-indigo-400" : "text-zinc-500"}`}>
                      Interested Service
                    </label>
                    <select
                      value={formData.service}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#18181b] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv} value={srv} className="bg-zinc-900 text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 py-4 px-6 rounded-xl text-white font-bold flex items-center justify-center gap-2 group transition-all duration-300 disabled:opacity-60 hover:brightness-110 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Reserving Slot...
                      </>
                    ) : (
                      <>
                        Claim Strategy Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
