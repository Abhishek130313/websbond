import { Award, Sliders, FileSpreadsheet, Coins } from "lucide-react";

const CHOOSE_ITEMS = [
  {
    title: "Expert-Led Strategy",
    desc: "Campaigns driven by search engine specialists, web developers, and marketing experts in Delhi NCR utilizing advanced market trends and data audits.",
    icon: <Award className="w-7 h-7 text-indigo-500" />,
  },
  {
    title: "Customized Solutions",
    desc: "Tailored SEO keyword lists, custom responsive website designing, and custom-targeted social ads adapted for your exact business requirements.",
    icon: <Sliders className="w-7 h-7 text-indigo-500" />,
  },
  {
    title: "Transparent Reporting",
    desc: "Clear and straightforward performance reports for PPC ads, SMM, organic traffic progress, and GMB local search engine visibility positioning.",
    icon: <FileSpreadsheet className="w-7 h-7 text-indigo-500" />,
  },
  {
    title: "Affordable Excellence",
    desc: "Premium, agency-level marketing expertise and high conversion execution rates at budget-friendly packages designed to scale your business ROI.",
    icon: <Coins className="w-7 h-7 text-indigo-500" />,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">✦ Partner With Us</span>
          <h2 className="section-heading mt-4">
            Why choose us?
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Partner with the best SEO & digital marketing agency in Delhi NCR & Haryana for unmatched digital excellence.
          </p>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 text-center">
          {CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`px-6 flex flex-col items-center space-y-4 relative ${
                idx !== 0 ? "lg:border-l lg:border-zinc-200/80" : ""
              }`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-indigo-50 transition-transform duration-300 hover:scale-105">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-zinc-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
