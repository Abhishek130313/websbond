import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, TrendingUp, UserCheck, Smartphone, Search, 
  Server, CheckCircle2, Sparkles, ArrowRight, X 
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
 * WebDesignFeatureGrid
 * Interactive 6-Tab Showcase with detail cards, high-res mockups,
 * and bottom floating pill navigation bar.
 * ──────────────────────────────────────────────────────────── */

const TABS = [
  {
    id: "presence",
    title: "Stronger Online Presence",
    icon: Globe,
    subtitle: "Custom React & Fast Engineering",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    description: "Your website is the first impression your business makes. If your site is old, buggy, slow, or not mobile-friendly, customers bounce before you even talk to them. Having a professionally engineered website increases trust, boosts credibility, and puts you ahead of competitors. At WebsBond, we build fast, clean, and conversion-oriented websites tailored for growth.",
    highlights: ["Increased brand credibility & trust", "Sub-second core web vitals speed", "Designed for maximum customer engagement"],
  },
  {
    id: "leads",
    title: "More Leads & Sales",
    icon: TrendingUp,
    subtitle: "Conversion Rate Optimization (CRO)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    description: "Traffic alone doesn't grow your business — conversions do. We design every page with strategic call-to-action buttons, intuitive user journeys, and persuasive lead forms that convert passive visitors into paying customers. Whether you need more phone calls, form fills, or ecommerce orders, our websites act as 24/7 lead generation engines.",
    highlights: ["Strategic CTA placements & funnels", "Instant lead capture & CRM integrations", "Higher conversion rates across all devices"],
  },
  {
    id: "ux",
    title: "Improved User Experience",
    icon: UserCheck,
    subtitle: "Intuitive UI/UX Design System",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
    description: "Confusing navigation or clutter drives potential clients away. We craft ultra-smooth visual hierarchy, crystal-clear typography, and intuitive micro-interactions that make browsing your site effortless. Users stay longer, engage deeper, and complete actions faster on websites designed with modern UX principles.",
    highlights: ["Smooth micro-animations & transitions", "Clean visual hierarchy & modern typography", "Accessibility & fast navigation layout"],
  },
  {
    id: "responsive",
    title: "Responsive Design",
    icon: Smartphone,
    subtitle: "Mobile-First Fluid Layouts",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&auto=format&fit=crop&q=80",
    description: "Over 70% of web traffic comes from smartphones. Our mobile-first design philosophy ensures your website looks stunning, loads instantaneously, and functions flawlessly on every screen size — from iPhones and Android tablets to ultra-wide 4K desktop monitors.",
    highlights: ["100% responsive fluid grid system", "Touch-optimized buttons & mobile menus", "Zero cumulative layout shift (CLS)"],
  },
  {
    id: "seo",
    title: "SEO Optimized Web Pages",
    icon: Search,
    subtitle: "First-Page Search Engine Rankings",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&auto=format&fit=crop&q=80",
    description: "What good is a beautiful website if no one can find it? We build SEO into the foundational codebase — implementing schema markup, semantic HTML5, optimized page titles, meta tags, and high-speed assets so Google indexes and ranks your business at the top of local and national search results.",
    highlights: ["Clean SEO code architecture & schema", "Local SEO & Google Maps pack ready", "Fast indexing & targeted keyword optimization"],
  },
  {
    id: "scalable",
    title: "Scalable & Easy To Manage",
    icon: Server,
    subtitle: "Future-Proof Modern Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    description: "As your business grows, your website should scale effortlessly with you. We engineer clean, modular web platforms that allow easy content updates, seamless third-party API integrations, and enterprise-grade security without needing expensive technical maintenance.",
    highlights: ["Modular reusable component structure", "Seamless API & CRM integrations", "Enterprise-grade security & zero downtime"],
  },
];

export const WebDesignFeatureGrid = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPillNav, setShowPillNav] = useState(true);

  const currentTab = TABS[activeTab];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white via-[#F8F6FC] to-white text-slate-900 select-none relative overflow-hidden border-b border-purple-100/60">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#552782] bg-purple-50 px-4 py-1.5 rounded-full mb-3 border border-purple-200/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            Low-Cost Website Design
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#1E1238] tracking-tight leading-tight font-sans mb-3">
            That Delivers{" "}
            <span className="font-montserrat font-black italic text-[#552782]">
              High-Impact Results
            </span>
          </h2>
          <p className="font-jost text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Your website is your first impression — give it all your power. As a professional <strong className="font-bold text-[#1E1238]">web design company & digital marketing agency in Delhi NCR</strong>, we help companies like yours turn visitors into customers. Whether you're a startup or a scaling brand, our fully custom web design services are customized around your goals. Let's transform your online presence into your most powerful sales tool.
          </p>
        </div>

        {/* ── Interactive 2-Column Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto mb-10">

          {/* Left Column: 6 Interactive Selectable Cards (2x3 Grid) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {TABS.map((tab, idx) => {
              const IconComp = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-center flex flex-col items-center justify-center transition-all duration-300 transform-gpu cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? "bg-[#20103A] text-white shadow-xl scale-[1.02] border border-purple-500/40"
                      : "bg-white text-slate-800 border border-purple-100/90 shadow-2xs hover:shadow-md hover:border-purple-300 hover:bg-purple-50/40"
                  }`}
                >
                  {/* Icon Badge */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                      isActive
                        ? "bg-purple-600/40 text-purple-200 border border-purple-400/30"
                        : "bg-purple-50 text-[#552782] border border-purple-100 group-hover:bg-[#552782] group-hover:text-white"
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
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-b-2xl" />
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
                <p className="font-jost text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
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

        {/* ── Bottom Floating Pill Navigation (Reference Image Exact Match) ── */}
        {showPillNav && (
          <div className="flex justify-center mt-6">
            <div className="bg-white/90 backdrop-blur-xl border border-purple-200/80 rounded-full px-6 py-2.5 shadow-lg flex items-center gap-6 text-xs font-extrabold text-[#1E1238] relative">
              <Link to="/our-portfolio" className="hover:text-[#552782] transition-colors">
                Portfolio
              </Link>
              <span className="w-1 h-1 rounded-full bg-purple-300" />
              <Link to="/our-portfolio" className="hover:text-[#552782] transition-colors">
                Clients
              </Link>
              <span className="w-1 h-1 rounded-full bg-purple-300" />
              <Link to="/contact" className="hover:text-[#552782] transition-colors">
                Contact
              </Link>
              
              <button 
                onClick={() => setShowPillNav(false)}
                className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center hover:bg-purple-200 transition-colors ml-1 cursor-pointer"
                title="Dismiss"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
