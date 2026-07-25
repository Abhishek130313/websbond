import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, TrendingUp, UserCheck, Smartphone, Search, 
  Server, CheckCircle2, X 
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
 * WebDesignFeatureGrid
 * Interactive 6-Tab Showcase with distinct light color themes,
 * mouse cursor hover switching, highlighted SEO keywords, and
 * floating pill navigation bar.
 * ──────────────────────────────────────────────────────────── */

const TABS = [
  {
    id: "presence",
    title: "Stronger Online Presence",
    icon: Globe,
    subtitle: "Custom React & Fast Engineering",
    badgeBg: "bg-indigo-600 text-white",
    cardBg: "bg-gradient-to-br from-indigo-50/80 via-purple-50/40 to-white",
    activeCardBg: "bg-gradient-to-br from-[#1E1238] via-[#2B144E] to-[#3B1568] text-white shadow-xl scale-[1.03] border border-indigo-400/60",
    hoverBorder: "hover:border-indigo-300",
    image: "/features/stronger-online-presence.png",
    description: (
      <>
        Your website is the first impression your business makes. If your site is old, slow, or not mobile-friendly, customers bounce before you even talk to them. Having a <strong className="font-extrabold text-[#552782] bg-purple-50 px-1 py-0.5 rounded border border-purple-100">professionally engineered website</strong> increases trust, boosts credibility, and puts you ahead of competitors. At <strong className="font-extrabold text-slate-950">WebsBond</strong>, we build <strong className="font-extrabold text-indigo-700">fast, clean, and conversion-oriented websites</strong> tailored for high business growth.
      </>
    ),
    highlights: ["Increased brand credibility & trust", "Sub-second core web vitals speed", "Designed for maximum customer engagement"],
  },
  {
    id: "leads",
    title: "More Leads & Sales",
    icon: TrendingUp,
    subtitle: "Conversion Rate Optimization (CRO)",
    badgeBg: "bg-rose-500 text-white",
    cardBg: "bg-gradient-to-br from-rose-50/80 via-pink-50/40 to-white",
    activeCardBg: "bg-gradient-to-br from-[#881337] via-[#9F1239] to-[#BE123C] text-white shadow-xl scale-[1.03] border border-rose-400/60",
    hoverBorder: "hover:border-rose-300",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        Traffic alone doesn't grow your business — <strong className="font-extrabold text-rose-700 bg-rose-50 px-1 py-0.5 rounded border border-rose-100">qualified lead conversions do</strong>. We design every page with <strong className="font-extrabold text-slate-950">strategic call-to-action funnels</strong>, intuitive user journeys, and high-converting lead forms. Whether you need more phone calls or online sales, our websites act as <strong className="font-extrabold text-[#552782] bg-purple-50 px-1 py-0.5 rounded border border-purple-100">24/7 lead generation engines</strong> for your brand.
      </>
    ),
    highlights: ["Strategic CTA placements & funnels", "Instant lead capture & CRM integrations", "Higher conversion rates across all devices"],
  },
  {
    id: "ux",
    title: "Improved User Experience",
    icon: UserCheck,
    subtitle: "Intuitive UI/UX Design System",
    badgeBg: "bg-emerald-600 text-white",
    cardBg: "bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-white",
    activeCardBg: "bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#059669] text-white shadow-xl scale-[1.03] border border-emerald-400/60",
    hoverBorder: "hover:border-emerald-300",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        Confusing navigation or clutter drives potential clients away. We craft <strong className="font-extrabold text-emerald-800 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-100">ultra-smooth visual hierarchy</strong>, crystal-clear typography, and intuitive micro-interactions that make browsing effortless. Users stay longer, engage deeper, and complete actions faster on websites designed with <strong className="font-extrabold text-[#552782]">modern UI/UX design principles</strong>.
      </>
    ),
    highlights: ["Smooth micro-animations & transitions", "Clean visual hierarchy & modern typography", "Accessibility & fast navigation layout"],
  },
  {
    id: "responsive",
    title: "Responsive Design",
    icon: Smartphone,
    subtitle: "Mobile-First Fluid Layouts",
    badgeBg: "bg-blue-600 text-white",
    cardBg: "bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-white",
    activeCardBg: "bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white shadow-xl scale-[1.03] border border-blue-400/60",
    hoverBorder: "hover:border-blue-300",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        Over 70% of web traffic comes from mobile devices. Our <strong className="font-extrabold text-blue-700 bg-blue-50 px-1 py-0.5 rounded border border-blue-100">mobile-first design philosophy</strong> ensures your website looks stunning, loads instantaneously, and functions flawlessly on every screen size — from iPhones and Android tablets to <strong className="font-extrabold text-slate-950">ultra-wide 4K desktop displays</strong> with <strong className="font-extrabold text-[#552782]">zero layout shifts (CLS)</strong>.
      </>
    ),
    highlights: ["100% responsive fluid grid system", "Touch-optimized buttons & mobile menus", "Zero cumulative layout shift (CLS)"],
  },
  {
    id: "seo",
    title: "SEO Optimized Web Pages",
    icon: Search,
    subtitle: "First-Page Search Engine Rankings",
    badgeBg: "bg-amber-500 text-white",
    cardBg: "bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-white",
    activeCardBg: "bg-gradient-to-br from-[#78350F] via-[#92400E] to-[#B45309] text-white shadow-xl scale-[1.03] border border-amber-400/60",
    hoverBorder: "hover:border-amber-300",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        What good is a beautiful website if no one can find it? We integrate <strong className="font-extrabold text-amber-800 bg-amber-50 px-1 py-0.5 rounded border border-amber-100">#1 rank SEO into the foundational code</strong> — implementing schema markup, semantic HTML5, and high-speed assets so Google indexes and ranks your business at the <strong className="font-extrabold text-[#552782]">top of local and national search results</strong>.
      </>
    ),
    highlights: ["Clean SEO code architecture & schema", "Local SEO & Google Maps pack ready", "Fast indexing & targeted keyword optimization"],
  },
  {
    id: "scalable",
    title: "Scalable & Easy To Manage",
    icon: Server,
    subtitle: "Future-Proof Modern Architecture",
    badgeBg: "bg-purple-600 text-white",
    cardBg: "bg-gradient-to-br from-purple-50/80 via-violet-50/40 to-white",
    activeCardBg: "bg-gradient-to-br from-[#3B0764] via-[#581C87] to-[#6D28D9] text-white shadow-xl scale-[1.03] border border-purple-400/60",
    hoverBorder: "hover:border-purple-300",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    description: (
      <>
        As your business grows, your website should scale effortlessly with you. We engineer <strong className="font-extrabold text-purple-800 bg-purple-50 px-1 py-0.5 rounded border border-purple-100">clean, modular React web architecture</strong> that allows easy content updates, <strong className="font-extrabold text-slate-950">seamless third-party API & CRM integrations</strong>, and enterprise-grade security with <strong className="font-extrabold text-[#552782]">zero technical downtime</strong>.
      </>
    ),
    highlights: ["Modular reusable component structure", "Seamless API & CRM integrations", "Enterprise-grade security & zero downtime"],
  },
];

