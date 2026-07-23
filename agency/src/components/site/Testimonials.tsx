import { useState, useEffect } from "react";
import { Star, CheckCircle, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
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

  // Split reviews into pages of 3 reviews each
  const pageSize = 3;
  const totalPages = Math.ceil(reviews.length / pageSize);

  // 5-Second Automatic Rotation
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  // Current 3 reviews to display
  const currentReviews = reviews.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  return (
    <section 
      className="py-20 md:py-24 bg-[#F8FAFC] border-t border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Rating Badge & Google Links */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs mb-3 text-xs font-bold text-slate-800">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>4.9 / 5.0 Google Business Rating</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" title="Live Auto Sync" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              Real Client Reviews & Verified Feedback
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-2xl">
              Authentic reviews synced from our official Google Business Profile. Automatically updates every 5 seconds.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 hover:border-indigo-300 text-slate-800 font-bold text-xs shadow-xs hover:shadow-sm transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
              <span>Google Profile</span>
            </a>

            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all"
            >
              <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
              <span>Write a Review</span>
            </a>
          </div>
        </div>

        {/* 3-Column Review Display Grid (Rotates every 5 seconds) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[260px] transition-all duration-500">
          {currentReviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-md border border-slate-200/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <StarRow count={r.rating} />
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified Google</span>
                  </span>
                </div>
                
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  "{r.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-extrabold flex items-center justify-center text-xs border border-indigo-200 shrink-0">
                  {r.author_name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-slate-900 truncate">
                    {r.author_name}
                  </p>
                  <p className="text-slate-500 text-[11px] truncate">{r.author_role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rotation Controls: Pagination Dots + Prev/Next Arrows */}
        <div className="flex items-center justify-between mt-8">
          <div className="text-xs text-slate-500 font-medium">
            Showing Set {pageIndex + 1} of {totalPages} (Auto-rotating every 5s)
          </div>

          <div className="flex items-center gap-3">
            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 mr-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPageIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === pageIndex ? "w-6 bg-indigo-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to review set ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={() => setPageIndex((prev) => (prev - 1 + totalPages) % totalPages)}
              aria-label="Previous Google reviews set"
              className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPageIndex((prev) => (prev + 1) % totalPages)}
              aria-label="Next Google reviews set"
              className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-all shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};


