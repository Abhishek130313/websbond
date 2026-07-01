import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Phone, Mail, ArrowRight, Check, ChevronDown, Monitor, Cpu, Laptop, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroServicesBg from "@/assets/hero_web_vibrant.png";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const websiteTypes = [
  {
    title: "Business / Corporate Websites",
    desc: "Professional websites designed to build credibility, showcase services, and generate enquiries. Ideal for consultancies, agencies, clinics, and service-based businesses."
  },
  {
    title: "E-Commerce Websites",
    desc: "Online stores built on WooCommerce or custom React/NodeJS with secure payment gateways, optimized product grids, and SEO-friendly checkout flows."
  },
  {
    title: "Doctor & Healthcare Websites",
    desc: "Trust-focused medical portals featuring doctor bios, appointment booking forms, clinical service grids, and GMB location embeds."
  },
  {
    title: "Landing Pages for Google Ads",
    desc: "High-converting single-page landing screens built for ad campaigns with quick loading speeds, strong CTAs, and analytics tracking."
  },
  {
    title: "Website Redesigns",
    desc: "Modernize your outdated corporate website while preserving valuable SEO indexing links. We optimize design, performance, and code structures."
  },
  {
    title: "Custom Website Solutions",
    desc: "Tailor-made software dashboards, custom databases, directory structures, and member portals designed around your business targets."
  }
];

const processSteps = [
  { step: "Step 1", title: "Discovery", desc: "We study your business process, competitors, keywords, and define target conversion goals." },
  { step: "Step 2", title: "Sitemap & Structure", desc: "We map the page hierarchy, navigation menus, and content layout flow." },
  { step: "Step 3", title: "Wireframes", desc: "Low-fidelity layouts are drafted and reviewed for layout sign-off before design commences." },
  { step: "Step 4", title: "Design & Development", desc: "We write clean, lightweight React or Next.js code using modern Tailwind CSS frameworks." },
  { step: "Step 5", title: "Rigorous Testing", desc: "We verify page speed metrics and cross-browser mobile responsiveness before launch." },
  { step: "Step 6", title: "Launch & Handover", desc: "We bind domains, deploy SSLs, configure analytics, and deliver all source code assets." }
];

const rankingsItems = [
  { title: "Page Speed Under 3 Seconds", desc: "We compress media assets, write clean DOM elements, and configure lazy loading to yield top speed marks." },
  { title: "Mobile-First Layout", desc: "Over 70% of local search traffic originates from phones. We design mobile layouts first and scale to desktop." },
  { title: "Clean URL Structure", desc: "Search-engine-friendly URLs perform much better on Google crawlers than messy parameters." },
  { title: "Proper Heading Hierarchy", desc: "We organize a strict single H1 per page alongside logical H2 and H3 structures for better index mapping." },
  { title: "Internal Linking Map", desc: "All pages link systematically to guide visitors and strengthen internal ranking authority." },
  { title: "Structured Schema Markup", desc: "JSON-LD schema tags are configured to enable rich snippet stars, maps, and review profiles on search pages." }
];

const techStack = [
  { name: "React / Next.js", desc: "For ultra-fast, interactive web apps and dashboards." },
  { name: "WordPress + Elementor", desc: "For corporate sites where easy self-management is preferred." },
  { name: "WooCommerce / Shopify", desc: "For secure online storefronts with cart checkouts." },
  { name: "Custom NodeJS / Express", desc: "For secure backends, custom database structures and APIs." },
  { name: "Figma UI/UX Files", desc: "All interface layouts are designed and shared via Figma." }
];

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "A standard 10-page corporate website takes 2–4 weeks from content sign-off. E-commerce sites take 4–8 weeks depending on catalog complexity."
  },
  {
    q: "Do I need to provide the content, or will you write it?",
    a: "We can do both. If you have copy, we will optimize it for readability and keywords. We also offer copywriting as a separate service."
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Yes. Every website Websbond engineers is 100% responsive and tested on both iOS Safari and Android Chrome before launch."
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Yes. We build with user-friendly administrative consoles and provide a walk-through sync so you can change text and images easily."
  },
  {
    q: "What happens if something breaks after launch?",
    a: "All web design packages include 30 days of free support. After that, we offer affordable maintenance retainers for secure updates."
  },
  {
    q: "Do you offer domain and hosting?",
    a: "We set up hosting on high-performance cloud providers (like AWS, Cloudflare, or premium VPS). You pay the provider directly so you own the hosting asset."
  }
];

