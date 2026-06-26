import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Target, ChevronDown, Check, Star, Shield, Award, Cpu, Send, Loader2, BarChart, Rocket, DollarSign } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const stats = [
  { val: "200%+", label: "Average ROI on Google Ads campaigns" },
  { val: "65%", label: "Clicks on buyer intent keywords captured by PPC" },
  { val: "86%", label: "Consumers who search for local businesses online" },
  { val: "4:1", label: "Ratio of conversion rate increase with SEO + PPC" },
  { val: "90%", label: "Internet users reached by Google Display Network" },
  { val: "1.5x", label: "Increase in brand search volume via PPC ads" },
  { val: "35%", label: "Mobile searches leading to local calls within 24h" },
  { val: "50%", label: "More likely to buy are PPC visitors vs organic visitors" }
];

const serviceTypes = [
  { title: "Search Ads", desc: "Appear at the top of search results when prospective customers are searching for your precise products or services." },
  { title: "Display Advertising Services", desc: "Engage custom and affinity audiences with compelling visual banners across Google's massive publisher network." },
  { title: "Shopping Campaigns", desc: "Promote online store product inventory, drive eCommerce product clicks, and scale direct transactions." },
  { title: "Conversion Tracking Setup", desc: "Deploy tags and pixels to measure exact form submissions, leads, and sales to make data-guided budget allocations." },
  { title: "Remarketing Campaigns", desc: "Reconnect with past site visitors who did not convert and bring them back to complete their purchase." },
  { title: "Local Map Campaigns", desc: "Drive foot traffic and direct phone calls to your physical location in Delhi NCR & Haryana using local ad assets." }
];

const processSteps = [
  { num: "01", title: "Strategy & Target Analysis", desc: "Reviewing company niches, competitive landscape, monthly budget targets, and conversion KPIs." },
  { num: "02", title: "Keyword & Intent Discovery", desc: "Auditing competitor PPC bids and isolating high-intent commercial keywords that yield real leads." },
  { num: "03", title: "Compelling Copywriting", desc: "Creating high-converting ad copy, visual assets, callout extensions, and responsive site links." },
  { num: "04", title: "Landing Page Optimization", desc: "Evaluating landing page load times, trust signals, form UX, and call-to-action relevance." },
  { num: "05", title: "Campaign Setup", desc: "Structuring ad groups cleanly, implementing geo-targeting rules, and selecting optimal bidding models." },
  { num: "06", title: "Bidding Optimization", desc: "Fine-tuning manual bid adjustments or utilizing smart automated bidding like target CPA or ROAS." },
  { num: "07", title: "Analytics Tracking", desc: "Setting up Google Tag Manager events to track every click, call, email, and checkout event accurately." },
  { num: "08", title: "Dynamic Remarketing", desc: "Showing tailor-made banner ads to past visitors to lower purchase resistance and increase retention." },
  { num: "09", title: "Audit & Growth reports", desc: "Providing transparent monthly breakdowns of ad spend, cost per lead, click-through rates, and overall ROI." }
];

const benefits = [
  { title: "Instant Page 1 Rankings", desc: "Skip the queue and appear on the first page of Google searches instantly to start capturing clicks." },
  { title: "Targeted Audience Control", desc: "Control who sees your ads based on location, age, search intent, device type, time of day, and interest." },
  { title: "Flexible Budget Setup", desc: "Start with a budget you're comfortable with. Pause, adjust, or scale campaigns based on live lead metrics." },
  { title: "Direct Conversions Focus", desc: "We track exactly which search queries yield calls and sales, eliminating wasted ad spend." }
];

const faqs = [
  {
    q: "What is the difference between SEO and Google Ads?",
    a: "SEO is organic and takes time (usually 3-6 months) to rank your pages without paying per click. Google Ads (PPC) is paid search marketing where you appear at the top instantly but pay Google every time a user clicks your ad."
  },
  {
    q: "How much budget do I need for Google Ads?",
    a: "There is no minimum budget. You can start with a small test budget and increase it once we prove positive ROI. You only pay when someone interacts with your ad."
  },
  {
    q: "How quickly will I start getting leads?",
    a: "Once the campaign is configured and approved by Google (usually within 24-48 hours), your ads go live immediately, and you can start receiving traffic and leads from day one."
  },
  {
    q: "How do you prevent click fraud or wasted ad spend?",
    a: "We actively set up negative keywords lists to exclude irrelevant searches, target only specified local areas, set strict IP exclusions, and continuously monitor search terms report."
  },
  {
    q: "Do you build custom landing pages for the campaigns?",
    a: "Yes. High-quality campaigns require conversion-optimized landing pages. We build or optimize pages to ensure they load fast and have clear lead capture forms."
  }
];

