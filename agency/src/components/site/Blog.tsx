import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const posts = blogPosts.slice(0, 3);

export const Blog = () => (
  <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
    <div className="container">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <span className="section-tagline">Latest Insights</span>
          <h2 className="section-title">
            From Our <span>Blog</span>
          </h2>
          <div className="section-underline-left mt-4" />
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap self-start sm:self-auto"
          style={{ borderColor: "#002b49", color: "#002b49" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#002b49";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#002b49";
          }}
        >
          View All Posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
          >
            {/* Cover image */}
            <div className="relative overflow-hidden" style={{ height: 220 }}>
              <img
                src={p.coverImg}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Category badge */}
              <span
                className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                style={{ background: "#eb560c" }}
              >
                {p.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-400 text-xs font-medium mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {p.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {p.readTime}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-jost font-bold text-lg leading-snug line-clamp-2 mb-3 transition-colors duration-300 group-hover:text-[#eb560c]"
                style={{ color: "#16243E" }}
              >
                {p.title}
              </h3>

              {/* Excerpt */}
              {p.excerpt && (
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {p.excerpt}
                </p>
              )}

              {/* Read more */}
              <div
                className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group-hover:gap-2.5"
                style={{ color: "#eb560c" }}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
