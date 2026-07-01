import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import { ArrowRight, Send } from "lucide-react";
import heroHomeBg from "@/assets/hero_home.png";

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
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen lg:max-h-[1080px] w-full flex items-center justify-center overflow-hidden pt-28 pb-16"
      style={{
        backgroundImage: `url(${heroHomeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ── Dark Gradient Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/80 to-[#09090b]" />

      <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-12 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* ── Left Column: Hero Text ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20 py-2">
            
            {/* Trusted Badge — frosted glass pill */}
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2 text-[11px] text-white/70 font-medium mb-6 select-none backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Trusted by 200+ businesses</span>
            </div>

            {/* Heading — massive, tight tracking, no uppercase */}
            <h1
              className="font-extrabold text-white mb-5 leading-[1.05] tracking-[-0.04em] text-left"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              Engineering{" "}
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                the future
              </span>
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              We build world-class digital experiences and technology that accelerate visionaries. Let's start your project today.
            </p>



          </div>

          {/* ── Right Column: Premium Contact Form (Frosted Glass) ── */}
          <div className="lg:col-span-5 flex items-center justify-center z-20 w-full">
            <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-2xl rounded-2xl p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] w-full max-w-md">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-1.5 flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5 text-indigo-400" />
                </h3>
                <p className="text-zinc-500 text-xs font-normal">
                  Claim your free strategy call and customized digital roadmap.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Name */}
                <div>
                  <label className="text-[10px] text-zinc-500 font-medium mb-1 block uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] text-zinc-500 font-medium mb-1 block uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[10px] text-zinc-500 font-medium mb-1 block uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="text-[10px] text-zinc-500 font-medium mb-1 block uppercase tracking-wider">
                    Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0f0f11] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300"
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-[#0f0f11] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_8px_25px_rgba(99,102,241,0.35)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
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