export const WebDesignFeatureGrid = () => {
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = TABS[activeTab];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white via-[#F8F6FC] to-white text-slate-900 select-none relative overflow-hidden border-b border-purple-100/60">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#1E1238] tracking-tight leading-tight font-sans mb-3">
            That Delivers{" "}
            <span className="font-montserrat font-black italic text-[#552782]">
              High-Impact Results
            </span>
          </h2>
          <p className="font-jost text-sm sm:text-base md:text-[17px] text-slate-700 leading-relaxed max-w-6xl mx-auto font-normal">
            Your website is your first impression — give it all your power. As a premier{" "}
            <strong className="font-bold text-[#1E1238] bg-purple-50/90 px-1.5 py-0.5 rounded border border-purple-100/90">
              web design company & digital marketing agency in Delhi NCR
            </strong>
            , we help businesses{" "}
            <strong className="font-bold text-[#1E1238] bg-purple-50/90 px-1.5 py-0.5 rounded border border-purple-100/90">
              turn visitors into loyal customers
            </strong>
            . Whether you're a startup or a scaling brand, our{" "}
            <strong className="font-bold text-[#552782] bg-purple-50/90 px-1.5 py-0.5 rounded border border-purple-100/90">
              custom web design services
            </strong>{" "}
            are tailored to transform your online presence into your{" "}
            <strong className="font-bold text-[#552782] bg-purple-50/90 px-1.5 py-0.5 rounded border border-purple-100/90">
              most powerful sales tool
            </strong>
            .
          </p>
        </div>

        {/* ── Interactive 2-Column Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto mb-6">

          {/* Left Column: 6 Interactive Selectable Cards with Mouse Hover Switching */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {TABS.map((tab, idx) => {
              const IconComp = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-center flex flex-col items-center justify-center transition-all duration-300 transform-gpu cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? tab.activeCardBg
                      : `${tab.cardBg} text-slate-800 border border-slate-200/80 shadow-2xs hover:shadow-xl ${tab.hoverBorder} hover:-translate-y-1`
                  }`}
                >
                  {/* Icon Badge */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center mb-3 transition-all shadow-sm ${
                      isActive
                        ? "bg-white/20 text-white backdrop-blur-sm"
                        : `${tab.badgeBg} group-hover:scale-110 group-hover:rotate-3`
                    }`}
                  >
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <span className={`text-xs sm:text-sm font-extrabold leading-tight font-sans tracking-tight ${
                    isActive ? "text-white" : "text-[#1E1238]"
                  }`}>
                    {tab.title}
                  </span>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/40 rounded-b-2xl" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Tab Detailed Card with Image Preview */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-purple-100/90 shadow-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Side: High-Quality Website Image Preview */}
              <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={currentTab.image}
                  alt={currentTab.title}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1238]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/40 shadow-sm text-center">
                  <span className="text-[10px] font-bold text-[#552782] uppercase tracking-wider">
                    ✦ {currentTab.subtitle}
                  </span>
                </div>
              </div>

              {/* Right Side: Tab Details & Highlights */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="inline-block bg-purple-50 text-[#552782] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5 w-fit border border-purple-100">
                  ✦ Feature Deep Dive
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1238] font-sans mb-2.5 tracking-tight">
                  {currentTab.title}
                </h3>
                <p className="font-jost text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 font-normal">
                  {currentTab.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 border-t border-purple-100/80 pt-3.5">
                  {currentTab.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#1E1238]">
                      <CheckCircle2 className="w-4 h-4 text-[#552782] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
