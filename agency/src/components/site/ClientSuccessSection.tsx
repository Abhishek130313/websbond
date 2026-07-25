import { Link } from "react-router-dom";
import {
  ArrowRight, ExternalLink, Monitor, Search, Megaphone,
  FileText, Share2, BarChart3, Star, ChevronRight,
  TrendingUp, Target, Users, Headphones, PieChart
} from "lucide-react";
import officialLogo from "@/assets/websbond-official-2026-logo.webp";
import iconMark from "@/assets/websbond-icon-mark.webp";

/* ────────────────────────────────────────────────────────────
 * ClientSuccessSection
 * Part 1: Client Showcase + SEO Copy (unchanged)
 * Part 2: Exact Reference 1 — Radial Mindmap with Central Hub,
 *         Orbiting Service Cards, Why Businesses Choose, SEO Block
 * ──────────────────────────────────────────────────────────── */

const LEFT_SERVICES = [
  {
    title: "Website Design & Development",
    desc: "Modern, responsive and SEO-friendly websites that turn visitors into customers.",
    icon: Monitor,
    badgeBg: "bg-[#5B21B6]", // Solid Purple/Indigo Circle
    titleColor: "text-[#5B21B6]",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Improve search rankings, drive organic traffic and grow your online visibility.",
    icon: Search,
    badgeBg: "bg-[#E11D48]", // Solid Magenta/Pink Circle
    titleColor: "text-[#E11D48]",
  },
  {
    title: "Google Ads Management",
    desc: "Run high-converting ad campaigns that bring instant leads and measurable business results.",
    icon: Megaphone,
    badgeBg: "bg-[#F97316]", // Solid Orange Circle
    titleColor: "text-[#F97316]",
  },
];

const RIGHT_SERVICES = [
  {
    title: "Content Marketing",
    desc: "Create valuable content that builds trust, strengthens your brand and drives consistent traffic.",
    icon: FileText,
    badgeBg: "bg-[#7C3AED]", // Solid Violet/Purple Circle
    titleColor: "text-[#7C3AED]",
  },
  {
    title: "Social Media Marketing",
    desc: "Engage your audience, build brand awareness and grow your community across all major platforms.",
    icon: Share2,
    badgeBg: "bg-[#2563EB]", // Solid Blue Circle
    titleColor: "text-[#2563EB]",
  },
  {
    title: "Analytics & Performance",
    desc: "Track performance, analyze data and optimize strategies to maximize your growth and ROI.",
    icon: BarChart3,
    badgeBg: "bg-[#0D9488]", // Solid Teal Circle
    titleColor: "text-[#0D9488]",
  },
];

const WHY_CHOOSE = [
  {
    icon: Monitor,
    line1: "Custom Website",
    line2: "Design & Development",
  },
  {
    icon: TrendingUp,
    line1: "Local SEO & Google",
    line2: "Ranking Experts",
  },
  {
    icon: Target,
    line1: "Pay-Per-Click (PPC)",
    line2: "Advertising",
  },
  {
    icon: Users,
    line1: "Lead Generation &",
    line2: "Conversion Optimization",
  },
  {
    icon: Headphones,
    line1: "Ongoing Support &",
    line2: "Growth Partnership",
  },
  {
    icon: PieChart,
    line1: "Transparent Reporting",
    line2: "& Real Results",
  },
];

const CORE_SERVICES_LEFT = [
  "Web Design Company in Delhi NCR",
  "Website Development Services",
  "SEO Services in India",
];

const CORE_SERVICES_RIGHT = [
  "Google Ads Management",
  "Social Media Marketing Experts",
  "Lead Generation Specialists",
];