export const WebDesign = () => {
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
          subject: "Quote Request: Website Design Services",
          message: formData.message || "Requested website design consultation"
        })
      });
      if (!response.ok) throw new Error("API fail");
      toast({ title: "Request Received!", description: "We will contact you shortly to discuss your website." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly on WhatsApp.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="Website Design Services in Delhi NCR | Top Web Design Agency | Websbond" 
        description="Unleash your business potential with Websbond's premier web design services in Delhi NCR. Custom React systems, eCommerce, and mobile-responsive websites that rank."
        path="/website-design-service-in-delhi"
        keywords="website design delhi, web development NCR, corporate website haryana, ecommerce developer Gurgaon"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#09090b] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 text-left">
              <div className="inline-flex items-center gap-2 bg-white/[0.1] border border-white/[0.15] shadow-lg shadow-white/5 rounded-full px-4 py-2 text-[11px] text-white/90 font-medium mb-6 select-none backdrop-blur-md">
                → WEBSITE DESIGN SERVICES
              </div>
              <h1 className="font-jost font-black text-4xl md:text-6xl leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                Best Website Design Company in Delhi NCR | Top Web Design Agency
              </h1>
              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-medium drop-shadow-md">
                Unleash your business potential with Websbond's premier website design services in Delhi NCR. As the best website designing company in Delhi NCR & Haryana, our expert team crafts responsive website designs, affordable web design services, and custom website development that drive growth, boost conversions, and dominate Google rankings.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
                <a href="tel:+919306623619" className="btn-orange">Call Now +91 9306623619</a>
                <a href="mailto:websbond@websbond.com" className="btn-outline">Send Email</a>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 fill-mode-both">
              <div className="bg-white/[0.08] border border-white/[0.15] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <h3 className="font-jost font-bold text-xl border-b border-white/20 pb-3 mb-5 text-white">Request A Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    name="name"  
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
            <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">BUILT TO RANK, BUILT TO CONVERT</span>
          </div>
          <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
            Website Design Services — Built to Rank, Built to Convert
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-semibold">
            Most businesses in Delhi NCR have a website. Far fewer have one that actually brings in customers.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed text-left max-w-3xl mx-auto">
            At Websbond, we have spent years building websites for doctors, manufacturers, education institutes, and retail brands across Delhi NCR and Haryana. We know what makes a visitor stay, what makes them call, and what makes Google take notice. If your current site is slow, looks outdated on mobile, or just isn't generating enquiries — this page will walk you through exactly what we do, how we do it, and what a project with us looks like from day one.
          </p>
        </div>
      </section>

      {/* ── Section 2: What We Build ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">OUR CAPABILITIES</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              What Kind of Websites Do We Build?
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Every website is built custom to align with your business goals, target audience, and growth strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {websiteTypes.map((type, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#eb560c] grid place-items-center mb-4 shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="font-jost font-bold text-[#002b49] text-base mb-2">{type.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Web Design Process ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">THE PIPELINE</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Our Web Design Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              We guide your project through six structured phases to ensure code efficiency and design layout perfection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-100 p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-3xl font-black text-orange-200 block mb-2">{step.step}</span>
                <h3 className="font-jost font-bold text-base text-[#002b49] mb-1.5">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-semibold">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Design & Google Rankings ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">SEO INTEGRATION</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Why Your Website's Design Directly Affects Your Google Rankings
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Google rewards websites that load fast, structure headings correctly, and keep visitors engaged.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {rankingsItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
                <div>
                  <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-xs mb-3">✓</span>
                  <h3 className="font-jost font-bold text-sm sm:text-base text-[#002b49] mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Tech We Use ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">TECHNOLOGY STACK</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Technology We Use
            </h2>
            <p className="text-gray-600 mt-2 text-sm font-medium">
              We select the right framework to support your scaling, server hosting, and admin updates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl text-center flex flex-col items-center">
                <Cpu className="w-6 h-6 text-[#eb560c] mb-3" />
                <h4 className="font-jost font-bold text-[#002b49] text-xs sm:text-sm mb-1">{tech.name}</h4>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-normal font-semibold">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: FAQs Accordion ── */}
      <section className="py-20 style={{ background: '#f5f5f5' }}" style={{ background: "#f5f5f5" }}>
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
              Answers to common questions regarding website development schedules, post-launch files support, and pricing.
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

export default WebDesign;
