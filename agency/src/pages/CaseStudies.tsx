import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { X, Search, Calendar, CheckSquare, ExternalLink } from "lucide-react";

interface CaseStudy {
  name: string;
  desc: string;
  since: string;
  services: string[];
  keywords?: { kw: string; rank: number }[];
  socials?: { platform: string; label: string; url: string }[];
}

const cases: CaseStudy[] = [
  {
    name: "Golden Masala Company",
    desc: "Golden Masala Company is a leading masala and spices manufacturer and supplier. They partnered with Websbond to elevate their brand, scale their organic footprint, and drive dealer inquiries.",
    since: "2015",
    services: ["SEO", "Web Design", "SMO"],
    keywords: [
      { kw: "Masala manufacturers", rank: 4 },
      { kw: "Masala Companies in Delhi", rank: 7 },
      { kw: "List of masala companies in Delhi", rank: 7 },
      { kw: "Masala manufacturers in Delhi", rank: 5 },
      { kw: "Spices manufacturers in Delhi", rank: 6 }
    ],
    socials: [
      { platform: "Facebook", label: "Visit Facebook Profile", url: "https://facebook.com" },
      { platform: "Instagram", label: "Visit Instagram Profile", url: "https://instagram.com" }
    ]
  },
  {
    name: "Dr. Archit Pandit",
    desc: "Dr. Archit Pandit is a senior consultant in surgical Oncology at MAX Institute of Cancer Care. Partnered to build authority rankings in highly competitive oncology search terms.",
    since: "2018",
    services: ["SEO", "Web Design", "SMO"],
    keywords: [
      { kw: "Best Laparoscopic Cancer Surgeon in Delhi", rank: 9 },
      { kw: "Laparoscopic Cancer Surgery in Delhi", rank: 1 },
      { kw: "Cancer Specialist in South Delhi", rank: 10 },
      { kw: "Cancer Surgeon in South Delhi", rank: 5 },
      { kw: "Robotic Cancer Surgeon in Delhi", rank: 9 }
    ]
  },
  {
    name: "Dr. Surender Dabas",
    desc: "Well-acclaimed Oncology Surgeon and distinguished mentor in Robotics Surgery. Senior Director and HOD of Surgical Oncology at BLK-Max Cancer Center, New Delhi.",
    since: "2023",
    services: ["SEO", "Web Design", "SMO"],
    keywords: [
      { kw: "robotic cancer surgeon in kanpur", rank: 1 },
      { kw: "robotic cancer surgeon in muzaffarnagar", rank: 1 },
      { kw: "best robotic cancer surgeon in Meerut", rank: 1 },
      { kw: "robotic cancer surgeon in rohtak", rank: 1 },
      { kw: "best robotic cancer surgeon in gurgaon", rank: 1 }
    ]
  },
  {
    name: "Dr. Geeta Kadayaprath",
    desc: "Senior Director and Oncoplastic Breast Surgeon at Max Healthcare with over 21 years of oncology expertise. Founder Secretary of the Delhi Breast Oncology Group.",
    since: "2021",
    services: ["SEO", "Web Design", "SMO"],
    keywords: [
      { kw: "breast cancer surgeon in delhi", rank: 4 },
      { kw: "breast specialist doctor in delhi", rank: 4 },
      { kw: "oncoplastic breast surgeon in delhi", rank: 3 },
      { kw: "breast surgical oncologist in delhi", rank: 1 }
    ]
  },
  {
    name: "Dr. Sawan Bopanna",
    desc: "Practicing consultant in Gastroenterology, Hepatology and Endoscopy in New Delhi with over 13 years of clinical excellence.",
    since: "2023",
    services: ["SEO", "Web Design", "SMO"]
  },
  {
    name: "Dr. Sonal Gupta",
    desc: "Renowned Brain and Spine surgeon in Delhi with 24 years of experience. Director & Head (Spine) at Fortis Hospital Shalimar Bagh, New Delhi.",
    since: "2017",
    services: ["SEO", "Web Design", "SMO"],
    keywords: [
      { kw: "brain tumor surgery in delhi", rank: 2 },
      { kw: "microscopic brain tumor surgery in delhi", rank: 1 },
      { kw: "keyhole spinal surgery in west delhi", rank: 1 },
      { kw: "keyhole spinal surgery in delhi", rank: 1 }
    ]
  },
  {
    name: "HCR Institute",
    desc: "A premier psychiatric hospital and rehabilitation center providing 24-hour crisis intervention, psychiatric ambulance services, and residential support.",
    since: "2012",
    services: ["SEO", "Web Design", "SMO"],
    keywords: [
      { kw: "best rehab center in delhi", rank: 4 },
      { kw: "residential facility for psychiatric patients", rank: 1 },
      { kw: "residential facility for psychiatric patients in delhi", rank: 1 },
      { kw: "doctor for psychiatric emergency in delhi", rank: 1 }
    ]
  },
  {
    name: "Suraj Cables",
    desc: "One of India's most trusted manufacturers and suppliers in the cable and conductor industry. Partnered with Websbond to generate B2B industrial leads.",
    since: "2023",
    services: ["SEO", "Web Design", "SMO"],
    keywords: [
      { kw: "ABC Cable Manufacturers In India", rank: 3 },
      { kw: "Screened Control Cable Suppliers In India", rank: 2 },
      { kw: "LT XLPE Cable Suppliers In India", rank: 2 },
      { kw: "XLPE Cable Manufacturers In India", rank: 1 }
    ]
  },
  {
    name: "Prognosia Healthcare",
    desc: "Premier physical therapy and spine rehabilitation clinic in Gurgaon specializing in Class 4 Laser Therapy and advanced neuro-rehab.",
    since: "2023",
    services: ["SEO", "Web Design", "SMO"]
  },
  {
    name: "Le Steella - Premium Kitchenware",
    desc: "Premium lifestyle brand designing copper, brass, and stainless steel cookware. Built modern storefront design with Websbond.",
    since: "2025",
    services: ["Web Design", "SMO"]
  },
  {
    name: "PDI Expert",
    desc: "Professional pre-delivery inspection service platform. Designed conversion-focused layout mapping all automotive diagnostics modules.",
    since: "2025",
    services: ["Web Design"]
  }
];

