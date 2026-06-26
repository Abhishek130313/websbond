import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
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
      <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#f59e0b" }} />
    ))}
  </div>
);

export const Testimonials = () => {
  const [page, setPage] = useState(0);
  const pairs = [[REVIEWS[0], REVIEWS[1]], [REVIEWS[2], REVIEWS[3]]];
  const current = pairs[page];

  return (
    <section className="py-16 md:py-20" style={{ background: "#f5f5f5" }}>
      <div className="container">
        {/* Section header */}
        <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ color: "#002b49" }}>→</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#eb560c" }}>
                CLIENTS TESTIMONIAL
              </span>
            </div>
            <h2
              className="font-jost font-bold"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)", color: "#002b49", marginBottom: 0 }}
            >
              Our Client Review
            </h2>
          </div>
          {/* Arrow nav */}
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all hover:border-[#002b49] disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" style={{ color: "#002b49" }} />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(pairs.length - 1, p + 1))}
              disabled={page === pairs.length - 1}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all hover:border-[#002b49] disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" style={{ color: "#002b49" }} />
            </button>
          </div>
        </div>

        {/* 2-column testimonial cards — exactly like reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {current.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-lg p-6 transition-shadow duration-300 hover:shadow-md"
              style={{ boxShadow: "0 2px 15px rgba(0,0,0,0.06)", border: "1px solid #eee" }}
            >
              {/* Header: avatar + quote icon + stars + name */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative flex-shrink-0">
                  {/* Quote icon on avatar - exactly like reference */}
                  <span
                    className="absolute -top-1 -left-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold z-10"
                    style={{ background: "#002b49" }}
                  >
                    "
                  </span>
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                </div>
                <div>
                  <StarRow count={r.rating} />
                  <h4
                    className="font-jost font-bold text-base mt-1"
                    style={{ color: "#002b49" }}
                  >
                    {r.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{r.role}</p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed" style={{ marginBottom: 0 }}>
                {r.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {pairs.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{ background: i === page ? "#eb560c" : "#ccc" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
