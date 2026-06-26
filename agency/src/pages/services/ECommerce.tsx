import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ShoppingBag, ChevronDown, Check, Star, Shield, Award, Cpu, Send, Loader2, CreditCard, Smartphone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const stats = [
  { val: "70%+", label: "Shopping sessions occurring on mobile screens" },
  { val: "8.8%", label: "Conversion boost per 0.1s page speed improvement" },
  { val: "$8.1T", label: "Expected global eCommerce sales size" },
  { val: "30%+", label: "Average drop in cart abandonment with 1-page checkout" },
  { val: "24/7", label: "Operational uptime selling products automatically" },
  { val: "94%", label: "First impressions determined by website aesthetics" },
  { val: "88%", label: "Consumers less likely to return after a poor user experience" },
  { val: "3x", label: "ROI growth when implementing SEO + eCommerce CRO" }
];

const features = [
  { title: "Custom Brand Designs", desc: "No generic templates. We build bespoke shop interfaces aligning with your brand identity and products niche." },
  { title: "User-Centered Layouts", desc: "Intuitive product categories, quick-add buttons, and filter systems that make searching seamless." },
  { title: "Mobile-First Infrastructure", desc: "Responsive checkout systems optimized for smooth interactions across all mobile screens." },
  { title: "Conversion Optimization", desc: "Strategic placement of checkout badges, reviews, CTA buttons, and low-friction inputs to maximize sales." },
  { title: "High-Performance Speed", desc: "Compressed image delivery, modern database code, and caching layouts for under-2-second load times." },
  { title: "Secure Checkout Gateways", desc: "Seamless integrations of PCI-compliant networks like Razorpay, PayPal, Stripe, UPI, and Paytm." }
];

const processSteps = [
  { num: "01", title: "Discovery & Store Strategy", desc: "Analyzing target demographics, payment rules, shipping metrics, and competitor checkout setups." },
  { num: "02", title: "Wireframing & UX Design", desc: "Designing low-fidelity user pathways, from product discovery to the final checkout success screen." },
  { num: "03", title: "UI Brand Styling", desc: "Applying visual design tokens, product gallery styles, card borders, and elegant cart drawer sliders." },
  { num: "04", title: "Core Platform Coding", desc: "Developing pages on WooCommerce, Shopify, or clean custom React frontends with fast API connections." },
  { num: "05", title: "Catalog & Tags Setup", desc: "Mapping product categories, inventory tags, variations (size, color), and search meta fields." },
  { num: "06", title: "Gateways & Shipping Hooks", desc: "Integrating secure payment methods and configuring automated shipping rate calculators." },
  { num: "07", title: "Security & Load Auditing", desc: "Installing SSL credentials, verifying database indexing, and testing concurrent traffic behavior." },
  { num: "08", title: "Launch & Analytics Audit", desc: "Adding Google Analytics 4 tracking tags, Facebook Pixels, and email automation hooks before going live." }
];

const whyUsItems = [
  { title: "Proven Checkout Science", desc: "Our designs minimize distractions and cart abandonment, helping clients convert more visitors into buyers." },
  { title: "Tailored Growth Plans", desc: "Whether you need a simple Shopify site or a complex customized catalog, we configure the ideal tech stack." },
  { title: "Affordable Pricing plans", desc: "Premium custom store builds at pricing models designed to fit business startup budgets." },
  { title: "Ongoing Tech Support", desc: "We provide regular platform backups, security updates, and page speed checks to keep your store online." }
];