export const CaseStudiesPage = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <Layout>
      <SEO 
        title="Digital Marketing Case Studies & Client Results | Websbond" 
        description="Explore case studies showing search rankings, client satisfaction, and digital marketing results for Golden Masala, Suraj Cables, and top medical consultants."
        path="/case-studies"
        keywords="seo case studies delhi, digital marketing success stories, websbond client results"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 text-white text-center" style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              → SUCCESS HISTORIES
            </div>
            <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
              Case Studies & Proven Results
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Explore our database of successful campaigns showcasing search page dominance, client ROI, and custom-engineered web design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, idx) => (
              <div 
                key={idx} 
                className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-wider bg-white border border-gray-200 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3 text-[#eb560c]" /> Since {c.since}
                    </span>
                    
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {c.services.map((s, sIdx) => (
                        <span key={sIdx} className="bg-[#eb560c]/10 text-[#eb560c] font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-jost font-bold text-[#002b49] text-lg mb-3">{c.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                    {c.desc}
                  </p>
                </div>

                <div className="border-t border-gray-200/60 pt-4 flex gap-3">
                  <a 
                    href="/contact-us"
                    className="flex-1 text-center py-2 bg-[#002b49] hover:bg-[#0c1a26] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors"
                  >
                    Start Project
                  </a>
                  {c.keywords && (
                    <button 
                      onClick={() => setSelectedCase(c)}
                      className="flex-1 border border-gray-300 hover:border-[#eb560c] text-gray-700 hover:text-[#eb560c] font-bold rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                    >
                      View Rankings <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Keywords Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-[#002b49]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-gray-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-[#002b49] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-jost font-black text-[#002b49] text-xl mb-1">{selectedCase.name}</h3>
            <span className="text-[10px] text-[#eb560c] font-bold uppercase tracking-wider mb-6 block">
              SEO Google Page 1 Rankings
            </span>

            <div className="border border-gray-150 rounded-2xl overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200 text-[#002b49] font-jost text-[10px] font-black uppercase tracking-wider">
                    <th className="p-3 pl-4">Target Search Query</th>
                    <th className="p-3 text-center w-24">Google Rank</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150 text-xs font-semibold text-gray-700">
                  {selectedCase.keywords?.map((k, kIdx) => (
                    <tr key={kIdx}>
                      <td className="p-3 pl-4">{k.kw}</td>
                      <td className="p-3 text-center">
                        <span className="inline-block bg-orange-100 text-[#eb560c] font-bold px-2 py-0.5 rounded text-[10px]">
                          Pos {k.rank}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {selectedCase.socials && (
              <div className="space-y-2 mb-6">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Social Profiles</span>
                <div className="flex gap-2">
                  {selectedCase.socials.map((s, sIdx) => (
                    <a 
                      key={sIdx}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-gray-200 hover:border-[#eb560c] text-gray-600 hover:text-[#eb560c] px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      {s.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={() => setSelectedCase(null)}
              className="w-full bg-[#002b49] hover:bg-[#0c1a26] text-white py-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      )}

      <CtaBanner />
    </Layout>
  );
};

export default CaseStudiesPage;
