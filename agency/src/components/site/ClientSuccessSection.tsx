import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export const ClientSuccessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F7FD] text-slate-900 select-none border-b border-purple-100 relative overflow-hidden">
      
      {/* Background Decorative Tech Circuit Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading + SEO Paragraphs + Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F2EAFA] px-3.5 py-1.5 rounded-full text-purple-900 font-bold text-xs mb-4 border border-purple-200/70 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>Proven Growth & Verified Success</span>
            </div>

            {/* Main Headline (Combining Reference 1 & 2 Styles) */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#1E1238] tracking-tight leading-tight mb-4 font-sans">
              Success Stories Powered by Strategic Design{" "}
              <span className="font-montserrat font-black italic text-[#552782] block mt-1 text-3xl sm:text-4xl lg:text-[42px]">
                and Digital Marketing
              </span>
            </h2>

            {/* SEO Paragraph 1 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              Having trouble getting qualified leads, increasing online visibility, and converting visitors into business? As a trusted <strong className="text-slate-900 font-bold">web design company & digital marketing agency in Delhi NCR, India</strong>, we help businesses achieve measurable growth through innovative design and result-driven services. Our fast, responsive, and conversion-oriented websites work well in synchronization with <Link to="/seo-service-in-delhi" className="text-purple-800 font-bold hover:underline">SEO services India</Link>, Google Ads (PPC), content marketing, and lead generation campaigns.
            </p>

            {/* SEO Paragraph 2 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Our objective isn't limited to only creating an online presence for you; rather, it is also about driving scalable revenue through our <Link to="/digital-marketing-agency" className="text-purple-800 font-bold hover:underline">digital marketing services India</Link>. Be it a startup seeking affordable website development or an already well-established business entity, we have tailored digital marketing solutions for everyone who wants to grow their business.
            </p>

            {/* Bold Closing Pitch */}
            <p className="text-slate-900 font-extrabold text-sm sm:text-base mb-6 font-sans">
              Let's build something that doesn't just look great but delivers real business results.
            </p>

            {/* View More Button */}
            <Link
              to="/our-portfolio"
              className="inline-flex items-center gap-2.5 bg-[#20103A] hover:bg-[#351A5E] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95"
            >
              <span>View Portfolio & Case Studies</span>
              <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

          {/* Right Column: 6 Client Logo Cards Grid */}
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
