import { Search, Share2, Target, FileText, Cpu, BarChart3, Eye, MousePointer, TrendingUp, Sparkles } from "lucide-react";

export const ServicesMindmap = () => {
  const ORBITAL_SERVICES = [
    {
      title: "SEO & AI SEO",
      desc: "Rank higher on search engines with smart SEO and AI-powered strategies.",
      icon: Search,
    },
    {
      title: "Social Media Marketing",
      desc: "Build brand awareness, engage your audience, and grow your community.",
      icon: Share2,
    },
    {
      title: "Google Ads Management",
      desc: "Target the right audience and get instant leads with high-converting ad campaigns.",
      icon: Target,
    },
    {
      title: "Content Marketing",
      desc: "Engage, inform, and convert your audience with valuable content that builds trust.",
      icon: FileText,
    },
    {
      title: "AI Powered Marketing",
      desc: "Leverage AI tools and automation to optimize campaigns and maximize ROI.",
      icon: Cpu,
    },
    {
      title: "Analytics & Reporting",
      desc: "Track performance, measure results, and make data-driven decisions for growth.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-slate-900 select-none border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full mb-3 inline-block border border-indigo-100">
            ✦ From Website Design To Digital Marketing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans mb-4">
            Smart Strategies For{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Business Expansion
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A stunning website gets attention. Our result-driven digital marketing turns that attention into traffic, leads, and loyal customers.
          </p>
        </div>

        {/* Radial / Mindmap Grid Structure */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Hub Circle */}
          <div className="my-10 p-8 rounded-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white text-center max-w-[280px] mx-auto shadow-2xl border-4 border-indigo-500/20 flex flex-col items-center justify-center relative z-20">
            <Sparkles className="w-8 h-8 text-cyan-400 mb-2" />
            <h3 className="text-lg font-black leading-tight tracking-tight">
              Digital Solutions That Deliver Results
            </h3>
          </div>

          {/* 6 Orbital Cards Grid surrounding center */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ORBITAL_SERVICES.map((srv) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 mb-2 font-sans">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4 Bottom Outcome Feature Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Eye, label: "More Visibility" },
              { icon: MousePointer, label: "More Leads" },
              { icon: TrendingUp, label: "More Sales" },
              { icon: Sparkles, label: "Sustainable Growth" },
            ].map((pill) => {
              const IconComp = pill.icon;
              return (
                <div
                  key={pill.label}
                  className="bg-white border border-slate-200 rounded-full px-5 py-3 flex items-center justify-center gap-2.5 shadow-xs text-xs font-extrabold text-slate-800"
                >
                  <IconComp className="w-4 h-4 text-indigo-600" />
                  <span>{pill.label}</span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
