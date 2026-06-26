import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Check, Info } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "₹5,999",
    period: "month",
    desc: "Perfect for small shops looking to maintain an active, professional social presence.",
    platforms: "Any 2 Platforms",
    posts: "8 Custom Creatives",
    gifs: "1 Custom GIF / Month",
    manager: "No",
    features: [
      { name: "Platforms Audit & Remedial Action", ok: true },
      { name: "Social Media Content Calendar", ok: true },
      { name: "Unique Content (Business Specific)", ok: true },
      { name: "Custom Designed Creatives", ok: true },
      { name: "Scheduling & Publishing Management", ok: true },
      { name: "Relevant Hashtag Optimization", ok: true },
      { name: "Community Content Seeding", ok: true },
      { name: "Facebook Ad Campaigns Setup", ok: true },
      { name: "Performance Report with Analytics", ok: true }
    ]
  },
  {
    name: "Standard Plan",
    price: "₹9,999",
    period: "month",
    desc: "Designed for businesses seeking active community engagement and lead funnel tuning.",
    platforms: "Any 3 Platforms",
    posts: "15 Custom Creatives",
    gifs: "2 Custom GIFs / Month",
    manager: "Yes",
    popular: true,
    features: [
      { name: "Dedicated Relationship Manager", ok: true },
      { name: "Platforms Audit & Remedial Action", ok: true },
      { name: "Social Media Content Calendar", ok: true },
      { name: "Unique Content (Business Specific)", ok: true },
      { name: "Custom Designed Creatives", ok: true },
      { name: "Scheduling & Publishing Management", ok: true },
      { name: "Relevant Hashtag Optimization", ok: true },
      { name: "Community Content Seeding", ok: true },
      { name: "Facebook Ad Campaigns Setup", ok: true },
      { name: "Performance Report with Analytics", ok: true }
    ]
  },
  {
    name: "Premium Plan",
    price: "₹14,999",
    period: "month",
    desc: "Unmatched social media dominance covering multiple target demographics.",
    platforms: "Any 4 Platforms",
    posts: "20 Custom Creatives",
    gifs: "4 Custom GIFs / Month",
    manager: "Yes",
    features: [
      { name: "Dedicated Relationship Manager", ok: true },
      { name: "Platforms Audit & Remedial Action", ok: true },
      { name: "Social Media Content Calendar", ok: true },
      { name: "Unique Content (Business Specific)", ok: true },
      { name: "Custom Designed Creatives", ok: true },
      { name: "Scheduling & Publishing Management", ok: true },
      { name: "Relevant Hashtag Optimization", ok: true },
      { name: "Community Content Seeding", ok: true },
      { name: "Facebook Ad Campaigns Setup", ok: true },
      { name: "Performance Report with Analytics", ok: true }
    ]
  }
];

export const SMOPackagesPage = () => {
  return (
    <Layout>
      <SEO 
        title="Affordable SMO Packages & Social Media Pricing | Websbond" 
        description="View result-oriented SMO Packages in Delhi NCR by Websbond. Structured monthly social media optimization plans for Facebook, Instagram, LinkedIn, and Twitter."
        path="/smo-packages"
        keywords="smo packages delhi, social media pricing Gurgaon, monthly smo plans Noida, smo company packages India"
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden py-16 text-white text-center" style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              → SMO PACKAGES & PLANS
            </div>
            <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
              Flexible Social Media Optimization Packages
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Promote your business on Facebook, Instagram, LinkedIn, and Twitter with customized design creatives, GIFs, hashtags strategy, and community optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
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
                      <div>• {p.platforms}</div>
                      <div>• {p.posts}</div>
                      <div>• {p.gifs}</div>
                      {p.manager === "Yes" && <div>• Dedicated Account Manager</div>}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {p.features.slice(0, 6).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-[#eb560c] shrink-0 mt-0.5" />
                        <span className="font-semibold text-gray-700">{f.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`/contact-us?subject=Enquiry for SMO ${p.name}`}
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

      {/* Comparison table */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-150">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-jost font-bold text-2xl sm:text-3xl text-[#002b49]">
              Compare SMO Package Features
            </h2>
            <p className="text-gray-500 mt-2 text-sm font-medium">
              Review all social media deliverables across our three monthly optimization retainers.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#002b49] text-white font-jost text-xs uppercase tracking-wider">
                    <th className="p-4 pl-6">Feature details</th>
                    <th className="p-4 text-center">Basic</th>
                    <th className="p-4 text-center">Standard</th>
                    <th className="p-4 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs font-semibold text-gray-700">
                  <tr>
                    <td className="p-4 pl-6 font-bold">Social Media Posts (Custom Creatives)</td>
                    <td className="p-4 text-center text-gray-500">8 / Month</td>
                    <td className="p-4 text-center text-gray-500">15 / Month</td>
                    <td className="p-4 text-center text-gray-500">20 / Month</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Customized GIFs</td>
                    <td className="p-4 text-center text-gray-500">1 / Month</td>
                    <td className="p-4 text-center text-gray-500">2 / Month</td>
                    <td className="p-4 text-center text-gray-500">4 / Month</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Dedicated Relationship Manager</td>
                    <td className="p-4 text-center text-gray-500">No</td>
                    <td className="p-4 text-center text-gray-500">Yes</td>
                    <td className="p-4 text-center text-gray-500">Yes</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Supported Platforms</td>
                    <td className="p-4 text-center text-gray-500">Any 2</td>
                    <td className="p-4 text-center text-gray-500">Any 3</td>
                    <td className="p-4 text-center text-gray-500">Any 4</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Platforms Setup & Audit</td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Content Calendar Setup</td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-bold">Weekly/Monthly Analytics Reports</td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 text-[#eb560c] mx-auto" /></td>
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

export default SMOPackagesPage;
