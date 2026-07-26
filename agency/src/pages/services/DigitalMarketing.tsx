import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { 
  Send, Phone, ChevronDown, CheckCircle2, User, Mail, Lock,
  Search, MousePointerClick, Share2, Target, FileText, 
  ShieldCheck, TrendingUp, Sparkles, Building2, Stethoscope, 
  Briefcase, ShoppingBag, GraduationCap, Scale, Cpu, Loader2,
  Star, Rocket, ArrowRight, HelpCircle, Utensils, Store
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/api";
import { Link } from "react-router-dom";

export const DigitalMarketingPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast({ title: "Details Required", description: "Name, phone and email are required.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: "Digital Marketing Free Proposal Request",
        message: formData.message || "Requested digital marketing proposal"
      });
      toast({ title: "Proposal Request Received! 🎉", description: "Our growth experts will reach out to you within 30 minutes." });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast({ title: "Submission Failed", description: "Please try contacting us directly via WhatsApp or phone call.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How long does it take to see results from digital marketing?",
      a: "Results vary by marketing channel. Paid advertising campaigns (Google Ads & Meta Ads) deliver instant leads within 24 to 48 hours. Organic strategies like SEO and Content Marketing typically build strong momentum and top rankings within 3 to 6 months."
    },
    {
      q: "Which digital marketing services do you offer?",
      a: "We offer end-to-end digital growth solutions including Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC/Google Ads), Social Media Optimization (SMO), E-Mail Marketing, Content Marketing, and Conversion Rate Optimization."
    },
    {
      q: "Do you work with businesses outside India?",
      a: "Yes, absolutely! Websbond is a global digital marketing agency serving clients across the US, UK, UAE, Canada, Australia, and India with localized market strategies."
    },
    {
      q: "How do you measure the success of a campaign?",
      a: "We measure campaign success through transparent metrics: Cost Per Lead (CPL), Return On Ad Spend (ROAS), organic keyword ranking growth, website conversion rate, and overall revenue growth."
    },
    {
      q: "What platforms do you specialize in?",
      a: "We specialize in Google Search & Shopping Ads, Meta (Instagram & Facebook) Ads, LinkedIn B2B campaigns, YouTube Ads, Google My Business (GMB), and automated email funnels."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Digital Marketing Agency | Performance Marketing Services | Websbond"
        description="Fuel your growth with Websbond's result-oriented digital marketing, SEO, Google Ads, and social media campaigns."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION - MATCHING HD DESIGN MOCKUP PIXEL PERFECT */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#F3EFFE] via-[#FAF8FF] to-white pt-36 md:pt-40 pb-16 border-b border-purple-100/60 overflow-hidden select-none">
        
        {/* Soft Background Wave & Light Glow Lines */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-300/25 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* LEFT COLUMN: COPY, BULLETS, HEXAGON BADGES & CTAS (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              
              {/* Top Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-purple-200/70 text-[#5B32EA] text-[11px] font-bold tracking-wider uppercase mb-5 shadow-xs backdrop-blur-md">
                <span>GLOBAL DIGITAL GROWTH PARTNER</span>
                <span className="w-2 h-2 rounded-full bg-[#5B32EA]" />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-slate-900 leading-[1.18] tracking-tight mb-4 font-sans">
                Fuel Your Growth With <br />
                <span className="italic font-serif font-bold text-[#5B32EA]">Strategic Marketing</span> <br />
                <span className="text-[#5B32EA]">That Converts.</span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-lg font-normal">
                We craft ROI-driven campaigns and data-focused strategies that generate quality traffic, qualified leads, and real business growth for brands worldwide.
              </p>

              {/* 4 Feature Capsules (Horizontal Pill List) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                {[
                  "Data-Driven",
                  "ROI Focused",
                  "Transparent",
                  "Result Oriented"
                ].map((pill) => (
                  <span 
                    key={pill} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50/90 border border-purple-100 text-[#5B32EA] text-xs font-bold shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B32EA]" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>

              {/* 5 Hexagon Badges (Exact Real Badges in Design Image) */}
              <div className="flex items-center gap-2 sm:gap-3 mb-8 w-full overflow-x-auto no-scrollbar py-1">
                {/* Badge 1: Clutch */}
                <div className="w-[62px] sm:w-[70px] shrink-0 bg-[#0A192F] text-white p-2 rounded-xl border border-slate-700 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform">
                  <span className="text-[9px] font-extrabold uppercase text-slate-300 tracking-wider">Clutch</span>
                  <span className="text-[8px] font-black text-amber-400 leading-tight">TOP COMPANY</span>
                  <span className="text-[7px] text-slate-400 font-bold">2024</span>
                </div>

                {/* Badge 2: DMCA */}
                <div className="w-[62px] sm:w-[70px] shrink-0 bg-[#4B2874] text-white p-2 rounded-xl border border-purple-400/30 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform">
                  <span className="text-[9px] font-extrabold tracking-wider">DMCA</span>
                  <span className="text-[8px] font-bold text-purple-200 leading-tight">PROTECTED</span>
                  <span className="text-[7px] text-purple-300 font-semibold">AUTHENTIC</span>
                </div>

                {/* Badge 3: Google Rating */}
                <div className="w-[62px] sm:w-[70px] shrink-0 bg-[#1E293B] text-white p-2 rounded-xl border border-blue-400/30 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform">
                  <span className="text-[9px] font-extrabold text-blue-400">Google</span>
                  <span className="text-[8px] font-bold text-amber-400">5 STAR RATING</span>
                  <span className="text-[7px] text-slate-300 font-semibold">★★★★★</span>
                </div>

                {/* Badge 4: SEO Verified */}
                <div className="w-[62px] sm:w-[70px] shrink-0 bg-[#064E3B] text-white p-2 rounded-xl border border-emerald-400/30 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform">
                  <span className="text-[9px] font-extrabold text-emerald-300">SEO</span>
                  <span className="text-[8px] font-bold text-emerald-100 leading-tight">VERIFIED EXPERT</span>
                  <span className="text-[7px] text-emerald-200 font-semibold">2024</span>
                </div>

                {/* Badge 5: HubSpot */}
                <div className="w-[62px] sm:w-[70px] shrink-0 bg-[#7C2D12] text-white p-2 rounded-xl border border-amber-600/30 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform">
                  <span className="text-[9px] font-extrabold text-orange-300">HubSpot</span>
                  <span className="text-[8px] font-bold text-amber-200 leading-tight">CERTIFIED PARTNER</span>
                  <span className="text-[7px] text-orange-200 font-semibold">2024</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 w-full">
                <button
                  onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3.5 rounded-full bg-[#5B32EA] hover:bg-[#4A26D2] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-purple-500/25 transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Get Free Marketing Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/our-portfolio"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-purple-50 border border-purple-200 text-[#5B32EA] font-bold text-xs sm:text-sm shadow-2xs transition-all inline-flex items-center gap-2"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* MIDDLE COLUMN: 3D CHARTS & TARGET ANALYTICS VISUAL (3 COLS) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center relative min-h-[480px]">
              
              {/* 3D Purple Target Visual */}
              <div className="relative mb-6 transform hover:scale-105 transition-transform duration-500">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#7C3AED] via-[#5B32EA] to-[#3B82F6] p-1 shadow-2xl shadow-purple-500/30 flex items-center justify-center relative">
                  <div className="w-24 h-24 rounded-full border-4 border-purple-200/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner">
                      <div className="w-8 h-8 rounded-full bg-[#5B32EA] flex items-center justify-center text-white">
                        <Target className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Conversions Card Top Right */}
                <div className="absolute -top-4 -right-12 bg-white/95 backdrop-blur-md border border-purple-100 p-3 rounded-2xl shadow-lg text-left">
                  <div className="text-[10px] text-slate-500 font-medium">Conversions</div>
                  <div className="text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                    ▲ 35%
                  </div>
                  {/* Small Bar Graph */}
                  <div className="flex items-end gap-1 h-5 mt-1">
                    <span className="w-1.5 h-2 bg-purple-200 rounded-xs"></span>
                    <span className="w-1.5 h-3 bg-purple-300 rounded-xs"></span>
                    <span className="w-1.5 h-2.5 bg-purple-400 rounded-xs"></span>
                    <span className="w-1.5 h-5 bg-[#5B32EA] rounded-xs"></span>
                  </div>
                </div>
              </div>

              {/* Middle Card: ROI Growth */}
              <div className="bg-white/95 backdrop-blur-md border border-purple-100 p-3.5 rounded-2xl shadow-lg mb-6 w-40 text-left transform translate-x-4">
                <div className="text-[11px] text-slate-500 font-medium">ROI Growth</div>
                <div className="text-sm font-extrabold text-emerald-600 flex items-center gap-1">
                  ▲ 52%
                </div>
                {/* Wave Line SVG */}
                <svg className="w-full h-6 text-[#5B32EA] mt-1" viewBox="0 0 100 30" fill="none">
                  <path d="M0 25 Q 25 5, 50 18 T 100 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Bottom Card: Total Leads */}
              <div className="bg-white/95 backdrop-blur-md border border-purple-100 p-4 rounded-2xl shadow-xl w-52 text-left z-10">
                <div className="text-xs text-slate-500 font-medium">Total Leads</div>
                <div className="text-2xl font-black text-slate-900 my-0.5">24,570</div>
                <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  ▲ 42% vs last month
                </div>
              </div>

              {/* Ascending 3D Purple Bar Columns Graphic Background */}
              <div className="absolute bottom-0 right-0 flex items-end gap-2.5 opacity-80 pointer-events-none z-0">
                <div className="w-6 h-12 bg-gradient-to-t from-[#5B32EA] to-purple-400 rounded-t-lg"></div>
                <div className="w-6 h-20 bg-gradient-to-t from-[#5B32EA] to-purple-400 rounded-t-lg"></div>
                <div className="w-6 h-28 bg-gradient-to-t from-[#5B32EA] to-purple-400 rounded-t-lg"></div>
                <div className="w-6 h-36 bg-gradient-to-t from-[#5B32EA] to-purple-400 rounded-t-lg"></div>
                <div className="w-6 h-48 bg-gradient-to-t from-[#5B32EA] to-purple-300 rounded-t-lg"></div>
              </div>

            </div>

            {/* RIGHT COLUMN: PROPOSAL FORM CARD (4 COLS) */}
            <div className="lg:col-span-4 relative z-10">
              <div id="proposal-form" className="bg-white border border-purple-100/80 shadow-2xl shadow-purple-900/10 rounded-3xl p-6 sm:p-7 text-left">
                
                <div className="mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                    Request <span className="text-[#5B32EA]">A Free Proposal</span>
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">
                    Tell us about your goals and we'll create a custom strategy for you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  {/* Field 1: Full Name with Icon */}
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#5B32EA] focus:ring-2 focus:ring-purple-100 bg-slate-50/50 font-medium"
                      required
                    />
                  </div>

                  {/* Field 2: Phone Number with Icon */}
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#5B32EA] focus:ring-2 focus:ring-purple-100 bg-slate-50/50 font-medium"
                      required
                    />
                  </div>

                  {/* Field 3: Email Address with Icon */}
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#5B32EA] focus:ring-2 focus:ring-purple-100 bg-slate-50/50 font-medium"
                      required
                    />
                  </div>

                  {/* Field 4: Message Textarea */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Tell us about your business goals & required services..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#5B32EA] focus:ring-2 focus:ring-purple-100 bg-slate-50/50 resize-none font-medium"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-[#5B32EA] hover:bg-[#4A26D2] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-1"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Proposal Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Privacy note */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium mt-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>We respect your privacy. No spam, ever.</span>
                  </div>

                </form>

              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* TRUST PROOF & STATS BAR - FULL WIDTH CAPSULE CONTAINER BELOW HERO */}
          {/* ========================================================================= */}
          <div className="mt-12 bg-white border border-[#E9E4F8] shadow-sm rounded-3xl p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Trusted by 150+ businesses worldwide + 5 Real Brand Logos */}
            <div className="flex flex-col xl:flex-row items-center gap-4 text-center xl:text-left shrink-0">
              
              <span className="text-xs font-bold text-slate-600 max-w-[140px] leading-snug">
                Trusted by <strong className="text-[#5B32EA]">150+</strong> businesses worldwide
              </span>

              {/* 5 Real Brand Logos */}
              <div className="flex items-center gap-6 px-2">
                {/* 1. Google */}
                <div className="flex items-center text-lg font-bold tracking-tighter font-sans select-none">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>

                {/* 2. Meta */}
                <div className="flex items-center gap-1 font-bold text-slate-800 text-lg tracking-tight select-none">
                  <svg className="w-5 h-4 text-[#0081FB]" viewBox="0 0 100 50" fill="currentColor">
                    <path d="M78.6 0C70.1 0 62.4 4.8 57.5 12.3 52.6 4.8 44.9 0 36.4 0 16.3 0 0 11.2 0 25s16.3 25 36.4 25c8.5 0 16.2-4.8 21.1-12.3C62.4 45.2 70.1 50 78.6 50 98.7 50 115 38.8 115 25S98.7 0 78.6 0zm-42.2 41.5C21.7 41.5 10 34.1 10 25s11.7-16.5 26.4-16.5c7.3 0 14 3 18.5 8-4.5 5-11.2 8-18.5 8-4.8 0-9.2-1.3-12.8-3.6 1.7 3.5 4.8 6.2 8.7 7.7 3.9 1.5 8.2 1.4 12.1-.3 2.1 2.2 4.6 4 7.4 5.3-4.5 5.3-11.4 8.9-19.7 8.9z"/>
                  </svg>
                  <span>Meta</span>
                </div>

                {/* 3. Microsoft */}
                <div className="flex items-center gap-1.5 font-bold text-slate-700 text-sm tracking-tight select-none">
                  <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 shrink-0">
                    <div className="bg-[#F25022] w-1.5 h-1.5"></div>
                    <div className="bg-[#7FBA00] w-1.5 h-1.5"></div>
                    <div className="bg-[#00A4EF] w-1.5 h-1.5"></div>
                    <div className="bg-[#FFB900] w-1.5 h-1.5"></div>
                  </div>
                  <span>Microsoft</span>
                </div>

                {/* 4. AWS */}
                <div className="flex flex-col items-center select-none">
                  <span className="font-black text-slate-900 text-xs tracking-widest leading-none">aws</span>
                  <svg className="w-7 h-1.5 text-amber-500" viewBox="0 0 50 15" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M 5 5 Q 25 15 45 5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* 5. Cloudflare */}
                <div className="flex items-center gap-1 font-black text-slate-900 text-[11px] tracking-wider uppercase select-none">
                  <svg className="w-4 h-3.5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                  </svg>
                  <span>CLOUDFLARE</span>
                </div>
              </div>

            </div>

            {/* Divider line */}
            <div className="hidden lg:block w-px h-10 bg-slate-200" />

            {/* Right: 4 Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2.5 bg-purple-50/60 p-2.5 rounded-2xl border border-purple-100/80">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#5B32EA] flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-slate-900 leading-none">55+</div>
                  <div className="text-[10px] font-medium text-slate-500 mt-0.5">Leads Generated</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-emerald-50/60 p-2.5 rounded-2xl border border-emerald-100/80">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Rocket className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-slate-900 leading-none">5+</div>
                  <div className="text-[10px] font-medium text-slate-500 mt-0.5">Projects Delivered</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-amber-50/60 p-2.5 rounded-2xl border border-amber-100/80">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-slate-900 leading-none">4.9/5</div>
                  <div className="text-[10px] font-medium text-slate-500 mt-0.5">Google Rating</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-purple-50/60 p-2.5 rounded-2xl border border-purple-100/80">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#5B32EA] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-slate-900 leading-none">100%</div>
                  <div className="text-[10px] font-medium text-slate-500 mt-0.5">Client Satisfaction</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DARK HIGH CONVERSION CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#0B0F19] text-white border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[250px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-4">
              SCALABLE. SMART. SECURE.
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 font-sans tracking-tight">
              Ready To Scale Your Business Online <br className="hidden sm:block" />
              With <span className="text-[#C084FC] font-extrabold">High Converting</span> Campaigns?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              Increase visibility, generate quality leads, and grow your revenue with result-oriented digital marketing services. Contact us now to get a free quote tailored to your business needs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded-full bg-[#5B32EA] hover:bg-[#4A26D2] text-white font-bold text-sm shadow-lg hover:shadow-purple-500/30 transition-all border border-purple-400/30 inline-flex items-center gap-2"
            >
              <span>Request Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919306623619"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm shadow-lg hover:shadow-emerald-500/30 transition-all border border-emerald-400/30 inline-flex items-center gap-2"
            >
              <span>Contact Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT WE DO / SERVICES GRID */}
      {/* ========================================================================= */}
      <section id="what-we-do" className="py-20 bg-[#FAF9FF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">WHAT WE DO</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 font-sans max-w-3xl mx-auto">
            Buy Results-Focused Marketing Services That <span className="italic font-bold text-[#5B32EA]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Maximize Conversions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            We combine creativity, data, and technology to deliver marketing solutions that connect with your audience and drive measurable results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Search Engine Optimization",
                icon: Search,
                desc: "Rank higher on search engines, drive organic traffic, and build long-term visibility.",
                to: "/seo-service-in-delhi"
              },
              {
                title: "Pay Per Click Advertising",
                icon: MousePointerClick,
                desc: "Get instant visibility and high-quality leads with ROI-focused Google Ads & PPC campaigns.",
                to: "/google-ads-services"
              },
              {
                title: "Social Media Optimization",
                icon: Share2,
                desc: "Build your brand, engage your audience, and grow across all major social platforms.",
                to: "/smo-service-in-delhi"
              },
              {
                title: "Google Ads Management",
                icon: Target,
                desc: "Expert management to reduce ad spend wastage and maximize your returns.",
                to: "/google-ads-services"
              },
              {
                title: "E-Mail Marketing",
                icon: Mail,
                desc: "Nurture leads, build relationships, and increase customer lifetime value.",
                to: "/content-writing-service-in-delhi"
              },
              {
                title: "Content Marketing",
                icon: FileText,
                desc: "Strategic content that informs, engages, and converts your ideal customers.",
                to: "/content-writing-service-in-delhi"
              }
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-purple-100/90 shadow-xs hover:shadow-xl rounded-2xl p-7 transition-all flex flex-col justify-between group hover:border-purple-300 transform hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5B32EA] flex items-center justify-center mb-5 group-hover:bg-[#5B32EA] group-hover:text-white transition-colors shadow-2xs">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">{card.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">{card.desc}</p>
                </div>
                <Link
                  to={card.to}
                  className="text-xs font-bold text-[#5B32EA] hover:text-[#4A26D2] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore {card.title.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-white border border-purple-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-sm">
            <span className="text-sm font-semibold text-slate-800 text-left">
              Need a custom solution? Our experts are here to help you grow.
            </span>
            <button
              onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full bg-[#5B32EA] hover:bg-[#4A26D2] text-white font-bold text-xs shrink-0 shadow-sm inline-flex items-center gap-2"
            >
              <span>Let's Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INDUSTRIES WE WORK WITH */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">WE WORK WITH</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-12 font-sans max-w-3xl mx-auto">
            Industries We <span className="italic font-bold text-[#5B32EA]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Drive Growth</span> For
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "E-Commerce & Retail", icon: ShoppingBag },
              { title: "SaaS & Technology", icon: Cpu },
              { title: "Healthcare & Clinics", icon: Stethoscope },
              { title: "Real Estate & Construction", icon: Building2 },
              { title: "Education & E-Learning", icon: GraduationCap },
              { title: "Finance & Fintech", icon: Scale },
              { title: "Hospitality & Restaurants", icon: Utensils },
              { title: "Local Businesses & Services", icon: Store },
            ].map((item) => (
              <div 
                key={item.title} 
                className="bg-[#FAF9FF] border border-purple-100/80 rounded-2xl p-5 flex items-center gap-4 hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-100/70 text-[#5B32EA] flex items-center justify-center shrink-0 group-hover:bg-[#5B32EA] group-hover:text-white transition-colors">
                  <item.icon className="w-5.5 h-5.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PROCESS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9FF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">OUR PROCESS</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 font-sans">
              Simple Process. <span className="text-[#5B32EA] font-bold">Proven Results.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Research & Audit",
                  desc: "We analyze your business, competitors & audience.",
                  color: "bg-pink-50 border-pink-200 text-pink-600"
                },
                {
                  step: "02",
                  title: "Strategy & Plan",
                  desc: "We build a data-driven marketing strategy.",
                  color: "bg-emerald-50 border-emerald-200 text-emerald-600"
                },
                {
                  step: "03",
                  title: "Execute & Optimize",
                  desc: "We run campaigns, test and optimize continuously.",
                  color: "bg-amber-50 border-amber-200 text-amber-600"
                },
                {
                  step: "04",
                  title: "Measure & Scale",
                  desc: "We track results, improve ROI & scale growth.",
                  color: "bg-purple-50 border-purple-200 text-[#5B32EA]"
                }
              ].map((item) => (
                <div key={item.step} className="bg-white border border-purple-100/80 rounded-2xl p-6 shadow-xs relative">
                  <div className={`w-10 h-10 rounded-full ${item.color} border flex items-center justify-center font-extrabold text-sm mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-purple-100 shadow-xl bg-white p-2">
                <img
                  src="/article-marketing-leads.png"
                  alt="Websbond Marketing Process Dashboard"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6 text-white bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="text-xs font-bold text-purple-300 uppercase tracking-wider">Continuous Growth</div>
                  <div className="text-sm font-semibold">Data-backed execution for max ROI</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR WORK / CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">OUR WORK</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-14 font-sans max-w-3xl mx-auto">
            Success Stories That <span className="italic font-bold text-[#5B32EA]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Inspire</span> Confidence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1 */}
            <div className="bg-[#FAF9FF] border border-purple-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="/article-marketing-leads.png"
                    alt="E-Commerce Fashion Store Growth"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    E-COMMERCE
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fashion Store Growth</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Increased organic traffic by 210% and revenue by 3.4x in 6 months.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-purple-100">
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">210%</div>
                      <div className="text-[11px] font-medium text-slate-500">Traffic Increase</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">3.4x</div>
                      <div className="text-[11px] font-medium text-slate-500">Revenue Growth</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/case-studies" className="text-xs font-bold text-[#5B32EA] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF9FF] border border-purple-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="/client-bg-timesquare.jpg"
                    alt="Real Estate Lead Generation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#5B32EA] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    LEAD GENERATION
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Real Estate Leads</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Generated 850+ qualified leads with cost per lead reduced by 60%.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-purple-100">
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">850+</div>
                      <div className="text-[11px] font-medium text-slate-500">Leads Generated</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">60%</div>
                      <div className="text-[11px] font-medium text-slate-500">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/case-studies" className="text-xs font-bold text-[#5B32EA] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF9FF] border border-purple-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="/client-bg-ranga-pest.jpg"
                    alt="Local Business Appointments"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    LOCAL BUSINESS
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Clinic Appointment</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Increased appointments by 180% through local SEO & ads.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-purple-100">
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">180%</div>
                      <div className="text-[11px] font-medium text-slate-500">Appointments</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">2.7x</div>
                      <div className="text-[11px] font-medium text-slate-500">ROI Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/case-studies" className="text-xs font-bold text-[#5B32EA] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHAT OUR CLIENTS SAY / TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9FF] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">CLIENTS LOVE US</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-14 font-sans max-w-3xl mx-auto">
            What Our <span className="text-[#5B32EA] font-bold">Clients</span> Say
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  quote: "Websbond is an incredible team! They understood our goals and delivered results beyond expectations.",
                  name: "John Miller",
                  role: "CEO, TechWave"
                },
                {
                  quote: "Our ROI has improved significantly since we started working with Websbond. Highly recommended!",
                  name: "Sarah Thompson",
                  role: "Marketing Head, UpScale"
                },
                {
                  quote: "Professional, transparent & result-oriented. They truly care about your business growth.",
                  name: "Michael Brown",
                  role: "Founder, BuildCraft"
                },
                {
                  quote: "Great communication, fast execution and amazing results. The team is always a step ahead.",
                  name: "Emma Wilson",
                  role: "Director, StyleHub"
                }
              ].map((t) => (
                <div key={t.name} className="bg-white border border-purple-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">"{t.quote}"</p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-purple-100 text-[#5B32EA] font-bold text-xs flex items-center justify-center">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t.name}</div>
                      <div className="text-[11px] text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/50 border border-purple-200/80 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-purple-100 flex items-center justify-center mb-4">
                <span className="font-extrabold text-slate-900 text-2xl">G</span>
              </div>

              <div className="text-3xl font-extrabold text-slate-900 mb-1">4.9/5</div>
              <div className="text-xs font-semibold text-slate-500 mb-3">Google Rating</div>

              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs text-slate-500 font-medium">Based on 70+ verified client reviews</p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-24 h-24 rounded-3xl bg-purple-100/80 text-[#5B32EA] flex items-center justify-center mb-6 shadow-md border border-purple-200">
                <HelpCircle className="w-12 h-12" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 font-sans">
                Got Questions? We Have <span className="italic font-bold text-[#5B32EA]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Answers</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Have doubts about digital marketing strategies, campaign timelines, or ROI measurement? Explore answers to common questions below.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.q}
                  className="bg-[#FAF9FF] border border-purple-100/90 rounded-2xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#5B32EA] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center shrink-0 transition-transform ${openFaq === idx ? "rotate-180 bg-[#5B32EA] text-white" : "text-[#5B32EA]"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-100/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. BOTTOM VIBRANT CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#432368] via-[#5B32EA] to-[#4F46E5] text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-4 font-sans tracking-tight">
              Let's Build Your Growth Engine <br className="hidden sm:block" />
              And Take Your Business To The Next Level.
            </h2>
            <p className="text-purple-100 text-sm sm:text-base mb-8 max-w-xl font-normal">
              Book a free strategy call with our experts today!
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-purple-50 text-[#5B32EA] font-bold text-sm shadow-xl transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919306623619"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm backdrop-blur-md transition-all inline-flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center relative">
            <div className="w-64 h-64 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-6 shadow-2xl relative">
              <div className="w-20 h-20 rounded-2xl bg-white text-[#5B32EA] flex items-center justify-center mb-4 shadow-lg animate-bounce">
                <Rocket className="w-10 h-10" />
              </div>
              <div className="text-base font-bold text-white">Scale Your Revenue</div>
              <div className="text-xs text-purple-200 text-center mt-1">Guaranteed High-ROI Campaigns</div>
            </div>
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default DigitalMarketingPage;
