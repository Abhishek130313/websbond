import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import a1 from "@/assets/avatar1.webp";
import a2 from "@/assets/avatar2.webp";
import a3 from "@/assets/avatar3.webp";

const REVIEWS = [
  {
    id: 1,
    name: "Rohit Verma",
    role: "Hotel Owner, Gurugram",
    img: a1,
    text: "Websbond completely transformed our hotel's online presence. Direct website bookings increased threefold and our Google ranking went from nowhere to Page 1 in just 3 months. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Neha Sharma",
    role: "Salon Owner, Delhi",
    img: a2,
    text: "The team is extremely professional. Their 24/7 support is what sets them apart. Whenever I need updates or changes, they handle it within minutes. My business has grown tremendously.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Kirana Store, Faridabad",
    img: a3,
    text: "They built a digital ordering website so clean and easy to use that customers now place orders themselves. The SEO work means we now get 200+ organic visits per day. Excellent craftsmanship!",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Gym Owner, Sonipat",
    img: a1,
    text: "Their Google and Facebook Ads setup generated 45 new memberships in the very first month. The ROI has been incredible — absolute value for money from start to finish.",
    rating: 5,
  },
];

const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
    ))}
  </div>
);

export const Testimonials = () => {
  const [page, setPage] = useState(0);
  const pairs = [[REVIEWS[0], REVIEWS[1]], [REVIEWS[2], REVIEWS[3]]];
  const current = pairs[page];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="section-badge">✦ Testimonials</span>
            <h2 className="section-heading mt-4">
              What our clients say
            </h2>
          </div>
          {/* Arrow nav */}
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center transition-all hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-30 text-zinc-600"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(pairs.length - 1, p + 1))}
              disabled={page === pairs.length - 1}
              className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center transition-all hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-30 text-zinc-600"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-column testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {current.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl p-7 transition-all duration-300 hover:shadow-[var(--shadow-hover)] border border-zinc-100"
            >
              {/* Large quote mark */}
              <span className="text-5xl font-serif text-zinc-200 leading-none select-none block mb-4">"</span>
              
              {/* Review text */}
              <p className="text-zinc-600 text-sm leading-relaxed mb-6" style={{ marginBottom: 24 }}>
                {r.text}
              </p>

              {/* Footer: avatar + name + stars */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-50">
                <img
loading="lazy" decoding="async"                   src={r.img}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-zinc-900" style={{ marginBottom: 2 }}>
                    {r.name}
                  </h4>
                  <p className="text-zinc-400 text-xs" style={{ marginBottom: 0 }}>{r.role}</p>
                </div>
                <StarRow count={r.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {pairs.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === page ? "bg-indigo-500 w-6" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
