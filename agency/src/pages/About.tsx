import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import heroAboutBg from "@/assets/hero_about.png";
import { Layout } from "@/components/site/Layout";
import { Eye, Target, Sparkles, ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";

const REVIEWS = [
  {
    name: "Dr. Neha Khandelwal",
    role: "Consultant Physician",
    stars: 5,
    text: "Excellent work by Abhishek and his team. A very dedicated team and has a lot of creativity when managing our web presence!"
  },
  {
    name: "Ajeet Tiwari",
    role: "Medical Professional",
    stars: 5,
    text: "Marketing is not about providing false details or boasting about yourself but letting people know what you want them to know about yourself. Websbond understands this distinction perfectly."
  }
];

const FAQS = [
  {
    q: "Why pick Websbond in Delhi NCR?",
    a: "Websbond is a top digital agency, delivering high-performance SEO, Google Ads/PPC, SMM, and web design that generates sustainable traffic growth and quality conversions."
  },
  {
    q: "What services do you offer?",
    a: "We offer end-to-end digital solutions: custom Web Design and Development (React/Next.js), SEO, Pay Per Click (PPC), Social Media Optimization (SMO), Google My Business (GMB) optimization, and App Development."
  },
  {
    q: "What makes Websbond the best SEO agency in Delhi NCR?",
    a: "We offer data-driven local and global SEO strategies. This includes keyword discovery, technical page speed tuning, on-page optimization, content writing, and link building. Our focus is strictly on delivering measurable ROI."
  },
  {
    q: "Do you offer local SEO services for businesses?",
    a: "Yes, we specialize in local SEO to help businesses rank in Delhi NCR & Haryana maps. This covers Google My Business optimization, local citations, and geo-targeted ranking campaigns."
  },
  {
    q: "SEO vs. PPC: What's the difference?",
    a: "SEO is organic and builds authority over the long term; PPC drives instant traffic via paid campaigns. We blend both to deliver consistent lead generation and optimal ROI."
  }
];

export const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEO 
        title="About Us | Best Digital Marketing Agency Delhi NCR | Websbond" 
        description="Learn about Websbond, the top digital marketing agency in Delhi NCR and Haryana. Meet our leadership, explore our vision and values." 
        path="/about-us" 
      />

      {/* ── Page Hero Header ── */}
      <section 
        className="relative overflow-hidden py-20 md:py-28 text-white text-center" 
        style={{ 
          backgroundImage: `url(${heroAboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/70 to-[#09090b] pointer-events-none" />
        <div className="container relative z-10">
          <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight mb-4">
            About Us
          </h1>
          <p className="text-white/85 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-semibold">
            Leading Digital Marketing Agency in Delhi NCR & Haryana delivering SEO, social media, PPC, branding, and result-driven online growth solutions for businesses.
          </p>
        </div>
      </section>

      {/* ── Meet Our Founders Block (Staggered Layout) ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-20">
            
            {/* Row 1: Meet Our Founders */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span style={{ color: "#004b75" }}>→</span>
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#eb560c]">LEADERSHIP</span>
                </div>
                <h2 className="font-jost font-black text-3xl text-[#002b49] leading-tight">
                  Meet Our Founders
                </h2>
                <div className="space-y-6">
                  {/* Founder 1: Abhishek */}
                  <div className="border-l-4 border-[#eb560c] pl-4">
                    <h3 className="font-jost font-bold text-xl text-[#002b49] mb-1">Abhishek Singh Rawat</h3>
                    <p className="text-[#eb560c] text-xs font-bold uppercase tracking-wider mb-2">Co-Founder & Tech Lead</p>
                    <p className="text-gray-500 text-sm leading-relaxed font-semibold">
                      Abhishek's journey commenced with a clear vision of how combining modern frameworks with search engine optimization strategies would yield positive results for scaling enterprises. He directs technical digital marketing, core speed optimizations, and SEO architecture to ensure seamless business growth online.
                    </p>
                  </div>
                  {/* Founder 2: Gopal */}
                  <div className="border-l-4 border-[#004b75] pl-4">
                    <h3 className="font-jost font-bold text-xl text-[#002b49] mb-1">Gopal Sharma</h3>
                    <p className="text-[#004b75] text-xs font-bold uppercase tracking-wider mb-2">Co-Founder & Marketing Head</p>
                    <p className="text-gray-500 text-sm leading-relaxed font-semibold">
                      Gopal brings strategic marketing expertise and client relationship management to Websbond. He oversees business development, campaign strategies, and ensures every client gets personalized attention with result-oriented digital marketing solutions that drive real ROI.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Websbond founders team" 
                />
              </div>
            </div>

            {/* Row 2: Vision */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80 md:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Vision chart illustration" 
                />
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#eb560c] flex items-center justify-center border border-orange-100 shadow-sm">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="font-jost font-black text-3xl text-[#002b49] leading-tight">
                  Vision: Leading Media Agency Globally with Innovation
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-semibold">
                  We imagine a future where every business grows online. Being digital ad specialists, we combine our skills and technology to ensure a great experience. Our aim is to become the best digital marketing firm globally.
                </p>
              </div>
            </div>

            {/* Row 3: Mission */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#eb560c] flex items-center justify-center border border-orange-100 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-jost font-black text-3xl text-[#002b49] leading-tight">
                  Mission: Empowering Businesses as a Digital Ad Agency Globally
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-semibold">
                  Our mission is to support business development and improve their digital presence to the next level. We use bright techniques and cutting-edge technology to bring about actual outcomes for our customers.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Mission chart illustration" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Your Partner For Growth Block ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-150">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span style={{ color: "#004b75" }}>→</span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#eb560c]">YOUR PARTNER FOR GROWTH</span>
              </div>
              <h2 className="font-jost font-black text-3xl md:text-4xl text-[#002b49] leading-tight">
                Empowering Brands in the <span style={{ color: "#eb560c" }}>Digital Age</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-semibold">
                In the present-day digital marketing scenario, where competition is intense, working traditionally is not enough to be noticed. Websbond, located in Delhi NCR & Haryana, offers specialized solutions for the online growth of your business through personalized strategies. The digital marketing activities that can result in real benefits for your company are: being noticeable through the website and doing social media campaigns; all these activities are taken care of by us.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to="/contact-us" 
                  className="font-bold text-white px-6 py-3 rounded-lg text-sm transition-all hover:bg-[#d14b0a]"
                  style={{ background: "#eb560c" }}
                >
                  Contact Our Team
                </Link>
                <a 
                  href="tel:+919306623619" 
                  className="font-bold px-6 py-3 rounded-lg text-sm border-2 transition-all"
                  style={{ borderColor: "#002b49", color: "#002b49" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#002b49";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#002b49";
                  }}
                >
                  Call +91 9306623619
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[380px]">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover" 
                alt="Business collaboration" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us Block ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-150 h-[380px]">
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover" 
                alt="Creative meeting" 
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span style={{ color: "#004b75" }}>→</span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#eb560c]">WHY CHOOSE WEBSBOND</span>
              </div>
              <h2 className="font-jost font-black text-3xl text-[#002b49] leading-tight">
                Why Choose Websbond as Your Digital Marketing Company?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-semibold">
                Being a reputable digital marketing agency, we emphasize developing tailored smart strategies for each business. We are a creative agency, and we also use the latest technology to help our clients increase their online presence. No matter if it is through social media, website promotion, or online marketing, we deliver results that truly make a difference.
              </p>

              <ul className="space-y-4">
                {[
                  "Smart, data-driven strategies for better performance",
                  "Affordable packages for every business scale",
                  "Experienced team in SEO and digital marketing campaigns"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#002b49] font-bold">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Testimonial Reviews Section ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-150">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span style={{ color: "#004b75" }}>→</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#eb560c]">CLIENTS TESTIMONIAL</span>
            </div>
            <h2 className="font-jost font-black text-2xl sm:text-4xl text-[#002b49]">
              Our Client Review
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-150 flex flex-col justify-between"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}
              >
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.stars }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold italic mb-6">
                    "{r.text}"
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-jost font-bold text-sm text-[#002b49]">{r.name}</h4>
                    <span className="text-[10px] text-gray-400 font-bold block mt-0.5">{r.role}</span>
                  </div>
                  <span className="text-[#004b75]/10 font-serif text-5xl leading-none font-bold">“</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Ask Questions Section ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span style={{ color: "#004b75" }}>→</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#eb560c]">ASK QUESTIONS</span>
            </div>
            <h2 className="font-jost font-black text-2xl sm:text-3xl text-[#002b49]">
              FAQ About Our SEO Services
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#002b49] hover:bg-orange-50/20 transition-colors focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-jost select-none">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-48 opacity-100 border-t border-gray-100 bg-gray-50/30" : "max-h-0 opacity-0"
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
    </Layout>
  );
};

export default AboutPage;
