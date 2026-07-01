import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* Process — Certifications + Empowering section, premium SaaS style */

export const Process = () => (
  <>
    {/* ── Trusted Certifications ── */}
    <section className="py-14 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <span className="section-badge">✦ Trusted Certifications</span>
        </div>
        <div className="grid grid-cols-3 gap-5 max-w-3xl mx-auto">
          {/* Google Partner */}
          <div className="bg-white rounded-2xl flex items-center justify-center py-6 px-4 border border-zinc-100 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-zinc-200">
            <div className="flex flex-col sm:flex-row items-center gap-1.5 font-sans">
              <span className="font-extrabold text-[#4285F4] text-lg sm:text-xl">G</span>
              <span className="font-extrabold text-[#EA4335] text-lg sm:text-xl -ml-0.5">o</span>
              <span className="font-extrabold text-[#FBBC05] text-lg sm:text-xl -ml-0.5">o</span>
              <span className="font-extrabold text-[#4285F4] text-lg sm:text-xl -ml-0.5">g</span>
              <span className="font-extrabold text-[#34A853] text-lg sm:text-xl -ml-0.5">l</span>
              <span className="font-extrabold text-[#EA4335] text-lg sm:text-xl -ml-0.5">e</span>
              <span className="bg-[#4285F4] text-white text-[8px] font-bold px-2 py-0.5 rounded-full tracking-wider ml-1">
                Partner
              </span>
            </div>
          </div>

          {/* Microsoft Partner */}
          <div className="bg-white rounded-2xl flex items-center justify-center py-6 px-4 border border-zinc-100 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-zinc-200">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5 shrink-0">
                <span className="w-2.5 h-2.5 bg-[#F25022]" />
                <span className="w-2.5 h-2.5 bg-[#7FBA00]" />
                <span className="w-2.5 h-2.5 bg-[#00A4EF]" />
                <span className="w-2.5 h-2.5 bg-[#FFB900]" />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-zinc-500 text-center leading-tight">
                Microsoft <br className="hidden sm:block" />Certified
              </span>
            </div>
          </div>

          {/* Clutch Badge */}
          <div className="bg-white rounded-2xl flex items-center justify-center py-6 px-4 border border-zinc-100 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-zinc-200">
            <div className="flex items-center gap-1 font-bold text-zinc-700 text-sm sm:text-base tracking-tight">
              <span className="bg-red-500 text-white rounded px-1.5 py-0.5 text-xs font-bold mr-0.5">C</span>
              <span>Clutch</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Empowering Businesses Section ── */}
    <section className="py-20 md:py-24 bg-white">
      <div className="container max-w-4xl mx-auto text-center space-y-6 px-4">
        <span className="section-badge">✦ Empowering Businesses</span>
        
        <h2 className="section-heading">
          Elevating Visibility.{" "}
          <span className="gradient-text">Driving Growth.</span>
        </h2>
        
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
          As the best <strong>digital marketing agency in Delhi NCR & Haryana</strong>, Websbond transforms your online presence. 
          We engineer high-performance search engine rankings, design custom mobile-first layouts, and launch conversion-focused campaigns 
          to deliver measurable business returns.
        </p>
        
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          Our result-oriented <strong>SEO services in Delhi NCR</strong>, paid media <strong>Google Ads (PPC)</strong> solutions, and 
          social media optimizations (SMO) help growing brands capture target organic keywords, lower customer acquisition costs, 
          and dominate search engine visibility in a highly competitive digital landscape.
        </p>

        <div className="pt-6">
          <Link
            to="/about-us"
            className="btn-primary inline-flex"
          >
            Explore More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </>
);
