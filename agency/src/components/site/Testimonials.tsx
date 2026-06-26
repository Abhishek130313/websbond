import { useState, useEffect } from "react";
import { Star, MessageSquare, Sparkles, X, Plus, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import a1 from "@/assets/avatar1.webp";
import a2 from "@/assets/avatar2.webp";
import a3 from "@/assets/avatar3.webp";

const categories = ["All", "Hospitality", "Wellness", "Retail", "Fitness"];
const avatarOptions = [a1, a2, a3, a2]; // Choices for avatar pre-sets

const staticReviewsFallback = [
  { id: 1, name: "Rohit Verma", role: "Hotel Owner, Kanpur", category: "Hospitality", img: a1, text: "Websbond completely transformed our hotel's online presence. Direct website bookings increased threefold, and our customer reviews have improved significantly!", rating: 5, avatarIndex: 0 },
  { id: 2, name: "Neha Sharma", role: "Salon Owner, Lucknow", category: "Wellness", img: a2, text: "The team is extremely professional. Their 24/7 support is what sets them apart. Whenever I need updates or changes, they handle it within minutes.", rating: 5, avatarIndex: 1 },
  { id: 3, name: "Amit Patel", role: "Kirana Store, Gurgaon", category: "Retail", img: a3, text: "They built a digital ordering website that is so clean and easy to use that customers now place orders themselves via WhatsApp. Excellent craftsmanship.", rating: 5, avatarIndex: 2 },
  { id: 4, name: "Vikram Singh", role: "Gym Owner, Jaipur", category: "Fitness", img: a1, text: "Their Google and Facebook Ads setup generated 45 new memberships in the very first month. Absolute value for money.", rating: 5, avatarIndex: 3 },
];

export const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [allReviews, setAllReviews] = useState<any[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<any[]>(staticReviewsFallback);
  const [workerStats, setWorkerStats] = useState<{ timeTakenMs: number; threadId: number } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [hasFetched, setHasFetched] = useState(false);
  
  // Review Form state
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    category: "Hospitality",
    rating: 5,
    text: "",
    avatarIndex: 0
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchReviews = async () => {
    try {
      const res = await fetch(getApiUrl("/api/reviews"));
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) {
          const mapped = data.map((item: any) => ({
            ...item,
            img: avatarOptions[item.avatarIndex ?? 0] ?? a2
          }));
          setAllReviews(mapped);
          return;
        }
      }
    } catch (e) {
      console.warn("Failed to load reviews from API, using static testimonials fallback", e);
    }
    // Fallback if API fails or is empty
    setAllReviews(staticReviewsFallback);
  };

  useEffect(() => {
    // Set up intersection observer for lazy loading reviews
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          fetchReviews();
          setHasFetched(true);
        }
      },
      { rootMargin: "200px" } // Fetch 200px before coming into view
    );

    const el = document.getElementById("testimonials-section");
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasFetched]);

  useEffect(() => {
    if (allReviews.length === 0) return;

    const worker = new Worker(new URL("../../workers/query.worker.ts", import.meta.url), {
      type: "module",
    });

    worker.onmessage = (e) => {
      const { action, payload } = e.data;
      if (action === "FILTER_TESTIMONIALS_SUCCESS") {
        setFilteredReviews(payload.results);
        setWorkerStats({
          timeTakenMs: payload.timeTakenMs,
          threadId: payload.threadId,
        });
      }
    };

    worker.postMessage({
      action: "FILTER_TESTIMONIALS",
      payload: {
        reviews: allReviews,
        category: activeCategory,
      },
    });

    return () => {
      worker.terminate();
    };
  }, [allReviews, activeCategory]);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.role || !newReview.text) {
      toast({ 
        title: "Details required", 
        description: "Please fill name, role/business, and review content.",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(getApiUrl("/api/reviews"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview)
      });

      if (!res.ok) throw new Error("API post failed");

      toast({ 
        title: "Review Posted!", 
        description: "Thank you! Your review is now live in the testimonials grid." 
      });

      // Clear review content
      setNewReview({
        name: "",
        role: "",
        category: "Hospitality",
        rating: 5,
        text: "",
        avatarIndex: Math.floor(Math.random() * 4)
      });
      setIsModalOpen(false);
      fetchReviews();
    } catch {
      toast({ 
        title: "Submission failed", 
        description: "Could not post review. Please check your network or try again.", 
        variant: "destructive" 
      });
    }
    setSubmitting(false);
  };

  return (
    <section id="testimonials-section" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full radial-glow pointer-events-none" style={{ "--glow-color": "rgba(242, 161, 4, 0.02)" } as React.CSSProperties} />
      
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/5 border border-amber-500/20 text-amber-500 dark:text-amber-300 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" /> Client Stories
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
              Our happy <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">clients.</span>
            </h2>
          </div>

          {/* Categories Filters & Write Review Button */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-amber-500 dark:bg-white text-slate-950 dark:text-slate-950 border-amber-500 dark:border-white font-bold"
                        : "bg-slate-100 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-500 dark:text-muted-foreground hover:text-slate-900 dark:hover:text-white hover:border-slate-350 dark:hover:border-white/20"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-[0_0_15px_rgba(242,161,4,0.15)] hover:shadow-[0_0_25px_rgba(242,161,4,0.3)] hover:scale-[1.03] transition-all flex items-center gap-1.5 animate-pulse-slow"
              >
                <Plus className="w-3.5 h-3.5" /> Write a Review
              </button>
            </div>
            {workerStats && (
              <div className="text-[10px] text-muted-foreground flex items-center gap-1.5 font-mono bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/20 rounded-xl px-2.5 py-1 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shrink-0" />
                <span>Thread #{workerStats.threadId} active • Filtered in {workerStats.timeTakenMs}ms</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReviews.map((r, idx) => (
            <article 
              key={r.id || idx} 
              className="glass-panel rounded-3xl p-6 transition-all duration-300 hover:bg-amber-500/5 dark:hover:bg-white/[0.03] hover:border-amber-500/30 dark:hover:border-white/10 flex flex-col group relative"
            >
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-purple-500/10 transition-colors">
                <MessageSquare className="w-10 h-10" />
              </div>

              <div className="flex gap-0.5 text-amber-400 mb-5">
                {Array.from({ length: r.rating || 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-6">
                "{r.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-slate-200/80 dark:border-white/[0.06] mt-auto">
                <img 
                  src={r.img} 
                  alt={r.name} 
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-white/10" 
                  loading="lazy" 
                />
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Write a Review Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-lg rounded-3xl p-6 relative bg-slate-950 border border-white/10 shadow-2xl flex flex-col gap-5">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div>
              <h3 className="font-display font-bold text-xl text-white">Share Your Feedback</h3>
              <p className="text-xs text-muted-foreground mt-1">Submit your client review to be featured on our testimonials board.</p>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase block mb-1">Your Name</label>
                  <input 
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="E.g. Rohit Verma"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase block mb-1">Company / Role</label>
                  <input 
                    type="text"
                    required
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    placeholder="E.g. CEO, Hotel Nova"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase block mb-1">Industry</label>
                  <select 
                    value={newReview.category}
                    onChange={(e) => setNewReview({ ...newReview, category: e.target.value })}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Hospitality">Hospitality</option>
                    <option value="Wellness">Wellness</option>
                    <option value="Retail">Retail</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Tech">Tech / Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase block mb-1">Star Rating</label>
                  <div className="flex gap-1.5 mt-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(null)}
                        className="text-amber-400 focus:outline-none transition-transform active:scale-90"
                      >
                        <Star 
                          className={`w-5 h-5 ${
                            (hoveredStar !== null ? hoveredStar >= star : newReview.rating >= star) 
                              ? "fill-current" 
                              : "text-white/10"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-muted-foreground uppercase block mb-1">Choose Avatar</label>
                <div className="flex gap-3.5 mt-1">
                  {avatarOptions.map((avatar, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setNewReview({ ...newReview, avatarIndex: idx })}
                      className={`relative rounded-full overflow-hidden border-2 transition-all ${
                        newReview.avatarIndex === idx ? "border-amber-500 scale-105" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={avatar} alt={`Avatar option ${idx + 1}`} width={40} height={40} className="w-10 h-10 object-cover" />
                      {newReview.avatarIndex === idx && (
                        <div className="absolute inset-0 bg-amber-500/20 flex items-center justify-center font-bold text-white text-xs">✓</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] text-muted-foreground uppercase block mb-1">Your Review</label>
                <textarea 
                  required
                  rows={3}
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  placeholder="Share your experience working with the Websbond team..."
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-white hover:bg-slate-100 disabled:opacity-50 text-slate-950 font-bold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2 mt-2"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {submitting ? "Submitting Review..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
