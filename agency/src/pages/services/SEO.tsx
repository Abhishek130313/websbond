import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Search, ChevronDown, Check, Star, Shield, Target, Award, Cpu, Send, Loader2 } from "lucide-react";
import heroServicesBg from "@/assets/hero_services.png";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const stats = [
  { val: "70%", label: "Marketers prioritize SEO for long-term presence" },
  { val: "67.6%", label: "Clicks captured by the top 5 organic positions" },
  { val: "45.3%", label: "Mobile searches that are voice queries" },
  { val: "53.3%", label: "Traffic arriving from organic search queries" },
  { val: "14.6%", label: "Close rate for organic search engine leads" },
  { val: "90k+", label: "Google searches occurring globally per second" },
  { val: "96.5%", label: "Web pages receiving zero traffic from Google" },
  { val: "$122B", label: "Projected global search industry size by 2028" }
];

const seoTypes = [
  { title: "Global SEO Services", desc: "Expand your business globally as we secure high search engine rankings and international quality leads." },
  { title: "National SEO Services", desc: "Target high-intent keywords nationally to bring clients from different corners of the country." },
  { title: "Local SEO Services", desc: "Align with search parameters locally to dominate map visibility searches in Delhi NCR & Haryana." },
  { title: "Ecommerce SEO Services", desc: "Boost products catalog listings, optimize search categories, and scale transactions." },
  { title: "SEO for Small Business", desc: "Step into the business world and rank organically without paying overpriced media consulting ads." },
  { title: "Professional Technical SEO", desc: "Strengthen crawling structures, index schema maps, and repair site parameters." }
];

const processSteps = [
  { num: "01", title: "Website Audit", desc: "Identifying on-page errors, broken indexing layouts, and speed problems." },
  { num: "02", title: "Business Analysis", desc: "Reviewing company niches, target KPIs, and conversions pathways." },
  { num: "03", title: "Keyword Discovery", desc: "In-depth keyword search maps based on high volume and realistic difficulty." },
  { num: "04", title: "Competitor Scraping", desc: "Analyzing top competitors' ranking parameters and backlink paths." },
  { num: "05", title: "On-Page Optimization", desc: "Deploying header tags, metadata, sitemaps, and images alt rules." },
  { num: "06", title: "URL Structuring", desc: "Cleaning link hierarchies to be user and search engine friendly." },
  { num: "07", title: "Content Strategy", desc: "Creating engaging, semantic copies optimized around search topics." },
  { num: "08", title: "Link Building", desc: "Acquiring domain authority backlinks using clean blogger outreach." },
  { num: "09", title: "Reports & Analytics", desc: "Delivering monthly ranking metrics, conversions status, and ROI reviews." }
];

const benefits = [
  { title: "Quality Organic Leads", desc: "Our data-backed search mapping drives users actively looking for your service." },
  { title: "Long-Term Value", desc: "Unlike paid search ads, organic search placement does not disappear when budget ends." },
  { title: "Transparent Auditing", desc: "We provide keyword ranks logs and analytics data direct to you." },
  { title: "Experienced Engineers", desc: "Managed by tech leads who understand technical crawling algorithms." }
];

const faqs = [
  {
    q: "What is SEO and why does my business need it?",
    a: "SEO (Search Engine Optimization) optimizes your online presence so that search engines like Google rank you on page 1. It is critical because page 1 is where 95% of customer clicks occur."
  },
  {
    q: "How long does it take to see organic search improvements?",
    a: "SEO is a progressive strategy. Significant ranking jumps and traffic indexation are typically observed within 3 to 6 months."
  },
  {
    q: "What makes Websbond different from other SEO companies?",
    a: "We avoid automated bots and templated reports. Our tech founders handle keyword research, page speed optimizations, and schema deployments directly."
  },
  {
    q: "Do you offer Google My Business (GMB) map optimization?",
    a: "Yes. GMB optimization, maps coordinates, review tags, and local business citations are core highlights of our local SEO retainers."
  },
  {
    q: "How much does a search engine optimization retainer cost?",
    a: "Pricing is based on keyword targets and market competition. We offer customized packages. Contact us for a precise quote."
  }
];

