import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Target, Eye, Shield, Users, Award, ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import a1 from "@/assets/avatar1.webp";
import a2 from "@/assets/avatar2.webp";
import a3 from "@/assets/avatar3.webp";

const testimonials = [
  {
    name: "Raman Kant Aggarwal",
    role: "Doctor",
    text: "Dedicated, focused, genuine trustworthy and enterprising. Real good value for Customers.",
    stars: 5,
    img: a1
  },
  {
    name: "Geeta Kadayaprath",
    role: "The Breast Cancer Clinic",
    text: "Prompt services with a great team which is able to create excellent content and post it at appropriate times. Response to queries and resolution of problems is also very quick. Thank you!",
    stars: 5,
    img: a2
  },
  {
    name: "Sawan Bopanna",
    role: "Doctor",
    text: "Mr Abhishek and the Websbond digital marketing team have been very professional in their digital services. Definitely recommend.",
    stars: 5,
    img: a3
  },
  {
    name: "Dr. Neha Khandelwal",
    role: "Doctor",
    text: "Excellent work by Mr Abhishek and his team. A very dedicated team and has lot of creativity!",
    stars: 5,
    img: a1
  },
  {
    name: "Ajeet Tiwari",
    role: "Doctor",
    text: "Marketing is not about providing false details or boasting about yourself but letting people know what you want them to know about yourself rather than they learning unpredictable things about you. Highly satisfied with Websbond.",
    stars: 5,
    img: a2
  },
  {
    name: "Apolished Finish",
    role: "Business",
    text: "Searching for an exceptional SEO company led me to Websbond, and I'm thrilled with my decision! From the moment I contacted them, their professionalism and expertise were evident.",
    stars: 5,
    img: a3
  }
];

