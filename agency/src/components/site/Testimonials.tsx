import { useState, useEffect } from "react";
import { Star, Quote, Plus, X, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import a1 from "@/assets/avatar1.webp";
import a2 from "@/assets/avatar2.webp";
import a3 from "@/assets/avatar3.webp";

const avatarOptions = [a1, a2, a3, a2];

const STATIC_REVIEWS = [
  {
    id: 1,
    name: "Rohit Verma",
    role: "Hotel Owner, Gurugram",
    img: a1,
    text: "Websbond completely transformed our hotel's online presence. Direct website bookings increased threefold and our Google ranking went from nowhere to Page 1 in just 3 months. Highly recommended!",
    rating: 5,
    avatarIndex: 0,
  },
  {
    id: 2,
    name: "Neha Sharma",
    role: "Salon Owner, Delhi",
    img: a2,
    text: "The team is extremely professional. Their 24/7 support is what sets them apart. Whenever I need updates or changes, they handle it within minutes. My business has grown tremendously.",
    rating: 5,
    avatarIndex: 1,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Kirana Store, Faridabad",
    img: a3,
    text: "They built a digital ordering website that is so clean and easy to use that customers now place orders themselves. The SEO work means we now get 200+ organic visits per day. Excellent craftsmanship!",
    rating: 5,
    avatarIndex: 2,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Gym Owner, Sonipat",
    img: a1,
    text: "Their Google and Facebook Ads setup generated 45 new memberships in the very first month. The ROI has been incredible — absolute value for money from start to finish.",
    rating: 5,
    avatarIndex: 3,
  },
  {
    id: 5,
    name: "Priya Bansal",
    role: "E-Commerce, Haryana",
    img: a2,
    text: "Websbond built our entire e-commerce platform from scratch. It's fast, beautiful, and converts amazingly well. Our online sales have grown by 320% since launch.",
    rating: 5,
    avatarIndex: 1,
  },
  {
    id: 6,
    name: "Rajesh Kumar",
    role: "Real Estate Agency, Delhi NCR",
    img: a3,
    text: "The SEO and content strategy Websbond implemented has been a game-changer. We now rank #1 for our target keywords and get quality leads daily without any paid ads.",
    rating: 5,
    avatarIndex: 2,
  },
];

const StarRating = ({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={size === "sm" ? "w-4 h-4" : "w-5 h-5"}
        style={{ color: s <= rating ? "#f59e0b" : "#d1d5db", fill: s <= rating ? "#f59e0b" : "none" }}
      />
    ))}
  </div>
);

export const Testimonials = () => {
  const [reviews, setReviews] = useState<any[]>(STATIC_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hoverStar, setHoverStar] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", role: "", text: "", rating: 5, avatarIndex: 0 });

  useEffect(() => {
    fetch(getApiUrl("/api/reviews"))
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data?.length > 0) {
          setReviews(data.map((r: any) => ({ ...r, img: avatarOptions[r.avatarIndex ?? 0] ?? a1 })));
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(getApiUrl("/api/reviews"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast({ title: "🎉 Thank you for your review!", description: "Your testimonial will appear after moderation." });
      setIsModalOpen(false);
      setForm({ name: "", role: "", text: "", rating: 5, avatarIndex: 0 });
    } catch {
      toast({ title: "Submission failed. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28" style={{ background: "#f8fafc" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tagline">Client Reviews</span>
          <h2 className="section-title">
            What Our <span>Clients Say</span>
          </h2>
          <div className="section-underline mx-auto" />
          <p className="text-gray-500 max-w-xl mx-auto mt-5 text-base leading-relaxed">
            Don't just take our word for it — hear from the businesses we've helped grow across Delhi NCR, Haryana, and beyond.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group relative"
            >
              {/* Orange top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #eb560c, #ff9f67)" }}
              />

              {/* Quote icon */}
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: "#eb560c" }} />

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed my-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-orange-100"
                />
                <div>
                  <p className="font-jost font-bold text-sm text-[#16243E]">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review CTA */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: "#002b49" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#eb560c")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#002b49")}
          >
            <Plus className="w-4 h-4" /> Share Your Experience
          </button>
        </div>
      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl z-10">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <h3 className="font-jost font-bold text-xl text-[#002b49] mb-1">Leave a Review</h3>
            <p className="text-gray-500 text-sm mb-6">Share your experience with Websbond</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required placeholder="John Doe"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#eb560c] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Role / Business</label>
                <input
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  placeholder="e.g. Hotel Owner, Delhi"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#eb560c] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s} type="button"
                      onMouseEnter={() => setHoverStar(s)}
                      onMouseLeave={() => setHoverStar(null)}
                      onClick={() => setForm({ ...form, rating: s })}
                    >
                      <Star
                        className="w-7 h-7 transition-colors"
                        style={{
                          color: s <= (hoverStar ?? form.rating) ? "#f59e0b" : "#d1d5db",
                          fill: s <= (hoverStar ?? form.rating) ? "#f59e0b" : "none"
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Review *</label>
                <textarea
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  required rows={4} placeholder="Share your experience..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#eb560c] transition-colors resize-none"
                />
              </div>
              <button
                type="submit" disabled={submitting}
                className="w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-lg transition-all duration-300 disabled:opacity-60"
                style={{ background: "#eb560c" }}
              >
                {submitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                ) : (
                  "Submit Review"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
