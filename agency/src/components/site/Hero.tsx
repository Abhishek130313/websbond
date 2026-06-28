import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Send } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
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
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen lg:max-h-[1080px] w-full flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#0a0f19]"
    >
      {/* ── Background Image: Clean, text-free, and dark blue-black hue ── */}
      <img
        src={heroDashboard}
        alt="Websbond Premium Office Background"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-0"
        loading="eager"
        style={{ filter: "brightness(0.55) contrast(1.05) saturate(0.9)" }}
      />
      {/* Semi-transparent gradient overlay to ensure high readability on the left while keeping the background image fully vivid and transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f19]/85 via-[#0a0f19]/50 to-[#0a0f19]/25 backdrop-blur-[0.2px] z-10 pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-12 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          
          {/* ── Left Column: Live Mockup Text ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20 py-2">
            
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 text-[11px] text-white/90 font-bold mb-5 select-none shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span>TRUSTED BY 200+ BUSINESSES</span>
            </div>

            {/* Heading */}
            <h1
              className="font-jost font-black text-white mb-4 leading-[0.98] tracking-tight text-left uppercase"
              style={{ fontSize: "clamp(34px, 4.8vw, 68px)" }}
            >
              Engineering
              <br />
              the future
            </h1>

            {/* Description Subheading */}
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium">
              We build world-class digital experiences and technology that accelerate visionaries. Let's start your project today.
            </p>

            {/* Company Trust Logos */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6">
              <span className="font-display font-black text-white/35 text-[13px] sm:text-sm tracking-tight">Spotify</span>
              <span className="font-display font-black text-white/35 text-[13px] sm:text-sm tracking-tight">Nike</span>
              <span className="font-display font-semibold text-white/35 text-[13px] sm:text-sm tracking-tighter">aws</span>
              <span className="font-display font-black text-white/35 text-[13px] sm:text-sm tracking-tight">stripe</span>
              <span className="font-display font-bold text-white/35 text-[13px] sm:text-sm tracking-tight">Adobe</span>
              <span className="font-display font-black text-white/35 text-[13px] sm:text-sm tracking-tight">salesforce</span>
            </div>

            {/* Bottom Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-4 border-t border-white/10 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white/80 tracking-wide">TRUSTED BY</span>
                <span className="text-[9px] font-bold text-white/40 tracking-wider uppercase">GLOBAL LEADERS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white/80 tracking-wide">250+ PROJECTS</span>
                <span className="text-[9px] font-bold text-white/40 tracking-wider uppercase">DELIVERED</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white/80 tracking-wide">40+ TEAM</span>
                <span className="text-[9px] font-bold text-white/40 tracking-wider uppercase">MEMBERS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white/80 tracking-wide">15+ INDUSTRY</span>
                <span className="text-[9px] font-bold text-white/40 tracking-wider uppercase">AWARDS</span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Premium Contact Form (Glassmorphism card) ── */}
          <div className="lg:col-span-5 flex items-center justify-center z-20 w-full">
            <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] w-full max-w-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5 text-indigo-400" />
                </h3>
                <p className="text-white/50 text-xs font-medium">
                  Claim your free strategy call and customized digital roadmap.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="text-[10px] text-white/50 font-bold mb-1 block uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] text-white/50 font-bold mb-1 block uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[10px] text-white/50 font-bold mb-1 block uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="text-[10px] text-white/50 font-bold mb-1 block uppercase tracking-wider">
                    Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0b101c] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-[#0b101c] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-bold py-3.5 rounded-full transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:scale-[1.02] active:scale-98 shadow-[0_8px_20px_rgba(99,102,241,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    "Booking..."
                  ) : (
                    <>
                      Book Strategy Call <Send className="w-4 h-4" />
                    </>
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
