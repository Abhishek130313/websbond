import { Link } from "react-router-dom";
import { ArrowRight, Zap, Trophy, ShieldCheck } from "lucide-react";

export const ClientSuccessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 select-none border-b border-purple-100/60 relative overflow-hidden">
      
      {/* Background Decorative Circuit & Tech Graphic Lines (Exact Reference Style) */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-repeat" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18h2v14h-2zM32 18h2v8h-2zM53 18h2v20h-2zM74 18h2v10h-2zM95 18h2v16h-2zM11 50h2v18h-2zM32 50h2v10h-2zM53 50h2v14h-2zM74 50h2v22h-2zM95 50h2v12h-2z' fill='%2320103A' fill-rule='evenodd'/%3E%3C/svg%3E")` 
        }} 
      />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Premium SEO Copywriting & Headline (Exact Image 1 Font & Style) */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-2">
            
            {/* Top Creative Feature Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-[#F4ECFC] text-[#552782] px-3 py-1 rounded-full text-xs font-bold font-jost border border-purple-200/60 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-purple-700" />
                <span>High-Speed Engineering</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#EEF8F3] text-emerald-800 px-3 py-1 rounded-full text-xs font-bold font-jost border border-emerald-200/60 shadow-2xs">
                <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                <span>Top #1 Rank SEO Engine</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#FFF7E8] text-amber-900 px-3 py-1 rounded-full text-xs font-bold font-jost border border-amber-200/60 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Guaranteed Growth</span>
              </span>
            </div>

            {/* Headline (Line 1: Success Stories Powered by Strategic Design, Line 2: and Digital Marketing) */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[29px] font-extrabold text-[#241344] tracking-tight leading-snug mb-5 font-sans">
              <span className="block">Success Stories Powered by Strategic Design</span>
              <span className="font-montserrat font-black italic text-[#552782] block mt-1.5 text-2xl sm:text-3xl lg:text-[38px]">
                and Digital Marketing
              </span>
            </h2>

            {/* Paragraph 1 (Exact Image 1 Montserrat/Jost Font Styling) */}
            <p className="font-jost text-sm sm:text-[15px] leading-[1.75] text-[#2D2342] mb-4 font-normal">
              Having trouble getting qualified leads, increasing online visibility, and converting visitors into business? As a trusted <strong className="font-bold text-[#1E1238]">web design company & digital marketing agency in Delhi NCR, India</strong>, we help businesses achieve measurable growth through innovative engineering and result-driven services. Our fast, responsive, and conversion-oriented websites work well in synchronization with <Link to="/seo-service-in-delhi" className="font-bold text-[#552782] hover:underline">SEO services India</Link>, Google Ads (PPC), content marketing, and lead generation campaigns.
            </p>

            {/* Paragraph 2 */}
            <p className="font-jost text-sm sm:text-[15px] leading-[1.75] text-[#2D2342] mb-5 font-normal">
              Our objective isn't limited to only creating an online presence for you; rather, it is also about driving scalable revenue through our <Link to="/digital-marketing-agency" className="font-bold text-[#552782] hover:underline">digital marketing services India</Link>. Be it a startup seeking affordable website development or an already well-established business entity, we have tailored digital marketing solutions for everyone who wants to grow their business.
            </p>

            {/* Bold Closing Line */}
            <p className="font-montserrat font-extrabold text-sm sm:text-base text-[#1E1238] mb-6 tracking-tight">
              Let's build something that doesn't just look great but delivers real business results.
            </p>

            {/* View More Button */}
            <Link
              to="/our-portfolio"
              className="inline-flex items-center gap-2 bg-[#20103A] hover:bg-[#351A5E] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95 cursor-pointer"
            >
              <span>View More</span>
              <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

          {/* Right Column: Exact Image 1 Pristine Clean Company Logo Cards Grid */}
          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4.5">
              
              {/* Card 1: Hollywood */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.03] flex flex-col items-center justify-center text-center h-20 sm:h-24 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="font-black text-base text-[#1E1238] tracking-tight group-hover:scale-105 transition-transform">
                  Hollywood<span className="text-amber-500">✦</span>
                </span>
                <span className="text-[9px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                  Media & Ent.
                </span>
              </div>

              {/* Card 2: A1 Painting */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.03] flex flex-col items-center justify-center text-center h-20 sm:h-24 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="font-extrabold text-xs text-rose-800 tracking-tight group-hover:scale-105 transition-transform">
                  A1 PAINTING
                </span>
                <span className="text-[8.5px] font-bold text-slate-500 mt-0.5 tracking-wider uppercase">
                  EPOXY SERVICES
                </span>
              </div>

              {/* Card 3: Access2Wellbeing */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.03] flex flex-col items-center justify-center text-center h-20 sm:h-24 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="font-extrabold text-xs text-amber-900 tracking-tight group-hover:scale-105 transition-transform">
                  Access2Wellbeing
                </span>
                <span className="text-[9px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                  Healthcare
                </span>
              </div>

              {/* Card 4: ArtValue */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.03] flex flex-col items-center justify-center text-center h-20 sm:h-24 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="font-black text-sm text-teal-800 tracking-tight group-hover:scale-105 transition-transform">
                  ArtValue
                </span>
                <span className="text-[9px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                  Creative Agency
                </span>
              </div>

              {/* Card 5: Auto Tyre */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.03] flex flex-col items-center justify-center text-center h-20 sm:h-24 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="font-extrabold text-xs text-slate-900 tracking-tight group-hover:scale-105 transition-transform">
                  AUTO TYRE
                </span>
                <span className="text-[8.5px] font-bold text-amber-600 mt-0.5 tracking-wider uppercase">
                  WHEELS CENTRE
                </span>
              </div>

              {/* Card 6: Biller Press */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.03] flex flex-col items-center justify-center text-center h-20 sm:h-24 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="font-black text-xs text-[#231244] tracking-tight group-hover:scale-105 transition-transform">
                  BILLER PRESS
                </span>
                <span className="text-[9px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                  Publishing
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