export const GoogleAdsPage = () => {
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
          subject: "Quote Request: Google Ads Services",
          message: formData.message || "Requested Google Ads PPC consulting"
        })
      });
      if (!response.ok) throw new Error("API fail");
      toast({ title: "Request Received!", description: "We will contact you shortly to review your Google Ads strategy." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly on WhatsApp.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="Google Ads Services in Delhi NCR | PPC Management Company | Websbond" 
        description="Maximize your ROI with expert Google Ads and PPC services in Delhi NCR by Websbond. Drive instant targeted traffic, generate high-quality leads, and increase sales."
        path="/google-ads-services"
        keywords="google ads services delhi, ppc management company Gurgaon, pay per click services Noida, google adwords agency Delhi"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 text-white" style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                → GOOGLE ADS & PPC SERVICES
              </div>
              <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
                Google Ads Services in Delhi NCR — Maximize Your Business Growth
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                Maximize your business growth with result-oriented Google Ads services from Websbond, the best digital marketing agency in Delhi NCR & Haryana. Our expert PPC services deliver high-converting campaigns tailored to drive targeted traffic, generate leads, and boost sales instantly.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
                <a href="tel:+919306623619" className="btn-orange">Call Now +91 9306623619</a>
                <a href="mailto:websbond@websbond.com" className="btn-outline">Send Email</a>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 text-[#002b49] shadow-lg">
              <h3 className="font-jost font-bold text-lg border-b border-gray-200 pb-3 mb-5">Get Instant Proposal</h3>
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
                  placeholder="Brief PPC Goals / Target Budget" 
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

      {/* Intro Narrative + Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">GROW INSTANTLY</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
                Why Choose Our Google Ads Services in Delhi NCR?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                In today's highly competitive online landscape, standing out requires speed, precision, and expertise. At Websbond, a top digital marketing agency in Delhi NCR, we craft digital advertising services that connect your business with the right audience at the exact time they are ready to buy.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team handles everything from negative keyword optimization to manual bid adjustments and analytics reporting. We design campaigns optimized for maximum ROI, ensuring your ad spend delivers measurable results across West Delhi, Dwarka, Gurgaon, Noida, and Haryana.
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

      {/* What are Google Ads */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#002b49]">→</span>
            <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">PAY PER CLICK EXPLAINED</span>
          </div>
          <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
            What Are Google Ads Services?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Google Ads services empower businesses to reach potential customers through targeted ads on Google's vast network. With billions of daily searches, pay-per-click (PPC) campaign services help you appear at the top of search results immediately, driving instant traffic.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            We actively monitor bid pricing, quality scores, landing page relevance, and user CTRs to lower your overall cost per acquisition, ensuring maximum returns for your marketing budget.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">OUR PPC ABILITIES</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Google Ads Campaign Formats We Manage
            </h2>
            <p className="text-gray-600 mt-2 text-sm font-medium">
              We leverage every format available on the AdWords network to match your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {serviceTypes.map((type, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <Target className="w-6 h-6 text-[#eb560c] mb-4" />
                <h3 className="font-jost font-bold text-[#002b49] text-base mb-2">{type.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Work Process */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">THE PROCESS</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Our Google Ads Work Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              We manage campaigns using a data-driven 9-step methodology that maximizes conversion yields.
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">BENEFITS</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
                Why Choose Websbond as Your Google Ads Agency?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Many agencies generate clicks but fail to deliver actual sales. At Websbond, our key focus is conversion tracking. We connect CRM tools and web analytics directly so that you know exactly how many leads your budget produced.
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
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80" 
                alt="PPC campaign analysis" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
              All you need to know about setting up PPC campaigns, monthly budgets, conversions, and ad optimizations.
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

export default GoogleAdsPage;