const faqs = [
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
        title="Digital Marketing Agency in Delhi NCR & Haryana | About Websbond" 
        description="Websbond is a leading digital marketing agency in Delhi NCR and Haryana. Meet our founders Abhishek Singh Rawat and Gopal Sharma, and learn about our mission, vision, and values." 
        path="/about-us" 
        keywords="digital marketing agency in delhi, seo agency in delhi, web design company haryana, digital agency Gurgaon, websbond team"
      />

      {/* ── Page Hero Header ── */}
      <section className="relative overflow-hidden py-16 md:py-20 text-white" style={{ background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            → ABOUT WEBSBOND
          </div>
          <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight mb-4">
            About Us
          </h1>
          <p className="text-white/85 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Leading Digital Marketing Agency in Delhi NCR delivering SEO, social media, PPC, branding, and result-driven online growth solutions for businesses.
          </p>
        </div>
      </section>

      {/* ── Main About Story ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image / Founders Visual */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100" style={{ height: 380 }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                  alt="Websbond Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002b49]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#eb560c] text-xs font-black uppercase tracking-wider mb-1">Established 2024</span>
                  <h3 className="font-jost font-bold text-white text-xl">Websbond Digital Pipeline</h3>
                  <p className="text-white/70 text-xs mt-1">Delhi NCR & Haryana's Premier Digital Growth Engineers</p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">YOUR PARTNER FOR GROWTH</span>
              </div>
              <h2 className="font-jost font-bold text-3xl md:text-4xl text-[#002b49]">
                Empowering Brands in the <span className="text-[#eb560c]">Digital Age</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                In the present-day digital marketing scenario, where competition is intense, working traditionally is not enough to be noticed. Websbond, located in Delhi NCR & Haryana, offers specialized solutions for the online growth of your business through personalized strategies. The digital marketing activities that can result in real benefits for your company are: being noticeable through the website and doing social media campaigns; all these activities are taken care of by us.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We have been in the business helping brands scale, and our clients have been very successful online as a result of our work in SEO, content writing, PPC ads, and web development for continuous growth. Building a good relationship with the clients is in our business, and we try to discover their wants, doing so, and we put our expertise to put our clients' dreams into reality.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact-us" className="btn-orange text-sm font-bold">Contact Our Team</Link>
                <a href="tel:+919306623619" className="btn-navy text-sm font-bold">Call +91 9306623619</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founders & Meet Our Team ── */}
      <section className="py-20" style={{ background: "#f5f5f5" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">LEADERSHIP</span>
            </div>
            <h2 className="font-jost font-bold text-3xl md:text-4xl text-[#002b49]">
              Meet Our <span className="text-[#eb560c]">Founders</span>
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              The creative strategists and software engineers directing Websbond's growth retainers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder 1: Abhishek */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-jost font-bold text-xl text-[#002b49]">Abhishek Singh Rawat</h3>
              <p className="text-sm font-bold text-[#eb560c] uppercase tracking-wider mt-0.5">Co-Founder & Tech Lead</p>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Abhishek is the brain behind Websbond's custom software engines. He realized how combining the websites with custom platform integrations would yield positive results. He is now the one who facilitates easy and really effective digital marketing strategies for the online growth of businesses globally.
              </p>
            </div>

            {/* Founder 2: Gopal */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-jost font-bold text-xl text-[#002b49]">Gopal Sharma</h3>
              <p className="text-sm font-bold text-[#eb560c] uppercase tracking-wider mt-0.5">Co-Founder & Design Lead</p>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Gopal oversees branding architecture, UI/UX aesthetics, and social media media campaign retainers. His deep understanding of visual communication and consumer psychology ensures that every project Websbond launches converts visitors into long-term clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="border border-gray-200 rounded-3xl p-8 hover:border-[#eb560c]/30 hover:bg-[#eb560c]/[0.01] transition-all flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#eb560c] grid place-items-center mb-5 shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-jost font-bold text-xl text-[#002b49] mb-3">Vision: Global Media Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We imagine a future where every business grows online. Being digital ad specialists, we combine our skills and technology to ensure a great experience. Our aim is to become the best digital marketing firm globally.
              </p>
            </div>

            {/* Mission */}
            <div className="border border-gray-200 rounded-3xl p-8 hover:border-[#eb560c]/30 hover:bg-[#eb560c]/[0.01] transition-all flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#eb560c] grid place-items-center mb-5 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-jost font-bold text-xl text-[#002b49] mb-3">Mission: Empowering Businesses</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our mission is to support business development and improve their digital presence to the next level. We use bright techniques and cutting-edge technology to bring about actual outcomes for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20" style={{ background: "#f5f5f5" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#002b49]">→</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">WHY CHOOSE US</span>
              </div>
              <h2 className="font-jost font-bold text-3xl md:text-4xl text-[#002b49]">
                Why Choose Websbond as Your <span className="text-[#eb560c]">Digital Marketing Company?</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Being a reputable digital marketing agency, we emphasize developing tailored smart strategies for each business. We are a creative agency, and we also use the latest technology to help our clients increase their online presence. No matter if it is through social media, website promotion, or online marketing, we deliver results that truly make a difference.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Smart, data-driven strategies for better performance",
                  "Affordable packages for every business scale",
                  "Experienced team in SEO and digital marketing campaigns"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Box Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Expert-Led", desc: "Campaigns driven by search experts", icon: Award },
                { title: "Custom Solutions", desc: "No generic templates or builders", icon: Target },
                { title: "100% Transparent", desc: "Clear reporting and analytics", icon: Shield },
                { title: "Client First", desc: "Direct communication on WhatsApp", icon: Users }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#eb560c] grid place-items-center mb-4 mx-auto">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-jost font-bold text-sm text-[#002b49] mb-1">{card.title}</h4>
                  <p className="text-gray-500 text-[10px] sm:text-xs leading-normal font-medium">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Testimonials ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">CLIENT FEEDBACK</span>
            </div>
            <h2 className="font-jost font-bold text-3xl md:text-4xl text-[#002b49]">
              Our Client <span className="text-[#eb560c]">Reviews</span>
            </h2>
            <p className="text-gray-600 mt-2 text-sm font-medium">
              Read how we have helped doctors, retail brands, and service businesses establish trust and grow rankings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex gap-0.5 text-amber-400 mb-3.5">
                    {Array.from({ length: t.stars }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">"{t.text}"</p>
                </div>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-gray-200" />
                  <div>
                    <div className="font-jost font-bold text-xs sm:text-sm text-[#002b49]">{t.name}</div>
                    <div className="text-[10px] sm:text-xs text-[#eb560c] font-semibold">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs Section ── */}
      <section className="py-20" style={{ background: "#f5f5f5" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#002b49]">→</span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">FAQ</span>
            </div>
            <h2 className="font-jost font-bold text-3xl md:text-4xl text-[#002b49]">
              Frequently Asked <span className="text-[#eb560c]">Questions</span>
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Common questions about our digital marketing and search engine optimization processes.
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

export default AboutPage;
