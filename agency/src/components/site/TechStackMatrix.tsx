import { useState } from "react";
import { Layers, CheckCircle2 } from "lucide-react";

export const TechStackMatrix = () => {
  const [activeTab, setActiveTab] = useState("marketing");

  const TABS = [
    { id: "marketing", label: "Digital Marketing" },
    { id: "fullstack", label: "Full Stack & Frameworks" },
    { id: "frontend", label: "Backend & Frontend" },
    { id: "cms", label: "eCommerce & CMS" },
    { id: "mobile", label: "Mobile" },
    { id: "devops", label: "DevOps" },
    { id: "qa", label: "QA & Testing" },
  ];

  const TAB_ITEMS: Record<string, string[]> = {
    marketing: ["Content writing", "Email marketing", "Performance Marketing", "PPC", "SEO", "Social media", "AEO / GEO Services"],
    fullstack: ["React.js", "Vite", "Node.js", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL"],
    frontend: ["HTML5", "CSS3", "JavaScript ES6+", "REST APIs", "Express.js", "PostgreSQL", "MongoDB"],
    cms: ["Shopify Custom", "WooCommerce", "WordPress Headless", "Magento", "Webflow"],
    mobile: ["React Native", "Flutter", "iOS Swift", "Android Kotlin", "PWA"],
    devops: ["Docker", "AWS Cloud", "Vercel Enterprise", "Cloudflare CDN", "CI/CD Pipelines"],
    qa: ["Lighthouse 100/100", "Core Web Vitals", "Jest Unit Testing", "Cross-Browser QA"],
  };

  return (
    <section className="py-24 bg-[#F8FAFC] text-slate-900 select-none border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full mb-3 inline-block border border-indigo-100">
            ✦ Multidisciplinary Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans mb-4">
            Proven Expertise Across Diverse{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Industries, Platforms And Innovative Technologies
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Backed by experienced engineers, Websbond is committed to delivering scalable, robust, and advanced digital platforms tailored for specific business needs.
          </p>
        </div>

        {/* Tabbed Matrix Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Vertical Tabs Sidebar */}
          <div className="lg:col-span-5 space-y-2 bg-white p-4 rounded-3xl border border-slate-200 shadow-xs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center justify-between ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-700 hover:bg-indigo-50/60 hover:text-indigo-600"
                }`}
              >
                <span>{tab.label}</span>
                {activeTab === tab.id && <Layers className="w-4 h-4 text-cyan-400" />}
              </button>
            ))}
          </div>

          {/* Right Category Pills Grid */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs min-h-[340px] flex flex-col justify-center">
            <h3 className="text-base font-extrabold text-slate-900 mb-6 font-sans uppercase tracking-wider">
              {TABS.find(t => t.id === activeTab)?.label} Stack & Capabilities:
            </h3>

            <div className="flex flex-wrap gap-3">
              {TAB_ITEMS[activeTab]?.map((item) => (
                <div
                  key={item}
                  className="bg-indigo-50/50 border border-indigo-100 px-4 py-2.5 rounded-xl text-xs font-extrabold text-slate-800 flex items-center gap-2 shadow-xs hover:border-indigo-300 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
