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
            <h2 className="font-montserrat font-semibold italic text-2xl sm:text-3xl md:text-3xl lg:text-[34px] text-slate-950 tracking-tight leading-tight mb-5">
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

            {/* 4 Circular Stat Badges Grid (Real Websbond Data) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-purple-100">
              
              {/* Badge 1: Red/Coral */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EE5351] text-white flex items-center justify-center font-black text-sm sm:text-base shadow-md shrink-0 font-jost">
                  2026
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">2026</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs">Established & Launched</div>
                </div>
              </div>

              {/* Badge 2: Green */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#95D04B] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shrink-0 font-jost">
                  5+
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">5+ Projects</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs">Live & Delivered</div>
                </div>
              </div>

              {/* Badge 3: Purple */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#5B37BF] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shrink-0 font-jost">
                  10+
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">10+ Projects</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs font-jost">In Engineering</div>
                </div>
              </div>

              {/* Badge 4: Yellow/Gold */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F6C646] text-white flex items-center justify-center font-black text-base sm:text-lg shadow-md shrink-0 font-jost">
                  4.9★
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">4.9/5 Rating</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs">On Google & Clutch</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ── Bottom Section: Proposal Request & Strategic Growth Highlights (Exact Image 1 Style) ── */}
        <div id="contact-section" className="py-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Performance Metrics & Value Proposition (Unique Websbond Copy + Image 2 Styling) */}
          <div className="lg:col-span-6">
            <span className="text-xl sm:text-2xl font-extrabold text-[#231244] tracking-tight block mb-2 font-sans">
              Scale Your Business With India’s Elite Web & SEO Engine
            </span>

            <h3 className="font-montserrat font-black italic text-4xl sm:text-5xl text-[#582582] mb-8 leading-tight">
              Engineer. Rank. Dominate.
            </h3>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-2">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#231244] font-sans tracking-tight">7.5M+</div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">Organic Leads & Traffic</div>
                <div className="h-1.5 w-20 sm:w-28 bg-[#582582] rounded-full mt-3.5" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#231244] font-sans tracking-tight">100/100</div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">Core Web Vitals Guaranteed</div>
                <div className="h-1.5 w-20 sm:w-28 bg-[#582582] rounded-full mt-3.5" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#231244] font-sans tracking-tight">10+ Years</div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">Full-Stack IT Expertise</div>
                <div className="h-1.5 w-20 sm:w-28 bg-[#582582] rounded-full mt-3.5" />
              </div>
            </div>
          </div>

          {/* Right Side: Thin & Wide Form Card (Exact Image 1 Design) */}
          <div className="lg:col-span-6 bg-white p-5 sm:p-7 rounded-2xl border border-purple-100/60 shadow-xl w-full">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAFAFC] border border-slate-200/90 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-purple-600 focus:bg-white font-medium"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone No*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAFAFC] border border-slate-200/90 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-purple-600 focus:bg-white font-medium"
                  />
                </div>
              </div>

              {/* Row 2: Email & Message */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAFAFC] border border-slate-200/90 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-purple-600 focus:bg-white font-medium"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Type Your Message*"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAFAFC] border border-slate-200/90 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-purple-600 focus:bg-white font-medium"
                  />
                </div>
              </div>

              {/* Row 3: reCAPTCHA Card */}
              <div className="bg-[#F9F9F9] border border-[#E0E0E0] rounded-md p-3 flex items-center justify-between my-3 shadow-2xs">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4.5 h-4.5 rounded border-slate-300 text-purple-700 focus:ring-purple-500 cursor-pointer"
                  />
                  <span className="text-[11.5px] font-medium text-slate-700 select-none">I'm not a robot</span>
                </label>
                <div className="flex flex-col items-center justify-center text-[8.5px] text-slate-400 font-sans leading-none">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-4.5 h-4.5 opacity-70 mb-0.5" />
                  <span>reCAPTCHA</span>
                </div>
              </div>

              {/* Row 4: Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5D2C8C] hover:bg-[#4B2273] text-white font-bold text-sm py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

