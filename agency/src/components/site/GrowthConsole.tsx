import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* Case Studies section — matches reference site exactly:
   → CASE STUDIES tagline
   "Case Studies: Client Success Stories"
   3-col slider cards with website screenshot, "With Us Since XXXX" badge, client name, excerpt, Explore More button
*/
const CASES = [
  {
    name: "Dr. Geeta's Clinic",
    since: "2022",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80",
    desc: "Increased patient appointments by 280% through targeted local SEO and Google My Business optimization for this Delhi-based medical practice.",
    slug: "/our-work",
  },
  {
    name: "Golden Masala Co.",
    since: "2021",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80",
    desc: "Boosted organic traffic by 300% for this spice brand through content marketing, SEO, and a fully revamped e-commerce website.",
    slug: "/our-work",
  },
  {
    name: "Metro Real Estate",
    since: "2023",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=80",
    desc: "Generated 500+ qualified property leads per month using hyper-targeted Meta and Google ad campaigns with landing page optimization.",
    slug: "/our-work",
  },
];

export const GrowthConsole = () => (
  <section className="py-16 md:py-20" style={{ background: "#f5f5f5" }}>
    <div className="container">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span style={{ color: "#002b49" }}>→</span>
          <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#eb560c" }}>
            CASE STUDIES
          </span>
        </div>
        <h2
          className="font-jost font-bold mb-3"
          style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#002b49" }}
        >
          Case Studies: Client Success Stories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Real Success Stories from the{" "}
          <strong style={{ color: "#eb560c" }}>Best Digital Marketing Agency in Delhi NCR</strong>.
          Our clients trust us as the top SEO agency in Delhi for transformative results.
        </p>
      </div>

      {/* 3-column case study cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CASES.map((c) => (
          <div
            key={c.name}
            className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #eee" }}
          >
            {/* Image with "With Us Since" badge */}
            <div className="relative overflow-hidden" style={{ height: 200 }}>
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Orange badge — bottom left */}
              <div
                className="absolute bottom-4 left-4 text-white text-center rounded font-bold px-3 py-2"
                style={{ background: "#eb560c", lineHeight: 1.2, fontSize: 12 }}
              >
                With Us<br />Since {c.since}
              </div>
            </div>

            {/* Card content */}
            <div className="p-5">
              <h3
                className="font-jost font-bold text-lg mb-2"
                style={{ color: "#002b49" }}
              >
                {c.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{c.desc}</p>
              <Link
                to={c.slug}
                className="inline-flex items-center gap-2 border border-gray-300 px-5 py-2 rounded text-sm font-medium transition-all duration-300 hover:border-[#eb560c] hover:text-[#eb560c]"
                style={{ color: "#002b49" }}
              >
                Explore More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
