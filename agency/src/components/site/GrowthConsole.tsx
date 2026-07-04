import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CASES = [
  {
    name: "Dr. Geeta's Clinic",
    since: "2022",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80",
    desc: "Increased patient appointments by 280% through targeted local SEO and Google My Business optimization for this Delhi-based medical practice.",
    slug: "/our-portfolio",
  },
  {
    name: "Golden Masala Co.",
    since: "2021",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80",
    desc: "Boosted organic traffic by 300% for this spice brand through content marketing, SEO, and a fully revamped e-commerce website.",
    slug: "/our-portfolio",
  },
  {
    name: "Metro Real Estate",
    since: "2023",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=80",
    desc: "Generated 500+ qualified property leads per month using hyper-targeted Meta and Google ad campaigns with landing page optimization.",
    slug: "/our-portfolio",
  },
];

export const GrowthConsole = () => (
  <section className="py-20 md:py-24 bg-[#fafafa]">
    <div className="container">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="section-badge">✦ Case Studies</span>
        <h2 className="section-heading mt-4">
          Client success stories
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-base mt-4">
          Real results from the{" "}
          <strong className="text-indigo-600">best digital marketing agency in Delhi NCR</strong>.
          Our clients trust us for transformative growth.
        </p>
      </div>

      {/* 3-column case study cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CASES.map((c) => (
          <div
            key={c.name}
            className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] border border-zinc-100"
          >
            {/* Image with frosted "Since" badge */}
            <div className="relative overflow-hidden" style={{ height: 200 }}>
              <img
loading="lazy" decoding="async"                 src={c.image}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Frosted badge */}
              <div
                className="absolute bottom-3 left-3 backdrop-blur-md bg-white/20 border border-white/30 text-white text-center hero-premium-bg rounded-lg font-medium px-3 py-1.5 text-[11px]"
              >
                Since {c.since}
              </div>
            </div>

            {/* Card content */}
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-zinc-900">
                {c.name}
              </h3>
              <p className="text-zinc-500 text-sm mb-4 leading-relaxed">{c.desc}</p>
              <Link
                to={c.slug}
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
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
