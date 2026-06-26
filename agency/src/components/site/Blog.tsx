import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const posts = blogPosts.slice(0, 3);

export const Blog = () => (
  <section className="py-16 md:py-20" style={{ background: "#f5f5f5" }}>
    <div className="container">
      {/* Section header — arrow + orange text tagline */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span style={{ color: "#002b49" }}>→</span>
          <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#eb560c" }}>
            NEWS AND BLOG
          </span>
        </div>
        <h2 className="font-jost font-bold" style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#002b49" }}>
          Build your digital presence with{" "}
          <span style={{ color: "#eb560c" }}>expert insights</span>
        </h2>
      </div>

      {/* 3-column blog cards - match reference site */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group block bg-white rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
          >
            {/* Image with orange category badge (bottom-left overlay) */}
            <div className="relative overflow-hidden" style={{ height: 230 }}>
              <img
                src={p.coverImg}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Orange category badge - bottom left, like reference */}
              <span
                className="absolute bottom-0 left-0 text-white text-xs font-bold px-4 py-2"
                style={{ background: "#eb560c" }}
              >
                {p.category}
              </span>
            </div>

            {/* Card content */}
            <div className="p-5">
              {/* Date */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{p.date}</span>
              </div>

              {/* Title */}
              <h3
                className="font-jost font-bold text-lg leading-snug mb-4 transition-colors group-hover:text-[#eb560c] line-clamp-2"
                style={{ color: "#002b49" }}
              >
                {p.title}
              </h3>

              {/* Explore More button - exact like reference */}
              <div
                className="inline-flex items-center gap-2 border border-gray-300 px-5 py-2 rounded text-sm font-medium transition-all duration-300 group-hover:border-[#eb560c] group-hover:text-[#eb560c]"
                style={{ color: "#002b49" }}
              >
                Explore More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
