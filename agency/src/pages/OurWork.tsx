import { useState, useRef } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { Loader2, Phone, Briefcase, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const SERVICES_OPTIONS = [
  "Website Design & Development",
  "SEO Optimization",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Content Marketing",
  "E-Commerce Solutions",
  "App Development",
  "Google My Business",
];

const CREATIVE_PORTFOLIO = [
  { name: "Golden Masala Spices", sub: "Brand Identity & Packaging", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format&fit=crop&q=80" },
  { name: "Dr. Neha Khandelwal Clinic", sub: "Healthcare Graphic Designs", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80" },
  { name: "Gladwin Electrolink", sub: "Industrial Brand Assets", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=80" },
  { name: "Dr. Geeta's Breast Clinic", sub: "Patient Awareness Campaigns", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80" },
  { name: "Suraaj Organic Farms", sub: "Agri-Brand Creative Graphics", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&auto=format&fit=crop&q=80" },
  { name: "H.O.P.E Oncology Clinic", sub: "Physiotherapy Awareness Materials", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80" },
];

const WEB_DESIGN_PORTFOLIO = [
  { name: "Golden Masala", sub: "Food Manufacturing Company", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80" },
  { name: "Dr. Archit Pandit", sub: "Surgical Oncologist Portal", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80" },
  { name: "Dr. Neha Khandelwal", sub: "Consultant Physician Site", img: "https://images.unsplash.com/photo-1594824813573-246434de83fb?w=500&auto=format&fit=crop&q=80" },
  { name: "PDI Expert", sub: "Corporate Audit & Advisory", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80" },
  { name: "Oncology Forum", sub: "Medical Association Portal", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=80" },
  { name: "Singh Builders", sub: "Infrastructure Developer Site", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&auto=format&fit=crop&q=80" },
];

export const OurWorkPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name    = (data.get("name")    as string)?.trim();
    const phone   = (data.get("phone")   as string)?.trim();
    const email   = (data.get("email")   as string)?.trim();
    const service = (data.get("service") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !phone || !email) {
      toast({ title: "Please fill in all required fields (*).", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl("/api/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, message, source: "Portfolio Form" }),
      });
      if (!res.ok) throw new Error("Failed");
      toast({ title: "🎉 Quote Request Received!", description: "We will contact you shortly." });
      form.reset();
    } catch {
      toast({ title: "Something went wrong.", description: "Please call us directly at +91 9306623619.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="Our Portfolio | Web Design & SEO Success Stories | Websbond" 
        description="Browse our creative brand campaigns and responsive web design projects. See verified success cases crafted by Websbond." 
        path="/our-portfolio" 
      />

      {/* ── Hero Split Block Section ── */}
      <section 
        className="relative overflow-hidden py-16 md:py-24 text-white"
        style={{ background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)" }}
      >
        <div className="absolute inset-0 bg-[#004b75]/25 opacity-10 pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            
            {/* Left Column: Title and Subtext */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
                Our Portfolio
              </h1>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                Discover our diverse portfolio filled with innovative designs, cutting-edge technology, and impactful client success stories that highlight our creative excellence and proven results.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+919306623619"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-full text-[#002b49] bg-white transition-all hover:scale-105 shadow-md text-sm"
                >
                  <Phone className="w-4 h-4 text-[#eb560c]" /> +91 9306623619
                </a>
              </div>
            </div>

            {/* Right Column: Quote Form Card */}
            <div>
              <div
                className="bg-white rounded-3xl p-6 sm:p-8 text-[#002b49] shadow-2xl border border-gray-100/10"
              >
                <h3 className="font-jost font-bold text-xl mb-5 pb-2 border-b border-gray-100 text-[#002b49]">
                  Request A Quote
                </h3>

                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c]"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter Your Email Id"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c]"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter Your Mobile No."
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c]"
                  />

                  <select
                    name="service"
                    required
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-semibold"
                  >
                    <option value="">Select Services *</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>

                  {/* Mock ReCAPTCHA */}
                  <div className="bg-slate-50 border border-gray-150 rounded-xl p-3 flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-500 font-bold select-none">
                      <input 
                        type="checkbox" 
                        required 
                        className="w-4 h-4 rounded border-gray-300 text-[#eb560c] focus:ring-[#eb560c] accent-[#eb560c] cursor-pointer" 
                      />
                      I'm not a robot
                    </label>
                    <div className="flex flex-col items-center">
                      <img 
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                        className="w-5 h-5 object-contain opacity-75" 
                        alt="recaptcha logo" 
                      />
                      <span className="text-[7px] text-gray-400 font-bold tracking-tight mt-0.5">reCAPTCHA</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-lg transition-all duration-300 hover:opacity-90 disabled:opacity-60 text-sm uppercase tracking-wider bg-[#002b49]"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      "Send Message !"
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Creative Portfolio Grid ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="font-jost font-black text-2xl sm:text-4xl text-[#002b49]"
            >
              Our Creative Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CREATIVE_PORTFOLIO.map((p, idx) => (
              <div
                key={idx}
                className="group bg-[#fcfdfe] rounded-2xl overflow-hidden border border-gray-150 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col"
              >
                {/* Poster Image */}
                <div className="relative overflow-hidden h-64 bg-slate-100">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#002b49]/10 group-hover:bg-[#002b49]/20 transition-all" />
                </div>
                
                {/* Content */}
                <div className="p-5 border-t border-gray-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-jost font-bold text-base text-[#002b49] group-hover:text-[#eb560c] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-gray-400 text-xs font-semibold mt-1">{p.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Web Design Portfolio Section ── */}
      <section className="py-20 bg-slate-50 border-t border-gray-150">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="font-jost font-black text-2xl sm:text-4xl text-[#002b49]"
            >
              Web Design Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {WEB_DESIGN_PORTFOLIO.map((p, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col"
              >
                {/* Responsive Mockup Header */}
                <div className="relative overflow-hidden h-52 bg-[#f4f7fa] flex items-center justify-center p-4">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover rounded-lg shadow-sm border border-gray-200 transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Content */}
                <div className="p-5 border-t border-gray-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-jost font-bold text-base text-[#002b49] group-hover:text-[#eb560c] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">{p.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consult Pitch CTA Section ── */}
      <section className="py-20 bg-white">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#eb560c] font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            <Briefcase className="w-3.5 h-3.5" /> Start Your Build
          </div>
          <h2 className="font-jost font-black text-2xl sm:text-4xl text-[#002b49] mb-4">
            Need a similar setup built for your business?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-semibold">
            We provide direct developer coordination and custom high-speed code logic mapping to ensure your brand dominates local search keywords and converts enquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact-us" 
              className="font-bold text-sm text-white px-8 py-4 rounded-lg shadow-md transition-all hover:bg-[#d14b0a]"
              style={{ background: "#eb560c" }}
            >
              Initiate Similar Project
            </Link>
            <a 
              href="https://wa.me/919306623619?text=Namaste!%20I%20have%20seen%20your%20portfolio%20and%20want%20to%20build%20a%20website." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurWorkPage;
