import { useState, useEffect } from "react";
import { Star, CheckCircle, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { GoogleReview, REAL_GOOGLE_REVIEWS, GOOGLE_BUSINESS_PROFILE_URL, fetchLiveGoogleReviews } from "@/data/googleReviews";

const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export const Testimonials = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>(REAL_GOOGLE_REVIEWS);
  const [pageIndex, setPageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Live Pipeline Fetcher
  useEffect(() => {
    fetchLiveGoogleReviews().then((liveData) => {
      if (liveData && liveData.length > 0) {
        setReviews(liveData);
      }
    });
  }, []);

  // Display exactly 4 review boxes per view/page as requested
  const pageSize = 4;
  const totalPages = Math.ceil(reviews.length / pageSize);

  // 6-Second Automatic Rotation
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  // Current 4 reviews to display on screen
  const currentReviews = reviews.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  return (
    <section 
      className="pt-6 pb-12 md:pt-8 md:pb-14 bg-gradient-to-b from-[#F8F6FC] via-white to-[#F8F6FC] border-t border-purple-100/60 text-slate-900 select-none overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Rating Badge & Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-5 border-b border-purple-100/80 pb-6">
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

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1238] tracking-tight font-sans">
              Client Reviews & Verified Feedback
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl font-jost font-normal">
              Authentic reviews synced from our official Google Business Profile. Automatically updates every 6 seconds.
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

        {/* ── 4 Compact Review Boxes Display Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch mb-6">
          {currentReviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl p-4 sm:p-4.5 transition-all duration-300 hover:shadow-lg border border-purple-100 hover:border-purple-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <StarRow count={r.rating} />
                  <span className="inline-flex items-center gap-1 text-[9.5px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                    <CheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>
                
                {/* Review Text */}
                <p className="text-slate-700 text-xs leading-relaxed font-normal mb-4 font-jost line-clamp-4">
                  "{r.text}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-purple-50">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 text-[#552782] font-black flex items-center justify-center text-xs border border-purple-200 shrink-0 shadow-2xs">
                  {r.author_name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-extrabold text-xs text-[#1E1238] truncate font-sans">
                    {r.author_name}
                  </p>
                  <p className="text-slate-500 text-[10px] truncate font-jost">Google Verified Reviewer</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── Pagination Controls: Dots & Next/Prev ── */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-xs text-slate-500 font-semibold font-jost">
            Showing <strong className="text-[#552782]">{pageIndex * pageSize + 1}-{Math.min((pageIndex + 1) * pageSize, reviews.length)}</strong> of <strong>{reviews.length}</strong> Verified Reviews
          </div>

          <div className="flex items-center gap-4">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPageIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === pageIndex ? "w-7 bg-[#552782]" : "w-2 bg-purple-200 hover:bg-purple-300"
                  }`}
                  aria-label={`Go to review page ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPageIndex((prev) => (prev - 1 + totalPages) % totalPages)}
                aria-label="Previous reviews page"
                className="w-8 h-8 rounded-full border border-purple-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#552782] hover:border-purple-400 hover:bg-purple-50 transition-all shadow-2xs cursor-pointer active:scale-95"
                title="Previous 4 Reviews"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={() => setPageIndex((prev) => (prev + 1) % totalPages)}
                aria-label="Next reviews page"
                className="w-8 h-8 rounded-full border border-purple-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#552782] hover:border-purple-400 hover:bg-purple-50 transition-all shadow-2xs cursor-pointer active:scale-95"
                title="Next 4 Reviews"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
