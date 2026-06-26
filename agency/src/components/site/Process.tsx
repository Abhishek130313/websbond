import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

/* 
  This section matches the reference site's "Empowering Businesses" + "Trusted Certifications" layout.
  - White bg
  - 2-col: left image, right text content
  - Certification logos: Google Partner, Microsoft Certified, Clutch
*/

const WHY_POINTS = [
  "Result-Driven Digital Marketing Strategies",
  "Certified Google Partner & SEO Experts",
  "100% Transparent Reporting & Analytics",
  "Affordable Packages for SMEs & Startups",
  "Dedicated Account Manager & 24/7 Support",
  "Proven Track Record in Delhi NCR & Haryana",
];

const CERTIFICATIONS = [
  { name: "Google Partner", bg: "#fff", border: "#e2e8f0", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Partners_logo.svg/200px-Google_Partners_logo.svg.png" },
  { name: "Microsoft Certified", bg: "#fff", border: "#e2e8f0", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png" },
  { name: "Clutch", bg: "#fff", border: "#e2e8f0", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&auto=format&fit=crop&q=60" },
];

export const Process = () => (
  <>
    {/* ── Trusted Certifications ── */}
    <section className="py-14" style={{ background: "#f8fafc" }}>
      <div className="container">
        <h2
          className="font-jost font-bold text-center mb-8 uppercase tracking-widest text-xs"
          style={{ color: "#eb560c" }}
        >
          → Trusted Certifications
        </h2>
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Google Partner */}
          <div
            className="bg-white rounded-2xl flex items-center justify-center py-6 px-4 border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row items-center gap-1.5 font-sans">
              <span className="font-extrabold text-[#4285F4] text-lg sm:text-xl">G</span>
              <span className="font-extrabold text-[#EA4335] text-lg sm:text-xl -ml-0.5">o</span>
              <span className="font-extrabold text-[#FBBC05] text-lg sm:text-xl -ml-0.5">o</span>
              <span className="font-extrabold text-[#4285F4] text-lg sm:text-xl -ml-0.5">g</span>
              <span className="font-extrabold text-[#34A853] text-lg sm:text-xl -ml-0.5">l</span>
              <span className="font-extrabold text-[#EA4335] text-lg sm:text-xl -ml-0.5">e</span>
              <span className="bg-[#4285F4] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded tracking-wider ml-1">
                Partner
              </span>
            </div>
          </div>

          {/* Microsoft Partner */}
          <div
            className="bg-white rounded-2xl flex items-center justify-center py-6 px-4 border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2">
              {/* Microsoft 4-square grid */}
              <div className="grid grid-cols-2 gap-0.5 shrink-0">
                <span className="w-2.5 h-2.5 bg-[#F25022]" />
                <span className="w-2.5 h-2.5 bg-[#7FBA00]" />
                <span className="w-2.5 h-2.5 bg-[#00A4EF]" />
                <span className="w-2.5 h-2.5 bg-[#FFB900]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-tight text-center leading-tight">
                Microsoft <br className="hidden sm:block" />Certified
              </span>
            </div>
          </div>

          {/* Clutch Badge */}
          <div
            className="bg-white rounded-2xl flex items-center justify-center py-6 px-4 border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-1 font-bold text-gray-800 text-sm sm:text-base tracking-tighter">
              <span className="bg-red-500 text-white rounded px-1.5 py-0.5 text-xs font-black mr-0.5">C</span>
              <span>Clutch</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Empowering Businesses / About Section (Centered exactly like PDF) ── */}
    <section className="py-16 md:py-20" style={{ background: "#fff" }}>
      <div className="container max-w-4xl mx-auto text-center space-y-6 px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span style={{ color: "#004b75" }}>→</span>
          <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#eb560c" }}>
            EMPOWERING BUSINESSES
          </span>
        </div>
        
        <h2
          className="font-jost font-black leading-tight text-[#002b49]"
          style={{ fontSize: "clamp(24px, 3.8vw, 42px)" }}
        >
          Elevating Visibility <span style={{ color: "#eb560c" }}>Driving Growth</span>
        </h2>
        
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
          As the best <strong>digital marketing agency in Delhi NCR & Haryana</strong>, Websbond transforms your online presence. 
          We engineer high-performance search engine rankings, design custom mobile-first layouts, and launch conversion-focused campaigns 
          to deliver measurable business returns.
        </p>
        
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-medium">
          Our result-oriented <strong>SEO services in Delhi NCR</strong>, paid media <strong>Google Ads (PPC)</strong> solutions, and 
          social media optimizations (SMO) help growing brands capture target organic keywords, lower customer acquisition costs, 
          and dominate search engine visibility in a highly competitive digital landscape.
        </p>

        <div className="pt-4">
          <Link
            to="/about-us"
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-xl text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            style={{ background: "#eb560c" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
          >
            Explore More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </>
);