export const SEOPage = () => {
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
          subject: "Quote Request: SEO Services",
          message: formData.message || "Requested search engine optimization consultation"
        })
      });
      if (!response.ok) throw new Error("API fail");
      toast({ title: "Request Received!", description: "We will contact you shortly to review your website SEO." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly on WhatsApp.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="SEO Services in Delhi NCR | Search Engine Optimization Company | Websbond" 
        description="Rank higher and capture search leads with Websbond's result-oriented SEO services in Delhi NCR. Technical audits, keywords mapping, and authority link building."
        path="/seo-service-in-delhi"
        keywords="seo services delhi, search engine optimization Gurgaon, local seo Haryana, best seo company Janakpuri"
      />

      {/* ── Hero section ── */}
      <section 
        className="relative overflow-hidden py-20 md:py-28 text-white text-center" 
        style={{ 
          backgroundImage: `url(${heroServicesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/70 to-[#09090b] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                → SEO & SEARCH VISIBILITY
              </div>
              <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
                SEO Services in Delhi NCR — Rank Higher, Get Customers
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                Boost your online presence with the leading SEO agency in Delhi NCR. Drive targeted organic traffic, dominate search page rankings for high-intent keywords, and convert clicks into recurring customers.
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

      {/* ── Section 1: Intro Narrative + Stats ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">GROW TRAFFIC & LEADS</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
                Grow Your Website Traffic and Leads With Professional SEO Services
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delhi NCR & Haryana represents one of the fastest-growing business hubs in India, home to countless startups, SMEs, and established enterprises. With so many brands competing for visibility, having a strong online presence is no longer optional—it’s essential. To stay ahead in today’s digital-first world, your business must reach the right audience at the right time.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                As a leading SEO Company, Websbond provides a complete range of performance-driven and professional SEO services designed to give your business MORE Visibility, MORE Quality Leads, and MORE Conversions. SEO is no longer a luxury—if you want to scale and outperform competitors, it is a crucial investment for long-term success.
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

      {/* ── Section 2: Why SEO is Important ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#002b49]">→</span>
            <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">PAGE 1 VISIBILITY</span>
          </div>
          <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
            Why is SEO Important For Your Business?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            There are only 10 organic search spots on the first page of Google. If a customer is typing a query related to a service that your company offers, page 1 is the spot you should be at to let your customer know you have the solution. If you are not there, your competitor gets the client.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            With organic search ranking campaigns, you establish your website as an industry authority. Authority eventually results in brand trust, and brand trust means brand loyalty.
          </p>
        </div>
      </section>

      {/* ── Section 3: SEO Models / Types ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">OUR CORE METHODS</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Result-Driven SEO Services in Delhi NCR
            </h2>
            <p className="text-gray-600 mt-2 text-sm font-medium">
              We cover all search layers, technical components, and geographic parameters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {seoTypes.map((type, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <Search className="w-6 h-6 text-[#eb560c] mb-4" />
                <h3 className="font-jost font-bold text-[#002b49] text-base mb-2">{type.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Process ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">THE PROCESS</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Our SEO Work Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Bespoke, industry-focused search visibility strategies built on 360-degree technical checklists.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
                <span className="text-3xl font-black text-orange-200 block mb-2">{step.num}</span>
                <h3 className="font-jost font-bold text-base text-[#002b49] mb-1.5">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-semibold">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Benefits ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">BENEFITS</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
                Why Choose Websbond as Your SEO Agency?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lacking transparency in SEO often ends up costing you money as well as page rankings. Our team does not just promise you miraculous results; we show you detailed rank reports and specify how we intend to deliver them.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => (
                  <div key={idx} className="bg-[#f8fafc] p-4 rounded-xl border border-gray-100">
                    <h4 className="font-jost font-bold text-[#002b49] text-xs sm:text-sm mb-1">{b.title}</h4>
                    <p className="text-gray-500 text-[10px] sm:text-xs leading-normal font-semibold">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 350 }}>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" 
                alt="SEO audits" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: FAQs ── */}
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
              Answers regarding technical on-page keywords optimization, indexing audits, and search campaign details.
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

export default SEOPage;
