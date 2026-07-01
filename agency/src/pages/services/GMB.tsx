import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { MapPin, ChevronDown, Check, Star, Shield, Search, TrendingUp, Navigation, Send, Loader2 } from "lucide-react";
import heroServicesBg from "@/assets/hero_seo_vibrant.png";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const stats = [
  { val: "46%", label: "Of all Google searches have local user intent" },
  { val: "Local 3-Pack", label: "Captures more than 50% of local click volume" },
  { val: "30-50%", label: "Average traffic boost within 1-3 months" },
  { val: "4.5+", label: "Star rating target to rank in maps pack" },
  { val: "56%", label: "Of local listing actions are website visits" },
  { val: "24%", label: "Of local actions are direct telephone calls" },
  { val: "20%", label: "Of actions are maps driving directions requests" },
  { val: "86%", label: "Of users look up a business location on Google Maps" }
];

const challenges = [
  { title: "High Local Competition", desc: "Delhi NCR & Haryana represents a crowded market where hundreds of physical businesses battle for the same local search map space." },
  { title: "Incorrect or Incomplete Info", desc: "Outdated business hours, mismatched NAP details, or empty listings decrease rank authority and damage trust." },
  { title: "Outdated Images & Media", desc: "Profiles lacking high-definition photos or storefront pictures fail to engage potential customers and get lower ranking signals." },
  { title: "Review Management Pitfalls", desc: "Ignoring client feedback or struggling with spam reviews can rapidly damage your local digital reputation." },
  { title: "Listing Suspensions & Errors", desc: "Google has strict guidelines. Minor policy violations can trigger suspension alerts or duplicate listings issues." }
];

const processSteps = [
  { num: "01", title: "Profile Audit & Verification", desc: "Verifying your ownership and examining existing issues, duplicates, and ranking opportunities." },
  { num: "02", title: "NAP Information Tuning", desc: "Ensuring your Name, Address, and Phone number are perfectly consistent across all local web citations." },
  { num: "03", title: "Local Keyword Integration", desc: "Optimizing the description and listings with regional search terms to boost maps indexation." },
  { num: "04", title: "HD Image & Video Optimization", desc: "Uploading curated photos of storefronts, offices, and projects to increase CTRs by up to 35%." },
  { num: "05", title: "Services & Products Cataloging", desc: "Configuring complete, clear service menus and product lists with prices for direct mobile customer booking." },
  { num: "06", title: "Weekly GMB Updates & Posts", desc: "Publishing offers, events, and announcements regularly to signal high activity levels to Google's ranking bot." },
  { num: "07", title: "Review Campaigns & Replies", desc: "Establishing strategies to acquire positive reviews and responding professionally to boost maps visibility." },
  { num: "08", title: "Monthly Analytics Reports", desc: "Monitoring traffic channels, maps views, phone calls, and direction clicks to refine local SEO ROI." }
];

const whyUsItems = [
  { title: "Delhi NCR Focus", desc: "Tailored strategies for West Delhi, Dwarka, Gurgaon, Noida, Haryana and beyond, driving calls from nearby leads." },
  { title: "Rapid Rank Growth", desc: "Our local citation strategies regularly yield a 30-50% map impressions boost within the first 90 days." },
  { title: "Affordable Management", desc: "Complete GMB retainers starting at only ₹5,999/month, offering premium value over high paid-ad budgets." },
  { title: "Fully Integrated Local SEO", desc: "We combine map tuning with organic search engine technical SEO to dominate page 1 top-to-bottom." }
];

const faqs = [
  {
    q: "How does GMB optimization in Delhi NCR boost my business?",
    a: "GMB optimization enhances your Google Search and Maps visibility, landing you in the local 3-pack. We optimize your Google My Business profile with accurate details, posts, and images, driving more direct phone calls and location visits."
  },
  {
    q: "What is included in your Google My Business services?",
    a: "Our services cover profile setup, NAP consistency audits, keyword description optimizations, HD media uploads, weekly business posts, customer reviews monitoring, local citations building, and monthly performance tracking."
  },
  {
    q: "Why are reviews crucial for my GMB ranking?",
    a: "Google uses reviews as a key trust signal. Profiles with active, highly-rated reviews (4.5+ stars) and consistent review responses rank significantly higher in maps searches than inactive listings."
  },
  {
    q: "How soon will GMB optimization show results?",
    a: "Most local businesses see a 30-50% boost in phone calls and directions traffic within 1 to 3 months of initiating our GMB optimization retainer."
  },
  {
    q: "Can you help resolve suspended or disabled listings?",
    a: "Yes. We analyze the causes of GMB suspension, correct listing information to align with Google guidelines, and handle reinstatement requests on your behalf."
  }
];

