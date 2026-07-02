import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Design",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="relative py-24 md:py-32 bg-[#09090b] overflow-hidden border-t border-white/[0.05]">
      {/* Background Neon Glows */}
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
              <a href="tel:+919306623619" className="flex items-center gap-3.5 text-zinc-300 hover:text-cyan-400 transition-colors">
                <span className="p-3 bg-white/5 rounded-xl border border-white/10 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Call Directly</p>
                  <p className="text-base font-semibold">+91 9306623619</p>
                </div>
              </a>

              <a href="mailto:websbond@websbond.com" className="flex items-center gap-3.5 text-zinc-300 hover:text-cyan-400 transition-colors">
                <span className="p-3 bg-white/5 rounded-xl border border-white/10 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Email Us</p>
                  <p className="text-base font-semibold">websbond@websbond.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form (Frosted Glass Container) */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl rounded-3xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)] w-full max-w-lg">
              <div className="mb-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Book Free Consultation</h3>
                <p className="text-zinc-400 text-sm">Fill in details and get a call within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs text-zinc-400 font-medium mb-1.5 block uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#18181b] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs text-zinc-400 font-medium mb-1.5 block uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#18181b] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs text-zinc-400 font-medium mb-1.5 block uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#18181b] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="text-xs text-zinc-400 font-medium mb-1.5 block uppercase tracking-wider">
                    Interested Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#18181b] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300"
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
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 py-4 px-6 rounded-xl text-white font-bold flex items-center justify-center gap-2 group transition-all duration-300 disabled:opacity-50 hover:brightness-110 shadow-lg shadow-cyan-500/20"
                >
                  {isSubmitting ? "Reserving Slot..." : "Claim Strategy Call"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
