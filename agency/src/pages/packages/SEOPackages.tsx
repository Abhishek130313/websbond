import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Check, Info, HelpCircle } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "₹6,999",
    period: "month",
    desc: "Ideal for local startups and small businesses targeting regional keywords.",
    keywords: "10 Keywords",
    zone: "Delhi NCR Focus",
    features: [
      { name: "Full Site Technical Audit", ok: true },
      { name: "Backlink Analysis", ok: false },
      { name: "Competitor Analysis", ok: false },
      { name: "Duplicate Content Check", ok: true },
      { name: "Google Penalty Check", ok: true },
      { name: "On-Page Optimization", ok: true },
      { name: "Header & Title Tags Optimization", ok: true },
      { name: "HTML Sitemap Creation", ok: true },
      { name: "XML Sitemap Creation", ok: true },
      { name: "Robots.txt Analysis", ok: true },
      { name: "Directory Classified Submissions", ok: "10" },
      { name: "Social Bookmarking (SBM)", ok: "2/Day" },
      { name: "Weekly & Monthly Reports", ok: true }
    ]
  },
  {
    name: "Standard Plan",
    price: "₹12,999",
    period: "month",
    desc: "Best for growing businesses targeting city-wide and state-level traffic.",
    keywords: "Up to 25 Keywords",
    zone: "City & State Focus",
    popular: true,
    features: [
      { name: "Full Site Technical Audit", ok: true },
      { name: "Backlink Analysis", ok: true },
      { name: "Competitor Analysis (Up to 2)", ok: true },
      { name: "Duplicate Content Check", ok: true },
      { name: "Google Penalty Check", ok: true },
      { name: "On-Page Optimization", ok: true },
      { name: "Header & Title Tags Optimization", ok: true },
      { name: "HTML & XML Sitemap Setup", ok: true },
      { name: "New Onsite Blog Creation", ok: true },
      { name: "Blog Submissions & Article Submissions", ok: true },
      { name: "Directory Classified Submissions", ok: "15" },
      { name: "Social Bookmarking (SBM)", ok: "4/Day" },
      { name: "Press Release Writing & Submissions", ok: "2 (500 words)" },
      { name: "Weekly & Monthly Reports", ok: true }
    ]
  },
  {
    name: "Premium Plan",
    price: "₹19,999",
    period: "month",
    desc: "Perfect for larger websites aiming to capture nationwide search market share.",
    keywords: "Up to 35 Keywords",
    zone: "Country-Wide Focus",
    features: [
      { name: "Full Site Technical Audit", ok: true },
      { name: "Backlink Analysis & Repair", ok: true },
      { name: "Competitor Analysis (Up to 3)", ok: true },
      { name: "Duplicate Content Check", ok: true },
      { name: "Google Penalty Check", ok: true },
      { name: "On-Page Optimization", ok: true },
      { name: "Header & Title Tags Optimization", ok: true },
      { name: "Technical Speed Audit report", ok: true },
      { name: "Onsite Blog & Content Writing", ok: "1 x 1000 words" },
      { name: "Article Writing & Submission", ok: "2 x 1000 words" },
      { name: "Directory Classified Submissions", ok: "25" },
      { name: "Social Bookmarking (SBM)", ok: "4/Day" },
      { name: "Q&A Submissions & Link Outreach", ok: "5" },
      { name: "Weekly & Monthly Reports", ok: true }
    ]
  },
  {
    name: "Premium Plus",
    price: "₹29,999",
    period: "month",
    desc: "Unmatched search dominance strategy for competitive brands and eCommerce.",
    keywords: "Up to 50 Keywords",
    zone: "Global / Country Focus",
    features: [
      { name: "Full Site Technical Audit", ok: true },
      { name: "Backlink Analysis & Creation", ok: true },
      { name: "Competitor Analysis (Top 5)", ok: true },
      { name: "Duplicate Content Check", ok: true },
      { name: "Google Penalty Check", ok: true },
      { name: "Screaming Frog Advanced Error Report", ok: true },
      { name: "Onsite Blog Writing & Marketing", ok: "2 x 1000 words" },
      { name: "Press Release Promotion & Distribution", ok: "5" },
      { name: "Infographic Promotion & Submission", ok: "5" },
      { name: "Directory Classified Submissions", ok: "40" },
      { name: "Social Bookmarking (SBM)", ok: "4/Day" },
      { name: "Q&A Submissions & Link Outreach", ok: "10" },
      { name: "Video Submissions & Promotion", ok: true },
      { name: "Weekly & Monthly Reports", ok: true }
    ]
  }
];

