import { Globe, TrendingUp, UserCheck, Smartphone, Search, Server, Laptop, CheckCircle2 } from "lucide-react";

export const WebDesignFeatureGrid = () => {
  const FEATURES = [
    { title: "Stronger Online Presence", icon: Globe },
    { title: "More Leads & Sales", icon: TrendingUp },
    { title: "Improved User Experience", icon: UserCheck },
    { title: "Responsive Design", icon: Smartphone },
    { title: "SEO Optimized Web Pages", icon: Search },
    { title: "Scalable & Easy To Manage", icon: Server },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 select-none border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full mb-3 inline-block border border-indigo-100">
            ✦ High-Performance Web Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans mb-4">
            Low-Cost Website Design{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              That Delivers High-Impact Results
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Your website is your first impression — give it all your power. As a professional web design agency, we help companies turn visitors into customers.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Grid: 6 Mini Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {FEATURES.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 text-center flex flex-col items-center justify-center hover:bg-indigo-50/40 hover:border-indigo-200 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-indigo-600 flex items-center justify-center mb-3 shadow-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors border border-slate-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug font-sans">
                    {feat.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Featured Site Box */}
          <div className="lg:col-span-6 bg-slate-50/80 p-8 rounded-3xl border border-slate-200/80">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-sans">Stronger Online Presence</h3>
                <span className="text-xs text-indigo-600 font-bold">Custom React & Vite Architecture</span>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              Your website is the first impression your business makes. If your site is old, buggy, or slow, visitors leave before you even have a chance to talk to them. Having a professionally built website increases trust and credibility.
            </p>

            <div className="space-y-2 border-t border-slate-200/80 pt-4 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>100/100 Google PageSpeed score guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Sub-second page load times across mobile devices</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
