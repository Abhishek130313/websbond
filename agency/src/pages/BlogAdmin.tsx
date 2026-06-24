import { useState, useEffect, useMemo } from "react";
import {
  FileText, Plus, Trash2, Edit3, Shield, RefreshCw,
  Loader2, Lock, LogOut, Search, X, Check, Globe,
  Calendar, User, BookOpen, Tag, Star, AlertCircle
} from "lucide-react";
import { getApiUrl } from "@/lib/api";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  dateISO: string;
  author: string;
  authorRole: string;
  readTime: string;
  coverImg: string;
  tags: string;
  featured: boolean;
  createdAt?: string;
}

type Theme = "dark" | "light";

const CATEGORIES = ["Web Development", "SEO", "Digital Marketing", "E-Commerce"];

export const BlogAdminPage = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem("wb_admin_key") || "");
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState<Theme>((localStorage.getItem("wb_theme") as Theme) || "dark");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Modals / Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formError, setFormError] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Form Fields
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [coverImg, setCoverImg] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("Websbond Team");
  const [authorRole, setAuthorRole] = useState("Web Development Experts");
  const [readTime, setReadTime] = useState("5 min read");
  const [featured, setFeatured] = useState(false);

  // Theme Sync
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("wb_theme", next);
  };

  // Fetch blogs from API
  const fetchBlogs = async (key: string, isLogin = false) => {
    if (isLogin) setLoginLoading(true);
    else setLoading(true);
    setLoginError("");
    try {
      // First we check if we can fetch contacts with this key to verify admin permissions
      const verifyRes = await fetch(getApiUrl("/api/admin/contacts"), {
        headers: { "X-Admin-Key": key }
      });
      if (verifyRes.status === 401) {
        setLoginError("Invalid admin key.");
        setIsLoggedIn(false);
        return;
      }

      // If authorized, fetch blogs
      const res = await fetch(getApiUrl("/api/blogs"));
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
      setIsLoggedIn(true);
      localStorage.setItem("wb_admin_key", key);
      setApiKey(key);
    } catch (err) {
      setLoginError("Cannot connect to backend.");
    } finally {
      setLoginLoading(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiKey) fetchBlogs(apiKey);
  }, []);

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingPost) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // remove special chars
        .trim()
        .replace(/\s+/g, "-") // replace spaces with hyphens
        .replace(/-+/g, "-"); // remove duplicate hyphens
      setSlug(generatedSlug);
    }
  };

  // Open Form for Create
  const handleCreateOpen = () => {
    setEditingPost(null);
    setTitle("");
    setSlug("");
    setCategory(CATEGORIES[0]);
    setCoverImg("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80");
    setExcerpt("");
    setContent("");
    setTags("");
    setAuthor("Websbond Team");
    setAuthorRole("Web Development Experts");
    setReadTime("5 min read");
    setFeatured(false);
    setFormError("");
    setIsFormOpen(true);
  };

  // Open Form for Edit
  const handleEditOpen = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setCategory(post.category);
    setCoverImg(post.coverImg);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setTags(post.tags || "");
    setAuthor(post.author);
    setAuthorRole(post.authorRole);
    setReadTime(post.readTime);
    setFeatured(post.featured);
    setFormError("");
    setIsFormOpen(true);
  };

  // Form Submit (Create / Edit)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slug.trim() || !content.trim()) {
      setFormError("Title, Slug, and Content are required.");
      return;
    }

    setFormSubmitting(true);
    setFormError("");

    const payload = {
      title,
      slug,
      category,
      coverImg,
      excerpt,
      content,
      tags,
      author,
      authorRole,
      readTime,
      featured
    };

    const url = editingPost
      ? getApiUrl(`/api/admin/blogs/${editingPost.id}`)
      : getApiUrl("/api/admin/blogs");
    
    const method = editingPost ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": apiKey
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to save blog post");
      }

      await fetchBlogs(apiKey);
      setIsFormOpen(false);
    } catch (err: any) {
      setFormError(err.message || "An error occurred while saving.");
    } finally {
      setFormSubmitting(false);
    }
  };

  // Delete Blog Post
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const res = await fetch(getApiUrl(`/api/admin/blogs/${id}`), {
        method: "DELETE",
        headers: {
          "X-Admin-Key": apiKey
        }
      });

      if (!res.ok) throw new Error("Failed to delete post");
      setBlogs(prev => prev.filter(b => b.id !== id));
    } catch (err) {
      alert("Error deleting blog post");
    }
  };

  // Search and Filter logic
  const filteredBlogs = useMemo(() => {
    let list = [...blogs];
    if (categoryFilter !== "All") {
      list = list.filter(b => b.category === categoryFilter);
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.slug.toLowerCase().includes(q) ||
        b.tags.toLowerCase().includes(q)
      );
    }
    return list;
  }, [blogs, categoryFilter, search]);

  // Statistics
  const totalPosts = blogs.length;
  const featuredPosts = blogs.filter(b => b.featured).length;

  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen flex items-center justify-center font-sans ${theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"}`}>
        <div className={`w-full max-w-md p-8 rounded-3xl border transition-all duration-300 ${theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-xl"}`}>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display tracking-tight">Websbond Blog Admin</h1>
              <p className={`text-xs mt-1 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>Dedicated Content Management Dashboard</p>
            </div>
            
            <form onSubmit={e => { e.preventDefault(); const key = (e.currentTarget.elements.namedItem("key") as HTMLInputElement).value; fetchBlogs(key, true); }} className="w-full mt-6 space-y-4">
              <div className="relative">
                <input
                  type="password"
                  name="key"
                  placeholder="Enter admin key..."
                  required
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${theme === "dark" ? "bg-slate-800/50 border-slate-700 focus:border-indigo-500 text-white placeholder:text-slate-500" : "bg-slate-100 border-slate-200 focus:border-indigo-600 text-slate-900 placeholder:text-slate-400"}`}
                />
              </div>
              
              {loginError && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-500 text-xs px-3 py-2.5 rounded-xl">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-600/10"
              >
                {loginLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                {loginLoading ? "Authorizing..." : "Access Editor"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      
      {/* ── Main Frame Outer Glow ── */}
      <div className="p-4 sm:p-6 min-h-screen flex flex-col">
        <div className="relative flex-1 rounded-3xl p-0.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 shadow-xl overflow-hidden flex flex-col">
          
          {/* Inner Content Body */}
          <div className={`flex-1 rounded-[22px] overflow-hidden flex flex-col ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
            
            {/* Header Top Bar */}
            <header className={`px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-b ${theme === "dark" ? "border-slate-800 bg-slate-900/90" : "border-slate-200 bg-white"}`}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <span className="font-extrabold text-base tracking-tight">Websbond <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Blog Editor</span></span>
                  <span className={`text-[10px] block font-mono ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>websbond.com/blog-admin</span>
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="flex items-center gap-6 mt-4 sm:mt-0">
                <div className="flex gap-4 border-r border-slate-700/30 pr-4">
                  <div className="text-center">
                    <span className="block text-base font-bold text-indigo-500">{totalPosts}</span>
                    <span className={`text-[9px] uppercase tracking-wider ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>Total</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-base font-bold text-amber-500">{featuredPosts}</span>
                    <span className={`text-[9px] uppercase tracking-wider ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>Featured</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={toggleTheme} className={`p-2 rounded-xl border ${theme === "dark" ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"} hover:opacity-80 transition-all`}>
                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} onClick={() => fetchBlogs(apiKey)} />
                  </button>
                  <Link to="/blog" target="_blank" className={`px-4 py-2 border rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${theme === "dark" ? "bg-slate-800 border-slate-700 hover:bg-slate-700" : "bg-slate-100 border-slate-200 hover:bg-slate-200"}`}>
                    <Globe className="w-3.5 h-3.5" /> View Blog Page
                  </Link>
                  <button onClick={handleCreateOpen} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/10">
                    <Plus className="w-4 h-4" /> New Blog Post
                  </button>
                  <button onClick={() => { localStorage.removeItem("wb_admin_key"); setIsLoggedIn(false); setBlogs([]); }} className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-all border border-transparent hover:border-red-500/20">
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </header>

            {/* Toolbar Filter / Search */}
            <div className={`p-4 border-b flex flex-col md:flex-row gap-3 items-center justify-between ${theme === "dark" ? "border-slate-800/60 bg-slate-900/40" : "border-slate-200/60 bg-slate-50/50"}`}>
              {/* Search */}
              <div className={`relative w-full md:max-w-md flex items-center px-3 py-2 border rounded-xl text-sm ${theme === "dark" ? "bg-slate-950/40 border-slate-800 focus-within:border-indigo-500" : "bg-slate-50 border-slate-200 focus-within:border-indigo-600"}`}>
                <Search className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search articles by title, tags, or content..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-xs text-foreground"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="p-1 hover:bg-slate-500/20 rounded-full">
                    <X className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto">
                {["All", ...CATEGORIES].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      categoryFilter === cat
                        ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400"
                        : theme === "dark"
                          ? "bg-slate-800/40 border-slate-800 text-slate-400 hover:text-white"
                          : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Table Feed / Posts list */}
            <div className="flex-1 overflow-y-auto">
              {filteredBlogs.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-16 text-center text-slate-400">
                  <FileText className="w-12 h-12 text-slate-500/40 mb-3" />
                  <p className="font-bold text-sm">No blog posts found</p>
                  <p className="text-xs mt-1 max-w-xs">Write a new post or search for other keywords to begin.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-800/40">
                  {filteredBlogs.map(post => (
                    <div key={post.id} className={`p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:bg-slate-500/5 transition-all ${theme === "dark" ? "hover:bg-slate-800/10" : "hover:bg-slate-50/50"}`}>
                      <div className="flex gap-4 items-center min-w-0">
                        {/* Cover Thumbnail */}
                        <div className={`w-16 h-12 rounded-lg bg-slate-800 overflow-hidden shrink-0 border ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}>
                          <img src={post.coverImg} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">{post.category}</span>
                            {post.featured && (
                              <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                                <Star className="w-2.5 h-2.5 fill-amber-500" /> Featured
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-sm tracking-tight truncate max-w-lg mt-0.5">{post.title}</h3>
                          <div className={`flex items-center gap-3 text-[10px] mt-1 ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
                            <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                            <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <span className={`text-[10px] font-mono px-2 py-1 rounded bg-slate-800/55 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                          /{post.slug}
                        </span>
                        <button onClick={() => handleEditOpen(post)} className={`p-2 rounded-lg border ${theme === "dark" ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"} transition-all`}>
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => handleDelete(post.id)} className="p-2 rounded-lg border border-red-500/20 text-red-500 hover:bg-red-500/10 transition-all">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ── CREATE / EDIT BLOG MODAL ── */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`w-full max-w-4xl max-h-[90vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
            {/* Modal Header */}
            <div className={`px-6 py-4 border-b flex items-center justify-between ${theme === "dark" ? "border-slate-800 bg-slate-900/60" : "border-slate-200 bg-slate-50/50"}`}>
              <h2 className="text-lg font-bold flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-500" />
                {editingPost ? "Edit Blog Post" : "Write New Blog Post"}
              </h2>
              <button onClick={() => setIsFormOpen(false)} className="p-1 hover:bg-slate-500/20 rounded-full">
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Modal Form Scrollable Body */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
              
              {formError && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-500 text-xs px-3.5 py-2.5 rounded-xl">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Title & Slug */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Article Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={e => handleTitleChange(e.target.value)}
                    placeholder="Enter catchy article title..."
                    className={`w-full px-3 py-2 rounded-xl border text-xs outline-none focus:border-indigo-500 ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white" : "bg-slate-50 border-slate-200"}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">URL Slug (Unique)</label>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={e => setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                    placeholder="e.g. website-banwane-ka-tarika"
                    className={`w-full px-3 py-2 rounded-xl border text-xs outline-none focus:border-indigo-500 ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white" : "bg-slate-50 border-slate-200"}`}
                  />
                </div>
              </div>

              {/* Category, Readtime, Featured */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Category</label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-xs outline-none focus:border-indigo-500 ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`}
                  >
                    {CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Read Time</label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={e => setReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    className={`w-full px-3 py-2.5 rounded-xl border text-xs outline-none focus:border-indigo-500 ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white" : "bg-slate-50 border-slate-200"}`}
                  />
                </div>
                <div className="flex flex-col justify-end pb-1">
                  <label className={`inline-flex items-center gap-2 cursor-pointer p-2 border rounded-xl text-xs font-semibold ${featured ? "border-amber-500/30 bg-amber-500/5 text-amber-500" : "border-slate-800/40 text-slate-400"}`}>
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={e => setFeatured(e.target.checked)}
                      className="sr-only"
                    />
                    <Star className={`w-4 h-4 ${featured ? "fill-amber-500" : ""}`} />
                    <span>Feature this post on home feed</span>
                  </label>
                </div>
              </div>

              {/* Cover Image & Tags */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Cover Image URL</label>
                  <input
                    type="text"
                    value={coverImg}
                    onChange={e => setCoverImg(e.target.value)}
                    placeholder="Unsplash image URL..."
                    className={`w-full px-3 py-2 rounded-xl border text-xs outline-none focus:border-indigo-500 ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white" : "bg-slate-50 border-slate-200"}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Tags (Comma-separated)</label>
                  <input
                    type="text"
                    value={tags}
                    onChange={e => setTags(e.target.value)}
                    placeholder="e.g. SEO, Indore, website design"
                    className={`w-full px-3 py-2 rounded-xl border text-xs outline-none focus:border-indigo-500 ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white" : "bg-slate-50 border-slate-200"}`}
                  />
                </div>
              </div>

              {/* Author & Author Role */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Author Name</label>
                  <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-xs outline-none focus:border-indigo-500 ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white" : "bg-slate-50 border-slate-200"}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Author Role</label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={e => setAuthorRole(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-xs outline-none focus:border-indigo-500 ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white" : "bg-slate-50 border-slate-200"}`}
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Excerpt (Brief Description for cards)</label>
                <textarea
                  value={excerpt}
                  onChange={e => setExcerpt(e.target.value)}
                  placeholder="Summarize the article in 2 sentences..."
                  rows={2}
                  className={`w-full px-3 py-2 rounded-xl border text-xs outline-none focus:border-indigo-500 resize-none ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white" : "bg-slate-50 border-slate-200"}`}
                />
              </div>

              {/* Content (HTML) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Content Body (HTML/Text)</label>
                <div className={`p-2 border rounded-t-xl text-[10px] font-mono flex gap-3 ${theme === "dark" ? "bg-slate-950 border-slate-800 text-slate-500" : "bg-slate-100 border-slate-200 text-slate-500"}`}>
                  <span>Format hints:</span>
                  <span>&lt;h2&gt;Heading&lt;/h2&gt;</span>
                  <span>&lt;p&gt;Paragraph&lt;/p&gt;</span>
                  <span>&lt;ul&gt;&lt;li&gt;&lt;strong&gt;Bold&lt;/strong&gt;&lt;/li&gt;&lt;/ul&gt;</span>
                </div>
                <textarea
                  required
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  placeholder="<h2>Why SEO is King...</h2> <p>In today's digital landscape...</p>"
                  rows={10}
                  className={`w-full px-3 py-3 rounded-b-xl border border-t-0 text-xs font-mono outline-none focus:border-indigo-500 resize-y ${theme === "dark" ? "bg-slate-950/40 border-slate-800 text-white focus:border-t" : "bg-slate-50 border-slate-200 focus:border-t"}`}
                />
              </div>

              {/* Form Actions Footer */}
              <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/40">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className={`px-4 py-2 border rounded-xl text-xs font-semibold ${theme === "dark" ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"}`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
                >
                  {formSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                  {formSubmitting ? "Saving..." : "Publish Post"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
