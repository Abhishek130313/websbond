import { Award, Sliders, FileSpreadsheet, Coins } from "lucide-react";

const CHOOSE_ITEMS = [
  {
    title: "Expert-Led Strategy",
    desc: "Campaigns driven by search engine specialists, web developers, and marketing experts in Delhi NCR utilizing advanced market trends and data audits.",
    icon: <Award className="w-8 h-8 text-[#eb560c]" />,
  },
  {
    title: "Customized Solutions",
    desc: "Tailored SEO keyword lists, custom responsive website designing, and custom-targeted social ads adapted for your exact business requirements.",
    icon: <Sliders className="w-8 h-8 text-[#eb560c]" />,
  },
  {
    title: "Transparent Reporting",
    desc: "Clear and straightforward performance reports for PPC ads, SMM, organic traffic progress, and GMB local search engine visibility positioning.",
    icon: <FileSpreadsheet className="w-8 h-8 text-[#eb560c]" />,
  },
  {
    title: "Affordable Excellence",
    desc: "Premium, agency-level marketing expertise and high conversion execution rates at budget-friendly packages designed to scale your business ROI.",
    icon: <Coins className="w-8 h-8 text-[#eb560c]" />,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#fbfcfd] border-t border-b border-gray-100/80">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span style={{ color: "#004b75" }}>→</span>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: "#eb560c" }}
            >
              PARTNER WITH US
            </span>
          </div>
          <h2
            className="font-jost font-black leading-tight text-[#002b49] mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
          >
            Why Choose Us?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-semibold max-w-xl mx-auto">
            Partner with the best SEO & digital marketing agency in Delhi NCR & Haryana for unmatched digital excellence.
          </p>
        </div>

        {/* 4-column Border Separated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 text-center">
          {CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`px-6 flex flex-col items-center space-y-4 relative ${
                idx !== 0 ? "lg:border-l lg:border-gray-200/80" : ""
              }`}
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-50 transition-transform duration-300 hover:scale-105"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-jost font-bold text-lg text-[#002b49]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs font-semibold">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
