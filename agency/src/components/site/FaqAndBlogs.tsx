import { useState } from "react";
import {
  BookOpen,
  HelpCircle,
  Clock,
  Calendar,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Search,
  MapPin,
  Target,
  MessageSquare,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export const FaqAndBlogs = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const FAQS = [
    {
      q: "Why do businesses need both web design and digital marketing?",
      a: "A professionally designed website creates a strong first impression, while digital marketing drives targeted traffic to it. Together, they improve visibility, engagement, lead generation, and overall revenue.",
    },
    {
      q: "What is Generative Engine Optimization (GEO) & AI SEO?",
      a: "GEO optimizes your business data so AI models (like ChatGPT, Perplexity, Gemini, and Google Search Generative Experience) cite and recommend your brand when users ask for services.",
    },
    {
      q: "Can a custom website help generate real leads and sales?",
      a: "Yes. Custom code with 100/100 Google PageSpeed scores, clear CTA placement, and instant WhatsApp booking widgets convert cold visitors into inquiries 3X faster than slow template sites.",
    },
    {
      q: "How often should a business update its website and SEO strategy?",
      a: "SEO is a continuous process. Algorithm updates happen monthly, so continuous technical audits, metadata updates, and content expansion are crucial to maintain Page 1 dominance.",
    },
    {
      q: "Why choose Websbond as your digital growth agency?",
      a: "Unlike traditional agencies that pass tasks around, Websbond connects you directly with full-stack engineers and senior search strategists for maximum accountability and 100/100 speed guarantees.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9FE] text-slate-900 select-none border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Section Header - 100% Identical Typography to Image 2 */}
        <div className="text-center max-w-6xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] font-normal sm:font-medium text-[#1E1B4D] tracking-tight leading-tight font-sans mb-2.5">
            Insights, Answers &{" "}
            <span className="font-normal sm:font-medium bg-gradient-to-r from-[#3533B5] via-[#5C50DD] to-[#A03CE3] bg-clip-text text-transparent">
              Growth Strategies
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto mb-4">
            Expert insights, proven strategies, and answers to the most common questions to help your business grow smarter.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5B4FE1] to-[#7E43E5] hover:from-[#4F44D4] hover:to-[#6E35D7] text-white font-bold text-xs py-2.5 px-6 rounded-full shadow-md shadow-purple-500/20 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <span>Browse All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* TOP SECTION: Latest Articles Grid */}
        <div className="grid lg:grid-cols-12 gap-5 items-stretch mb-12">

          {/* Sidebar Label: Latest Articles */}
          <div className="lg:col-span-2 flex flex-col justify-start pr-2">
            <div className="w-10 h-10 rounded-2xl border border-purple-200 bg-white shadow-xs text-purple-600 flex items-center justify-center shrink-0 mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight mb-2">
              Latest Articles
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
              Actionable insights, trending topics, and expert strategies handpicked for you.
            </p>
          </div>

          {/* Articles Grid (3 Cards) */}
          <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-12 gap-5">

            {/* Featured Article */}
            <div className="md:col-span-6">
              <article className="group flex flex-col sm:flex-row sm:h-[310px] overflow-hidden rounded-[20px] border border-[#ECEBFF] bg-white shadow-[0_8px_35px_rgba(99,102,241,0.06)] hover:shadow-[0_16px_45px_rgba(99,102,241,0.10)] transition-all duration-300">
                {/* IMAGE */}
                <div className="w-full sm:w-[44%] h-48 sm:h-full shrink-0 bg-[#120B2E] overflow-hidden">
                  <img
                    src="/article-ai-search.png"
                    alt="AI Search"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex w-full sm:w-[56%] flex-col px-6 py-6 sm:py-7">
                  <span className="inline-flex w-fit rounded-full bg-[#F3F0FF] text-[#6D5DF6] text-[11px] font-semibold tracking-wide px-3 py-[4px] mb-3">
                    SEO
                  </span>

                  <h3 className="text-[17px] sm:text-[19px] leading-[1.25] font-bold text-[#101828] tracking-[-0.02em] mb-2.5">
                    How AI Search is Changing Google in 2026
                  </h3>

                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#667085] line-clamp-3 mb-4">
                    Explore how AI-powered search is reshaping rankings, visibility, and the future of SEO.
                  </p>

                  <div className="flex items-center gap-4 text-[12px] text-[#667085] mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      5 min read
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#D0D5DD]" />
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      Jul 26, 2026
                    </span>
                  </div>

                  <Link
                    to="/blog"
                    className="mt-auto inline-flex items-center gap-2 text-[14px] font-semibold text-[#6D5DF6] transition-all duration-300 group-hover:gap-3"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>

            {/* Secondary Article 1: Local SEO Guide */}
            <div className="md:col-span-3">
              <article className="group flex flex-col sm:h-[310px] overflow-hidden rounded-[20px] border border-[#ECEBFF] bg-white shadow-[0_8px_35px_rgba(99,102,241,0.06)] hover:shadow-[0_16px_45px_rgba(99,102,241,0.10)] hover:-translate-y-1 transition-all duration-300">
                {/* TOP IMAGE - Filled Edge-to-Edge with Zero White Space */}
                <div className="w-full h-[148px] shrink-0 bg-[#FAF8FC] overflow-hidden relative border-b border-slate-100/60">
                  <img
                    src="/article-local-seo.png"
                    alt="Local SEO"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] block"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col p-5 flex-1 justify-between">
                  <div>
                    <span className="inline-flex w-fit rounded-full bg-[#E6F4EA] text-[#137333] text-[10px] font-semibold tracking-wide px-2.5 py-[3px] mb-2">
                      LOCAL SEO
                    </span>
                    <h3 className="text-[14px] leading-snug font-bold text-[#101828] tracking-[-0.01em] line-clamp-2 mb-2">
                      Local SEO Guide for Delhi NCR & Haryana Businesses
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-[#667085] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        6 min read
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#D0D5DD]" />
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        Jul 17, 2026
                      </span>
                    </div>

                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#6D5DF6] transition-all duration-300 group-hover:gap-2.5"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Secondary Article 2: Marketing */}
            <div className="md:col-span-3">
              <article className="group flex flex-col sm:h-[310px] overflow-hidden rounded-[20px] border border-[#ECEBFF] bg-white shadow-[0_8px_35px_rgba(99,102,241,0.06)] hover:shadow-[0_16px_45px_rgba(99,102,241,0.10)] hover:-translate-y-1 transition-all duration-300">
                {/* TOP IMAGE - Filled Edge-to-Edge with Zero White Space */}
                <div className="w-full h-[148px] shrink-0 bg-[#FAF8FC] overflow-hidden relative border-b border-slate-100/60">
                  <img
                    src="/article-marketing-leads.png"
                    alt="Marketing Leads"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] block"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col p-5 flex-1 justify-between">
                  <div>
                    <span className="inline-flex w-fit rounded-full bg-[#E8F0FE] text-[#1A73E8] text-[10px] font-semibold tracking-wide px-2.5 py-[3px] mb-2">
                      MARKETING
                    </span>
                    <h3 className="text-[14px] leading-snug font-bold text-[#101828] tracking-[-0.01em] line-clamp-2 mb-2">
                      Why Isn't My Business Getting Leads Despite...
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-[#667085] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        4 min read
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#D0D5DD]" />
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        Jul 13, 2026
                      </span>
                    </div>

                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#6D5DF6] transition-all duration-300 group-hover:gap-2.5"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: Frequently Asked Questions & CTA Card */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">

          {/* Sidebar Label: FAQs + 3D Decorative Speech Bubbles */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-2">
            <div>
              <div className="w-10 h-10 rounded-2xl border border-purple-200 bg-white shadow-xs text-purple-600 flex items-center justify-center shrink-0 mb-3">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                Everything business owners ask before choosing a digital growth partner.
              </p>
            </div>

            {/* Decorative 3D Speech Bubbles Graphic */}
            <div className="hidden lg:flex items-center justify-center mt-6 relative w-28 h-24">
              <div className="absolute bottom-0 left-0 w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-400 to-indigo-500 text-white shadow-lg shadow-indigo-500/20 flex items-center justify-center font-bold text-lg rotate-[-6deg]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="absolute top-0 right-1 w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-400 to-violet-500 text-white shadow-lg shadow-purple-500/20 flex items-center justify-center font-extrabold text-2xl rotate-[8deg]">
                ?
              </div>
            </div>
          </div>

          {/* Accordion List (Center Column) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-6 flex flex-col justify-between">
            <div className="divide-y divide-slate-100">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;

                return (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-start gap-3.5 text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
                        ?
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 flex-1 leading-snug group-hover:text-purple-900 transition-colors duration-200">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 mt-1 ${isOpen ? "rotate-180 text-purple-600" : "group-hover:text-slate-600"
                          }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="pl-10 pr-4 pt-2.5 pb-1 text-xs text-slate-600 leading-relaxed font-normal animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right CTA Card: "Still have questions?" */}
          <div className="lg:col-span-3 bg-gradient-to-br from-purple-100/70 via-indigo-50/60 to-purple-50/80 border border-purple-200/70 rounded-3xl p-6 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Sparkle Icon Box */}
              <div className="w-9 h-9 rounded-xl bg-white/90 border border-purple-200/80 shadow-xs flex items-center justify-center text-purple-600 mb-5">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>

              <h4 className="text-xl font-extrabold text-slate-900 leading-snug mb-1.5">
                Still have questions?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                We're here to help you grow your business.
              </p>
            </div>

            <div>
              {/* Strategy Call Button */}
              <a
                href="#consultation"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs py-3 px-4 rounded-2xl shadow-md shadow-purple-500/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 text-center mb-6 cursor-pointer"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Social Proof / Avatars Stack */}
              <div>
                <div className="flex items-center -space-x-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                    alt="Client Avatar"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                    alt="Client Avatar"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                    alt="Client Avatar"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white border-2 border-white flex items-center justify-center text-[10px] font-bold">
                    50+
                  </div>
                </div>
                <span className="text-[11px] font-medium text-slate-500 block">
                  Trusted by 50+ businesses
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

