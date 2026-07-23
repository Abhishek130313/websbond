import { ArrowRight, ExternalLink, Globe, Sparkles, CheckCircle2, Search, Compass, Cpu, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURED_PROJECTS = [
  {
    title: "PestControlHaryana.com",
    category: "Service Platform & Lead Booking System",
    url: "https://pestcontrolharyana.com",
    domain: "pestcontrolharyana.com",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
    badge: "🔥 Live Client Project",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    description: "Full-stack service booking & local SEO platform built for rapid client inquiries, sub-second load times, and multi-city service routing across Haryana.",
    features: ["100/100 Google PageSpeed", "Local SEO & Map Pack Ready", "Instant Lead Form Capture"],
  },
  {
    title: "NewTimeSquare.com",
    category: "Commercial Real Estate & Retail Hub",
    url: "https://newtimesquare.com",
    domain: "newtimesquare.com",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    badge: "✨ Commercial Showcase",
    tagColor: "bg-purple-100 text-purple-800 border-purple-200",
    description: "Modern commercial real estate digital showcase featuring interactive property listings, luxury architectural layout, and direct tenant lead funnels.",
    features: ["Interactive Space Showcase", "Luxury Glassmorphic UI", "High-Converting Leads"],
  },
  {
    title: "Websbond Digital Engine",
    category: "Full-Stack Agency & Marketing Engine",
    url: "https://websbond.com",
    domain: "websbond.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    badge: "⚡ Engineering Engine",
    tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    description: "Custom engineered agency platform built on React, Vite, and Tailwind CSS. Designed for maximum site performance, GA4 telemetry, and organic rank dominance.",
    features: ["Sub-Second Core Web Vitals", "Custom React Architecture", "Automated ROI Calculations"],
  },
];

const STRATEGIC_ROADMAP = [
  {
    step: "01",
    title: "Discovery & Technical Audit",
    icon: Search,
    desc: "We perform a comprehensive audit of target search volume, competitor ranking gaps, core web vitals, and conversion bottlenecks.",
  },
  {
    step: "02",
    title: "Custom Strategy & Architecture",
    icon: Compass,
    desc: "Our senior strategists design a tailored roadmap for UI/UX wireframing, high-intent keyword targeting, and ad funnel setups.",
  },
  {
    step: "03",
    title: "High-Speed Engineering & Launch",
    icon: Cpu,
    desc: "We code custom, sub-second web applications on modern frameworks (React/Vite/Tailwind) and deploy targeted Google & Meta campaigns.",
  },
  {
    step: "04",
    title: "Growth Scaling & Revenue Dominance",
    icon: TrendingUp,
    desc: "We track every inquiry via GA4 telemetry, optimize conversion rates, and scale your organic rankings to maintain market dominance.",
  },
];

export const Process = () => (
  <>
    {/* ── Featured Projects & Live Client Work (MateBiz Style) ── */}
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden select-none border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge !bg-purple-100 !text-purple-800 !border-purple-200">
            ✦ Verified Client Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-jost mb-4 text-slate-900">
            Our Real Client Work &{" "}
            <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Live Projects
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Explore active websites and digital growth platforms engineered by Websbond for businesses across Haryana & Delhi NCR.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bento-card p-6 border-slate-200 flex flex-col justify-between group hover:border-purple-400 transition-all duration-300 relative overflow-hidden shadow-md shadow-purple-900/5"
            >
              <div>
                {/* Visual Image Banner */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 border border-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-md ${project.tagColor}`}>
                    {project.badge}
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-purple-700 mb-1 font-bold">
                  {project.category}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Feature Pills */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-extrabold text-xs sm:text-sm hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-all duration-300 shadow-sm"
                >
                  <span>Visit {project.domain}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Client Note Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50/70 to-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">More Client Projects & Live Links Coming Soon</div>
              <p className="text-xs text-slate-600 font-medium">We are continuously onboarding new brands and updating our portfolio with live site links.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-xs shrink-0 transition-all shadow-md shadow-purple-700/20"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    {/* ── Strategic Process / Roadmap Section (MateBiz Style) ── */}
    <section className="py-24 bg-[#F4F3FF] text-slate-900 relative overflow-hidden border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge !bg-purple-100 !text-purple-800 !border-purple-200">
            ✦ Step-By-Step Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-jost mb-4 text-slate-900">
            Strategic Roadmap Behind{" "}
            <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Every Successful Campaign
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Our structured, 4-phase methodology guarantees consistent project execution, high page speed, and measurable marketing ROI.
          </p>
        </div>

        {/* 4 Step Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRATEGIC_ROADMAP.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="bento-card p-6 border-purple-200/80 bg-white flex flex-col justify-between hover:border-purple-400 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 font-extrabold text-sm flex items-center justify-center font-mono">
                      {item.step}
                    </span>
                    <IconComp className="w-6 h-6 text-purple-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </>
);
