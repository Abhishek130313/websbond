import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroBlogBg from "@/assets/hero_blog_vibrant.png";
import { SEO } from "@/components/site/SEO";
import { BlogCard } from "@/components/site/BlogCard";
import { Layout } from "@/components/site/Layout";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import { blogPosts } from "@/data/blogPosts";

export const BlogPage = () => {
  const [posts, setPosts] = useState<typeof blogPosts>(blogPosts);
  const [commenting, setCommenting] = useState(false);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetch(getApiUrl("/api/blogs"));
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        if (data.length > 0) {
          setPosts(data);
        }
      } catch (err) {
        console.warn("Backend dynamic blogs fetch failed, falling back to static posts.", err);
      }
    };
    loadBlogs();
  }, []);

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCommenting(true);
    setTimeout(() => {
      toast({ title: "Comment Added Successfully!", description: "Your comment is awaiting moderation." });
      (e.target as HTMLFormElement).reset();
      setCommenting(false);
    }, 1000);
  };

  return (
    <Layout>
      <SEO 
        title="Blog & Digital Insights | Websbond" 
        description="Stay updated with the latest digital marketing trends, SEO tips, and proven strategies to grow your business online effectively." 
        path="/blog" 
      />

      {/* ── Page Hero Header ── */}
      <section 
        className="relative overflow-hidden py-20 md:py-28 text-white text-center" 
        style={{ 
          backgroundImage: `url(${heroBlogBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#09090b] pointer-events-none" />
        <div className="container relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-jost font-black text-4xl md:text-6xl leading-tight mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
            Blog
          </h1>
          <p className="text-zinc-200 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-semibold drop-shadow-md">
            Stay updated with the latest digital marketing trends, SEO tips, and proven strategies to grow your business online effectively.
          </p>
        </div>
      </section>

      {/* ── Main Split Content Section ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
            
            {/* Left: Blog Posts List (2/3 width) */}
            <div className="lg:col-span-8 space-y-12">
              {posts.map((post, idx) => (
                <article 
                  key={idx} 
                  className="bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  {/* Blog Image */}
                  <div className="relative overflow-hidden h-[340px] bg-slate-100">
                    <img 
                      src={post.coverImg} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-103" 
                    />
                  </div>

                  {/* Blog Content Details */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                      Posted on {post.date} by <span style={{ color: "#eb560c" }}>Websbond</span>
                    </div>

                    <h2 className="font-jost font-black text-2xl text-[#002b49] hover:text-[#eb560c] transition-colors leading-tight">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {post.excerpt}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded text-white transition-all text-xs uppercase tracking-wider"
                        style={{ background: "#eb560c" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
                      >
                        Continue Reading →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Right: Sidebar Widgets (1/3 width) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Widget 1: Leave a Comment */}
              <div 
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-150 text-[#002b49]"
              >
                <h3 className="font-jost font-bold text-lg mb-4 pb-2 border-b border-gray-100">
                  Leave a Comment
                </h3>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <textarea 
                    name="comment"
                    rows={4}
                    required
                    placeholder="Write your comment..."
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-xs sm:text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c] resize-none"
                  />
                  <input 
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-xs sm:text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c]"
                  />
                  <input 
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-xs sm:text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c]"
                  />
                  <input 
                    name="website"
                    type="url"
                    placeholder="Website URL (optional)"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-xs sm:text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c]"
                  />
                  <button 
                    type="submit"
                    disabled={commenting}
                    className="w-full text-white font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider bg-[#002b49] hover:opacity-95 disabled:opacity-50"
                  >
                    {commenting ? "Adding Comment..." : "Add Comment"}
                  </button>
                </form>
              </div>

              {/* Widget 2: Our Latest Blog */}
              <div 
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-150 text-[#002b49]"
              >
                <h3 className="font-jost font-bold text-lg mb-4 pb-2 border-b border-gray-100">
                  Our Latest Blog
                </h3>
                <ul className="space-y-4">
                  {posts.slice(0, 4).map((post, idx) => (
                    <li key={idx} className="flex gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      {/* Cover thumbnail */}
                      <Link to={`/blog/${post.slug}`} className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-gray-150">
                        <img 
                          src={post.coverImg} 
                          alt={post.title} 
                          className="w-full h-full object-cover" 
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link 
                          to={`/blog/${post.slug}`} 
                          className="font-jost font-bold text-xs text-[#002b49] hover:text-[#eb560c] transition-colors leading-snug line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <span className="text-[10px] text-gray-400 font-semibold block mt-1">{post.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
