import { ArrowRight, BookOpen, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FaqAndBlogs = () => {
  const FAQS = [
    {
      q: "Why do businesses need both web design and digital marketing?",
      a: "A professionally designed website creates a strong first impression, while digital marketing drives targeted traffic to it. Together, they improve visibility, engagement, lead generation, and overall revenue."
    },
    {
      q: "What is Generative Engine Optimization (GEO) & AI SEO?",
      a: "GEO optimizes your business data so AI models (like ChatGPT, Perplexity, Gemini, and Google Search Generative Experience) cite and recommend your brand when users ask for services."
    },
    {
      q: "Can a custom website help generate real leads and sales?",
      a: "Yes. Custom code with 100/100 Google PageSpeed scores, clear CTA placement, and instant WhatsApp booking widgets convert cold visitors into inquiries 3X faster than slow template sites."
    },
    {
      q: "How often should a business update its website and SEO strategy?",
      a: "SEO is a continuous process. Algorithm updates happen monthly, so continuous technical audits, metadata updates, and content expansion are crucial to maintain Page 1 dominance."
    },
    {
      q: "Why choose Websbond as your digital growth agency?",
      a: "Unlike traditional agencies that pass tasks around, Websbond connects you directly with full-stack engineers and senior search strategists for maximum accountability and 100/100 speed guarantees."
    }
  ];

  const BLOGS = [
    {
      title: "Estimating Website Traffic From Google Image Search",
      author: "Manoj Sharma",
      date: "21/07/2026",
      snippet: "Visual search has become a meaningful discovery channel for products and local service providers...",
      link: "/blog"
    },
    {
      title: "Local SEO Guide for Delhi NCR & Haryana Businesses in 2026",
      author: "Saddam Inshad",
      date: "17/07/2026",
      snippet: "Every day, thousands of potential customers search Google for local services near them...",
      link: "/blog"
    },
    {
      title: "Why Isn't My Business Getting Leads Despite Marketing Spend?",
      author: "Manoj Sharma",
      date: "13/07/2026",
      snippet: "Every month, thousands of companies spend money on SEO and ads without tracking conversion goals...",
      link: "/blog"
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 select-none border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Grid Layout (Video 00:54 - 00:56) */}
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left Column: FAQs Accordion */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-700" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-jost">
                Frequently Asked FAQs
              </h2>
            </div>
            <p className="text-xs text-slate-500 mb-8">
              Everything you need to know about rank guarantees, site speed standards, and campaign performance.
            </p>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-[#F7F6FB] border border-purple-200/80 rounded-2xl overflow-hidden transition-all duration-200 open:border-purple-400 [&_summary::-webkit-details-marker]:hidden shadow-sm"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 font-bold text-slate-900 text-sm hover:text-purple-800 transition-colors cursor-pointer select-none">
                    <span>{faq.q}</span>
                    <span className="transition-transform duration-200 group-open:rotate-180 text-purple-700 shrink-0 font-extrabold text-lg">
                      +
                    </span>
                  </summary>
                  <div className="border-t border-purple-100 bg-white p-5 text-xs text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Right Column: Our Blogs */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-700" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-jost">
                  Our Latest Blogs
                </h2>
              </div>
              <Link
                to="/blog"
                className="bg-purple-800 hover:bg-purple-900 text-white text-xs font-extrabold px-4 py-2 rounded-xl transition-all shadow-sm"
              >
                Read More
              </Link>
            </div>
            <p className="text-xs text-slate-500 mb-8">
              Latest industry insights, SEO algorithms, and digital marketing strategies from Websbond engineers.
            </p>

            <div className="space-y-4">
              {BLOGS.map((blog) => (
                <div
                  key={blog.title}
                  className="bg-[#F7F6FB] p-5 rounded-2xl border border-purple-200/80 hover:border-purple-400 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 text-[11px] text-purple-800 font-bold mb-2">
                    <span>👤 {blog.author}</span>
                    <span>•</span>
                    <span>📅 {blog.date}</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2 font-jost hover:text-purple-800 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {blog.snippet}
                  </p>
                  <Link to={blog.link} className="text-xs font-extrabold text-purple-800 hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
