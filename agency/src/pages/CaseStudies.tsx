import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import heroBg from "@/assets/hero_web_bg_1782993527550.png";
import { Link } from "react-router-dom";

interface CaseStudy {
  name: string;
  desc: string;
  since: string;
  services: string[];
  img: string;
}

const CASES: CaseStudy[] = [
  {
    name: "Golden Masala Company",
    desc: "Golden Masala Company is a leading masala and spices manufacturer and supplier. They partnered with Websbond to elevate their brand, scale their organic footprint, and drive dealer inquiries.",
    since: "2015",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Archit Pandit",
    desc: "Dr. Archit Pandit is a senior consultant in surgical Oncology at MAX Institute of Cancer Care. Partnered to build authority rankings in highly competitive oncology search terms.",
    since: "2018",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Surender Dabas",
    desc: "Well-acclaimed Oncology Surgeon and distinguished mentor in Robotics Surgery. Senior Director and HOD of Surgical Oncology at BLK-Max Cancer Center, New Delhi.",
    since: "2023",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Geeta Kadayaprath",
    desc: "Senior Director and Oncoplastic Breast Surgeon at Max Healthcare with over 21 years of oncology expertise. Founder Secretary of the Delhi Breast Oncology Group.",
    since: "2021",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Sawan Bopanna",
    desc: "Practicing consultant in Gastroenterology, Hepatology and Endoscopy in New Delhi with over 13 years of clinical excellence.",
    since: "2023",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Sonal Gupta",
    desc: "Renowned Brain and Spine surgeon in Delhi with 24 years of experience. Director & Head (Spine) at Fortis Hospital Shalimar Bagh, New Delhi.",
    since: "2017",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "HCR Institute",
    desc: "A premier psychiatric hospital and rehabilitation center providing 24-hour crisis intervention, psychiatric ambulance services, and residential support.",
    since: "2012",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Prognosia Healthcare",
    desc: "Premier physical therapy and spine rehabilitation clinic in Gurgaon specializing in Class 4 Laser Therapy and advanced neuro-rehab.",
    since: "2023",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Orchid Hospital",
    desc: "Orchid Hospital is a multidisciplinary hospital in Janakpuri. Partnered with Websbond to streamline web inquiries and local search optimization.",
    since: "2020",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Aesthetic World",
    desc: "Aesthetic World is a leading multi-speciality Cosmetic and Reconstructive Surgery clinic. Built fully-featured client layouts.",
    since: "2022",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Suraj Cables",
    desc: "One of India's most trusted manufacturers and suppliers in the cable and conductor industry. Partnered with Websbond to generate B2B industrial leads.",
    since: "2023",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Deepika Gupta",
    desc: "Dr. Deepika Gupta is a highly experienced and compassionate Surgical Oncologist. Formulates custom digital campaigns with Websbond.",
    since: "2023",
    services: ["SEO", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1594824813573-246434de83fb?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Ajeet Tiwari",
    desc: "Dr. Ajeet Tiwari is a senior Surgical Oncologist at leading premier cancer centers. Built GMB visibility maps.",
    since: "2023",
    services: ["SEO", "SMM", "Web Design"],
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Health Leaf Clinic",
    desc: "Physiotherapy and spine rehabilitation specialist team. Formulates custom responsive layout audits and search visibility goals.",
    since: "2024",
    services: ["SEO", "SMM", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Abhinav Narwariya",
    desc: "Abhinav Narwariya is a young, dynamic, and dedicated surgical oncologist. Optimizes GMB profiles for maximum visibility.",
    since: "2023",
    services: ["SEO", "SMM", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Raman Kant Aggarwal",
    desc: "Raman Kant Aggarwal is a super-specialist in shoulder, elbow, wrist, and sports injuries. Standardizes digital listings.",
    since: "2021",
    services: ["SEO", "SMM", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Arvind Kumar",
    desc: "Arvind Kumar is a leading Laparoscopic Surgeon in Delhi. Directs multi-channel ad search queries and website visibility upgrades.",
    since: "2024",
    services: ["SEO", "SMM", "Web Design", "SMO"],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80"
  }
];

export const CaseStudiesPage = () => {
  return (
    <Layout>
      <SEO 
        title="Case Studies & Success Stories | Websbond" 
        description="Explore our case studies showcasing successful projects, client satisfaction, innovative strategies, and measurable results across various industries." 
        path="/case-studies" 
      />

      {/* ── Page Hero Header ── */}
      <section 
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center hero-image-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-jost font-black text-4xl md:text-6xl leading-tight mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
            Case Studies
          </h1>
          <p className="text-zinc-200 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-semibold drop-shadow-md">
            Explore our case studies showcasing successful projects, client satisfaction, innovative strategies, and measurable results across various industries.
          </p>
        </div>
      </section>

      {/* ── Case Study Cards Vertical List ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {CASES.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[#0c203b] border border-white/10 rounded-3xl overflow-hidden p-6 sm:p-8 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #002b49 0%, #0a1b2b 100%)"
                }}
              >
                {/* Red floating "With Us Since [Year]" badge */}
                <div 
                  className="absolute top-0 left-0 bg-[#FF0000] text-white font-bold px-4 py-2 rounded-br-2xl text-xs uppercase tracking-wider z-20 shadow-md"
                >
                  With Us Since {item.since}
                </div>

                {/* 3-column Grid split (stacked on mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
                  
                  {/* Column 1: Info (Col span 5) */}
                  <div className="md:col-span-5 space-y-4">
                    <h3 className="font-jost font-black text-2xl text-white">
                      {item.name}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>

                  {/* Column 2: Web Preview (Col span 4) */}
                  <div className="md:col-span-4 flex justify-center">
                    <div 
                      className="relative rounded-xl overflow-hidden border border-white/20 shadow-lg max-w-[280px] w-full bg-slate-800"
                      style={{ height: 180 }}
                    >
                      <img loading="lazy" decoding="async" 
                        src={item.img} 
                        alt={`${item.name} website preview`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                    </div>
                  </div>

                  {/* Column 3: Provided Services & Orange Button (Col span 3) */}
                  <div className="md:col-span-3 flex flex-col justify-between h-full space-y-6 md:border-l md:border-white/10 md:pl-6 text-center md:text-left">
                    <div>
                      <h4 className="text-white/60 font-bold uppercase tracking-wider text-[10px] mb-3">
                        Provided Services
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {item.services.map((srv, sIdx) => (
                          <span 
                            key={sIdx}
                            className="border border-white/20 bg-white/5 rounded-full px-4.5 py-1.5 text-xs text-white/90 font-bold"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/contact-us"
                        className="w-full inline-block text-center font-bold px-5 py-3 rounded-lg text-white transition-all text-xs uppercase tracking-wider"
                        style={{ background: "#eb560c" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
                      >
                        Start Your Project Today
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudiesPage;

