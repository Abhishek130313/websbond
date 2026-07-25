import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export const AboutSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: "Consultation Request",
        message: formData.message || "Consultation Request from Website",
      });
      toast({
        title: "Proposal Requested! 🎉",
        description: "Thank you! Our team will contact you within 24 hours.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at +91 9306623619.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8F7FD] text-slate-900 select-none border-b border-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top Hero Section: Image 1 Style Layout ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 md:mb-24">
          
          {/* Left Column: 3D Smartphone Expert Graphic */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group w-full max-w-[480px]">
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-indigo-400/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000" />
              
              <img
                src="/websbond_unique_hero.png"
                alt="Websbond Digital Marketing & Affordable Website Development Agency"
                className="relative z-10 w-full h-auto max-h-[520px] object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: SEO Optimized Copy & 4 Badge Grid */}
          <div className="lg:col-span-7">
            {/* Tagline Badge */}
            <span className="text-[#F25C3B] font-bold text-sm sm:text-base tracking-wide uppercase block mb-3 font-sans">
              What makes us unique?
            </span>

            {/* Main SEO Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18] mb-6 font-jost">
              Our offbeat <span className="text-purple-800">Marketing & Web solutions</span> drive dollars to your bank accounts.
            </h2>

            {/* Sub-headline for SEO keyword richness */}
            <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-4 leading-snug">
              Affordable Website Development, Top #1 Google SEO & High-ROI Social Media Marketing Agency
            </h3>

            {/* SEO-Optimized Copy */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              In this fast-paced digital market, your first impression defines your success. Whether you want to build an <strong className="text-slate-900 font-bold">affordable website in budget (saste me high quality website)</strong>, scale with a top-rated <strong className="text-slate-900 font-bold">social media marketing agency</strong>, or dominate Google search results with <strong className="text-slate-900 font-bold">#1 rank SEO & Google Ads</strong> — <strong className="text-purple-900 font-bold">Websbond</strong> delivers guaranteed business growth. Our commitment to expanding your revenue goes beyond mere words; it is a steadfast pledge. To bring your dreams of digital dominance to fruition, we have:
            </p>

            {/* 4 Circular Stat Badges Grid (Exact Image 1 Style) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-purple-100">
              
              {/* Badge 1: Red/Coral */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EE5351] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shrink-0 font-jost">
                  10+
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">Industry</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs">Experience</div>
                </div>
              </div>

              {/* Badge 2: Green */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#95D04B] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shrink-0 font-jost">
                  5K+
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">Happy</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs">Clients</div>
                </div>
              </div>

              {/* Badge 3: Purple */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#5B37BF] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shrink-0 font-jost">
                  50+
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">Growth</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs font-jost">Experts</div>
                </div>
              </div>

              {/* Badge 4: Yellow/Gold */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F6C646] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shrink-0 font-jost">
                  98%
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">Client</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs">Retention</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ── Bottom Section: Proposal Request & Strategic Growth Highlights ── */}
        <div id="contact-section" className="bg-white rounded-3xl p-8 lg:p-12 border border-purple-200/80 grid lg:grid-cols-12 gap-10 items-center shadow-lg">
          
          {/* Left Side: Performance Metrics & Value Proposition */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest block mb-2 font-mono">
              Partner with India's Premier Digital Agency
            </span>

            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 font-jost">
              Code. Rank. Convert.
            </h3>

            <div className="grid grid-cols-3 gap-4 border-t border-b border-purple-100 py-6 mb-6">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-purple-800 font-mono">7,500,000+</div>
                <div className="text-[11px] font-bold text-slate-600 mt-1">Leads Driven</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-purple-800 font-mono">5,000+</div>
                <div className="text-[11px] font-bold text-slate-600 mt-1">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-purple-800 font-mono">100/100</div>
                <div className="text-[11px] font-bold text-slate-600 mt-1">Core Web Vitals</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
              We engineer budget-friendly, high-performance websites, dominate Google local map packs, and execute ROI-driven social media ad campaigns across Instagram, Facebook, and Google.
            </p>

            <div className="space-y-2.5">
              {[
                "100/100 Google PageSpeed Core Web Vitals Guaranteed",
                "Proven Rank #1 SEO & Local GMB Map Pack Positioning",
                "Dedicated Full-Stack Engineers & Direct Transparency",
                "Complete Telemetry with GA4 Goal Conversion Tracking",
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Proposal Request Form */}
          <div className="lg:col-span-6 bg-[#F8F7FD] p-6 sm:p-8 rounded-2xl border border-purple-200 shadow-md">
            <h4 className="text-xl font-extrabold text-slate-900 mb-2 font-jost">
              Request Your Free Custom Proposal
            </h4>
            <p className="text-xs text-slate-500 mb-6">Get a free website audit, SEO estimate, & budget proposal within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-purple-600 font-medium"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone No *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-purple-600 font-medium"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-purple-600 font-medium"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Tell us about your project goals (Website design, SEO, Social Media Ads)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-purple-600 font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-800 hover:bg-purple-900 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Proposal Request ➔"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

