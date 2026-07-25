import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

export const ClientSuccessSection = () => {
  return (
    <section className="py-10 md:py-14 bg-white text-slate-900 select-none relative overflow-hidden">
      
      {/* Background Decorative Tech Lines & Ambient Glow */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18h2v14h-2zM32 18h2v8h-2zM53 18h2v20h-2zM74 18h2v10h-2zM95 18h2v16h-2zM11 50h2v18h-2zM32 50h2v10h-2zM53 50h2v14h-2zM74 50h2v22h-2zM95 50h2v12h-2z' fill='%2320103A' fill-rule='evenodd'/%3E%3C/svg%3E")` 
        }} 
      />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Tighter Vertical Spacing & Headline */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-2">
            
            {/* Headline (Line 1: Success Stories Powered by Strategic Design, Line 2: and Digital Marketing) */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[29px] font-extrabold text-[#241344] tracking-tight leading-snug mb-4 font-sans">
              <span className="block whitespace-nowrap">Success Stories Powered by Strategic Design</span>
              <span className="font-montserrat font-black italic text-[#552782] block mt-1 text-2xl sm:text-3xl lg:text-[38px] whitespace-nowrap">
                and Digital Marketing
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="font-jost text-sm sm:text-[15px] leading-[1.75] text-[#2D2342] mb-3.5 font-normal">
              Having trouble getting qualified leads, increasing online visibility, and converting visitors into business? As a trusted <strong className="font-bold text-[#1E1238]">web design company & digital marketing agency in Delhi NCR, India</strong>, we help businesses achieve measurable growth through innovative engineering and result-driven services. Our fast, responsive, and conversion-oriented websites work well in synchronization with <Link to="/seo-service-in-delhi" className="font-bold text-[#552782] hover:underline">SEO services India</Link>, Google Ads (PPC), content marketing, and lead generation campaigns.
            </p>

            {/* Paragraph 2 */}
            <p className="font-jost text-sm sm:text-[15px] leading-[1.75] text-[#2D2342] mb-4 font-normal">
              Our objective isn't limited to only creating an online presence for you; rather, it is also about driving scalable revenue through our <Link to="/digital-marketing-agency" className="font-bold text-[#552782] hover:underline">digital marketing services India</Link>. Be it a startup seeking affordable website development or an already well-established business entity, we have tailored digital marketing solutions for everyone who wants to grow their business.
            </p>

            {/* Bold Closing Line */}
            <p className="font-montserrat font-extrabold text-sm sm:text-base text-[#1E1238] mb-5 tracking-tight">
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

          {/* Right Column: Colorful, Animated, High-Impact 6 Brand Cards Grid */}
          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
              
              {/* Card 1: Hollywood */}
              <div className="bg-gradient-to-br from-[#1E1238] via-[#2B144E] to-[#421A78] p-5 rounded-3xl border border-purple-500/30 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div className="my-auto flex flex-col items-center">
                  <span className="font-black text-base sm:text-lg text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">
                    Hollywood<span className="text-amber-400">✦</span>
                  </span>
                  <span className="text-[10px] font-bold text-purple-200 mt-1 uppercase tracking-widest bg-purple-900/60 px-2.5 py-0.5 rounded-full border border-purple-400/20">
                    Media & Ent.
                  </span>
                </div>
                <span className="text-[9.5px] font-extrabold text-amber-300/90 tracking-wider">
                  ★ Verified Brand
                </span>
              </div>

              {/* Card 2: A1 Painting */}
              <div className="bg-gradient-to-br from-[#7F1D1D] via-[#991B1B] to-[#B91C1C] p-5 rounded-3xl border border-rose-500/30 shadow-lg hover:shadow-2xl hover:border-rose-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5 text-rose-200" />
                </div>
                <div className="my-auto flex flex-col items-center">
                  <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform leading-tight drop-shadow-sm">
                    A1 PAINTING
                  </span>
                  <span className="text-[9.5px] font-bold text-rose-100 mt-1 uppercase tracking-widest bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-400/20">
                    EPOXY SERVICES
                  </span>
                </div>
                <span className="text-[9.5px] font-extrabold text-rose-200/90 tracking-wider">
                  ★ Industrial Leader
                </span>
              </div>

              {/* Card 3: Access2Wellbeing */}
              <div className="bg-gradient-to-br from-[#78350F] via-[#92400E] to-[#B45309] p-5 rounded-3xl border border-amber-500/30 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5 text-amber-200" />
                </div>
                <div className="my-auto flex flex-col items-center">
                  <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform leading-tight drop-shadow-sm">
                    Access2Wellbeing
                  </span>
                  <span className="text-[9.5px] font-bold text-amber-100 mt-1 uppercase tracking-widest bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                    Healthcare
                  </span>
                </div>
                <span className="text-[9.5px] font-extrabold text-amber-200/90 tracking-wider">
                  ★ Wellness Leader
                </span>
              </div>

              {/* Card 4: ArtValue */}
              <div className="bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#059669] p-5 rounded-3xl border border-teal-500/30 shadow-lg hover:shadow-2xl hover:border-teal-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5 text-teal-200" />
                </div>
                <div className="my-auto flex flex-col items-center">
                  <span className="font-black text-sm sm:text-base text-white tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">
                    ArtValue
                  </span>
                  <span className="text-[9.5px] font-bold text-teal-100 mt-1 uppercase tracking-widest bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-400/20">
                    Creative Agency
                  </span>
                </div>
                <span className="text-[9.5px] font-extrabold text-teal-200/90 tracking-wider">
                  ★ Design Partner
                </span>
              </div>

              {/* Card 5: Auto Tyre */}
              <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-5 rounded-3xl border border-slate-700/50 shadow-lg hover:shadow-2xl hover:border-slate-500 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="my-auto flex flex-col items-center">
                  <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform leading-tight drop-shadow-sm">
                    AUTO TYRE
                  </span>
                  <span className="text-[9.5px] font-bold text-amber-300 mt-1 uppercase tracking-widest bg-slate-950/70 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    WHEELS CENTRE
                  </span>
                </div>
                <span className="text-[9.5px] font-extrabold text-amber-300/90 tracking-wider">
                  ★ Automotive Hub
                </span>
              </div>

              {/* Card 6: Biller Press */}
              <div className="bg-gradient-to-br from-[#2E1065] via-[#3B0764] to-[#581C87] p-5 rounded-3xl border border-purple-600/30 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:-rotate-1 hover:scale-[1.04] flex flex-col items-center justify-between text-center h-32 sm:h-36 group cursor-pointer relative overflow-hidden text-white">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-200" />
                </div>
                <div className="my-auto flex flex-col items-center">
                  <span className="font-black text-xs sm:text-sm text-white tracking-tight group-hover:scale-105 transition-transform leading-tight drop-shadow-sm">
                    BILLER PRESS
                  </span>
                  <span className="text-[9.5px] font-bold text-purple-200 mt-1 uppercase tracking-widest bg-purple-950/70 px-2.5 py-0.5 rounded-full border border-purple-400/30">
                    Publishing
                  </span>
                </div>
                <span className="text-[9.5px] font-extrabold text-purple-200/90 tracking-wider">
                  ★ Media Partner
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
