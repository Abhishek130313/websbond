import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { HexagonBadges } from "@/components/site/HexagonBadges";
import { 
  Send, Phone, ChevronDown, CheckCircle2,
  Search, MousePointerClick, Share2, Target, Mail, FileText, 
  ShieldCheck, TrendingUp, Sparkles, Building2, Stethoscope, 
  Briefcase, ShoppingBag, GraduationCap, Scale, Cpu, Loader2,
  Star, Rocket, ArrowRight, HelpCircle, Utensils, Store, Laptop
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
      {/* 1. HERO SECTION WITH PROPOSAL FORM & 3D GRAPHIC ILLUSTRATION */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#F5F3FF] via-[#FAF9FF] to-white pt-36 md:pt-44 pb-16 border-b border-purple-100/80 overflow-hidden">
        {/* Ambient Subtle Background Graphic */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Eyebrow Tag */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" /> GLOBAL DIGITAL GROWTH PARTNER ↗
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold text-slate-900 leading-[1.2] tracking-tight mb-5 font-sans">
              Fuel Your Growth With <br className="hidden sm:block" />
              <span className="italic font-bold text-[#5D328E]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Strategic Marketing
              </span> That Converts.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-xl font-normal">
              We craft ROI-driven campaigns and data-focused strategies that generate quality traffic, qualified leads, and real business growth for brands worldwide.
            </p>

            {/* Feature Bullets (4 Horizontal Badges) */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {[
                "Data-Driven",
                "ROI-Focused",
                "Transparent",
                "Result-Oriented"
              ].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50/80 border border-purple-100 text-[#5D328E] text-xs font-bold shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5D328E]" /> {pill}
                </span>
              ))}
            </div>

            {/* 5 Hexagon Award Badges */}
            <div className="mb-6 w-full">
              <HexagonBadges />
            </div>

            {/* CTA Capsule Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5D328E] hover:bg-[#4B2874] text-white font-bold text-sm shadow-md hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Get Free Marketing Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/our-portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-purple-50 border border-purple-200 text-[#5D328E] font-bold text-sm shadow-2xs transition-all"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Hero Side: Form Card + 3D Bar Chart Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Background 3D Bar Chart & Target Graphic (Illustrative SVG Accent) */}
            <div className="absolute -top-12 -right-8 w-44 h-44 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-xl pointer-events-none" />

            {/* Form Card */}
            <div id="proposal-form" className="bg-white border border-purple-100 shadow-2xl shadow-purple-950/10 rounded-3xl p-7 sm:p-8 relative z-10">
              
              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                  Request A Free Proposal
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Tell us about your goals and we'll create a custom strategy for you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#5D328E] focus:ring-2 focus:ring-purple-100 bg-slate-50/60 font-medium"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#5D328E] focus:ring-2 focus:ring-purple-100 bg-slate-50/60 font-medium"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#5D328E] focus:ring-2 focus:ring-purple-100 bg-slate-50/60 font-medium"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us about your business goals & required services..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#5D328E] focus:ring-2 focus:ring-purple-100 bg-slate-50/60 resize-none font-medium"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-[#5D328E] hover:bg-[#4B2874] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-1"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Proposal Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* 3D Bar Chart & Target Graphic Accent Illustration (Right Side) */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md border border-purple-100 p-4 rounded-2xl shadow-xl items-center gap-3.5 z-20 pointer-events-none">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#5D328E] flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">+340% ROI Growth</div>
                <div className="text-[10px] text-slate-500 font-medium">Data-Backed Campaigns</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUSTED PROOF BAR & STATS COUNTERS */}
      {/* ========================================================================= */}
      <section className="py-8 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Brand Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shrink-0">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider max-w-[140px] leading-snug">
              Trusted by 100+ businesses worldwide
            </span>
            <div className="flex items-center gap-5 opacity-75 grayscale hover:grayscale-0 transition-all">
              <span className="font-extrabold text-slate-800 text-sm tracking-tight">Google</span>
              <span className="font-extrabold text-indigo-600 text-sm tracking-tight">Meta</span>
              <span className="font-extrabold text-[#00A4EF] text-sm tracking-tight">Microsoft</span>
              <span className="font-extrabold text-slate-900 text-sm tracking-tight">AWS</span>
              <span className="font-extrabold text-blue-600 text-sm tracking-tight">Razorpay</span>
            </div>
          </div>

          {/* Right 4 Stat Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto">
            <div className="flex items-center gap-3 bg-purple-50/50 p-3 rounded-2xl border border-purple-100/60">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#5D328E] flex items-center justify-center shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 leading-none">55+</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Leads Generated</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-indigo-50/50 p-3 rounded-2xl border border-indigo-100/60">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <Rocket className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 leading-none">5+</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Projects Delivered</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-amber-50/50 p-3 rounded-2xl border border-amber-100/60">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 leading-none">4.9/5</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Google Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100/60">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 leading-none">100%</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Client Satisfaction</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DARK HIGH CONVERSION CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#0B0F19] text-white border-y border-slate-800 relative overflow-hidden">
        {/* Background Radial Glow */}
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
              className="px-7 py-3.5 rounded-full bg-[#5D328E] hover:bg-[#4B2874] text-white font-bold text-sm shadow-lg hover:shadow-purple-500/30 transition-all border border-purple-400/30 inline-flex items-center gap-2"
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
      {/* 4. WHAT WE DO / SERVICES GRID */}
      {/* ========================================================================= */}
      <section id="what-we-do" className="py-20 bg-[#FAF9FF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5D328E]">WHAT WE DO</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 font-sans max-w-3xl mx-auto">
            Buy Results-Focused Marketing Services That <span className="italic font-bold text-[#5D328E]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Maximize Conversions</span>
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
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5D328E] flex items-center justify-center mb-5 group-hover:bg-[#5D328E] group-hover:text-white transition-colors shadow-2xs">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">{card.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">{card.desc}</p>
                </div>
                <Link
                  to={card.to}
                  className="text-xs font-bold text-[#5D328E] hover:text-[#4B2874] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore {card.title.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Banner Callout Box */}
          <div className="mt-14 bg-white border border-purple-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-sm">
            <span className="text-sm font-semibold text-slate-800 text-left">
              Need a custom solution? Our experts are here to help you grow.
            </span>
            <button
              onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full bg-[#5D328E] hover:bg-[#4B2874] text-white font-bold text-xs shrink-0 shadow-sm inline-flex items-center gap-2"
            >
              <span>Let's Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INDUSTRIES WE WORK WITH */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5D328E]">WE WORK WITH</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-12 font-sans max-w-3xl mx-auto">
            Industries We <span className="italic font-bold text-[#5D328E]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Drive Growth</span> For
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
                <div className="w-11 h-11 rounded-xl bg-purple-100/70 text-[#5D328E] flex items-center justify-center shrink-0 group-hover:bg-[#5D328E] group-hover:text-white transition-colors">
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
      {/* 6. OUR PROCESS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9FF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5D328E]">OUR PROCESS</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 font-sans">
              Simple Process. <span className="text-[#5D328E] font-bold">Proven Results.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Timeline 4 Steps */}
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
                  color: "bg-purple-50 border-purple-200 text-[#5D328E]"
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

            {/* Right Visual Image Illustration */}
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
      {/* 7. OUR WORK / CASE STUDIES (SUCCESS STORIES) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5D328E]">OUR WORK</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-14 font-sans max-w-3xl mx-auto">
            Success Stories That <span className="italic font-bold text-[#5D328E]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Inspire</span> Confidence
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
                      <div className="text-xl font-extrabold text-[#5D328E]">210%</div>
                      <div className="text-[11px] font-medium text-slate-500">Traffic Increase</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#5D328E]">3.4x</div>
                      <div className="text-[11px] font-medium text-slate-500">Revenue Growth</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/case-studies" className="text-xs font-bold text-[#5D328E] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
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
                  <span className="absolute top-4 left-4 bg-[#5D328E] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
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
                      <div className="text-xl font-extrabold text-[#5D328E]">850+</div>
                      <div className="text-[11px] font-medium text-slate-500">Leads Generated</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#5D328E]">60%</div>
                      <div className="text-[11px] font-medium text-slate-500">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/case-studies" className="text-xs font-bold text-[#5D328E] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
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
                      <div className="text-xl font-extrabold text-[#5D328E]">180%</div>
                      <div className="text-[11px] font-medium text-slate-500">Appointments</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#5D328E]">2.7x</div>
                      <div className="text-[11px] font-medium text-slate-500">ROI Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/case-studies" className="text-xs font-bold text-[#5D328E] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WHAT OUR CLIENTS SAY / TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9FF] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5D328E]">CLIENTS LOVE US</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-14 font-sans max-w-3xl mx-auto">
            What Our <span className="text-[#5D328E] font-bold">Clients</span> Say
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            
            {/* Left 4 Testimonial Cards */}
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
                    <div className="w-9 h-9 rounded-full bg-purple-100 text-[#5D328E] font-bold text-xs flex items-center justify-center">
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

            {/* Right Google Review Badge Card */}
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
      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 3D Question Mark Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-24 h-24 rounded-3xl bg-purple-100/80 text-[#5D328E] flex items-center justify-center mb-6 shadow-md border border-purple-200">
                <HelpCircle className="w-12 h-12" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#5D328E]">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 font-sans">
                Got Questions? We Have <span className="italic font-bold text-[#5D328E]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Answers</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Have doubts about digital marketing strategies, campaign timelines, or ROI measurement? Explore answers to common questions below.
              </p>
            </div>

            {/* Right Accordions */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.q}
                  className="bg-[#FAF9FF] border border-purple-100/90 rounded-2xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#5D328E] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center shrink-0 transition-transform ${openFaq === idx ? "rotate-180 bg-[#5D328E] text-white" : "text-[#5D328E]"}`}>
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
      {/* 10. BOTTOM VIBRANT CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#432368] via-[#5D328E] to-[#4F46E5] text-white relative overflow-hidden">
        {/* Decorative Background Lighting */}
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
                className="px-7 py-3.5 rounded-full bg-white hover:bg-purple-50 text-[#5D328E] font-bold text-sm shadow-xl transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
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

          {/* Right Rocket Laptop Illustration */}
          <div className="lg:col-span-4 flex justify-center relative">
            <div className="w-64 h-64 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-6 shadow-2xl relative">
              <div className="w-20 h-20 rounded-2xl bg-white text-[#5D328E] flex items-center justify-center mb-4 shadow-lg animate-bounce">
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
