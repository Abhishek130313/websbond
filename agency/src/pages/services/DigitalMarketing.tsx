import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { HexagonBadges } from "@/components/site/HexagonBadges";
import { 
  Send, Phone, ChevronDown, 
  Search, MousePointerClick, Share2, Target, Mail, FileText, 
  MapPin, ShieldCheck, TrendingUp, Sparkles, Building2, Stethoscope, 
  Briefcase, ShoppingBag, GraduationCap, Plane, Car, Scale, Cpu, Loader2
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/api";
import { Link } from "react-router-dom";

export const DigitalMarketingPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast({ title: "Details Required", description: "Name, phone and email are required.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: "Digital Marketing Consultation Quote",
        message: formData.message || "Requested digital marketing consultation"
      });
      toast({ title: "Proposal Request Received!", description: "Our growth experts will call you within 30 minutes." });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast({ title: "Submission Failed", description: "Please try contacting us directly via WhatsApp or phone call.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "Results from a digital marketing service vary by strategy. Paid ads (Google Ads / Meta Ads) deliver instant leads within 24–48 hours, while organic SEO takes a few months for strong, long-lasting rankings."
    },
    {
      q: "How do you measure ROI in digital marketing?",
      a: "We track clear conversion KPIs: cost-per-lead (CPL), organic keyword positions, website conversion rates, and revenue generated versus campaign ad spend."
    },
    {
      q: "How do I get started with a digital marketing service?",
      a: "Simply request a proposal or call us at +91 9306623619. Our team will audit your current online presence and send a custom growth plan tailored to your business goals."
    },
    {
      q: "Can digital marketing generate quality leads?",
      a: "Yes. By targeting high-intent buyers through search ads, localized SEO, and social retargeting, we filter out non-serious inquiries and deliver qualified commercial leads."
    },
    {
      q: "Which platforms are best for digital marketing?",
      a: "It depends on your target audience. B2B companies excel on Google Search & LinkedIn, local medical/professional services thrive on Local SEO & Google Ads, and e-commerce brands scale rapidly via Instagram & Meta ads."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Digital Marketing Agency | Performance Marketing Services | Websbond"
        description="Scale your business with Websbond's result-oriented digital marketing, SEO, Google Ads, and social media campaigns in Delhi NCR India."
      />

      {/* 1. HERO SECTION WITH REQUEST A QUOTE FORM (Matching Video) */}
      <section className="relative w-full bg-[#FAF9FF] pt-36 md:pt-44 pb-16 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Headline Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> High Conversion Growth Agency
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium text-slate-900 leading-[1.2] tracking-tight mb-5 font-sans">
              Fuel Your Growth With <br className="hidden sm:block" />
              <span className="italic font-bold text-[#4B2874]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Strategic Online Campaigns
              </span>
            </h1>

            <p className="text-slate-600 text-base leading-relaxed mb-4 max-w-xl">
              Willing to get more leads and convert more? Our expert-based campaigns are designed to reach the correct audience and transform traffic into actual revenue. Let's create a growth plan that drives real results. Start now and start pulling in quality leads.
            </p>

            <HexagonBadges />

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4B2874] hover:bg-[#391e59] text-white font-bold text-sm shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Contact Us</span>
              </button>

              <span className="text-xs font-bold text-slate-400">OR</span>

              <a
                href="tel:+919306623619"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400 fill-current" />
                <span>Call Now (+91 9306623619)</span>
              </a>
            </div>
          </div>

          {/* Right Lead Quote Form Card (Video Style) */}
          <div id="quote-form" className="lg:col-span-5 bg-white border border-slate-200/90 shadow-xl rounded-2xl p-7 relative">
            <div className="absolute -top-3 left-6 bg-[#4B2874] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-xs">
              Instant Quote Request
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-5 font-sans">Request A Quote</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-slate-50/50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone No*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 Phone Number"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-slate-50/50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-slate-50/50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Type Your Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us about your business goals & required services..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 bg-slate-50/50 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-[#4B2874] hover:bg-[#391e59] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Proposal Request"}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 2. SUB-HERO BANNER SECTION (Matching Video) */}
      <section className="py-16 bg-white border-b border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-4 py-1 rounded-full mb-4">
            Smart. Scalable. Secure.
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-tight mb-5 font-sans">
            Hire Expert Digital Marketing Service Professionals & <br className="hidden sm:block" />
            <span className="italic font-bold text-[#4B2874]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Start Generating Leads Now
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Based in Delhi, India, and serving clients worldwide, Websbond assists businesses in reaching success with custom solutions designed specifically to address their unique challenges of expanding online visibility. Our internet marketing services are optimized to provide you with quality output that addresses your needs.
          </p>

          <button 
            onClick={() => document.getElementById("what-we-offer")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
          >
            <span>See How We Can Help</span>
            <ChevronDown className="w-4 h-4 text-indigo-400" />
          </button>
        </div>
      </section>

      {/* 3. CTA CONVERSION BANNER (High Contrast & Clear Readability) */}
      <section className="py-16 bg-[#0F172A] text-white border-y border-slate-800 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
              Scalable ROI Campaigns
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white leading-tight mb-4 font-sans tracking-tight">
              Ready To Scale Your Business Online WITH{" "}
              <span className="text-cyan-300 font-extrabold">
                HIGH CONVERTING DIGITAL MARKETING CAMPAIGNS?
              </span>
            </h3>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              Increase visibility, generate quality leads, and grow your revenue with result-oriented digital marketing services. Contact us now and get a free quote tailored to your business needs.
            </p>
          </div>

          <div className="flex items-center gap-3.5 shrink-0">
            <button
              onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3.5 rounded-full bg-[#5D328E] hover:bg-[#4B2874] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-indigo-500/25 transition-all border border-purple-400/30"
            >
              Request Proposal
            </button>
            <a
              href="https://wa.me/919306623619"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-emerald-500/25 transition-all border border-emerald-400/30"
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE OFFER - 6 SERVICES GRID (Matching Video) */}
      <section id="what-we-offer" className="py-20 bg-[#FAF9FF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">What We Offer</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 font-sans max-w-3xl mx-auto">
            Buy Results-Focused Online Marketing Services That <span className="italic font-bold text-[#4B2874]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Maximize Conversions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-12">
            Here is a list of custom digital marketing solutions that we provide to help businesses connect with their clients and transform clicks into regular customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
            {[
              {
                title: "Search Engine Optimisation",
                icon: Search,
                desc: "Your customers will easily find you whenever they search for your services through our professional SEO solutions. We bring your traffic and business ideas to life.",
                to: "/seo-service-in-delhi"
              },
              {
                title: "Pay Per Click Services",
                icon: MousePointerClick,
                desc: "The most distinguishing aspect of PPC Services is the ability to display advertisements on Google search, YouTube, and partner networks with instant buyer intent.",
                to: "/google-ads-services"
              },
              {
                title: "Social Media Optimization",
                icon: Share2,
                desc: "Our social media experts start off by analyzing your competitors and industry to see what your customers need, building strong brand authority.",
                to: "/smo-service-in-delhi"
              },
              {
                title: "Google Ads Management",
                icon: Target,
                desc: "We plan and streamline the data-supported advertising campaigns that will maximize the ROI and decrease the cost of acquisition for consistent growth.",
                to: "/google-ads-services"
              },
              {
                title: "E-Mail Marketing",
                icon: Mail,
                desc: "Conversion-focused email campaigns are part of our internet marketing workflows, nurturing leads and increasing repeat sales.",
                to: "/content-writing-service-in-delhi"
              },
              {
                title: "Content Marketing",
                icon: FileText,
                desc: "At Websbond, our vision is to develop SEO-optimal content that engages, informs and transforms audiences into loyal customer bases.",
                to: "/content-writing-service-in-delhi"
              }
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-slate-200/90 shadow-sm hover:shadow-md rounded-2xl p-7 transition-all flex flex-col justify-between group hover:border-indigo-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-5 group-hover:bg-[#4B2874] group-hover:text-white transition-colors">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">{card.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">{card.desc}</p>
                </div>
                <Link
                  to={card.to}
                  className="text-xs font-bold text-indigo-700 hover:text-[#4B2874] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Learn More</span> →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-xs">
            <span className="text-sm font-semibold text-slate-800 text-left">
              Hire professional experts today and launch your ROI-focused campaign now!
            </span>
            <button
              onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 rounded-full bg-[#4B2874] hover:bg-[#391e59] text-white font-bold text-xs shrink-0 shadow-xs"
            >
              Let's Grow Your Business ↗
            </button>
          </div>
        </div>
      </section>

      {/* 5. TARGET LOCATIONS GRID (Matching Video) */}
      <section className="py-20 bg-white border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Get Found In Your Target Locations</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 font-sans max-w-3xl mx-auto">
            Local SEO & Digital Marketing Strategies Designed for <span className="italic font-bold text-[#4B2874]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Regional Growth</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-12">
            Target high-intent customers regionally with customized Google Maps & Local Search ranking strategy.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Digital Marketing Washington", "Digital Marketing New York", "Digital Marketing Los Angeles", "Digital Marketing New Zealand",
              "Digital Marketing Agency UK", "Digital Marketing Dallas", "Digital Marketing Dubai", "SEO Agency Columbus Ohio",
              "Digital Marketing Delhi NCR", "Digital Marketing Gurgaon", "Digital Marketing Noida", "Digital Marketing London"
            ].map((loc) => (
              <div key={loc} className="bg-[#FAF9FF] border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-between text-center hover:border-indigo-300 transition-colors">
                <MapPin className="w-5 h-5 text-indigo-600 mb-2" />
                <span className="text-xs font-bold text-slate-800 leading-snug mb-3">{loc}</span>
                <Link to="/contact-us" className="text-[11px] font-semibold text-indigo-700 hover:text-indigo-900">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ADVANCED CUSTOM SOLUTIONS / WHY CHOOSE US (Matching Video) */}
      <section className="py-20 bg-[#FAF9FF] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Proven Expertise</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 font-sans max-w-3xl mx-auto">
            Invest in Advanced Custom Digital Marketing Solutions to <span className="italic font-bold text-[#4B2874]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Drive Traffic & Conversions</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-12">
            Our data-backed, scalable approach ensures every marketing dollar invested delivers tangible business revenue.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
            {[
              { title: "Customized Growth Strategy", icon: TrendingUp, desc: "Our team of certified professionals creates a tailored marketing strategy aligned with your business goals and market segment." },
              { title: "Multi-Channel Expertise", icon: Share2, desc: "From SEO and paid ads to content automation, we integrate multiple channels into 1 cohesive, high-converting funnel." },
              { title: "Conversion-Focused Execution", icon: Target, desc: "Traffic alone doesn't generate revenue; rather, conversions do. Every campaign is optimized for lead generation." },
              { title: "Transparent Reporting & ROI Tracking", icon: ShieldCheck, desc: "We provide clear performance insights, detailed analytics, and regular reporting so you always know your investment ROI." },
              { title: "Scalable & Future-Ready Solutions", icon: Sparkles, desc: "Marketing needs change as your business expands. Our custom solutions are scalable and responsive to search engine updates." },
              { title: "Data-Driven Marketing Strategy", icon: Cpu, desc: "We provide data-driven marketing strategies that help businesses make smarter decisions based on real analytics." }
            ].map((box) => (
              <div key={box.title} className="bg-white border border-slate-200/90 shadow-sm rounded-2xl p-6 flex flex-col items-start hover:border-indigo-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#F1EBFC] text-[#4B2874] flex items-center justify-center mb-4">
                  <box.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{box.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRY VERTICALS SHOWCASE (Matching Video) */}
      <section className="py-20 bg-white border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Driving Growth Across Industry Verticals</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-12 font-sans max-w-3xl mx-auto">
            Smart Digital Marketing Solutions for <span className="italic font-bold text-[#4B2874]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>All Industries</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 text-left">
            {[
              { title: "Cleaning Industry", icon: Building2 },
              { title: "Fashion Brand", icon: ShoppingBag },
              { title: "Finance Company", icon: Scale },
              { title: "Travel Agency", icon: Plane },
              { title: "IT Enterprise", icon: Cpu },
              { title: "Automotive Brand", icon: Car },
              { title: "Hospital & Health", icon: Stethoscope },
              { title: "Legal & Law Firm", icon: Briefcase },
              { title: "Moving Company", icon: Building2 },
              { title: "Educational Institute", icon: GraduationCap },
              { title: "Real Estate Agency", icon: Building2 },
              { title: "Ecommerce Store", icon: ShoppingBag },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAF9FF] border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-300 transition-colors">
                <div>
                  <item.icon className="w-6 h-6 text-indigo-600 mb-3" />
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{item.title} Digital Marketing</h4>
                </div>
                <Link to="/contact-us" className="text-[11px] font-semibold text-indigo-700 hover:text-indigo-900 mt-3 inline-block">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS ACCORDION SECTION (Matching Video) */}
      <section className="py-20 bg-[#FAF9FF] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Frequently Asked Questions</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 font-sans">
              Got Questions? We Have <span className="italic font-bold text-[#4B2874]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Answers</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left text-sm font-bold text-slate-900 hover:text-indigo-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 transition-transform ${openFaq === idx ? "rotate-180 bg-[#4B2874] text-white" : "text-indigo-600"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <CtaBanner />
    </Layout>
  );
};

export default DigitalMarketingPage;
