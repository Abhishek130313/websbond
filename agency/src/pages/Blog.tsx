import { ArrowRight, Search, Pencil, Code2, BarChart3, Megaphone, ChevronLeft, ChevronRight, Send, Loader2, Sparkles, Folder, Database, Layers, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import { blogPosts } from "@/data/blogPosts";

const filters = [
  { label: "All Posts", icon: Pencil },
  { label: "Web Development", icon: Code2 },
  { label: "SEO", icon: BarChart3 },
  { label: "Digital Marketing", icon: Megaphone },
];

export const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [workerStats, setWorkerStats] = useState<{ timeTakenMs: number; threadId: number } | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL("../workers/query.worker.ts", import.meta.url), {
      type: "module",
    });

    worker.onmessage = (e) => {
      const { action, payload } = e.data;
      if (action === "FILTER_BLOGS_SUCCESS") {
        setFilteredPosts(payload.results);
        setWorkerStats({
          timeTakenMs: payload.timeTakenMs,
          threadId: payload.threadId,
        });
      }
    };

    worker.postMessage({
      action: "FILTER_BLOGS",
      payload: {
        posts: blogPosts,
        query: searchQuery,
        category: activeFilter,
      },
    });

    return () => {
      worker.terminate();
    };
  }, [searchQuery, activeFilter]);

  return (
    <Layout>
      <SEO 
        title="Websbond Blog | Web Development, SEO & Business Growth Indore" 
        description="Learn how to grow your business online with guides on web speed optimization, custom React code benefits, local Google SEO maps, and digital ads." 
        path="/blog" 
        keywords="websbond blog, digital agency Indore, website banwaye, digital marketing tips, organic google rankings Indore"
      />

      {/* ── Visual Sub-Hero Header ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface-2 to-indigo-500/5 dark:to-indigo-950/20 pt-8 pb-12 border-b border-border">
        
        {/* Grids and Aurora */}
        <div className="absolute inset-0 grid-mesh opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-purple-500/5 blur-[110px] pointer-events-none animate-aurora-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none animate-aurora-2" />

        {/* Animated background blogging graphics */}
        <div className="absolute top-8 left-12 w-8 h-8 border border-purple-200/35 rounded-lg rotate-12 animate-pulse pointer-events-none" />
        <div className="absolute bottom-6 right-1/3 w-6 h-6 bg-indigo-500/5 border border-indigo-200/30 rounded-full animate-bounce pointer-events-none" style={{ animationDuration: '5s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left gap-5">
              <div className="inline-flex items-center gap-2 border border-purple-200 dark:border-purple-500/20 bg-purple-50/60 dark:bg-purple-950/20 backdrop-blur-md text-purple-600 dark:text-purple-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
                Knowledge Base &amp; Insights
              </div>
              
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground tracking-tight">
                Insights &amp;<br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 dark:from-purple-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Engineering Guides.
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed font-semibold">
                Hum engineering updates, SEO speed optimization guides, aur high-converting marketing frameworks publish karte hain jo business grow karein.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919306623619?text=Namaste!%20Mujhe%20website%20banwani%20hai.%20Free%20consultation%20chahiye."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all text-xs shadow-sm animate-pulse-slow"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Consultant
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-xs"
                >
                  Contact for Free Audit <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3D Folders Visual */}
            <div className="relative flex items-center justify-center pt-8 lg:pt-0">
              <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center [perspective:1200px] pointer-events-auto group/hero">
                {/* 3D Container */}
                <div className="relative w-[260px] h-[200px] [transform-style:preserve-3d] [transform:rotateX(25deg)_rotateY(-15deg)] group-hover/hero:[transform:rotateX(15deg)_rotateY(-5deg)] transition-all duration-700 ease-out">
                  
                  {/* Folder 3 (Frontend / Guides) */}
                  <div className="absolute inset-0 bg-card border border-border rounded-2xl p-4 shadow-card backdrop-blur-md [transform:translateZ(50px)] transition-transform duration-700 ease-out group-hover/hero:[transform:translateZ(75px)] flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/5 pb-2 text-foreground">
                      <div className="flex items-center gap-1.5">
                        <Folder className="w-4 h-4 text-cyan-600" />
                        <span className="text-[8px] text-foreground font-bold font-mono">Frontend_Logs</span>
                      </div>
                      <span className="text-[7px] text-muted-foreground font-mono">v1.2</span>
                    </div>
                    <div className="space-y-1.5 py-2">
                      <div className="flex justify-between text-[7px] text-cyan-600 font-mono">
                        <span>Lighthouse Score</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                        <div className="w-full h-full bg-cyan-500" />
                      </div>
                      <div className="flex justify-between text-[7px] text-muted-foreground font-mono pt-1">
                        <span>FCP Index</span>
                        <span>0.4s</span>
                      </div>
                    </div>
                  </div>

                  {/* Folder 2 (Marketing / Metrics) */}
                  <div className="absolute inset-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.15)] [transform:translateZ(10px)] group-hover/hero:[transform:translateZ(15deg)] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[8px] text-indigo-600 dark:text-indigo-300 font-mono border-b border-slate-200/50 dark:border-slate-800 pb-2">
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-indigo-400" />
                        <span>SEO_Campaigns</span>
                      </div>
                    </div>
                    <div className="space-y-1.5 py-1">
                      <div className="w-2/3 h-1 bg-indigo-200 dark:bg-indigo-400/25 rounded-full" />
                      <div className="w-4/5 h-1 bg-indigo-200 dark:bg-indigo-400/25 rounded-full" />
                      <div className="flex justify-between text-[6px] text-emerald-600 dark:text-emerald-400 font-bold font-mono mt-1 bg-indigo-50 dark:bg-indigo-950/40 p-1 rounded">
                        <span>Organic Position</span>
                        <span>#1 Rank</span>
                      </div>
                    </div>
                  </div>

                  {/* Folder 1 (Backend / DB Schema) */}
                  <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-indigo-500/20 rounded-2xl p-4 shadow-[0_5px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.2)] [transform:translateZ(-30px)] group-hover/hero:[transform:translateZ(-45deg)] flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-[8px] text-muted-foreground font-mono">
                      <Database className="w-4 h-4 text-indigo-500" />
                      <span>Data_Archives</span>
                    </div>
                    <div className="w-full h-1 bg-muted rounded-full" />
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── Main Body ── */}
      <div className="bg-background text-foreground py-10 transition-colors duration-300">
        
        {/* Grid Content */}
        <section className="container mx-auto px-4 grid lg:grid-cols-[1fr_340px] gap-8 pb-10">
          
          {/* Main Feed */}
          <div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {filters.map((f) => (
                <button
                  key={f.label}
                  onClick={() => setActiveFilter(f.label)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 flex items-center gap-2 ${
                    activeFilter === f.label
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                      : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <f.icon className="w-3.5 h-3.5" />
                  {f.label}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Link 
                    to={`/blog/${post.slug}`}
                    key={post.slug} 
                    className="glass-panel border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-305 flex flex-col group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                      <img 
                        src={post.coverImg} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-slate-900/90 border border-white/10 text-[9px] text-indigo-300 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display font-extrabold text-sm sm:text-base text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3 font-semibold font-sans">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between text-[11px] text-muted-foreground font-medium">
                        <span className="font-bold text-foreground">{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-card border border-border rounded-3xl">
                <Search className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <p className="font-bold text-sm text-foreground">No updates found matching "{searchQuery}"</p>
                <p className="text-xs text-muted-foreground mt-1 font-sans">Try searching for other keywords like "SEO", "speed", "React".</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Search Box */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search insights..."
                aria-label="Search blog posts"
                className="w-full bg-card border border-border rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-indigo-600 transition-colors shadow-sm" 
              />
              {workerStats && (
                <div className="mt-2 text-[10px] text-muted-foreground flex items-center gap-1.5 font-mono bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-500/10 rounded-xl px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Thread #{workerStats.threadId} active • Query processed in {workerStats.timeTakenMs}ms</span>
                </div>
              )}
            </div>

            {/* Recent List */}
            <div className="glass-panel border-border rounded-3xl p-5 shadow-sm">
              <h4 className="font-display font-bold text-xs text-foreground uppercase tracking-widest mb-4">Recent Updates</h4>
              <ul className="space-y-3.5">
                {blogPosts.slice(0, 4).map((post, idx) => (
                  <li key={idx} className="flex gap-3 border-b border-slate-200/80 dark:border-white/[0.06] pb-3 last:border-0 last:pb-0">
                    <Link to={`/blog/${post.slug}`} className="min-w-0 flex-1 block">
                      <p className="text-xs font-bold text-foreground leading-snug line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{post.title}</p>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{post.date}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Box */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-500/20 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                <Send className="w-4 h-4 animate-pulse" />
                <span className="font-display font-bold text-xs sm:text-sm text-foreground">Stay Updated</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-semibold font-sans">
                Receive practical digital tips, web audits, and marketing updates straight to your inbox.
              </p>
              <form 
                className="space-y-2" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const emailInput = form.elements.namedItem("newsletter-email") as HTMLInputElement;
                  if (!emailInput?.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                    toast({ title: "Invalid email address", description: "Please enter a valid email address.", variant: "destructive" });
                    return;
                  }
                  setSubscribing(true);
                  try {
                    const response = await fetch(getApiUrl("/api/newsletter"), {
                      method: "POST", 
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email: emailInput.value }),
                    });
                    if (!response.ok) throw new Error("Subscription failed");
                    toast({ title: "Subscribed!", description: "You will now receive our latest updates in your inbox." });
                    emailInput.value = "";
                  } catch {
                    toast({ title: "Subscription failed", description: "Please try again later.", variant: "destructive" });
                  }
                  setSubscribing(false);
                }}
              >
                <input 
                  type="email" 
                  name="newsletter-email" 
                  aria-label="Newsletter email address" 
                  placeholder="Enter email address"
                  className="w-full bg-card border border-border rounded-xl px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-indigo-600 transition-colors shadow-sm font-sans" 
                />
                <button 
                  type="submit" 
                  disabled={subscribing}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-indigo-600/10"
                >
                  {subscribing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3 h-3" />}
                  {subscribing ? "Subscribing..." : "Subscribe Now"}
                </button>
              </form>
            </div>
          </aside>
        </section>
        
      </div>

      <CtaBanner 
        title="Let's build something" 
        highlight="huge together." 
        subtitle="Your business vision, our engineering expertise — the perfect match." 
      />
    </Layout>
  );
};

export default BlogPage;