export const ClientSuccessSection = () => {
  return (
    <>
      {/* ═══════════════  PART 1: Client Showcase & SEO Copy  ═══════════════ */}
      <section className="py-10 md:py-14 bg-white text-slate-900 select-none relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18h2v14h-2zM32 18h2v8h-2zM53 18h2v20h-2zM74 18h2v10h-2zM95 18h2v16h-2zM11 50h2v18h-2zM32 50h2v10h-2zM53 50h2v14h-2zM74 50h2v22h-2zM95 50h2v12h-2z' fill='%2320103A' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: SEO Copy */}
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[29px] font-extrabold text-[#241344] tracking-tight leading-snug mb-4 font-sans">
                <span className="block whitespace-nowrap">Success Stories Powered by Strategic Design</span>
                <span className="font-montserrat font-black italic text-[#552782] block mt-1 text-2xl sm:text-3xl lg:text-[38px] whitespace-nowrap">
                  and Digital Marketing
                </span>
              </h2>
              <p className="font-jost text-sm sm:text-[15px] leading-[1.75] text-[#2D2342] mb-3.5 font-normal">
                Having trouble getting qualified leads, increasing online visibility, and converting visitors into business? As a trusted <strong className="font-bold text-[#1E1238]">web design company & digital marketing agency in Delhi NCR, India</strong>, we help businesses achieve measurable growth through innovative engineering and result-driven services. Our fast, responsive, and conversion-oriented websites work well in synchronization with <Link to="/seo-service-in-delhi" className="font-bold text-[#552782] hover:underline">SEO services India</Link>, Google Ads (PPC), content marketing, and lead generation campaigns.
              </p>
              <p className="font-jost text-sm sm:text-[15px] leading-[1.75] text-[#2D2342] mb-4 font-normal">
                Our objective isn't limited to only creating an online presence for you; rather, it is also about driving scalable revenue through our <Link to="/digital-marketing-agency" className="font-bold text-[#552782] hover:underline">digital marketing services India</Link>. Be it a startup seeking affordable website development or an already well-established business entity, we have tailored digital marketing solutions for everyone who wants to grow their business.
              </p>
              <p className="font-montserrat font-extrabold text-sm sm:text-base text-[#1E1238] mb-5 tracking-tight">
                Let's build something that doesn't just look great but delivers real business results.
              </p>
              <Link to="/our-portfolio" className="inline-flex items-center gap-2 bg-[#20103A] hover:bg-[#351A5E] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95">
                <span>View More</span>
                <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Company Brand Cards */}
            <div className="lg:col-span-6 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                <div className="bg-gradient-to-br from-[#1E1238] via-[#2B144E] to-[#421A78] p-5 rounded-3xl border border-purple-500/30 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-amber-300" /></div>
                  <div className="my-auto flex flex-col items-center"><span className="font-black text-base sm:text-lg text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">Hollywood<span className="text-amber-400">✦</span></span><span className="text-[10px] font-bold text-purple-200 mt-1 uppercase tracking-widest bg-purple-900/60 px-2.5 py-0.5 rounded-full border border-purple-400/20">Media & Ent.</span></div>
                  <span className="text-[9.5px] font-extrabold text-amber-300/90 tracking-wider">★ Verified Brand</span>
                </div>
                <div className="bg-gradient-to-br from-[#7F1D1D] via-[#991B1B] to-[#B91C1C] p-5 rounded-3xl border border-rose-500/30 shadow-lg hover:shadow-2xl hover:border-rose-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-rose-200" /></div>
                  <div className="my-auto flex flex-col items-center"><span className="font-extrabold text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">A1 PAINTING</span><span className="text-[9.5px] font-bold text-rose-100 mt-1 uppercase tracking-widest bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-400/20">EPOXY SERVICES</span></div>
                  <span className="text-[9.5px] font-extrabold text-rose-200/90 tracking-wider">★ Industrial Leader</span>
                </div>
                <div className="bg-gradient-to-br from-[#78350F] via-[#92400E] to-[#B45309] p-5 rounded-3xl border border-amber-500/30 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-amber-200" /></div>
                  <div className="my-auto flex flex-col items-center"><span className="font-extrabold text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">Access2Wellbeing</span><span className="text-[9.5px] font-bold text-amber-100 mt-1 uppercase tracking-widest bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-400/20">Healthcare</span></div>
                  <span className="text-[9.5px] font-extrabold text-amber-200/90 tracking-wider">★ Wellness Leader</span>
                </div>
                <div className="bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#059669] p-5 rounded-3xl border border-teal-500/30 shadow-lg hover:shadow-2xl hover:border-teal-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-teal-200" /></div>
                  <div className="my-auto flex flex-col items-center"><span className="font-black text-sm sm:text-base text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">ArtValue</span><span className="text-[9.5px] font-bold text-teal-100 mt-1 uppercase tracking-widest bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-400/20">Creative Agency</span></div>
                  <span className="text-[9.5px] font-extrabold text-teal-200/90 tracking-wider">★ Design Partner</span>
                </div>
                <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-5 rounded-3xl border border-slate-700/50 shadow-lg hover:shadow-2xl hover:border-slate-500 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-amber-400" /></div>
                  <div className="my-auto flex flex-col items-center"><span className="font-extrabold text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">AUTO TYRE</span><span className="text-[9.5px] font-bold text-amber-300 mt-1 uppercase tracking-widest bg-slate-950/70 px-2.5 py-0.5 rounded-full border border-amber-400/30">WHEELS CENTRE</span></div>
                  <span className="text-[9.5px] font-extrabold text-amber-300/90 tracking-wider">★ Automotive Hub</span>
                </div>
                <div className="bg-gradient-to-br from-[#2E1065] via-[#3B0764] to-[#581C87] p-5 rounded-3xl border border-purple-600/30 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-purple-200" /></div>
                  <div className="my-auto flex flex-col items-center"><span className="font-black text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">BILLER PRESS</span><span className="text-[9.5px] font-bold text-purple-200 mt-1 uppercase tracking-widest bg-purple-950/70 px-2.5 py-0.5 rounded-full border border-purple-400/30">Publishing</span></div>
                  <span className="text-[9.5px] font-extrabold text-purple-200/90 tracking-wider">★ Media Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════  PART 2: Colourful Radial Mindmap — Reference 1 Exact  ═══════════════ */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#F5F0FF] via-white to-[#F0F4FF] text-slate-900 select-none relative overflow-hidden border-b border-purple-100/60">

        {/* Multi-colour Ambient Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-200/50 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Section Header ── */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#552782] bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-1.5 rounded-full mb-4 border border-purple-200/60 shadow-sm">
              <Star className="w-3.5 h-3.5 text-amber-500" />
              End-to-End Digital Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#1E1238] tracking-tight leading-tight font-sans mb-3">
              Complete Digital Solutions{" "}
              <span className="font-montserrat font-black italic bg-gradient-to-r from-[#552782] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent block sm:inline">
                to Grow Your Business
              </span>
            </h2>
            <p className="font-jost text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We build high-performing websites and run data-driven marketing campaigns
              that attract the right audience, generate quality leads, and increase revenue.
            </p>
          </div>

          {/* ── Radial Layout: Left Cards | Central Hub | Right Cards ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto mb-14 relative">

            {/* SVG Connecting Curves (Desktop Only) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
              {/* Left Top -> Ring Top Left */}
              <path d="M 32% 18% C 39% 18%, 41% 36%, 45% 41%" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" opacity="0.85" />
              {/* Left Mid -> Ring Mid Left */}
              <path d="M 32% 50% C 37% 50%, 40% 50%, 44% 50%" fill="none" stroke="#E11D48" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" opacity="0.85" />
              {/* Left Bottom -> Ring Bottom Left */}
              <path d="M 32% 82% C 39% 82%, 41% 64%, 45% 59%" fill="none" stroke="#F97316" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" opacity="0.85" />

              {/* Right Top -> Ring Top Right */}
              <path d="M 68% 18% C 61% 18%, 59% 36%, 55% 41%" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" opacity="0.85" />
              {/* Right Mid -> Ring Mid Right */}
              <path d="M 68% 50% C 63% 50%, 60% 50%, 56% 50%" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" opacity="0.85" />
              {/* Right Bottom -> Ring Bottom Right */}
              <path d="M 68% 82% C 61% 82%, 59% 64%, 55% 59%" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" opacity="0.85" />
            </svg>

            {/* Left Column: 3 Service Cards with Solid Circular Icon Badges & Edge Dots */}
            <div className="flex flex-col gap-6 lg:pr-2 z-10">
              {LEFT_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                const dotColors = ["bg-purple-600", "bg-pink-500", "bg-orange-500"];
                return (
                  <div key={srv.title} className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100/90 shadow-sm hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1 group flex items-start gap-4 relative overflow-visible">
                    
                    {/* Card Right Edge Connector Dot */}
                    <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 ${dotColors[idx]} rounded-full border-2 border-white shadow-md z-20 hidden lg:block`} />

                    <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full ${srv.badgeBg} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className={`text-base font-extrabold ${srv.titleColor} mb-1.5 tracking-tight font-sans`}>{srv.title}</h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-jost font-normal">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Hub Circle (Reference Image 1 & 2 Exact Style) */}
            <div className="flex items-center justify-center py-6 lg:py-0 z-10">
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 w-72 h-72 sm:w-80 sm:h-80 -m-4 rounded-full bg-purple-200/40 blur-2xl pointer-events-none animate-pulse" />
                
                {/* Smooth Gradient Outer Ring */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full p-[5px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-400 shadow-xl flex items-center justify-center relative">
                  
                  {/* White Interior Hub Circle */}
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center p-4 shadow-inner relative z-10 border border-purple-100">
                    
                    {/* Official Websbond Icon Mark / Logo */}
                    <div className="mb-2 flex flex-col items-center justify-center">
                      <img 
                        src={iconMark} 
                        alt="Websbond Brand Icon" 
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-md hover:scale-105 transition-transform" 
                      />
                    </div>

                    {/* WEBSBOND Brand Name */}
                    <span className="font-montserrat font-black text-lg sm:text-xl tracking-tight text-[#0A051C] leading-none mb-1">
                      WEBSBOND
                    </span>

                    {/* Category List */}
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 tracking-tight font-jost mb-1">
                      Web Design • Marketing • Growth
                    </span>

                    {/* Tagline */}
                    <span className="text-[9.5px] sm:text-[10.5px] font-bold text-[#6D28D9] tracking-tight">
                      One Team. One Strategy. Real Results
                    </span>
                  </div>

                  {/* 6 Connected Dots Around Ring (Image 1 & 2 Exact Dots) */}
                  <div className="absolute top-[12%] left-[12%] w-4 h-4 bg-purple-600 rounded-full border-2 border-white shadow-md z-20" />
                  <div className="absolute top-[50%] -left-2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full border-2 border-white shadow-md z-20" />
                  <div className="absolute bottom-[12%] left-[12%] w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md z-20" />
                  
                  <div className="absolute top-[12%] right-[12%] w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-md z-20" />
                  <div className="absolute top-[50%] -right-2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md z-20" />
                  <div className="absolute bottom-[12%] right-[12%] w-4 h-4 bg-teal-500 rounded-full border-2 border-white shadow-md z-20" />
                </div>
              </div>
            </div>

            {/* Right Column: 3 Service Cards with Solid Circular Icon Badges & Edge Dots */}
            <div className="flex flex-col gap-6 lg:pl-2 z-10">
              {RIGHT_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                const dotColors = ["bg-indigo-600", "bg-blue-500", "bg-teal-500"];
                return (
                  <div key={srv.title} className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100/90 shadow-sm hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1 group flex items-start gap-4 relative overflow-visible">
                    
                    {/* Card Left Edge Connector Dot */}
                    <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 ${dotColors[idx]} rounded-full border-2 border-white shadow-md z-20 hidden lg:block`} />

                    <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full ${srv.badgeBg} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className={`text-base font-extrabold ${srv.titleColor} mb-1.5 tracking-tight font-sans`}>{srv.title}</h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-jost font-normal">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Why Businesses Choose WebsBond (Image 1 Exact Single Container Card) ── */}
          <div className="text-center mb-5">
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#0F172A] tracking-tight">
              Why Businesses Choose WebsBond
            </h3>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-4 sm:p-5 max-w-6xl mx-auto mb-10 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {WHY_CHOOSE.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-3 sm:px-4 sm:py-2.5 flex items-center gap-3.5 group hover:bg-purple-50/40 transition-colors rounded-xl">
                    <Icon className="w-6 h-6 text-[#6D28D9] shrink-0 stroke-[1.75] group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col">
                      <span className="text-[11px] sm:text-xs font-bold text-[#0F172A] leading-tight font-sans">{item.line1}</span>
                      <span className="text-[11px] sm:text-xs font-bold text-[#0F172A] leading-tight font-sans">{item.line2}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Bottom SEO Content Block (Image 1 Exact 2-Column Card) ── */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-7 sm:p-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

              {/* Left: SEO Paragraph */}
              <div className="md:col-span-6 pr-0 md:pr-4">
                <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#0F172A] mb-3 tracking-tight">
                  Digital Growth Partner for Businesses in Delhi NCR & India
                </h3>
                <p className="font-jost text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  WebsBond is a result-driven web design and digital marketing agency in Delhi NCR,
                  helping startups, small businesses and established brands grow online. Our services
                  include website design, website development, SEO, Google Ads, social media marketing,
                  content creation and lead generation. We focus on strategies that deliver real results
                  and long-term business growth.
                </p>
              </div>

              {/* Vertical Divider line */}
              <div className="hidden md:block w-px h-full bg-slate-200/80 self-stretch" />

              {/* Right: Core Services List */}
              <div className="md:col-span-5 pl-0 md:pl-2">
                <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#6D28D9] mb-4 tracking-tight">
                  Our Core Digital Services
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div className="flex flex-col gap-2.5">
                    {CORE_SERVICES_LEFT.map((svc) => (
                      <div key={svc} className="flex items-center gap-1.5 group cursor-pointer">
                        <ChevronRight className="w-3.5 h-3.5 text-[#6D28D9] shrink-0 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                        <span className="text-xs sm:text-[13px] font-bold text-slate-700 group-hover:text-[#6D28D9] transition-colors">{svc}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {CORE_SERVICES_RIGHT.map((svc) => (
                      <div key={svc} className="flex items-center gap-1.5 group cursor-pointer">
                        <ChevronRight className="w-3.5 h-3.5 text-[#6D28D9] shrink-0 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                        <span className="text-xs sm:text-[13px] font-bold text-slate-700 group-hover:text-[#6D28D9] transition-colors">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centered CTA Pill Button Below Container */}
          <div className="text-center mt-8">
            <Link
              to="/digital-marketing-agency"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white font-extrabold text-xs sm:text-sm px-9 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};
