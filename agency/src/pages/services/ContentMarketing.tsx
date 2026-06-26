import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { FileText, ChevronDown, Check, Star, Shield, Target, Award, Cpu, Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const contentTypes = [
  {
    title: "Blog Posts & Articles",
    desc: "Informative, keyword-rich articles that showcase your industry expertise, improve local Google SEO ranking, and drive organic inbound search traffic."
  },
  {
    title: "Infographics & Visual Assets",
    desc: "Simplifying complex technical data into clean, shareable vectors that capture user interest and enhance brand retention across social feeds."
  },
  {
    title: "Case Studies & Social Proof",
    desc: "Real-world success stories and detailed client testimonials that build buyer trust and validate your business capabilities."
  },
  {
    title: "Reels & Videos Scripts",
    desc: "Engaging video formats and script pipelines that communicate your brand narrative quickly on YouTube, Instagram and LinkedIn."
  }
];

const benefits = [
  "Increases website authority and attracts highly targeted organic traffic.",
  "Content marketing is highly cost-effective compared to traditional paid channels.",
  "Delivers compounding long-term value, as articles rank for years.",
  "Conversion rates are significantly higher with content-driven educational campaigns.",
  "Forms the core foundation for your social media channels, newsletters and SEO plans."
];

const faqs = [
  {
    q: "Why is content marketing important?",
    a: "Instead of directly pushing products, you publish helpful content that answers your customer's questions. This builds brand trust, boosts organic website traffic, and strengthens your SEO."
  },
  {
    q: "Do you use AI to write content?",
    a: "No. Our copywriters research and handwrite all articles from scratch. AI text lacks semantic depth and does not rank well on Google's search algorithms."
  },
  {
    q: "How often should we publish blog posts?",
    a: "For optimal SEO gains, publishing 2 to 4 high-quality, comprehensive posts per month is recommended."
  },
  {
    q: "Can you optimize our existing website text?",
    a: "Yes. We perform content audits, map appropriate keywords, improve readability scores, and align heading hierarchies to optimize your old text."
  }
];

export const ContentMarketing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({ title: "Details required", description: "Name, email and phone number are required.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(getApiUrl("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: "Quote Request: Content Marketing Services",
          message: formData.message || "Requested content marketing consultation"
        })
      });
      if (!response.ok) throw new Error("API fail");
      toast({ title: "Request Received!", description: "We will contact you shortly to build your content strategy." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly on WhatsApp.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="Content Writing Services in Delhi NCR | Copywriters | Websbond" 
        description="Boost rankings and customer trust with Websbond's professional content writing services in Delhi NCR. Blogs, copy, infographics and visual assets."
        path="/content-writing-service-in-delhi"
        keywords="content writing delhi, copywriters Gurgaon, content marketing haryana, blog writing Noida"
      />

      {/* ── Hero section ── */}
      <section className="relative overflow-hidden py-20 text-white" style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                → STRATEGIC CONTENT MARKETING
              </div>
              <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
                Boost Your Brand Visibility with Strategic Content Marketing
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                Content marketing is more than just writing—it's about delivering the right message to the right audience at the right time. Our tailored strategies help you attract potential customers, build trust, and drive valuable engagement.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
                <a href="tel:+919306623619" className="btn-orange">Call Now +91 9306623619</a>
                <a href="mailto:websbond@websbond.com" className="btn-outline">Send Email</a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 text-[#002b49] shadow-lg">
              <h3 className="font-jost font-bold text-lg border-b border-gray-200 pb-3 mb-5">Request A Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Your Name *" 
                  required 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-sans" 
                />
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="Email Address *" 
                  required 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-sans" 
                />
                <input 
                  type="text" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  placeholder="Phone / WhatsApp *" 
                  required 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-sans" 
                />
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Brief Project Description" 
                  rows={3} 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] resize-none font-sans" 
                />
                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="w-full bg-[#eb560c] hover:bg-[#d14b0a] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? "Submitting..." : "Send Message !"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 1: Intro Narrative ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#002b49]">→</span>
            <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">THE BASE OF DIGITAL REACH</span>
          </div>
          <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
            Let Us Understand Content Marketing Services
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 font-semibold">
            Content is known as the king when it comes to marketing. Without this, none of the other digital channels can deliver rankings.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-3xl mx-auto text-left">
            Content Marketing services involve the systematic planning, distribution, promotion, and tracking of content assets to solve users' problems and retain brand interest. Instead of directly pitch-selling products, you provide real answers to local questions. This is why leading startups and established companies alike prioritize copywriting retainers.
          </p>
        </div>
      </section>

      {/* ── Section 2: Why Choose Content Marketing ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">WHY CONTENT MARKETING?</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
                Why to Choose Content Marketing?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Content marketing is one of the most powerful tools to build meaningful relationships with your audience. Instead of directly pitching your products or services, you provide valuable and relevant content that naturally attracts and retains customers.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm space-y-4">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-gray-700 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-xs">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Content Types Grid ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">ASSETS</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Transform Your Brand with Strategic Content
            </h2>
            <p className="text-gray-600 mt-2 text-sm font-medium">
              We design, write, edit and schedule platform-specific formats.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {contentTypes.map((c, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-100 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#eb560c] grid place-items-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-jost font-bold text-[#002b49] text-base mb-1">{c.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-semibold">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: FAQs ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">FAQ</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Common questions about articles scheduling, keywords alignment, and writing schedules.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#002b49] hover:bg-orange-50/20 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-jost">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-40 opacity-100 border-t border-gray-100 bg-gray-50/30" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="p-5 text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default ContentMarketing;
