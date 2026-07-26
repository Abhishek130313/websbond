import { Award, Sliders, FileText, Coins } from "lucide-react";

const CHOOSE_CARDS = [
  {
    number: "01",
    title: "Expert-Led Strategy",
    numberBg: "bg-purple-600 text-white",
    iconBg: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 text-white shadow-lg shadow-purple-500/30",
    lineColor: "bg-purple-600",
    waveGradient: "from-purple-100/70 via-purple-50/30 to-transparent",
    icon: Award,
    description: (
      <>
        Campaigns driven by in-depth search engine research, competitor analysis, and data-backed strategies to{" "}
        <strong className="text-purple-700 font-extrabold">maximize your ROI.</strong>
      </>
    ),
  },
  {
    number: "02",
    title: "Customized Solutions",
    numberBg: "bg-emerald-600 text-white",
    iconBg: "bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-700 text-white shadow-lg shadow-emerald-500/30",
    lineColor: "bg-emerald-500",
    waveGradient: "from-emerald-100/70 via-emerald-50/30 to-transparent",
    icon: Sliders,
    description: (
      <>
        Tailored SEO audits, keyword research, website development, and social media strategies designed specifically for your{" "}
        <strong className="text-emerald-700 font-extrabold">business goals.</strong>
      </>
    ),
  },
  {
    number: "03",
    title: "Transparent Reporting",
    numberBg: "bg-blue-600 text-white",
    iconBg: "bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30",
    lineColor: "bg-blue-500",
    waveGradient: "from-blue-100/70 via-blue-50/30 to-transparent",
    icon: FileText,
    description: (
      <>
        Clear and straightforward reports for SEO, PPC, ads, SMM, and website performance so you always know what's{" "}
        <strong className="text-blue-700 font-extrabold">driving your growth.</strong>
      </>
    ),
  },
  {
    number: "04",
    title: "Affordable Excellence",
    numberBg: "bg-amber-500 text-white",
    iconBg: "bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30",
    lineColor: "bg-amber-500",
    waveGradient: "from-amber-100/70 via-amber-50/30 to-transparent",
    icon: Coins,
    description: (
      <>
        Premium digital marketing services at competitive prices with high conversions and long-term results that{" "}
        <strong className="text-amber-700 font-extrabold">scale your business ROI.</strong>
      </>
    ),
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-[#FAF8FF] via-[#F6F3FF] to-[#FAF8FF] select-none relative overflow-hidden border-b border-purple-100/60">
      
      {/* Background Soft Orbs & Animated Skewed Strip */}
      <div className="absolute top-10 -left-10 -right-10 h-44 bg-gradient-to-r from-purple-500/10 via-pink-500/12 via-indigo-500/10 to-purple-600/10 -rotate-1 blur-2xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-purple-100/90 border border-purple-200/90 text-purple-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
            <span>PARTNER WITH US</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight font-sans mb-2.5">
            Why{" "}
            <span className="font-montserrat font-black italic text-[#552782]">
              choose us?
            </span>
          </h2>

          <p className="font-jost text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Partner with the best SEO & digital marketing agency in Delhi NCR & Haryana for unmatched{" "}
            <strong className="text-[#552782] font-extrabold">digital excellence.</strong>
          </p>
        </div>

        {/* ── 4-Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {CHOOSE_CARDS.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.number}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 border border-purple-100/80 relative overflow-hidden flex flex-col items-center text-center justify-between group min-h-[380px]"
              >
                {/* Number Badge (Top Right) */}
                <div className={`absolute top-4 right-4 ${card.numberBg} text-xs font-extrabold px-3 py-1 rounded-lg shadow-2xs z-20`}>
                  {card.number}
                </div>

                <div className="w-full flex flex-col items-center relative z-10 pt-2">
                  {/* Icon Circle Badge */}
                  <div className={`w-20 h-20 rounded-full ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <IconComp className="w-10 h-10 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1E1238] font-sans tracking-tight mb-1">
                    {card.title}
                  </h3>

                  {/* Color Accent Indicator Line */}
                  <div className={`w-9 h-1 ${card.lineColor} rounded-full mb-4 opacity-90`} />

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-jost font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Soft Wave Background Gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${card.waveGradient} pointer-events-none rounded-b-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
