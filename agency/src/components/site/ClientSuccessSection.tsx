import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Premium SEO Copywriting & Headline (50% Width) */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-2">
            
            {/* Top Tagline Badge */}
            <div className="flex items-center gap-2 mb-3.5 text-purple-900 font-bold text-xs bg-[#F3EAFA] px-3.5 py-1.5 rounded-full border border-purple-200/70 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>Proven Growth & Verified Case Studies</span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-extrabold text-[#241344] tracking-tight leading-snug mb-5 font-sans">
              Success Stories Powered by Strategic Design{" "}
              <span className="font-montserrat font-black italic text-[#552782] block mt-1 text-2xl sm:text-3xl lg:text-[36px]">
                and Digital Marketing
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Having trouble getting qualified leads, increasing online visibility, and converting visitors into business? As a trusted <strong className="text-slate-900 font-bold">web design company & digital marketing agency in Delhi NCR, India</strong>, we help businesses achieve measurable growth through innovative engineering and result-driven services. Our fast, responsive, and conversion-oriented websites work well in synchronization with <Link to="/seo-service-in-delhi" className="text-[#552782] font-bold hover:underline">SEO services India</Link>, Google Ads (PPC), content marketing, and lead generation campaigns.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
              Our objective isn't limited to only creating an online presence for you; rather, it is also about driving scalable revenue through our <Link to="/digital-marketing-agency" className="text-[#552782] font-bold hover:underline">digital marketing services India</Link>. Be it a startup seeking affordable website development or an already well-established business entity, we have tailored digital marketing solutions for everyone who wants to grow their business.
            </p>

            {/* Bold Closing Line */}
            <p className="text-[#241344] font-bold text-xs sm:text-sm mb-6 font-sans">
              Let's build something that doesn't just look great but delivers real business results.
            </p>

            {/* View More Button */}
            <Link
              to="/our-portfolio"
              className="inline-flex items-center gap-2 bg-[#20103A] hover:bg-[#351A5E] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95"
            >
              <span>View More</span>
              <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

          {/* Right Column: Clean 6 Showcase Cards directly on light background (Zero dark box) */}
          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              
              {/* Card 1: Hollywood */}
              <Link 
                to="/our-portfolio"
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-purple-300 flex flex-col justify-between h-48 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.02] group relative overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="font-black text-sm sm:text-base text-[#1E1238] tracking-tight group-hover:text-[#552782] transition-colors leading-tight">
                    Hollywood<span className="text-amber-500">✦</span>
                  </span>
                  <span className="text-[8.5px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                    MEDIA & ENT.
                  </span>
                </div>

                {/* Growth Metric & Sparkline Chart */}
                <div className="flex items-end justify-between my-1.5 pt-1.5 border-t border-slate-100">
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-black text-emerald-600 flex items-center gap-0.5 font-sans">
                      <TrendingUp className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>+248%</span>
                    </span>
                    <span className="text-[9.5px] font-semibold text-slate-500 leading-tight">
                      Organic Growth
                    </span>
                  </div>

                  {/* Sparkline Chart */}
                  <svg className="w-12 h-6 text-emerald-500 shrink-0" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 25C10 22 18 24 26 18C34 12 42 16 58 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Bottom Link */}
                <div className="border-t border-slate-100 pt-1.5 flex items-center justify-between text-[10.5px] font-extrabold text-purple-900 group-hover:text-purple-700">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Card 2: A1 Painting */}
              <Link 
                to="/our-portfolio"
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-purple-300 flex flex-col justify-between h-48 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.02] group relative overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="font-extrabold text-[11px] sm:text-xs text-rose-800 tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    A1 PAINTING
                  </span>
                  <span className="text-[8.5px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                    EPOXY SERVICES
                  </span>
                </div>

                {/* Growth Metric & Sparkline Chart */}
                <div className="flex items-end justify-between my-1.5 pt-1.5 border-t border-slate-100">
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-black text-emerald-600 flex items-center gap-0.5 font-sans">
                      <TrendingUp className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>+186%</span>
                    </span>
                    <span className="text-[9.5px] font-semibold text-slate-500 leading-tight">
                      Leads Generated
                    </span>
                  </div>

                  <svg className="w-12 h-6 text-emerald-500 shrink-0" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 26C12 24 20 20 28 16C36 12 46 14 58 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="border-t border-slate-100 pt-1.5 flex items-center justify-between text-[10.5px] font-extrabold text-purple-900 group-hover:text-purple-700">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Card 3: Access2Wellbeing */}
              <Link 
                to="/our-portfolio"
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-purple-300 flex flex-col justify-between h-48 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.02] group relative overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="font-extrabold text-[11px] sm:text-xs text-amber-900 tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    Access2Wellbeing
                  </span>
                  <span className="text-[8.5px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                    HEALTHCARE
                  </span>
                </div>

                {/* Growth Metric & Sparkline Chart */}
                <div className="flex items-end justify-between my-1.5 pt-1.5 border-t border-slate-100">
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-black text-emerald-600 flex items-center gap-0.5 font-sans">
                      <TrendingUp className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>+314%</span>
                    </span>
                    <span className="text-[9.5px] font-semibold text-slate-500 leading-tight">
                      Website Traffic
                    </span>
                  </div>

                  <svg className="w-12 h-6 text-emerald-500 shrink-0" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 28C10 24 22 18 32 14C42 10 48 12 58 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="border-t border-slate-100 pt-1.5 flex items-center justify-between text-[10.5px] font-extrabold text-purple-900 group-hover:text-purple-700">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Card 4: ArtValue */}
              <Link 
                to="/our-portfolio"
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-purple-300 flex flex-col justify-between h-48 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.02] group relative overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="font-black text-xs sm:text-sm text-teal-800 tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    ArtValue
                  </span>
                  <span className="text-[8.5px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                    CREATIVE AGENCY
                  </span>
                </div>

                {/* Growth Metric & Sparkline Chart */}
                <div className="flex items-end justify-between my-1.5 pt-1.5 border-t border-slate-100">
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-black text-emerald-600 flex items-center gap-0.5 font-sans">
                      <TrendingUp className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>+210%</span>
                    </span>
                    <span className="text-[9.5px] font-semibold text-slate-500 leading-tight">
                      Conversions
                    </span>
                  </div>

                  <svg className="w-12 h-6 text-emerald-500 shrink-0" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 24C12 22 22 18 30 14C38 10 46 12 58 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="border-t border-slate-100 pt-1.5 flex items-center justify-between text-[10.5px] font-extrabold text-purple-900 group-hover:text-purple-700">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Card 5: Auto Tyre */}
              <Link 
                to="/our-portfolio"
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-purple-300 flex flex-col justify-between h-48 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.02] group relative overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="font-extrabold text-[11px] sm:text-xs text-slate-900 tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    AUTO TYRE
                  </span>
                  <span className="text-[8.5px] font-bold text-amber-600 tracking-wider uppercase mt-0.5">
                    WHEELS CENTRE
                  </span>
                </div>

                {/* Growth Metric & Sparkline Chart */}
                <div className="flex items-end justify-between my-1.5 pt-1.5 border-t border-slate-100">
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-black text-emerald-600 flex items-center gap-0.5 font-sans">
                      <TrendingUp className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>+159%</span>
                    </span>
                    <span className="text-[9.5px] font-semibold text-slate-500 leading-tight">
                      Revenue Growth
                    </span>
                  </div>

                  <svg className="w-12 h-6 text-emerald-500 shrink-0" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 25C14 24 24 20 32 16C40 12 48 14 58 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="border-t border-slate-100 pt-1.5 flex items-center justify-between text-[10.5px] font-extrabold text-purple-900 group-hover:text-purple-700">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Card 6: Biller Press */}
              <Link 
                to="/our-portfolio"
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-purple-300 flex flex-col justify-between h-48 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-[1.02] group relative overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="font-black text-[11px] sm:text-xs text-[#231244] tracking-tight group-hover:scale-105 transition-transform leading-tight">
                    BILLER PRESS
                  </span>
                  <span className="text-[8.5px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                    PUBLISHING
                  </span>
                </div>

                {/* Growth Metric & Sparkline Chart */}
                <div className="flex items-end justify-between my-1.5 pt-1.5 border-t border-slate-100">
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-black text-emerald-600 flex items-center gap-0.5 font-sans">
                      <TrendingUp className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>+178%</span>
                    </span>
                    <span className="text-[9.5px] font-semibold text-slate-500 leading-tight">
                      Qualified Leads
                    </span>
                  </div>

                  <svg className="w-12 h-6 text-emerald-500 shrink-0" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 27C12 24 22 20 30 16C38 12 46 14 58 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="border-t border-slate-100 pt-1.5 flex items-center justify-between text-[10.5px] font-extrabold text-purple-900 group-hover:text-purple-700">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