export const SEOPackagesPage = () => {
  return (
    <Layout>
      <SEO 
        title="Affordable SEO Packages & Pricing Plans | Websbond" 
        description="Check our result-driven SEO packages and plans in Delhi NCR. Affordable monthly SEO retainers for startups, standard brands, and enterprise eCommerce sites."
        path="/seo-packages"
        keywords="seo packages delhi, seo pricing Gurgaon, monthly seo plans Noida, affordable seo packages India"
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden py-16 text-white text-center" style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              → SEO PACKAGES & PLANS
            </div>
            <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
              Flexible & Affordable SEO Packages
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Boost your search rankings with target keywords mapping, on-page optimization, and high-authority link outreach. Choose a budget package tailored to fit your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {plans.map((p, idx) => (
              <div 
                key={idx} 
                className={`bg-[#f8fafc] border rounded-3xl p-6 flex flex-col justify-between relative transition-all duration-300 hover:shadow-lg ${
                  p.popular ? "border-[#eb560c] ring-2 ring-[#eb560c]/20" : "border-gray-200"
                }`}
              >
                {p.popular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#eb560c] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                
                <div>
                  <h3 className="font-jost font-bold text-[#002b49] text-xl mb-1">{p.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{p.desc}</p>
                  
                  <div className="border-t border-b border-gray-200/60 py-4 mb-4">
                    <div className="flex items-baseline gap-1 text-[#002b49]">
                      <span className="text-3xl font-black">{p.price}</span>
                      <span className="text-xs text-gray-500 font-semibold">/ {p.period}</span>
                    </div>
                    <div className="mt-2 space-y-1 text-xs font-bold text-[#eb560c]">
                      <div>• {p.keywords}</div>
                      <div>• {p.zone}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {p.features.slice(0, 8).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs">
                        {f.ok ? (
                          <Check className="w-3.5 h-3.5 text-[#eb560c] shrink-0 mt-0.5" />
                        ) : (
                          <span className="text-gray-300 font-bold w-3.5 text-center shrink-0 mt-0.5">-</span>
                        )}
                        <span className={`font-semibold ${f.ok ? "text-gray-700" : "text-gray-400 line-through"}`}>
                          {f.name} {typeof f.ok === "string" && `(${f.ok})`}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`/contact-us?subject=Enquiry for SEO ${p.name}`}
                  className={`w-full text-center py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-colors ${
                    p.popular 
                      ? "bg-[#eb560c] hover:bg-[#d14b0a] text-white" 
                      : "bg-[#002b49] hover:bg-[#0c1a26] text-white"
                  }`}
                >
                  Select Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Features Comparison Table */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-150">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Compare SEO Package Features
            </h2>
            <p className="text-gray-500 mt-2 text-sm font-medium">
              Review all line items side-by-side to find the right strategy fit for your business.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#002b49] text-white font-jost text-xs uppercase tracking-wider">
                    <th className="p-4 pl-6">Feature Details</th>
                    <th className="p-4 text-center">Basic</th>
                    <th className="p-4 text-center">Standard</th>
                    <th className="p-4 text-center">Premium</th>
                    <th className="p-4 text-center">Premium Plus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs font-semibold text-gray-700">
                  <tr>
                    <td className="p-4 pl-6 font-bold">Keyword Target Limit</td>
                    <td className="p-4 text-center text-gray-500">10</td>
                    <td className="p-4 text-center text-gray-500">Up to 25</td>
                    <td className="p-4 text-center text-gray-500">Up to 35</td>
                    <td className="p-4 text-center text-gray-500">Up to 50</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Geographic Zone Target</td>
                    <td className="p-4 text-center text-gray-500">Delhi NCR</td>
                    <td className="p-4 text-center text-gray-500">City & States</td>
                    <td className="p-4 text-center text-gray-500">Country</td>
                    <td className="p-4 text-center text-gray-500">Global / Country</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Technical Site Audit</td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Backlink Analysis</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Competitors Tracking</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-500">2</td>
                    <td className="p-4 text-center text-gray-500">3</td>
                    <td className="p-4 text-center text-gray-500">5</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">New Blog Content Creation</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-500">Press Releases</td>
                    <td className="p-4 text-center text-gray-500">1x1000 words</td>
                    <td className="p-4 text-center text-gray-500">2x1000 words</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Classified Submissions</td>
                    <td className="p-4 text-center text-gray-500">10</td>
                    <td className="p-4 text-center text-gray-500">15</td>
                    <td className="p-4 text-center text-gray-500">25</td>
                    <td className="p-4 text-center text-gray-500">40</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Social Bookmarking (SBM)</td>
                    <td className="p-4 text-center text-gray-500">2 / Day</td>
                    <td className="p-4 text-center text-gray-500">4 / Day</td>
                    <td className="p-4 text-center text-gray-500">4 / Day</td>
                    <td className="p-4 text-center text-gray-500">4 / Day</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Guest Post outreach</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default SEOPackagesPage;
