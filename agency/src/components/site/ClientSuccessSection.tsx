import { Link } from "react-router-dom";
import { 
  ArrowRight, ExternalLink, Search, Share2, Target, 
  FileText, Cpu, BarChart3, Eye, MousePointer, 
  TrendingUp, Sparkles, Megaphone, Zap 
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
 * ClientSuccessSection
 * Combines: Company Showcase Grid + Digital Services Mindmap
 * SEO Target Keywords: best digital marketing agency delhi ncr,
 *   website design company india, seo services delhi, google ads 
 *   management, social media marketing agency, ai marketing
 * ──────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: "SEO & AI-Powered Optimization",
    desc: "Dominate Google's first page with data-backed on-page, off-page, and technical SEO combined with AI-driven keyword targeting that adapts in real time.",
    icon: Search,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    title: "Social Media Marketing",
    desc: "Build an engaged community across Instagram, Facebook, LinkedIn & X with scroll-stopping creatives, strategic storytelling, and paid amplification.",
    icon: Share2,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    title: "Google Ads & PPC Management",
    desc: "Maximize every rupee spent with hyper-targeted search, display, and shopping campaigns engineered for high-intent conversions and lower CPA.",
    icon: Target,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    title: "Content Marketing & Copywriting",
    desc: "Authority-building blog posts, landing pages, and video scripts crafted around buyer intent keywords that attract, educate, and convert your ideal audience.",
    icon: FileText,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    title: "AI-Powered Marketing Automation",
    desc: "From smart email drip sequences to predictive audience segmentation — leverage AI tools that automate lead nurturing and scale revenue 24/7.",
    icon: Cpu,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    title: "Analytics, Reporting & CRO",
    desc: "Transparent dashboards with actionable insights — track ROI, optimize conversion funnels, and make confident, data-driven growth decisions.",
    icon: BarChart3,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
];

const OUTCOMES = [
  { icon: Eye, label: "More Visibility", accent: "text-indigo-600" },
  { icon: MousePointer, label: "More Leads", accent: "text-pink-600" },
  { icon: TrendingUp, label: "More Sales", accent: "text-emerald-600" },
  { icon: Sparkles, label: "Sustainable Growth", accent: "text-violet-600" },
];