export const GMBPage = () => {
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
          subject: "Quote Request: GMB Optimization Services",
          message: formData.message || "Requested Google My Business consultation"
        })
      });
      if (!response.ok) throw new Error("API fail");
      toast({ title: "Request Received!", description: "We will contact you shortly to review your local map GMB strategy." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly on WhatsApp.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="GMB Optimization Services in Delhi NCR | Google My Business Expert | Websbond" 
        description="Boost your local maps search rankings with expert GMB optimization services in Delhi NCR & Haryana by Websbond. Dominate the local 3-pack and get more calls."
        path="/gmb-service-in-delhi"
        keywords="gmb optimization services delhi, google my business agency gurgaon, local business profile optimization noida, google maps listing optimization"
      />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-20 md:py-28 text-white text-center" 
        style={{ 
          backgroundImage: `url(${heroServicesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#09090b] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 text-left">
              <div className="inline-flex items-center gap-2 bg-white/[0.1] border border-white/[0.15] shadow-lg shadow-white/5 rounded-full px-4 py-2 text-[11px] text-white/90 font-medium mb-6 select-none backdrop-blur-md">
                → GMB & LOCAL MAPS OPTIMIZATION
              </div>
              <h1 className="font-jost font-black text-4xl md:text-6xl leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                GMB Optimization Services in Delhi NCR — Get More Local Customers
              </h1>
              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-medium drop-shadow-md">
                Boost your local visibility and attract nearby customers with expert GMB management services from Websbond. Secure top positions in Google Search and Google Maps, ensuring better search rankings, customer trust, and increased foot traffic.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
                <a href="tel:+919306623619" className="btn-orange">Call Now +91 9306623619</a>
                <a href="mailto:websbond@websbond.com" className="btn-outline">Send Email</a>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 fill-mode-both">
              <div className="bg-white/[0.08] border border-white/[0.15] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <h3 className="font-jost font-bold text-xl border-b border-white/20 pb-3 mb-5 text-white">Request Local Audit</h3>
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
                  placeholder="Business Name & Location (if listed)" 
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

      {/* What is GMB */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">UNLOCK MAPS SEO POWER</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
                What is Google My Business? Unlock Local SEO Power
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Google My Business (now Google Business Profile) is a free tool from Google that lets businesses in Delhi NCR manage their online presence on Google Search and Maps. It displays essential info like your location, contact details, operating hours, photos, and reviews.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                As the best digital marketing company in Delhi NCR, we specialize in GMB optimization services to secure top positions in the local 3-pack, where 46% of Google searches are local. This boosts visibility and drives customers directly to your storefront or phone lines without paying for ads.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-[#f8fafc] border border-gray-100 p-5 rounded-2xl">
                  <span className="text-2xl font-black text-[#eb560c] block">{s.val}</span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide leading-tight mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">LOCAL SEO HURDLES</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Overcome GMB Challenges for Delhi-Based Businesses
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Avoid the mistakes that block local business profiles from ranking on Google Maps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {challenges.map((c, idx) => (
              <div key={idx} className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <AlertTriangle className="w-6 h-6 text-[#eb560c] mb-4" />
                <h3 className="font-jost font-bold text-[#002b49] text-base mb-2">{c.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">THE PROCESS</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Our Proven Google My Business Optimization Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              A comprehensive 8-step management workflow to keep your profile active and high-ranking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-100 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
                <span className="text-3xl font-black text-orange-200 block mb-2">{step.num}</span>
                <h3 className="font-jost font-bold text-base text-[#002b49] mb-1.5">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-semibold">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">LOCAL AGENCY ADVANTAGE</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
                Why Websbond is the Best Choice for GMB Management
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We focus on localized citation maps, reputation scores, review generation templates, and verified link outreach to establish absolute prominence in Delhi NCR and Haryana search queries.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {whyUsItems.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100">
                    <h4 className="font-jost font-bold text-[#002b49] text-xs sm:text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] sm:text-xs leading-normal font-semibold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 350 }}>
              <img 
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&auto=format&fit=crop&q=80" 
                alt="Local maps search optimization" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
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
              Answers regarding GMB profile setup, maps rankings, suspension repairs, and reviews campaigns.
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

export default GMBPage;
