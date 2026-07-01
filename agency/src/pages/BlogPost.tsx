import { ArrowLeft, Calendar, Clock, Tag, Share2, MessageCircle, ArrowRight, Sparkles, Check, Loader2 } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import { getApiUrl } from "@/lib/api";

const categoryColors: Record<string, string> = {
  "Web Development": "bg-cyan-500/10 border-cyan-500/20 text-cyan-700 dark:text-cyan-300",
  "SEO": "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  "Digital Marketing": "bg-amber-500/10 border-amber-500/20 text-amber-500 dark:text-amber-300",
  "E-Commerce": "bg-orange-500/10 border-orange-500/20 text-orange-700 dark:text-orange-300",
};

const sharePost = (title: string) => {
  if (navigator.share) {
    navigator.share({ title, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
  }
};

type BlogPostData = {
  slug: string;
  category: string;
  tags?: string | string[];
  [key: string]: unknown;
};

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [related, setRelated] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPostAndRelated = async () => {
      if (!slug) return;
      setLoading(true);
      let currentPost = null;
      
      try {
        const res = await fetch(getApiUrl(`/api/blogs/${slug}`));
        if (!res.ok) throw new Error("Blog post not found");
        const data = await res.json();
        currentPost = {
          ...data,
          tags: typeof data.tags === "string" ? data.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : (Array.isArray(data.tags) ? data.tags : [])
        };
        setPost(currentPost);
      } catch (err) {
        // Fallback to static post
        const staticPost = getPostBySlug(slug);
        if (staticPost) {
          currentPost = staticPost;
          setPost(staticPost);
        }
      }

      if (currentPost) {
        try {
          const res = await fetch(getApiUrl("/api/blogs"));
          if (!res.ok) throw new Error();
          const data = await res.json();
          const filtered = data
            .filter((b: BlogPostData) => b.slug !== slug && b.category === currentPost.category)
            .slice(0, 3)
            .map((b: BlogPostData) => ({
              ...b,
              tags: typeof b.tags === "string" ? b.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : (Array.isArray(b.tags) ? b.tags : [])
            }));
          setRelated(filtered);
        } catch (err) {
          setRelated(getRelatedPosts(currentPost.slug, 3));
        }
      }
      setLoading(false);
    };

    loadPostAndRelated();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] bg-background flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!post) return <Navigate to="/blog" replace />;

  const catColor = categoryColors[post.category] || "bg-amber-500/10 border-amber-500/20 text-amber-500 dark:text-amber-300";

  return (
    <Layout>
      <SEO
        title={`${post.title} | Websbond Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.coverImg,
          "datePublished": post.dateISO,
          "author": {
            "@type": "Organization",
            "name": post.author,
            "url": "https://websbond.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Websbond",
            "logo": { "@type": "ImageObject", "url": "https://websbond.com/assets/websbond-logo.png" }
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://websbond.com/blog/${post.slug}` }
        }}
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface-2 to-amber-500/5 dark:to-amber-950/10 pt-8 pb-12 border-b border-border">
        <div className="absolute inset-0 grid-mesh opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[110px] pointer-events-none animate-aurora-1" />

        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Category + Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${catColor}`}>
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight mb-5">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl font-medium">
            {post.excerpt}
          </p>

          {/* Author + Share */}
          <div className="flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-slate-200/80 dark:border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-sm">
                W
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{post.author}</div>
                <div className="text-xs text-muted-foreground">{post.authorRole}</div>
              </div>
            </div>
            <button
              onClick={() => sharePost(post.title)}
              className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground border border-border hover:border-slate-300 dark:hover:border-white/20 bg-card px-3.5 py-2 rounded-xl transition-all"
            >
              <Share2 className="w-3.5 h-3.5" /> Share Article
            </button>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <div className="w-full max-h-[480px] overflow-hidden">
        <img
          src={post.coverImg}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Main Content */}
      <div className="bg-background text-foreground transition-colors duration-300 py-10">
        <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_300px] gap-12 max-w-6xl">

          {/* Article Body */}
          <article
            className="prose prose-slate dark:prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-foreground
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:mb-2 prose-strong:text-foreground prose-strong:font-bold
              prose-a:text-amber-500 dark:prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* CTA Card */}
            <div className="glass-panel border-border rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Free Consultation</span>
              </div>
              <h3 className="font-display font-bold text-base text-foreground mb-2">
                Website Banwana Hai?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Free consultation lo aur jaano kaise hum aapke business ko online grow kar sakte hain.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/919306623619?text=Namaste!%20Mujhe%20website%20banwani%20hai.%20Free%20consultation%20chahiye."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Chat
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all"
                >
                  Contact Us <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="glass-panel border-border rounded-2xl p-5 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold bg-card border border-border text-muted-foreground px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust items */}
            <div className="glass-panel border-border rounded-2xl p-5 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Why Websbond?</h4>
              <ul className="space-y-2.5">
                {["100% Code Handoff", "0% Upfront Payment", "Direct Developer Chat", "100/100 PageSpeed Guarantee"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs text-foreground font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="container mx-auto px-4 max-w-6xl mt-12 pt-10 border-t border-slate-200/80 dark:border-white/[0.06]">
            <h2 className="font-display font-bold text-xl text-foreground mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="glass-panel border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/20 transition-all group"
                >
                  <div className="relative aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={rel.coverImg}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{rel.category}</span>
                    <h3 className="font-bold text-sm text-foreground mt-1 line-clamp-2 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                      {rel.title}
                    </h3>
                    <span className="text-[10px] text-muted-foreground mt-2 block">{rel.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default BlogPostPage;
