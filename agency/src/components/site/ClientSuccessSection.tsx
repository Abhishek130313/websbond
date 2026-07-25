import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

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
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Premium SEO Copywriting & Headline (Exact Reference Typography) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Tagline Badge */}
            <div className="flex items-center gap-2 mb-3.5 text-purple-900 font-bold text-xs bg-[#F3EAFA] px-3.5 py-1.5 rounded-full border border-purple-200/70 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>Proven Growth & Verified Case Studies</span>
            </div>

            {/* Headline (Fitted on 1 single line each with whitespace-nowrap on desktop) */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[29px] font-extrabold text-[#241344] tracking-tight leading-tight mb-6 font-sans">
              <span className="block whitespace-normal sm:whitespace-nowrap">Success Stories Powered by Strategic Design</span>
              <span className="font-montserrat font-black italic text-[#552782] block mt-1.5 text-2xl sm:text-3xl lg:text-[38px] whitespace-normal sm:whitespace-nowrap">
                and Digital Marketing
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 font-normal">
              Having trouble getting qualified leads, increasing online visibility, and converting visitors into business? As a trusted <strong className="text-slate-900 font-bold">web design company & digital marketing agency in Delhi NCR, India</strong>, we help businesses achieve measurable growth through innovative engineering and result-driven services. Our fast, responsive, and conversion-oriented websites work well in synchronization with <Link to="/seo-service-in-delhi" className="text-[#552782] font-bold hover:underline">SEO services India</Link>, Google Ads (PPC), content marketing, and lead generation campaigns.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Our objective isn't limited to only creating an online presence for you; rather, it is also about driving scalable revenue through our <Link to="/digital-marketing-agency" className="text-[#552782] font-bold hover:underline">digital marketing services India</Link>. Be it a startup seeking affordable website development or an already well-established business entity, we have tailored digital marketing solutions for everyone who wants to grow their business.
            </p>

            {/* Bold Closing Line */}
            <p className="text-[#241344] font-bold text-sm sm:text-base mb-7 font-sans">
              Let's build something that doesn't just look great but delivers real business results.
            </p>

            {/* View More Button (Exact Reference Button) */}
            <Link
              to="/our-portfolio"
              className="inline-flex items-center gap-2 bg-[#20103A] hover:bg-[#351A5E] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95"
            >
              <span>View More</span>
              <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

          {/* Right Column: Spacious 3D Showcase Card Grid with Floating Hover Animations */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/80 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-purple-100/90 shadow-2xl relative">
              
              {/* Header Label */}
              <div className="flex items-center justify-between mb-5 border-b border-purple-100 pb-3">
                <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Featured Client Portfolio</span>
                <span className="text-xs font-bold text-purple-900 bg-purple-100/80 px-3 py-1 rounded-full shadow-2xs">Verified Brands</span>
              </div>

              {/* 6 Spacious 3D Showcase Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                
                {/* Card 1 */}
                <div className="relative bg-gradient-to-b from-white via-white to-purple-50/40 p-5 rounded-3xl border border-purple-100/80 shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-center text-center h-28 sm:h-32 group cursor-pointer overflow-hidden">
                  <div className="absolute -bottom-2 inset-x-4 h-3 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="font-black text-base sm:text-lg text-[#1E1238] tracking-tight group-hover:text-[#552782] transition-colors leading-tight">
                    Hollywood<span className="text-amber-500">✦</span>
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider group-hover:text-purple-700 transition-colors">
                    Media & Ent.
                  </span>
                </div>

                {/* Card 2 */}
                <div className="relative bg-gradient-to-b from-white via-white to-rose-50/40 p-5 rounded-3xl border border-rose-100/80 shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-center text-center h-28 sm:h-32 group cursor-pointer overflow-hidden">
                  <div className="absolute -bottom-2 inset-x-4 h-3 bg-rose-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="font-extrabold text-xs sm:text-sm text-rose-700 tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    A1 PAINTING
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 mt-1 tracking-wider">
                    EPOXY SERVICES
                  </span>
                </div>

                {/* Card 3 */}
                <div className="relative bg-gradient-to-b from-white via-white to-amber-50/40 p-5 rounded-3xl border border-amber-100/80 shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-center text-center h-28 sm:h-32 group cursor-pointer overflow-hidden">
                  <div className="absolute -bottom-2 inset-x-4 h-3 bg-amber-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="font-extrabold text-xs sm:text-sm text-amber-800 tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    Access2Wellbeing
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1">
                    Healthcare
                  </span>
                </div>

                {/* Card 4 */}
                <div className="relative bg-gradient-to-b from-white via-white to-teal-50/40 p-5 rounded-3xl border border-teal-100/80 shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-center text-center h-28 sm:h-32 group cursor-pointer overflow-hidden">
                  <div className="absolute -bottom-2 inset-x-4 h-3 bg-teal-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="font-black text-sm sm:text-base text-teal-800 tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    ArtValue
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1">
                    Creative Agency
                  </span>
                </div>

                {/* Card 5 */}
                <div className="relative bg-gradient-to-b from-white via-white to-slate-50/50 p-5 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-center text-center h-28 sm:h-32 group cursor-pointer overflow-hidden">
                  <div className="absolute -bottom-2 inset-x-4 h-3 bg-slate-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    AUTO TYRE
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-amber-600 mt-1 tracking-wider">
                    WHEELS CENTRE
                  </span>
                </div>

                {/* Card 6 */}
                <div className="relative bg-gradient-to-b from-white via-white to-indigo-50/40 p-5 rounded-3xl border border-indigo-100/80 shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-center text-center h-28 sm:h-32 group cursor-pointer overflow-hidden">
                  <div className="absolute -bottom-2 inset-x-4 h-3 bg-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="font-extrabold text-xs sm:text-sm text-[#231244] tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    BILLER PRESS
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1">
                    Publishing
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
