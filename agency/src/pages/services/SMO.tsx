import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Heart, ChevronDown, Check, Star, Shield, Share2, MessageCircle, Users, Send, Loader2 } from "lucide-react";
import heroBg from "@/assets/hero_social_bg_1782993537411.png";
import { toast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/api";

const processSteps = [
  { num: "01", title: "Social Media Audit", desc: "We evaluate your current handles and review audience retention metrics." },
  { num: "02", title: "Audience Profiling", desc: "Understanding customer demography to target key age and interest blocks." },
  { num: "03", title: "Custom SMO Strategy", desc: "We align posts layouts and scheduling calendars with your branding targets." },
  { num: "04", title: "Content Creation", desc: "Designing platform-specific visuals, Reels templates and informative infographics." },
  { num: "05", title: "Profile Optimization", desc: "Fine-tuning bios, tags, link-in-bios, and business category setups." },
  { num: "06", title: "Consistency Automation", desc: "Deploying automation schedule systems to publish posts during high-reach hours." },
  { num: "07", title: "Community Moderation", desc: "Actively responding to reviews, client comments, and queries to build trust." },
  { num: "08", title: "Performance Audits", desc: "Analyzing growth tracks, content clicks, and traffic redirection to site." },
  { num: "09", title: "Insights & Reports", desc: "Delivering monthly growth reports outlining followers metrics and brand reach." }
];

const challenges = [
  { title: "High Competitor Volume", desc: "Standing out in Delhi NCR & Haryana's highly saturated social feeds." },
  { title: "Platform Selection", desc: "Identifying whether to prioritize Instagram, LinkedIn, or YouTube for your business niche." },
  { title: "Engagement Drop-off", desc: "Crafting interactive hooks that keep audiences reading and sharing your posts." },
  { title: "Algorithm Adaptation", desc: "Adjusting quickly to changes in search indexes and organic video reaches." }
];

const faqs = [
  {
    q: "What is Social Media Optimization (SMO)?",
    a: "SMO is the process of optimizing your brand's social media profiles and content to maximize organic visibility, audience engagement, and traffic back to your website."
  },
  {
    q: "How is SMO different from Social Media Marketing (SMM)?",
    a: "SMO focuses on organic optimizations (hashtags, bios, profile tuning, organic posts consistency), whereas SMM involves launching paid ads (Meta Ads, LinkedIn campaigns)."
  },
  {
    q: "Which social media platforms should my business optimize?",
    a: "It depends on your audience. B2B firms typically benefit from LinkedIn and YouTube, while consumer products or doctors gain heavy traction on Instagram and Facebook."
  },
  {
    q: "Do you create post graphics and reels?",
    a: "Yes. Our team designs post templates, selects branding color schemes, writes captions, research trending hashtags, and plans Reels content."
  }
];

export const SMOPage = () => {
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
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: "Quote Request: SMO Services",
        message: formData.message || "Requested SMO consultation"
      });
      toast({ title: "Request Received!", description: "We will contact you shortly to review your social channels." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly on WhatsApp.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="Social Media Optimization Services in Delhi NCR | Websbond" 
        description="Enhance organic social reach with top SMO services in Delhi NCR. Custom templates, handles audits, trending hashtags search and profiles setup."
        path="/smo-service-in-delhi"
        keywords="smo services delhi, social media optimization haryana, instagram growth Gurgaon, brand visibility NCR"
      />

      {/* ── Hero section ── */}
      <section 
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center hero-image-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 text-left">
              <div className="inline-flex items-center gap-2 bg-white/[0.1] border border-white/[0.15] shadow-lg shadow-white/5 rounded-full px-4 py-2 text-[11px] text-white/90 font-medium mb-6 select-none backdrop-blur-md">
                → ORGANIC SOCIAL OPTIMIZATION
              </div>
              <h1 className="font-jost font-black text-4xl md:text-6xl leading-tight bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                Boost Your Brand with Top Social Media Optimization Services
              </h1>
              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-medium drop-shadow-md">
                Optimize your social media handles for maximum organic reach. Drive traffic, improve profile trust, build online authority, and convert visitors into loyal brand advocates.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
                <a href="tel:+919306623619" className="btn-orange">Call Now +91 9306623619</a>
                <a href="mailto:websbond@websbond.com" className="btn-outline">Send Email</a>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 fill-mode-both">
              <div className="bg-white/[0.08] border border-white/[0.15] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <h3 className="font-jost font-bold text-xl border-b border-white/20 pb-3 mb-5 text-white">Optimize Your Socials</h3>
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
        </div>
      </section>

      {/* ── Section 1: Intro Narrative ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#002b49]">→</span>
            <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">CONNECT, ENGAGE, GROW</span>
          </div>
          <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
            Improve Your Social Media Presence with the Best SMO Company
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            In today's fast-paced digital world, where billions connect online daily, having a strong social media presence is no longer optional—it's essential. At Websbond, we specialize in SMO services that transform your social media platforms into powerful tools for brand growth, engagement, and conversions. We help businesses stand out in the crowded online space, driving real results that matter.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Our expert social media strategies ensure your brand connects meaningfully with your target audience. We optimize posts, research tags, and configure profiles so you rank organically.
          </p>
        </div>
      </section>

      {/* ── Section 2: What is SMO ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">THE CORE MECHANICS</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
                What is Social Media Optimization?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Social Media Optimization (SMO) is the art and science of fine-tuning your social media profiles and content to maximize visibility, engagement, and traffic. Unlike traditional media ads, SMO focuses on creating shareable, high-quality content that resonates organically with users.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Think of SMO as the bridge between your website and social media platforms. It involves optimizing posts with relevant hashtags, keywords, and visuals. By integrating semantic keywords, search engines better understand your content, improving your overall online reputation management.
              </p>
            </div>

            {/* Challenges grid */}
            <div className="space-y-4">
              <h3 className="font-jost font-bold text-base text-[#002b49]">Core SMO Challenges We Solve:</h3>
              <div className="grid gap-4">
                {challenges.map((c, idx) => (
                  <div key={idx} className="bg-white p-4 border border-gray-150 rounded-xl">
                    <h4 className="font-jost font-bold text-sm text-[#002b49] mb-1">{c.title}</h4>
                    <p className="text-gray-500 text-xs leading-normal font-semibold">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: SMO Process ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">OUR WORKFLOW</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Our Process of Social Media Optimization
            </h2>
            <p className="text-gray-600 mt-2 text-sm font-medium">
              A structured, step-by-step SMO approach to maximize brand engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-100 p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-3xl font-black text-orange-200 block mb-2">{step.num}</span>
                <h3 className="font-jost font-bold text-base text-[#002b49] mb-1.5">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-semibold">{step.desc}</p>
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
              Common enquiries about SMO pricing packages, scheduling algorithms, and brand metrics.
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

export default SMOPage;