const faqs = [
  {
    q: "Which eCommerce platform is best for my online store?",
    a: "It depends on your catalogue size and custom needs. Shopify is excellent for fast launch and simple store management. WooCommerce is great for maximum flexibility. For complex requirements, we build high-performance custom React frontends."
  },
  {
    q: "Will my eCommerce website be fully responsive on mobile?",
    a: "Yes. Over 70% of online sales originate from smartphones. All our eCommerce sites are built mobile-first, ensuring quick loading times and user-friendly touch navigation."
  },
  {
    q: "How secure will client payment transactions be?",
    a: "100% secure. We integrate PCI-DSS-compliant gateways like Stripe, Razorpay, and PayPal using SSL encryption. We never store credit card info on your local servers."
  },
  {
    q: "Can you migrate my existing store from another platform?",
    a: "Yes. We support complete migrations, transferring customer records, past order histories, metadata, and product databases safely without losing SEO keyword rankings."
  },
  {
    q: "Do you offer post-launch support and inventory training?",
    a: "Yes. We provide comprehensive dashboard video training so your team can add products easily. We also offer monthly technical support and security monitoring plans."
  }
];

export const ECommercePage = () => {
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
          subject: "Quote Request: ECommerce Services",
          message: formData.message || "Requested eCommerce store development consultation"
        })
      });
      if (!response.ok) throw new Error("API fail");
      toast({ title: "Request Received!", description: "We will contact you shortly to review your eCommerce project." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly on WhatsApp.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="ECommerce Website Development Company in Delhi NCR | Websbond" 
        description="Build high-converting online stores with Websbond, the leading eCommerce web design company in Delhi NCR. Custom designs, Shopify, WooCommerce, and payment gateway setups."
        path="/e-commerce-website-services-in-delhi"
        keywords="ecommerce website development delhi, shopify store design gurgaon, woocommerce development noida, best ecommerce web design company"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 text-white" style={{ background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                → ECOMMERCE STORES DEVELOPMENT
              </div>
              <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
                Create Impactful Online Stores with the Best ECommerce Agency
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                Want to create an unforgettable shopping experience? Websbond, the leading eCommerce web designing and development agency in Delhi NCR & Haryana, specializes in building custom online stores that are visually stunning, user-friendly, and optimized for sales.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
                <a href="tel:+919306623619" className="btn-orange">Call Now +91 9306623619</a>
                <a href="mailto:websbond@websbond.com" className="btn-outline">Send Email</a>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 text-[#002b49] shadow-lg">
              <h3 className="font-jost font-bold text-lg border-b border-gray-200 pb-3 mb-5">Get Store Proposal</h3>
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
                  placeholder="Tell us about your products or store size" 
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
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">ELEVATE YOUR RETAIL SHOP</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49] mb-4">
                Elevate Your Brand with Custom ECommerce Web Designing
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                In today's digital-first world, your online store is more than just a website—it's the face of your brand. At Websbond, we design powerful, user-friendly, and visually appealing e-commerce platforms that not only attract visitors but turn them into repeat customers.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We craft e-commerce websites utilizing modern layouts, mobile-responsive styling, and secure shopping carts. The end result is a highly functional storefront with optimized categories and checkout systems designed to multiply conversions.
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

      {/* Features Grid */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">STORE CAPABILITIES</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              High-Converting ECommerce Design Features
            </h2>
            <p className="text-gray-600 mt-2 text-sm font-medium">
              We focus on the metrics that reduce cart abandonment and increase lifetime user value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <ShoppingBag className="w-6 h-6 text-[#eb560c] mb-4" />
                <h3 className="font-jost font-bold text-[#002b49] text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Work Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">THE PROCESS</span>
            </div>
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Our ECommerce Work Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              We translate store strategies into structured steps to build highly scalable eCommerce portals.
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
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">THE WEBSBOND DIFFERENCE</span>
              </div>
              <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
                Why Build Your Online Store with Websbond?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                An eCommerce site is only as strong as its conversion performance. We ensure your portal loads fast, works seamlessly on mobile devices, and integrates easily with popular inventory, email marketing, and analytics scripts.
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80" 
                alt="eCommerce dashboard management" 
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
              Answers regarding eCommerce development timelines, payment methods, shop platforms, and integrations.
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

export default ECommercePage;
