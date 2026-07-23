import { Search, Target, Share2, Shield, Code, Smartphone, FileText, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const EverythingGrid = () => {
  const CATEGORIES = [
    {
      title: "Search Engine Optimization",
      desc: "Rank on Page 1 of Google organic search results.",
      action: "Improve Rankings & Traffic",
      link: "/seo-service-in-delhi",
      icon: Search,
    },
    {
      title: "Pay Per Click",
      desc: "Instant high-intent buyer lead generation.",
      action: "Quick Sales",
      link: "/google-ads-services",
      icon: Target,
    },
    {
      title: "Social Media Marketing",
      desc: "Engage audience & build loyal brand followers.",
      action: "Enhance Engagement",
      link: "/smm-service-in-delhi",
      icon: Share2,
    },
    {
      title: "Reputation Management",
      desc: "Manage online reviews & brand trust perception.",
      action: "Build Reputation",
      link: "/contact-us",
      icon: Shield,
    },
    {
      title: "Web Development",
      desc: "100/100 PageSpeed score custom React websites.",
      action: "Develop A Website",
      link: "/website-design-service-in-delhi",
      icon: Code,
    },
    {
      title: "App Development",
      desc: "Custom mobile apps for iOS & Android devices.",
      action: "Build An App",
      link: "/contact-us",
      icon: Smartphone,
    },
    {
      title: "Content Marketing",
      desc: "Engaging copies & articles that convert visitors.",
      action: "Create Content",
      link: "/content-writing-service-in-delhi",
      icon: FileText,
    },
    {
      title: "CRM Solutions",
      desc: "Automated customer relationship & lead routing.",
      action: "Become CRM Partner",
      link: "/contact-us",
      icon: Database,
    },
  ];

  return (
    <section className="py-24 bg-[#F7F6FB] text-slate-900 select-none border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header (Video 00:47 - 00:50) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-100 px-3.5 py-1.5 rounded-full mb-3 inline-block border border-purple-200">
            ✦ Complete Capabilities Suite
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-jost mb-4">
            Our Digital Growth Services:{" "}
            <span className="bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent">
              Everything You Need To Grow Stronger
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Growth doesn't happen by chance but happens through the right strategy. Everything you need to build, market, and scale your business online under one roof.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const IconComp = cat.icon;
            return (
              <Link
                key={cat.title}
                to={cat.link}
                className="bg-white p-6 rounded-2xl border border-purple-200/90 shadow-sm hover:shadow-md hover:border-purple-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center group-hover:bg-purple-800 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2 font-jost group-hover:text-purple-800 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                    {cat.action}
                  </span>
                  <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
