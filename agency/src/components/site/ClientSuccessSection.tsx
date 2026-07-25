import { Link } from "react-router-dom";
import {
  ArrowRight, ExternalLink, Monitor, Search, Megaphone,
  FileText, Share2, BarChart3, Star, Code, CircleDollarSign,
  Users, Target, ShieldCheck, ChevronRight
} from "lucide-react";

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
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Improve search rankings, drive organic traffic and grow your online visibility.",
    icon: Search,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    title: "Google Ads Management",
    desc: "Run high-converting ad campaigns that bring instant leads and measurable business results.",
    icon: Megaphone,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

const RIGHT_SERVICES = [
  {
    title: "Content Marketing",
    desc: "Create valuable content that builds trust, strengthens your brand and drives consistent traffic.",
    icon: FileText,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    title: "Social Media Marketing",
    desc: "Engage your audience, build brand awareness and grow your community across all major platforms.",
    icon: Share2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    title: "Analytics & Performance",
    desc: "Track performance, analyze data and optimize strategies to maximize your growth and ROI.",
    icon: BarChart3,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
  },
];

const WHY_CHOOSE = [
  { icon: Code, label: "Custom Website Design & Development" },
  { icon: Search, label: "Local SEO & Google Ranking Experts" },
  { icon: CircleDollarSign, label: "Pay-Per-Click (PPC) Advertising" },
  { icon: Users, label: "Lead Generation & Conversion Optimization" },
  { icon: Target, label: "Ongoing Support & Growth Partnership" },
  { icon: ShieldCheck, label: "Transparent Reporting & Real Results" },
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

      {/* ═══════════════  PART 2: Exact Reference 1 Design — Radial Mindmap  ═══════════════ */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#F8F6FC] via-white to-[#F8F6FC] text-slate-900 select-none relative overflow-hidden border-b border-purple-100/60">

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Section Header ── */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#552782] bg-white px-4 py-1.5 rounded-full mb-4 border border-purple-200/60 shadow-xs">
              <Star className="w-3.5 h-3.5 text-purple-500" />
              End-to-End Digital Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#1E1238] tracking-tight leading-tight font-sans mb-3">
              Complete Digital Solutions{" "}
              <span className="font-montserrat font-black italic text-[#552782] block sm:inline">
                to Grow Your Business
              </span>
            </h2>
            <p className="font-jost text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We build high-performing websites and run data-driven marketing campaigns
              that attract the right audience, generate quality leads, and increase revenue.
            </p>
          </div>

          {/* ── Radial Layout: Left Cards | Central Hub | Right Cards ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 items-center max-w-6xl mx-auto mb-12">

            {/* Left Column: 3 Service Cards */}
            <div className="flex flex-col gap-5 lg:pr-6">
              {LEFT_SERVICES.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div key={srv.title} className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform-gpu hover:-translate-y-1 group flex items-start gap-3.5 relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-100/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className={`w-10 h-10 rounded-xl ${srv.bg} ${srv.color} flex items-center justify-center shrink-0 border ${srv.border} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#1E1238] mb-1 tracking-tight">{srv.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-jost">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Hub Circle */}
            <div className="flex items-center justify-center py-6 lg:py-0">
              <div className="relative">
                {/* Outer Ring */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-purple-300/60 flex items-center justify-center relative">
                  {/* Inner Circle */}
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#1E1238] via-[#2B1550] to-[#421A78] flex flex-col items-center justify-center text-center text-white shadow-2xl border-4 border-purple-400/20 relative z-10">
                    {/* WB Logo Text */}
                    <span className="font-montserrat font-black text-3xl sm:text-4xl tracking-tighter text-white/90 leading-none">
                      W<span className="text-purple-300">B</span>
                    </span>
                    <span className="font-montserrat font-extrabold text-xs sm:text-sm tracking-wider text-white/80 mt-1">
                      WEBSBOND
                    </span>
                    <span className="text-[9px] text-purple-200/70 mt-1 font-jost tracking-wide">
                      Web Design • Marketing • Growth
                    </span>
                    <span className="text-[8.5px] text-amber-300/80 font-bold mt-0.5 tracking-wider">
                      One Team. One Strategy. Real Results
                    </span>
                  </div>

                  {/* Animated Orbiting Dots */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-md animate-pulse" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-amber-500 rounded-full shadow-md animate-pulse" />
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-md animate-pulse" />
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-md animate-pulse" />
                </div>
              </div>
            </div>

            {/* Right Column: 3 Service Cards */}
            <div className="flex flex-col gap-5 lg:pl-6">
              {RIGHT_SERVICES.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div key={srv.title} className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform-gpu hover:-translate-y-1 group flex items-start gap-3.5 relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-100/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className={`w-10 h-10 rounded-xl ${srv.bg} ${srv.color} flex items-center justify-center shrink-0 border ${srv.border} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#1E1238] mb-1 tracking-tight">{srv.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-jost">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Why Businesses Choose WebsBond ── */}
          <div className="text-center mb-6">
            <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#1E1238] tracking-tight">
              Why Businesses Choose WebsBond
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto mb-12">
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white border border-slate-200/80 rounded-xl px-3 py-3 flex items-center gap-2 shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-200 group">
                  <Icon className="w-4 h-4 text-[#552782] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* ── Bottom SEO Content Block ── */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Left: SEO Paragraph */}
              <div>
                <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#1E1238] mb-3 tracking-tight">
                  Digital Growth Partner for Businesses in Delhi NCR & India
                </h3>
                <p className="font-jost text-xs sm:text-sm text-slate-600 leading-relaxed">
                  WebsBond is a result-driven web design and digital marketing agency in Delhi NCR,
                  helping startups, small businesses and established brands grow online. Our services
                  include website design, website development, SEO, Google Ads, social media marketing,
                  content creation and lead generation. We focus on strategies that deliver real results
                  and long-term business growth.
                </p>
              </div>

              {/* Right: Core Services List */}
              <div>
                <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#552782] mb-3 tracking-tight">
                  Our Core Digital Services
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {[...CORE_SERVICES_LEFT, ...CORE_SERVICES_RIGHT].map((svc) => (
                    <div key={svc} className="flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#552782] shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-6 pt-5 border-t border-slate-100">
              <Link
                to="/digital-marketing-agency"
                className="inline-flex items-center gap-2 bg-[#552782] hover:bg-[#421A78] text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
