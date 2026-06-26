import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Megaphone, ChevronDown, Check, Star, Shield, Target, Award, Cpu, Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const smmHighlights = [
  { title: "Facebook & Instagram Ads", desc: "Highly structured conversions funnels, catalog retargeting, and pixel setups to drive bulk sales." },
  { title: "LinkedIn B2B Campaigns", desc: "Lead generation ads designed to target senior directors, HR managers, and corporate buyers." },
  { title: "YouTube Video Campaigns", desc: "Pre-roll ads layouts and channel setups to drive visual brand credibility." },
  { title: "Ad Copywriting & Creatives", desc: "Writing hooks, designing static slides, and outlining Reels scripts for paid ads." }
];

const processSteps = [
  { num: "01", title: "Funnel Planning", desc: "Drafting the conversion map from cold user reach to website checkouts." },
  { num: "02", title: "Targeting Definitions", desc: "Configuring custom lookalike audiences, age blocks, and geographic filters." },
  { num: "03", title: "Creatives Design", desc: "Building thumb-stopping vectors, ad graphics, and visual copy overlays." },
  { num: "04", title: "Campaign Launch", desc: "Publishing ad sets with budget optimization limits (CBO/ABO) on Ad Managers." },
  { num: "05", title: "Pixel & API Synced", desc: "Integrating Meta conversion APIs to ensure zero lead capture drop-offs." },
  { num: "06", title: "A/B Testing Sprints", desc: "Running multiple visual drafts to double performance and decrease lead cost." }
];

const faqs = [
  {
    q: "What is SMM and how does it help my business?",
    a: "Social Media Marketing (SMM) uses paid ad networks (like Meta Ads, LinkedIn Ads, or Google Video Ads) to immediately target consumers and generate quality inquiries."
  },
  {
    q: "How much budget do I need for paid social ads?",
    a: "You can start with as low as ₹500/day for testing. We optimize campaigns continuously to lower your cost per lead (CPL)."
  },
  {
    q: "What makes Websbond's SMM services top-rated?",
    a: "We write high-converting ad copy and implement advanced conversion tracking APIs. We focus on lead quality and client conversions, not just impressions."
  },
  {
    q: "How long does it take to see results from paid campaigns?",
    a: "Paid social campaigns drive impressions and inquiries within 24 to 48 hours of ad approval and launch."
  }
];

export const SMMPage = () => {
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
          subject: "Quote Request: SMM Services",
          message: formData.message || "Requested paid social media ads consultation"
        })
      });
      if (!response.ok) throw new Error("API fail");
      toast({ title: "Request Received!", description: "We will contact you shortly to plan your paid ad campaigns." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly on WhatsApp.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="Social Media Marketing Agency in Delhi NCR | Websbond" 
        description="Launch high-ROI Meta & LinkedIn ad campaigns with Websbond's professional SMM services in Delhi NCR. Visual ad copywriting and lead tracking integrations."
        path="/smm-service-in-delhi"
        keywords="smm services delhi, social media marketing NCR, meta ads Gurgaon, lead generation ads India"
      />

      {/* ── Hero section ── */}
      <section className="relative overflow-hidden py-20 text-white" style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                → PAID SOCIAL CAMPAIGNS
              </div>
              <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
                Best Social Media Marketing Agency in Delhi NCR
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                Websbond is the premier social media marketing agency in Delhi NCR, delivering highly targeted paid ad strategies, creative hook copywriting, and measurable ROI across all major platforms.
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

      {/* ── Section 1: About ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#002b49]">→</span>
            <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">CONNECT, ENGAGE & GROW</span>
          </div>
          <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
            Elevate Your Brand with Expert SMM Services
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            As a leading digital marketing agency, Websbond delivers paid social media campaign structures that drive target engagement and customer conversions. We optimize profiles, setup conversions track APIs, and write ad drafts to lower Cost-per-Lead metrics.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Our teams manage budgets across Meta platforms, LinkedIn campaigns, and Google video, ensuring that your corporate ad spend produces tangible, high-ROI client bookings.
          </p>
        </div>
      </section>

      {/* ── Section 2: What is SMM ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 max-w-5xl mx-auto items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">CONVERSION CHANNELS</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
                What is SMM? (Social Media Marketing)
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Social Media Marketing (SMM) is the process of promoting a brand, product, or service through paid ads networks on platforms like Facebook, Instagram, LinkedIn, and YouTube. SMM enables immediate targeting, driving high-intent leads to your website and phone lines.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {smmHighlights.map((hl, idx) => (
                  <div key={idx} className="bg-white p-4 border border-gray-150 rounded-xl shadow-sm">
                    <h4 className="font-jost font-bold text-[#002b49] text-xs sm:text-sm mb-1">{hl.title}</h4>
                    <p className="text-gray-500 text-[10px] sm:text-xs leading-normal font-semibold">{hl.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ height: 350 }}>
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80" 
                alt="Social ads" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: SMM Process ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">OUR PAID CAMPAIGN ENGINE</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Our Paid Campaign Work Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm font-medium">
              We focus on metrics optimization to maximize conversions and leads.
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
              Common questions on conversions APIs, meta budgets, and leads tracking.
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

export default SMMPage;
