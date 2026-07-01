import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const posts = blogPosts.slice(0, 3);

export const Blog = () => (
  <section className="py-20 md:py-24 bg-[#fafafa]">
    <div className="container">
      {/* Section header */}
      <div className="text-center mb-14">
        <span className="section-badge">✦ News & Insights</span>
        <h2 className="section-heading mt-4">
          Build your digital presence with{" "}
          <span className="gradient-text">expert insights</span>
        </h2>
      </div>

      {/* 3-column blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] border border-zinc-100"
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: 220 }}>
              <img
                src={p.coverImg}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card content */}
            <div className="p-6">
              {/* Category pill + Date */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                  {p.category}
                </span>
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{p.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base leading-snug mb-4 transition-colors group-hover:text-indigo-600 text-zinc-900 line-clamp-2">
                {p.title}
              </h3>

              {/* Read more link */}
              <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-700">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
