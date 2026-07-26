import { useState } from "react";
import { 
  User, Phone, Mail, Pencil, Users, Rocket, Code, Star, 
  Briefcase, IndianRupee 
} from "lucide-react";
import { submitContactForm } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export const AboutSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Website Design & Development",
    budget: "₹25,000 - ₹50,000",
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
        subject: `Consultation Request - ${formData.service}`,
        message: `Service Required: ${formData.service} | Budget: ${formData.budget} | Note: ${formData.message || "Consultation Request from Website"}`,
      });
      toast({
        title: "Proposal Requested! 🎉",
        description: "Thank you! Our team will contact you within 24 hours.",
      });
      setFormData({ 
        name: "", 
        phone: "", 
        email: "", 
        service: "Website Design & Development",
        budget: "₹25,000 - ₹50,000",
        message: "" 
      });
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
    <section className="pt-14 pb-8 sm:pb-10 md:pb-12 bg-[#F8F7FD] text-slate-900 select-none border-b border-purple-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Centered Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <span className="text-[#F25C3B] font-bold text-sm sm:text-base tracking-wide uppercase block mb-3 font-sans">
            What makes us unique?
          </span>

          <h2 className="font-montserrat font-semibold italic text-2xl sm:text-3xl md:text-4xl text-slate-950 tracking-tight leading-tight">
            Our offbeat <span className="text-purple-800">Marketing & Web solutions</span> drive dollars to your bank accounts.
          </h2>
        </div>

        {/* ── Top Hero Section ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 md:mb-24">
          
          {/* Left Column: 3D Graphic */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group w-full max-w-[480px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-indigo-400/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000" />
              
              <img
                src="/websbond_unique_hero.png"
                alt="Websbond Digital Marketing & Affordable Website Development Agency"
                className="relative z-10 w-full h-auto max-h-[520px] object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Copy & 4 Badges */}
          <div className="lg:col-span-7">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-4 leading-snug">
              Affordable Website Development, Top #1 Google SEO & High-ROI Social Media Marketing Agency
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              In this fast-paced digital market, your first impression defines your success. Whether you want to build an <strong className="text-slate-900 font-bold">affordable website in budget (saste me high quality website)</strong>, scale with a top-rated <strong className="text-slate-900 font-bold">social media marketing agency</strong>, or dominate Google search results with <strong className="text-slate-900 font-bold">#1 rank SEO & Google Ads</strong> — <strong className="text-purple-900 font-bold">Websbond</strong> delivers guaranteed business growth. Our commitment to expanding your revenue goes beyond mere words; it is a steadfast pledge. To bring your dreams of digital dominance to fruition, we have:
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-purple-100">
              
              {/* Badge 1 */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EE5351] text-white flex items-center justify-center font-black text-sm sm:text-base shadow-md shrink-0 font-jost">
                  2026
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">2026</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs">Established & Launched</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#95D04B] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shrink-0 font-jost">
                  5+
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">5+ Projects</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs">Live & Delivered</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-3 sm:gap-4 bg-white/70 p-3 sm:p-4 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#5B37BF] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shrink-0 font-jost">
                  10+
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight font-jost">10+ Projects</div>
                  <div className="font-medium text-slate-600 text-[11px] sm:text-xs font-jost">In Engineering</div>
                </div>
              </div>

              {/* Badge 4 */}
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

        {/* ── Bottom Section: Form + Headline + Stats ── */}
        <div id="contact-section" className="py-6 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative">
          
          {/* Left Side: Headline + Stats */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#552782] shrink-0" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#1A0E2E] tracking-tight font-sans">
                India's Elite Digital Growth Partner
              </span>
            </div>

            <h3 className="font-montserrat font-extrabold italic text-2xl sm:text-3xl text-[#552782] tracking-tight leading-tight mb-2.5">
              Code. Rank. Convert.
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg font-normal">
              We build digital experiences that rank higher, generate leads, and grow your business.
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-3 pt-2">
              <div className="border-r border-slate-200/80 pr-2">
                <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center mb-2">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div className="text-lg sm:text-xl font-black text-[#1A0E2E] font-sans">55+</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-0.5 leading-tight">Leads Driven</div>
              </div>

              <div className="border-r border-slate-200/80 pr-2">
                <div className="w-9 h-9 rounded-xl bg-sky-100/70 text-sky-600 flex items-center justify-center mb-2">
                  <Rocket className="w-4.5 h-4.5" />
                </div>
                <div className="text-lg sm:text-xl font-black text-[#1A0E2E] font-sans">5+</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-0.5 leading-tight">Projects Live and Delivered</div>
              </div>

              <div className="border-r border-slate-200/80 pr-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-2">
                  <Code className="w-4.5 h-4.5" />
                </div>
                <div className="text-lg sm:text-xl font-black text-[#1A0E2E] font-sans">10+</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-0.5 leading-tight">Projects in Engineering</div>
              </div>

              <div>
                <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center mb-2">
                  <Star className="w-4.5 h-4.5" />
                </div>
                <div className="text-lg sm:text-xl font-black text-[#1A0E2E] font-sans">4.9/5</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-0.5 leading-tight">Rating on Google</div>
              </div>
            </div>
          </div>

          {/* Right Side: High-Converting Lead Form with Extra Service & Budget Details */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-3xl border-2 border-purple-300/90 shadow-[0_16px_45px_rgba(85,39,130,0.16)] hover:border-purple-500/90 transition-all duration-300 ring-4 ring-purple-100/50 w-full relative overflow-hidden group">
            
            <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative flex items-center group/input">
                  <User className="w-4 h-4 text-purple-600 absolute left-3.5 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-purple-200/80 rounded-xl pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all"
                  />
                </div>
                <div className="relative flex items-center group/input">
                  <Phone className="w-4 h-4 text-purple-600 absolute left-3.5 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp No*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-purple-200/80 rounded-xl pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Required Service Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative flex items-center group/input">
                  <Mail className="w-4 h-4 text-purple-600 absolute left-3.5 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <input
                    type="email"
                    required
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-purple-200/80 rounded-xl pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all"
                  />
                </div>
                <div className="relative flex items-center group/input">
                  <Briefcase className="w-4 h-4 text-purple-600 absolute left-3.5 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white border border-purple-200/80 rounded-xl pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all appearance-none cursor-pointer"
                  >
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="Google SEO & Search Ranking">Google SEO & Search Ranking</option>
                    <option value="Google Ads (PPC) Management">Google Ads (PPC) Management</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="E-Commerce Store Setup">E-Commerce Store Setup</option>
                    <option value="Full Digital Growth Package">Full Digital Growth Package</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Estimated Budget & Message */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative flex items-center group/input">
                  <IndianRupee className="w-4 h-4 text-purple-600 absolute left-3.5 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white border border-purple-200/80 rounded-xl pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all appearance-none cursor-pointer"
                  >
                    <option value="₹10,000 - ₹25,000">Budget: ₹10,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">Budget: ₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">Budget: ₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000+">Budget: ₹1,00,000+</option>
                  </select>
                </div>
                <div className="relative flex items-center group/input">
                  <Pencil className="w-4 h-4 text-purple-600 absolute left-3.5 pointer-events-none group-focus-within/input:scale-110 group-focus-within/input:text-purple-700 transition-all" />
                  <input
                    type="text"
                    placeholder="Project Brief / Details*"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-purple-200/80 rounded-xl pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100/60 font-semibold shadow-2xs transition-all"
                  />
                </div>
              </div>

              {/* Row 4: Authentic Google reCAPTCHA v2 Box (Mobile Responsive Scale) */}
              <div className="flex justify-center my-2 max-w-full overflow-x-auto">
                <div className="w-[304px] h-[74px] bg-[#F9F9F9] border border-[#D3D3D3] rounded-[3px] px-3.5 flex items-center justify-between shadow-2xs select-none scale-[0.88] sm:scale-100 origin-center shrink-0">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="w-6 h-6 rounded-[2px] border-[#C1C1C1] text-blue-600 focus:ring-0 cursor-pointer accent-[#4285F4]"
                    />
                    <span className="text-[14px] font-normal text-[#222] font-sans">I'm not a robot</span>
                  </label>
                  <div className="flex flex-col items-center justify-center text-[10px] text-[#555] font-sans leading-tight">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 opacity-90 mb-0.5" />
                    <span className="text-[10px] font-normal text-[#555]">reCAPTCHA</span>
                    <div className="text-[8px] text-[#555] flex gap-1">
                      <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noreferrer" className="hover:underline">Privacy</a>
                      <span>-</span>
                      <a href="https://www.google.com/intl/en/policies/terms/" target="_blank" rel="noreferrer" className="hover:underline">Terms</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#552782] via-[#6D28D9] to-[#7C3AED] hover:from-[#421A78] hover:to-[#552782] text-white font-extrabold text-sm sm:text-base py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-[0.99] transform hover:-translate-y-0.5"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

            </form>
          </div>

        </div>

        {/* ── Crazy & Professional Animated Bottom Ribbon (BG Patti & Trust Banner) ── */}
        <div className="mt-8 sm:mt-10 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1A0E2E] via-[#2D164D] to-[#1A0E2E] p-4 sm:p-5 border border-purple-500/30 shadow-xl z-10">
          {/* Animated Glowing Light Beam */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(168,85,247,0.18)_50%,transparent_100%)] animate-pulse pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-around gap-4 text-center relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white text-xs sm:text-sm font-extrabold tracking-wide">⚡ 24-Hour Express Proposal</span>
            </div>
            <div className="hidden sm:block text-purple-400/50">•</div>
            <div className="flex items-center gap-2">
              <span className="text-amber-300 font-bold text-xs sm:text-sm">🎯 100% Mobile & SEO Ready</span>
            </div>
            <div className="hidden sm:block text-purple-400/50">•</div>
            <div className="flex items-center gap-2">
              <span className="text-purple-200 text-xs sm:text-sm font-semibold">🚀 Free 30-Day Support</span>
            </div>
            <div className="hidden sm:block text-purple-400/50">•</div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-300 text-xs sm:text-sm font-bold">🔒 Zero Hidden Charges</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
