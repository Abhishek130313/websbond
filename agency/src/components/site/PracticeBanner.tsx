import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const PracticeBanner = () => {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 text-white"
      style={{
        background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)",
      }}
    >
      {/* Subtle background graphic lines/dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Professional Mockup Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft decorative background shape */}
            <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-2xl" />
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-sm w-full"
              style={{ height: 350 }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
                alt="Digital Marketing Strategy Consultation"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c203b]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Text and Action Button */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-white">→</span>
              <span
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: "#eb560c" }}
              >
                ENHANCE YOUR BUSINESS REACH
              </span>
            </div>

            <h2
              className="font-jost font-black leading-tight"
              style={{ fontSize: "clamp(24px, 3.8vw, 42px)" }}
            >
              Enhance Your Business's Digital Reach With{" "}
              <span style={{ color: "#eb560c" }}>Targeted Marketing Strategies</span>
            </h2>

            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              Boost your brand's online presence, capture high-quality organic search queries, and drive ready-to-buy customers to your web assets. Websbond designs tailored campaign systems optimized for search positioning, content traction, and ROI performance.
            </p>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm uppercase tracking-wider"
                style={{ background: "#eb560c" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
