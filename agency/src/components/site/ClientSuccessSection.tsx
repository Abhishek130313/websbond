import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

export const ClientSuccessSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#F8F7FD] text-slate-900 select-none border-b border-purple-100 relative overflow-hidden">
      
      {/* Background Decorative Tech Circuit Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading + SEO Paragraphs + Interactive Read More + CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F2EAFA] px-3.5 py-1.5 rounded-full text-purple-900 font-bold text-xs mb-4 border border-purple-200/70 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>Proven Growth & Verified Business Impact</span>
            </div>

            {/* Main Headline (100% Original Websbond Copywriting) */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#1E1238] tracking-tight leading-tight mb-4 font-sans">
              Engineering Scalable Success for Modern Brands{" "}
              <span className="font-montserrat font-black italic text-[#552782] block mt-1 text-3xl sm:text-4xl lg:text-[42px]">
                Through Next-Gen Design & Marketing
              </span>
            </h2>

            {/* Always Visible Paragraph (Clean, Compact, High-Impact) */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Struggling to attract qualified leads, dominate Google search rankings, or convert website traffic into actual profit? As Delhi NCR & India's premier digital transformation agency, <strong className="text-slate-900 font-bold">Websbond</strong> combines high-speed web engineering with laser-targeted performance marketing to turn your digital assets into high-yield revenue engines.
            </p>

            {/* Interactive Collapsible / Expandable Rich SEO Content */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isExpanded ? "max-h-[800px] opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-1 border-t border-purple-100/80">
                <p>
                  Whether you need an <strong className="text-slate-900 font-bold">affordable budget-friendly website</strong>, custom eCommerce infrastructure, top-tier <Link to="/seo-service-in-delhi" className="text-purple-800 font-bold hover:underline">SEO strategies in India</Link> to capture organic market share, or high-ROI paid ad campaigns (Google Ads & Meta Ads), our full-funnel solutions are engineered to maximize your return on ad spend.
                </p>
                <p>
                  We don't just build websites — we architect complete growth ecosystems that outrank competitors, establish online authority, and deliver measurable business outcomes across India and global markets.
                </p>
              </div>
            </div>

            {/* Read More / Read Less Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-purple-900 hover:text-purple-700 font-extrabold text-xs sm:text-sm my-3 cursor-pointer transition-colors focus:outline-none"
            >
              <span>{isExpanded ? "Show Less" : "Read Full Story & SEO Insights"}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4 text-purple-700" /> : <ChevronDown className="w-4 h-4 text-purple-700" />}
            </button>

            {/* Bold Closing Pitch */}
            <p className="text-slate-900 font-extrabold text-sm sm:text-base mb-6 font-sans">
              Partner with Websbond to transform your online presence into a dominant market force.
            </p>

            {/* View More Button */}
            <Link
              to="/our-portfolio"
              className="inline-flex items-center gap-2.5 bg-[#20103A] hover:bg-[#351A5E] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95"
            >
              <span>Explore Our Case Studies & Portfolio</span>
              <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

          {/* Right Column: 6 Clean Client Logo Cards Grid */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-purple-100 shadow-xl">
              
              <div className="flex items-center justify-between mb-4 border-b border-purple-100 pb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trusted By Growing Brands</span>
                <span className="text-xs font-bold text-purple-800 bg-purple-100/80 px-2.5 py-1 rounded-full">5+ Live Clients</span>
              </div>

              {/* 6 Logo Cards (2 columns x 3 rows) */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Logo 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col items-center justify-center text-center h-24 group">
                  <span className="font-black text-xl text-[#231244] tracking-tight group-hover:scale-105 transition-transform">
                    LUMAX<span className="text-amber-500">✦</span>
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 mt-1 uppercase">Auto & Lighting</span>
                </div>

                {/* Logo 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col items-center justify-center text-center h-24 group">
                  <span className="font-extrabold text-lg text-slate-800 tracking-tight group-hover:scale-105 transition-transform">
                    MIGSUN
                  </span>
                  <span className="text-[9px] font-bold text-purple-700 uppercase tracking-wider">DREAM IT LIVE IT</span>
                </div>

                {/* Logo 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col items-center justify-center text-center h-24 group">
                  <span className="font-black text-lg text-blue-900 tracking-tight group-hover:scale-105 transition-transform">
                    DSA <span className="text-xs font-semibold text-slate-500">SERVICES</span>
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 mt-1">Corporate Advisory</span>
                </div>

                {/* Logo 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col items-center justify-center text-center h-24 group">
                  <span className="font-bold text-base text-amber-900 tracking-tight group-hover:scale-105 transition-transform">
                    GALGOTIAS
                  </span>
                  <span className="text-[9px] font-medium text-slate-500">UNIVERSITY</span>
                </div>

                {/* Logo 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col items-center justify-center text-center h-24 group">
                  <span className="font-bold text-xl text-purple-900 italic font-serif group-hover:scale-105 transition-transform">
                    naturals
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">Salon & Wellness</span>
                </div>

                {/* Logo 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col items-center justify-center text-center h-24 group">
                  <span className="font-extrabold text-lg text-sky-700 tracking-tight group-hover:scale-105 transition-transform">
                    Enable <span className="text-xs font-normal text-slate-500">IT</span>
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">Software Solutions</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
