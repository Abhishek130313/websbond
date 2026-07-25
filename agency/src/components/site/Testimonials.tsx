import { useState, useEffect } from "react";
import { Star, CheckCircle, ExternalLink } from "lucide-react";
import { GoogleReview, REAL_GOOGLE_REVIEWS, GOOGLE_BUSINESS_PROFILE_URL, fetchLiveGoogleReviews } from "@/data/googleReviews";

const StarRow = ({ count }: { count: number }) => {
  const fullStars = Math.floor(count);
  const hasHalfStar = count % 1 !== 0;
  return (
    <div className="flex gap-0.5 items-center">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
      {hasHalfStar && (
        <div className="relative w-3.5 h-3.5 shrink-0">
          <Star className="w-3.5 h-3.5 text-amber-400 absolute inset-0" />
          <div className="overflow-hidden w-[50%] absolute inset-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )}
    </div>
  );
};

export const Testimonials = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>(REAL_GOOGLE_REVIEWS);

  // Live Pipeline Fetcher
  useEffect(() => {
    fetchLiveGoogleReviews().then((liveData) => {
      if (liveData && liveData.length > 0) {
        setReviews(liveData);
      }
    });
  }, []);

  // Duplicate list to ensure seamless infinite looping marquee
  const marqueeReviewsRow1 = [...reviews, ...reviews, ...reviews, ...reviews];
  const marqueeReviewsRow2 = [...reviews].reverse().concat([...reviews].reverse(), [...reviews].reverse());

  return (
    <section 
      className="pt-10 pb-14 md:pt-12 md:pb-16 bg-gradient-to-b from-[#F8F6FC] via-white to-[#F8F6FC] border-t border-purple-100/60 text-slate-900 select-none overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        
        {/* Header with Rating Badge & Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-purple-100/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-purple-200/70 shadow-2xs mb-2 text-xs font-extrabold text-[#552782]">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>4.9 / 5.0 Google Business Rating</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" title="Live Auto Sync" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E1238] tracking-tight font-sans">
              Client Reviews & Verified Feedback
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl font-jost font-normal">
              Authentic reviews synced live from our official Google Business Profile.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-purple-200/80 hover:border-purple-400 text-[#1E1238] font-bold text-xs shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#552782]" />
              <span>Google Profile</span>
            </a>

            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#552782] to-[#7C3AED] hover:from-[#421A78] hover:to-[#552782] text-white font-extrabold text-xs shadow-sm transition-all cursor-pointer"
            >
              <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
              <span>Write a Review</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Marquee Continuous Slider Track Container ── */}
      <div className="relative w-full overflow-hidden py-1 space-y-3">
        
        {/* Left & Right Gradient Fade Vignette Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#F8F6FC] via-[#F8F6FC]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#F8F6FC] via-[#F8F6FC]/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Row 1: Leftward Infinite Scroll */}
        <div className="animate-marquee-slow gap-3.5 px-3">
          {marqueeReviewsRow1.map((r, idx) => (
            <div
              key={`row1-${r.id}-${idx}`}
              className="w-[250px] xs:w-[280px] sm:w-[300px] md:w-[315px] shrink-0 bg-white rounded-xl p-4 border border-purple-100/90 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group/card relative overflow-hidden select-none"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-2">
                  <StarRow count={r.rating} />
                  <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200/70">
                    <CheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Excerpt Header */}
                <h3 className="font-extrabold text-[#1E1238] text-xs mb-1.5 font-sans line-clamp-1 group-hover/card:text-[#552782] transition-colors">
                  "{r.text.length > 45 ? r.text.substring(0, 42) + "..." : r.text}"
                </h3>
                
                {/* Review Text */}
                <p className="text-slate-600 text-[11px] leading-relaxed font-normal mb-3 font-jost line-clamp-3">
                  "{r.text}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-2 border-t border-purple-100/70">
                {r.profile_photo_url ? (
                  <img
                    src={r.profile_photo_url}
                    alt={r.author_name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-purple-200/90 shadow-sm shrink-0"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#552782] to-[#7C3AED] text-white font-extrabold flex items-center justify-center text-sm shadow-sm shrink-0">
                    {r.author_name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0 leading-tight">
                  <p className="font-bold text-xs sm:text-[13px] text-[#1E1238] truncate font-sans tracking-tight">
                    {r.author_name}
                  </p>
                  <p className="text-slate-500 text-[10px] truncate font-jost mt-0.5">
                    Google Verified Reviewer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Row 2: Rightward Infinite Scroll */}
        <div className="animate-marquee-reverse-slow gap-3.5 px-3">
          {marqueeReviewsRow2.map((r, idx) => (
            <div
              key={`row2-${r.id}-${idx}`}
              className="w-[250px] xs:w-[280px] sm:w-[300px] md:w-[315px] shrink-0 bg-white rounded-xl p-4 border border-purple-100/90 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group/card relative overflow-hidden select-none"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-2">
                  <StarRow count={r.rating} />
                  <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200/70">
                    <CheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Excerpt Header */}
                <h3 className="font-extrabold text-[#1E1238] text-xs mb-1.5 font-sans line-clamp-1 group-hover/card:text-[#552782] transition-colors">
                  "{r.text.length > 45 ? r.text.substring(0, 42) + "..." : r.text}"
                </h3>
                
                {/* Review Text */}
                <p className="text-slate-600 text-[11px] leading-relaxed font-normal mb-3 font-jost line-clamp-3">
                  "{r.text}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-2 border-t border-purple-100/70">
                {r.profile_photo_url ? (
                  <img
                    src={r.profile_photo_url}
                    alt={r.author_name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-purple-200/90 shadow-sm shrink-0"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-600 to-purple-800 text-white font-extrabold flex items-center justify-center text-sm shadow-sm shrink-0">
                    {r.author_name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0 leading-tight">
                  <p className="font-bold text-xs sm:text-[13px] text-[#1E1238] truncate font-sans tracking-tight">
                    {r.author_name}
                  </p>
                  <p className="text-slate-500 text-[10px] truncate font-jost mt-0.5">
                    Google Verified Reviewer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

