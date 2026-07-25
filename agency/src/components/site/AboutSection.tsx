import { useState } from "react";
import { CheckCircle2, User, Phone, Mail, Pencil, Users, Rocket, Code, Star } from "lucide-react";
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

        {/* ── Bottom Section: Exact User Reference Mockup Design ── */}
        <div id="contact-section" className="py-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          
          {/* Left Side: Headline + Description + 4 Vertical Divided Stats */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#552782] shrink-0" />
              <span className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#1A0E2E] tracking-tight font-sans">
                India's Elite Digital Growth Partner
              </span>
            </div>

            <h3 className="font-montserrat font-extrabold italic text-2xl sm:text-3xl md:text-4xl text-[#552782] tracking-tight leading-tight mb-3">
              Code. Rank. Convert.
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
              We build digital experiences that rank higher, generate leads, and grow your business.
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-2">
              {/* Stat 1 */}
              <div className="border-r border-slate-200/80 pr-2 sm:pr-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-100/70 text-purple-700 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1A0E2E] font-sans">55+</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-0.5 leading-tight">Leads Driven</div>
              </div>

              {/* Stat 2 */}
              <div className="border-r border-slate-200/80 pr-2 sm:pr-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-100/70 text-sky-600 flex items-center justify-center mb-3">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1A0E2E] font-sans">5+</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-0.5 leading-tight">Projects Live and Delivered</div>
              </div>

              {/* Stat 3 */}
              <div className="border-r border-slate-200/80 pr-2 sm:pr-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-3">
                  <Code className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1A0E2E] font-sans">10+</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-0.5 leading-tight">Projects are in Engineering</div>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-100/70 text-amber-600 flex items-center justify-center mb-3">
                  <Star className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#1A0E2E] font-sans">4.9/5</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-0.5 leading-tight">Rating on Google</div>
              </div>
            </div>
          </div>

          {/* Right Side: Ultra-Attractive & Widescreen Form Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-white via-[#FDFBFF] to-[#F5EFFF] p-7 sm:p-9 rounded-3xl border border-purple-200/80 shadow-[0_20px_50px_rgba(85,39,130,0.12)] w-full relative overflow-hidden group">
            
            {/* Subtle Top Ambient Glow Accent */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-purple-300/30 rounded-full blur-2xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-4.5 relative z-10">
              {/* Row 1: Name & Phone with inside icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative flex items-center group/input">
                  <User className="w-4 h-4 text-purple-600 absolute left-4 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-purple-100 rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all"
                  />
                </div>
                <div className="relative flex items-center group/input">
                  <Phone className="w-4 h-4 text-purple-600 absolute left-4 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <input
                    type="tel"
                    required
                    placeholder="Phone No*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-purple-100 rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Message with inside icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative flex items-center group/input">
                  <Mail className="w-4 h-4 text-purple-600 absolute left-4 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-purple-100 rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all"
                  />
                </div>
                <div className="relative flex items-center group/input">
                  <Pencil className="w-4 h-4 text-purple-600 absolute left-4 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <input
                    type="text"
                    placeholder="Type Your Message*"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-purple-100 rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all"
                  />
                </div>
              </div>

              {/* Row 3: reCAPTCHA Box */}
              <div className="bg-[#F9F6FC] border border-purple-200/70 rounded-2xl p-4 sm:p-4.5 flex items-center justify-between my-4">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    className="w-5 h-5 rounded border-purple-300 text-purple-700 focus:ring-purple-500 cursor-pointer accent-[#552782]"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">I'm not a robot</span>
                </label>
                <div className="flex flex-col items-center justify-center text-[9.5px] text-slate-500 font-sans leading-tight">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-5 h-5 opacity-90 mb-0.5" />
                  <span className="font-bold">reCAPTCHA</span>
                  <span className="text-[8.5px] text-slate-400">Privacy - Terms</span>
                </div>
              </div>

              {/* Row 4: Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#552782] via-[#6D28D9] to-[#7C3AED] hover:from-[#421A78] hover:to-[#552782] text-white font-extrabold text-sm sm:text-base py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer active:scale-[0.99] transform hover:-translate-y-0.5"
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


