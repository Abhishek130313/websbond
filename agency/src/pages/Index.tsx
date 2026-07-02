import { lazy, Suspense } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { CtaBanner } from "@/components/site/CtaBanner";

import { ContactSection } from "@/components/site/ContactSection";

// Below-the-fold components: lazy-loaded to reduce initial bundle/parse time
const Process = lazy(() => import("@/components/site/Process").then(m => ({ default: m.Process })));
const Services = lazy(() => import("@/components/site/Services").then(m => ({ default: m.Services })));
const VideoShowcase = lazy(() => import("@/components/site/VideoShowcase").then(m => ({ default: m.VideoShowcase })));
const GrowthConsole = lazy(() => import("@/components/site/GrowthConsole").then(m => ({ default: m.GrowthConsole })));
const PracticeBanner = lazy(() => import("@/components/site/PracticeBanner").then(m => ({ default: m.PracticeBanner })));
const WhyWeDiffer = lazy(() => import("@/components/site/WhyWeDiffer").then(m => ({ default: m.WhyWeDiffer })));
const WhyChooseUs = lazy(() => import("@/components/site/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const Blog = lazy(() => import("@/components/site/Blog").then(m => ({ default: m.Blog })));

// Minimal skeleton that preserves layout space to prevent CLS
const SectionSkeleton = () => (
  <div className="py-16 md:py-24" aria-hidden="true" />
);

const Index = () => (
  <Layout>
    <SEO 
      title="Websbond | Best Digital Marketing Agency Delhi NCR & Haryana" 
      description="Websbond is the top digital marketing agency in Delhi NCR and Haryana, offering premium website development, SEO, Google Ads, social media marketing, and app development. Get a free consultation today!" 
      path="/" 
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Websbond",
          "@id": "https://websbond.com/#organization",
          "url": "https://websbond.com",
          "telephone": "+919306623619",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gurugram",
            "addressRegion": "Haryana",
            "postalCode": "122018",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://facebook.com/websbond",
            "https://instagram.com/websbond"
          ]
        }
      ]}
    />

    {/* 1. Hero with Quote Form */}
    <Hero />

    {/* 2. Trusted Certifications + About/Empowering Businesses section */}
    <Suspense fallback={<SectionSkeleton />}>
      <Process />
    </Suspense>

    {/* 3. Services */}
    <Suspense fallback={<SectionSkeleton />}>
      <Services />
    </Suspense>

    {/* 4. Client Video Testimonials */}
    <Suspense fallback={<SectionSkeleton />}>
      <VideoShowcase />
    </Suspense>

    {/* 5. CtaBanner */}
    <CtaBanner />

    {/* 6. Case Studies */}
    <Suspense fallback={<SectionSkeleton />}>
      <GrowthConsole />
    </Suspense>

    {/* 7. Practice Reach Banner */}
    <Suspense fallback={<SectionSkeleton />}>
      <PracticeBanner />
    </Suspense>

    {/* 8. Why We Differ */}
    <Suspense fallback={<SectionSkeleton />}>
      <WhyWeDiffer />
    </Suspense>

    {/* 9. Why Choose Us */}
    <Suspense fallback={<SectionSkeleton />}>
      <WhyChooseUs />
    </Suspense>

    {/* 10. Stats counter bar */}
    <StatsBar />

    {/* 11. Blog / News section */}
    <Suspense fallback={<SectionSkeleton />}>
      <Blog />
    </Suspense>

    {/* 12. Text Testimonials / Client Reviews */}
    <Suspense fallback={<SectionSkeleton />}>
      <Testimonials />
    </Suspense>

    {/* 12.5. Dedicated Consultation Contact Form */}
    <ContactSection />

    {/* 13. FAQ Section — Premium SaaS style */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge">✦ FAQ</span>
          <h2 className="section-heading mt-4">
            Frequently asked questions
          </h2>
          <p className="text-zinc-500 mt-3 text-sm">
            Get answers to common queries regarding page positioning, web standards, and growth campaigns.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Why choose Websbond as the best digital marketing agency in Delhi NCR?",
              a: "Websbond provides data-driven, conversion-focused strategies. Unlike template-based setups, our senior engineers handle your technical search engine optimization (SEO), custom site speed audits, paid Google Ads (PPC) and GMB local maps positioning directly."
            },
            {
              q: "How long does it take to see organic search engine traffic growth?",
              a: "SEO is a progressive authority building process. While initial crawl repairs and metadata index updates take place in the first month, significant ranking growth typically shows within 3 to 6 months."
            },
            {
              q: "Do you build custom eCommerce and mobile-responsive websites?",
              a: "Yes. Every website designed by Websbond is custom coded on modern frameworks (like React, Vite, and Tailwind) to guarantee 100/100 Google PageSpeed scores, secure checkout integrations, and perfect mobile layouts."
            },
            {
              q: "How do you track the ROI of my social media and ad spend?",
              a: "We set up comprehensive tracking goals using Google Analytics 4 (GA4), heatmaps, conversions triggers, and direct call recording logs. This gives you 100% transparency on exactly where your leads come from."
            }
          ].map((faq, faqIdx) => (
            <details 
              key={faqIdx} 
              className="group bg-white border border-zinc-200/60 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-[var(--shadow-card)] open:border-indigo-200/50 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-5 font-medium text-zinc-800 hover:text-zinc-900 transition-colors cursor-pointer outline-none">
                <span className="text-sm sm:text-base select-none">{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-zinc-400 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-zinc-100">
                <p className="p-5 text-sm text-zinc-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
