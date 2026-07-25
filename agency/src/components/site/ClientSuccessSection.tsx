import { Link } from "react-router-dom";
import {
  ArrowRight, ExternalLink, Monitor, Search, Megaphone,
  FileText, Share2, BarChart3, Star, ChevronRight,
  TrendingUp, Target, Users, Headphones, PieChart, Sparkles
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

      {/* ═══════════════  PART 2: Colourful Radial Mindmap — Reference 1 Compact & Synchronized  ═══════════════ */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-[#F5F0FF] via-white to-[#F0F4FF] text-slate-900 select-none relative overflow-hidden border-b border-purple-100/60">

        {/* Multi-colour Ambient Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-100/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Section Header ── */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#552782] bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-1.5 rounded-full mb-3 border border-purple-200/60 shadow-xs">
              <Star className="w-3.5 h-3.5 text-amber-500" />
              End-to-End Digital Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-extrabold text-[#1E1238] tracking-tight leading-tight font-sans mb-2.5">
              Complete Digital Solutions{" "}
              <span className="font-montserrat font-black italic bg-gradient-to-r from-[#552782] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent block sm:inline">
                to Grow Your Business
              </span>
            </h2>
            <p className="font-jost text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We build high-performing websites and run data-driven marketing campaigns
              that attract the right audience, generate quality leads, and increase revenue.
            </p>
          </div>

          {/* ── Compact Radial Layout: Left Cards | Central Hub | Right Cards ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-center max-w-[1020px] mx-auto mb-10 relative">

            {/* SVG Connecting Curves (Desktop Only — Tight Coordinates) */}
            <svg 
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" 
              viewBox="0 0 1000 440" 
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left Top Card -> Hub Ring Top Left Dot */}
              <path 
                d="M 330 75 C 385 75, 410 120, 440 135" 
                fill="none" 
                stroke="#7C3AED" 
                strokeWidth="3" 
                strokeDasharray="5 5" 
                strokeLinecap="round" 
              />
              {/* Left Mid Card -> Hub Ring Mid Left Dot */}
              <path 
                d="M 330 220 L 400 220" 
                fill="none" 
                stroke="#E11D48" 
                strokeWidth="3" 
                strokeDasharray="5 5" 
                strokeLinecap="round" 
              />
              {/* Left Bottom Card -> Hub Ring Bottom Left Dot */}
              <path 
                d="M 330 365 C 385 365, 410 320, 440 305" 
                fill="none" 
                stroke="#F97316" 
                strokeWidth="3" 
                strokeDasharray="5 5" 
                strokeLinecap="round" 
              />

              {/* Right Top Card -> Hub Ring Top Right Dot */}
              <path 
                d="M 670 75 C 615 75, 590 120, 560 135" 
                fill="none" 
                stroke="#6366F1" 
                strokeWidth="3" 
                strokeDasharray="5 5" 
                strokeLinecap="round" 
              />
              {/* Right Mid Card -> Hub Ring Mid Right Dot */}
              <path 
                d="M 670 220 L 600 220" 
                fill="none" 
                stroke="#2563EB" 
                strokeWidth="3" 
                strokeDasharray="5 5" 
                strokeLinecap="round" 
              />
              {/* Right Bottom Card -> Hub Ring Bottom Right Dot */}
              <path 
                d="M 670 365 C 615 365, 590 320, 560 305" 
                fill="none" 
                stroke="#0D9488" 
                strokeWidth="3" 
                strokeDasharray="5 5" 
                strokeLinecap="round" 
              />
            </svg>

            {/* Left Column: 3 Service Cards (Compact Padding & Height) */}
            <div className="flex flex-col gap-4.5 lg:pr-1 z-10">
              {LEFT_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                const dotColors = ["bg-purple-600", "bg-pink-500", "bg-orange-500"];
                return (
                  <div key={srv.title} className="bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-100/90 shadow-2xs hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-0.5 group flex items-start gap-3.5 relative overflow-visible">
                    
                    {/* Card Right Edge Connector Dot */}
                    <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${dotColors[idx]} rounded-full border-2 border-white shadow-md z-20 hidden lg:block`} />

                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${srv.badgeBg} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className={`text-sm sm:text-base font-extrabold ${srv.titleColor} mb-1 tracking-tight font-sans`}>{srv.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-jost font-normal">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Hub Circle (Compact & Perfectly Centered) */}
            <div className="flex items-center justify-center py-4 lg:py-0 z-10">
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 -m-3 rounded-full bg-purple-200/30 blur-xl pointer-events-none animate-pulse" />
                
                {/* Smooth Gradient Outer Ring */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-[4.5px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-400 shadow-lg flex items-center justify-center relative">
                  
                  {/* White Interior Hub Circle */}
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center p-3 sm:p-4 shadow-inner relative z-10 border border-purple-100">
                    
                    {/* Official Websbond Icon Mark / Logo */}
                    <div className="mb-1.5 flex flex-col items-center justify-center">
                      <img 
                        src={iconMark} 
                        alt="Websbond Brand Icon" 
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-md hover:scale-105 transition-transform" 
                      />
                    </div>

                    {/* WEBSBOND Brand Name */}
                    <span className="font-montserrat font-black text-base sm:text-lg tracking-tight text-[#0A051C] leading-none mb-1">
                      WEBSBOND
                    </span>

                    {/* Category List */}
                    <span className="text-[9.5px] sm:text-[10.5px] font-semibold text-slate-600 tracking-tight font-jost mb-0.5">
                      Web Design • Marketing • Growth
                    </span>

                    {/* Tagline */}
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#6D28D9] tracking-tight">
                      One Team. One Strategy. Real Results
                    </span>
                  </div>

                  {/* 6 Connected Dots Around Ring */}
                  <div className="absolute top-[12%] left-[12%] w-3.5 h-3.5 bg-purple-600 rounded-full border-2 border-white shadow-md z-20" />
                  <div className="absolute top-[50%] -left-1.5 -translate-y-1/2 w-3.5 h-3.5 bg-pink-500 rounded-full border-2 border-white shadow-md z-20" />
                  <div className="absolute bottom-[12%] left-[12%] w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-white shadow-md z-20" />
                  
                  <div className="absolute top-[12%] right-[12%] w-3.5 h-3.5 bg-indigo-600 rounded-full border-2 border-white shadow-md z-20" />
                  <div className="absolute top-[50%] -right-1.5 -translate-y-1/2 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white shadow-md z-20" />
                  <div className="absolute bottom-[12%] right-[12%] w-3.5 h-3.5 bg-teal-500 rounded-full border-2 border-white shadow-md z-20" />
                </div>
              </div>
            </div>

            {/* Right Column: 3 Service Cards (Compact Padding & Height) */}
            <div className="flex flex-col gap-4.5 lg:pl-1 z-10">
              {RIGHT_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                const dotColors = ["bg-indigo-600", "bg-blue-500", "bg-teal-500"];
                return (
                  <div key={srv.title} className="bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-100/90 shadow-2xs hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-0.5 group flex items-start gap-3.5 relative overflow-visible">
                    
                    {/* Card Left Edge Connector Dot */}
                    <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${dotColors[idx]} rounded-full border-2 border-white shadow-md z-20 hidden lg:block`} />

                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${srv.badgeBg} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className={`text-sm sm:text-base font-extrabold ${srv.titleColor} mb-1 tracking-tight font-sans`}>{srv.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-jost font-normal">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Why Businesses Choose WebsBond (Compact Single Container) ── */}
          <div className="text-center mb-3.5">
            <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#0F172A] tracking-tight">
              Why Businesses Choose WebsBond
            </h3>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-3.5 sm:p-4.5 max-w-6xl mx-auto mb-8 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {WHY_CHOOSE.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-2.5 sm:px-4 sm:py-2 flex items-center justify-center gap-3 group hover:bg-purple-50/40 transition-colors rounded-xl">
                    <Icon className="w-5 h-5 text-[#6D28D9] shrink-0 stroke-[1.75] group-hover:scale-105 transition-transform" />
                    <div className="flex flex-col">
                      <span className="text-[11px] sm:text-xs font-bold text-[#0F172A] leading-tight font-sans">{item.line1}</span>
                      <span className="text-[11px] sm:text-xs font-bold text-[#0F172A] leading-tight font-sans">{item.line2}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Bottom SEO Content Block (Widescreen 2-Column Card) ── */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-6 sm:p-8 md:p-9 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* Left: SEO Paragraph */}
              <div className="md:col-span-6 pr-0 md:pr-4">
                <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#0F172A] mb-3 tracking-tight">
                  Digital Growth Partner for Businesses in Delhi NCR & India
                </h3>
                <p className="font-jost text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  WebsBond is a result-driven web design and digital marketing agency in Delhi NCR,
                  helping startups, small businesses and established brands grow online. Our services
                  include website design, website development, SEO, Google Ads, social media marketing,
                  content creation and lead generation. We focus on strategies that deliver real results
                  and long-term business growth.
                </p>
              </div>

              {/* Vertical Divider line */}
              <div className="hidden md:block w-px h-full bg-slate-200/80 self-stretch" />

              {/* Right: Core Digital Services Block (Redesigned World-Class Light Violet) */}
              <div className="md:col-span-5 flex flex-col items-center justify-center text-center pl-0 md:pl-2">
                
                {/* Centered Heading */}
                <div className="mb-3.5 text-center">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#6D28D9] bg-purple-100/70 px-3 py-0.5 rounded-full mb-1.5 border border-purple-200/60">
                    <Sparkles className="w-3 h-3 text-[#6D28D9]" />
                    Expert Capabilities
                  </span>
                  <h3 className="font-sans font-black text-base sm:text-lg text-[#552782] tracking-tight">
                    Our Core Digital Services
                  </h3>
                </div>

                {/* Light Violet Interactive Service Chips Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg">
                  {[...CORE_SERVICES_LEFT, ...CORE_SERVICES_RIGHT].map((svc) => (
                    <div 
                      key={svc} 
                      className="bg-gradient-to-r from-[#F5EFFC] via-[#FAF5FF] to-[#F3EAFA] border border-purple-200/70 rounded-xl px-3.5 py-2.5 flex items-center justify-between shadow-2xs hover:shadow-xs hover:border-purple-400 hover:scale-[1.015] transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-purple-200/60 text-[#552782] flex items-center justify-center text-[9.5px] font-black group-hover:bg-[#552782] group-hover:text-white transition-colors shrink-0">
                          ✦
                        </div>
                        <span className="text-xs font-bold text-[#3B1568] group-hover:text-[#552782] transition-colors font-sans text-left leading-snug">
                          {svc}
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:text-[#552782] group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Centered CTA Pill Button Below Container */}
          <div className="text-center mt-6">
            <Link
              to="/digital-marketing-agency"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white font-extrabold text-xs sm:text-sm px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
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
