import { ArrowRight, Globe, Search, FileText, Code, Target, Share2, Smartphone, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Web Design & Development",
    icon: Code,
    link: "/website-design-service-in-delhi",
    tag: "Sub-Second Speed",
    desc: "100/100 PageSpeed score guaranteed. Custom coded on React, Vite, and Tailwind for maximum conversions.",
    deliverables: ["Custom UI/UX Design", "100/100 Core Web Vitals", "Mobile-First Responsive", "SEO Ready Architecture"],
  },
  {
    title: "Search Engine Optimization (SEO)",
    icon: Search,
    link: "/seo-service-in-delhi",
    tag: "Rank #1 Guarantee",
    desc: "Technical SEO audits, semantic schema indexation, and high-authority link acquisition for rank dominance.",
    deliverables: ["Keyword Intent Strategy", "Technical SEO Audit", "Schema Markup", "Monthly GA4 Reports"],
  },
  {
    title: "Pay Per Click (PPC & Google Ads)",
    icon: Target,
    link: "/google-ads-services",
    tag: "3.5X - 6X Target ROI",
    desc: "Precision Google Ads & Meta ad campaigns structured for minimum cost-per-lead and maximum conversion rate.",
    deliverables: ["High-Intent Search Ads", "A/B Landing Page Testing", "Conversion Rate Tracking", "Weekly Ad Optimization"],
  },
  {
    title: "Social Media Marketing (SMM)",
    icon: Globe,
    link: "/smm-service-in-delhi",
    tag: "Viral Brand Reach",
    desc: "Strategic creative campaigns across Instagram Reels, YouTube Shorts, LinkedIn, and Facebook to build loyal followers.",
    deliverables: ["Viral Reel Production", "Content Calendar", "Community Engagement", "Brand Identity Scaling"],
  },
  {
    title: "Local SEO & Google Maps (GMB)",
    icon: MapPin,
    link: "/gmb-service-in-delhi",
    tag: "Local Top 3 Map Pack",
    desc: "Dominate local searches in Delhi NCR, Gurugram, and Haryana. Get direct phone calls and customer walk-ins.",
    deliverables: ["GMB Profile Optimization", "Review Management", "Local Citation Building", "Geo-Targeted Content"],
  },
  {
    title: "E-Commerce Growth Engine",
    icon: FileText,
    link: "/website-design-service-in-delhi",
    tag: "High Conversion Rate",
    desc: "Custom Shopify & WooCommerce stores engineered to reduce cart abandonment and multiply average order value.",
    deliverables: ["Checkout Optimization", "Payment Gateway Setup", "Fast Product Search", "Automated Email Flows"],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    link: "/contact-us",
    tag: "iOS & Android",
    desc: "Scalable hybrid and native mobile apps designed with fluid animations, push notifications, and robust cloud APIs.",
    deliverables: ["Cross-Platform Flutter/React Native", "UI Motion Design", "App Store Publishing", "Secure Backend APIs"],
  },
  {
    title: "Social Media Optimization (SMO)",
    icon: Share2,
    link: "/smo-service-in-delhi",
    tag: "Organic Authority",
    desc: "Optimize company profiles across digital channels to establish industry thought leadership and trust.",
    deliverables: ["Profile Architecture", "Visual Identity Standards", "Hashtag Strategy", "Competitor Benchmarking"],
  },
];

export const Services = () => (
  <section id="services" className="py-28 bg-[#F8FAFC] text-slate-900 relative overflow-hidden select-none border-t border-slate-200/80">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="section-badge !bg-indigo-50 !text-indigo-700 !border-indigo-100">
          ✦ Core Digital Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans mb-4 text-slate-900">
          High-Impact Strategies for{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Business Expansion
          </span>
        </h2>
        <p className="text-slate-600 text-base md:text-lg">
          From high-performance web engineering to organic search positioning, we provide complete growth solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => {
          const IconComp = service.icon;
          return (
            <Link
              key={service.title}
              to={service.link}
              className="group bento-card p-6 border-slate-200 bg-white flex flex-col justify-between hover:border-indigo-300 transition-all duration-300 relative overflow-hidden shadow-xs"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center shadow-md shadow-indigo-600/10 text-white transition-transform group-hover:scale-110">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors font-sans">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-extrabold text-purple-700 group-hover:text-purple-900">
                <span>Explore Strategy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* View All Services CTA */}
      <div className="text-center mt-16">
        <Link
          to="/seo-service-in-delhi"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-base transition-all shadow-xl shadow-purple-700/20"
        >
          <span>Explore All 8 Core Services</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </section>
);
