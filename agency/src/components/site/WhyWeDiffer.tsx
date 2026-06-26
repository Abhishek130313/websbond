import { Target, Users, BarChart3, Heart } from "lucide-react";

const DIFFER_ITEMS = [
  {
    title: "Innovative Strategies",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=80",
    desc: "We design creative SEO frameworks and custom social media growth campaigns that amplify organic search traffic and drive digital conversions.",
    icon: <Target className="w-5 h-5 text-white" />,
  },
  {
    title: "Expert Team",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80",
    desc: "Our group of Google Certified SEO consultants, elite designers, and developers work together to accelerate growth metrics for your business.",
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    title: "Data-Driven Insights",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80",
    desc: "We analyze user touchpoints through GA4, heatmaps, and keyword search intent to continuously scale your paid PPC ads and organic ranking ROI.",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
  },
  {
    title: "Customer-Centric",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&auto=format&fit=crop&q=80",
    desc: "We deliver personalized, transparent marketing strategies structured specifically around the unique local needs of your brand and customers.",
    icon: <Heart className="w-5 h-5 text-white" />,
  },
];

export const WhyWeDiffer = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span style={{ color: "#004b75" }}>→</span>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: "#eb560c" }}
            >
              WHY WE DIFFER
            </span>
          </div>
          <h2
            className="font-jost font-black leading-tight text-[#002b49]"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
          >
            What Makes Us the{" "}
            <span style={{ color: "#eb560c" }}>Best Digital Marketing Agency</span> Company in Delhi NCR
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base font-semibold max-w-xl mx-auto">
            Discover how Websbond blends technical search analysis with custom-crafted brand strategies to generate top tier search results.
          </p>
        </div>

        {/* 4-card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFER_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}
            >
              {/* Image Header with floating icon overlay */}
              <div className="relative overflow-hidden" style={{ height: 180 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#002b49]/10 group-hover:bg-[#002b49]/20 transition-all" />
                
                {/* Floating Icon badge */}
                <div
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "#eb560c" }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6">
                <h3
                  className="font-jost font-bold text-lg mb-2 text-[#002b49] transition-colors group-hover:text-[#eb560c]"
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