export const ClientSuccessSection = () => {
  return (
    <>
      {/* ═══════════════  PART 1: Client Showcase & SEO Copy  ═══════════════ */}
      <section className="py-10 md:py-14 bg-white text-slate-900 select-none relative overflow-hidden">
        {/* Background pattern */}
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

              <Link
                to="/our-portfolio"
                className="inline-flex items-center gap-2 bg-[#20103A] hover:bg-[#351A5E] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95"
              >
                <span>View More</span>
                <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Colorful Company Brand Cards */}
            <div className="lg:col-span-6 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">

                <div className="bg-gradient-to-br from-[#1E1238] via-[#2B144E] to-[#421A78] p-5 rounded-3xl border border-purple-500/30 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-amber-300" /></div>
                  <div className="my-auto flex flex-col items-center">
                    <span className="font-black text-base sm:text-lg text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">Hollywood<span className="text-amber-400">✦</span></span>
                    <span className="text-[10px] font-bold text-purple-200 mt-1 uppercase tracking-widest bg-purple-900/60 px-2.5 py-0.5 rounded-full border border-purple-400/20">Media & Ent.</span>
                  </div>
                  <span className="text-[9.5px] font-extrabold text-amber-300/90 tracking-wider">★ Verified Brand</span>
                </div>

                <div className="bg-gradient-to-br from-[#7F1D1D] via-[#991B1B] to-[#B91C1C] p-5 rounded-3xl border border-rose-500/30 shadow-lg hover:shadow-2xl hover:border-rose-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-rose-200" /></div>
                  <div className="my-auto flex flex-col items-center">
                    <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">A1 PAINTING</span>
                    <span className="text-[9.5px] font-bold text-rose-100 mt-1 uppercase tracking-widest bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-400/20">EPOXY SERVICES</span>
                  </div>
                  <span className="text-[9.5px] font-extrabold text-rose-200/90 tracking-wider">★ Industrial Leader</span>
                </div>

                <div className="bg-gradient-to-br from-[#78350F] via-[#92400E] to-[#B45309] p-5 rounded-3xl border border-amber-500/30 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-amber-200" /></div>
                  <div className="my-auto flex flex-col items-center">
                    <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">Access2Wellbeing</span>
                    <span className="text-[9.5px] font-bold text-amber-100 mt-1 uppercase tracking-widest bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-400/20">Healthcare</span>
                  </div>
                  <span className="text-[9.5px] font-extrabold text-amber-200/90 tracking-wider">★ Wellness Leader</span>
                </div>

                <div className="bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#059669] p-5 rounded-3xl border border-teal-500/30 shadow-lg hover:shadow-2xl hover:border-teal-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-teal-200" /></div>
                  <div className="my-auto flex flex-col items-center">
                    <span className="font-black text-sm sm:text-base text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">ArtValue</span>
                    <span className="text-[9.5px] font-bold text-teal-100 mt-1 uppercase tracking-widest bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-400/20">Creative Agency</span>
                  </div>
                  <span className="text-[9.5px] font-extrabold text-teal-200/90 tracking-wider">★ Design Partner</span>
                </div>

                <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-5 rounded-3xl border border-slate-700/50 shadow-lg hover:shadow-2xl hover:border-slate-500 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-amber-400" /></div>
                  <div className="my-auto flex flex-col items-center">
                    <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">AUTO TYRE</span>
                    <span className="text-[9.5px] font-bold text-amber-300 mt-1 uppercase tracking-widest bg-slate-950/70 px-2.5 py-0.5 rounded-full border border-amber-400/30">WHEELS CENTRE</span>
                  </div>
                  <span className="text-[9.5px] font-extrabold text-amber-300/90 tracking-wider">★ Automotive Hub</span>
                </div>

                <div className="bg-gradient-to-br from-[#2E1065] via-[#3B0764] to-[#581C87] p-5 rounded-3xl border border-purple-600/30 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5 text-purple-200" /></div>
                  <div className="my-auto flex flex-col items-center">
                    <span className="font-black text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">BILLER PRESS</span>
                    <span className="text-[9.5px] font-bold text-purple-200 mt-1 uppercase tracking-widest bg-purple-950/70 px-2.5 py-0.5 rounded-full border border-purple-400/30">Publishing</span>
                  </div>
                  <span className="text-[9.5px] font-extrabold text-purple-200/90 tracking-wider">★ Media Partner</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════  PART 2: Digital Services Hub (SEO-Optimized)  ═══════════════ */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] text-slate-900 select-none relative overflow-hidden border-b border-slate-200/80">
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header — SEO H2 with long-tail keywords */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full mb-4 inline-block border border-indigo-100">
              ✦ Full-Stack Digital Marketing Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight font-sans mb-4">
              360° Growth Engine for{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h2>
            <p className="font-jost text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              A beautifully crafted website grabs attention — but attention alone doesn't pay the bills. 
              Our integrated <strong className="text-slate-900">SEO, PPC, social media, and AI-powered automation</strong> strategies 
              convert that attention into qualified leads, measurable revenue, and long-term brand equity.
            </p>
          </div>

          {/* Central Hub + Dashed Connector Lines Visual */}
          <div className="relative max-w-5xl mx-auto">

            {/* Central Hub */}
            <div className="mx-auto mb-10 p-6 sm:p-8 rounded-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white text-center max-w-[260px] shadow-2xl border-4 border-indigo-500/20 flex flex-col items-center justify-center relative z-20">
              <Megaphone className="w-7 h-7 text-cyan-400 mb-1.5" />
              <h3 className="text-base sm:text-lg font-black leading-tight tracking-tight">
                Digital Solutions<br />
                <span className="text-cyan-300 text-sm font-bold">That Deliver Results</span>
              </h3>
            </div>

            {/* 6 Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {SERVICES.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={srv.title}
                    className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-indigo-300 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.015] group flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Hover accent glow */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className={`w-10 h-10 rounded-xl ${srv.bg} ${srv.color} flex items-center justify-center mb-3.5 border ${srv.border} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5 font-sans tracking-tight">
                        {srv.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-jost">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 4 Bottom Outcome Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {OUTCOMES.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.label}
                    className="bg-white border border-slate-200 rounded-full px-4 py-2.5 flex items-center justify-center gap-2 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all duration-200 text-xs font-extrabold text-slate-800 group"
                  >
                    <Icon className={`w-4 h-4 ${pill.accent} group-hover:scale-110 transition-transform`} />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
