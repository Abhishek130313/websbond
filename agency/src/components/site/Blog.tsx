import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

// Show 4 most recent posts on the homepage
const posts = blogPosts.slice(0, 4);

export const Blog = () => (
  <section className="container py-16 md:py-24 relative mx-auto px-4">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
      <div>
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Growth Library
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
          Latest from <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">insights.</span>
        </h2>
      </div>
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 font-bold text-sm bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 px-6 py-3 rounded-xl transition-all hover:translate-x-1 text-slate-800 dark:text-white whitespace-nowrap self-start sm:self-auto shadow-sm"
      >
        Saare Articles Dekhein <ArrowRight className="w-4 h-4 text-purple-500 dark:text-purple-400" />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {posts.map((p, index) => (
        <Link
          key={p.slug + index}
          to={`/blog/${p.slug}`}
          className="group cursor-pointer rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.015] hover:bg-slate-50 dark:hover:bg-white/[0.030] hover:border-slate-300 dark:hover:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full justify-between"
        >
          <div className="flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200/80 dark:border-white/5 bg-muted">
              <img
                src={p.coverImg}
                alt={p.title}
                width={400}
                height={250}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />
              <span className="absolute top-4 left-4 bg-slate-900/90 dark:bg-slate-950/80 border border-white/10 text-[9px] text-purple-300 font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                {p.category}
              </span>
            </div>
            <div className="p-5">
              <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2 font-mono">{p.date}</div>
              <h3 className="font-display font-bold text-sm sm:text-base leading-snug text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors line-clamp-3">
                {p.title}
              </h3>
            </div>
          </div>
          <div className="px-5 pb-5 pt-2 text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider font-mono">
            {p.readTime}
          </div>
        </Link>
      ))}
    </div>
  </section>
);
