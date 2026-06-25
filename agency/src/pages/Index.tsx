import { lazy, Suspense } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";

// Below-the-fold components: lazy-loaded to reduce initial bundle/parse time
const Process = lazy(() => import("@/components/site/Process").then(m => ({ default: m.Process })));
const Services = lazy(() => import("@/components/site/Services").then(m => ({ default: m.Services })));
const GrowthConsole = lazy(() => import("@/components/site/GrowthConsole").then(m => ({ default: m.GrowthConsole })));
const RecentWorks = lazy(() => import("@/components/site/RecentWorks").then(m => ({ default: m.RecentWorks })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const PricingPlans = lazy(() => import("@/components/site/PricingPlans").then(m => ({ default: m.PricingPlans })));
const Blog = lazy(() => import("@/components/site/Blog").then(m => ({ default: m.Blog })));

// Minimal skeleton that preserves layout space to prevent CLS
const SectionSkeleton = () => (
  <div className="py-16 md:py-24" aria-hidden="true" />
);

const Index = () => (
  <Layout>
    <SEO 
      title="Websbond | Best Website Developer Indore & Digital Marketing Agency" 
      description="Looking to get a website made? Websbond is the top website developer Indore, offering premium custom React websites, local Google SEO, and high-ROI digital marketing in India. Get a free consultation today!" 
      path="/" 
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Websbond",
          "image": "https://websbond.com/assets/websbond-logo-3d-D5lzzWbW.png",
          "@id": "https://websbond.com/#organization",
          "url": "https://websbond.com",
          "telephone": "+919306623619",
          "priceRange": "₹7999 - ₹29999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vijay Nagar",
            "addressLocality": "Indore",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "452010",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.7533,
            "longitude": 75.8937
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "21:00"
          },
          "sameAs": [
            "https://facebook.com/websbond",
            "https://instagram.com/websbond"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How to get a website made for my business in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you want to get a website made (website banwani hai), contact Websbond at +91 9306623619 or email websbond@websbond.com. We design custom React and Next.js sites with 100/100 speed scores, handle domain/hosting configuration, and set up local Google SEO."
              }
            },
            {
              "@type": "Question",
              "name": "What is the cost of website development in Indore?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Websbond offers transparent, fixed-price packages starting from ₹7,999 for custom websites, including mobile responsiveness, search indexing setup, and developer-direct WhatsApp support with no hidden charges."
              }
            },
            {
              "@type": "Question",
              "name": "Why is Websbond the best website developer Indore and digital marketing agency?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Unlike standard agencies that use slow WordPress templates, Websbond writes high-performance handcrafted React code. We integrate target-oriented Google/Meta ad tracking, implement technical SEO mapping, and guarantee 24/7 human support."
              }
            }
          ]
        }
      ]}
    />
    {/* Above-fold: eagerly loaded for fastest LCP */}
    <Hero />
    <StatsBar />
    {/* Below-fold: lazy loaded to reduce TTI and main thread blocking */}
    <Suspense fallback={<SectionSkeleton />}>
      <Process />
    </Suspense>
    <Suspense fallback={<SectionSkeleton />}>
      <Services />
    </Suspense>
    <Suspense fallback={<SectionSkeleton />}>
      <GrowthConsole />
    </Suspense>
    <Suspense fallback={<SectionSkeleton />}>
      <RecentWorks />
    </Suspense>
    <Suspense fallback={<SectionSkeleton />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<SectionSkeleton />}>
      <PricingPlans />
    </Suspense>
    <Suspense fallback={<SectionSkeleton />}>
      <Blog />
    </Suspense>
  </Layout>
);

export default Index;
