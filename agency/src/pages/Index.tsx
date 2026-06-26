import { lazy, Suspense } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { CtaBanner } from "@/components/site/CtaBanner";

// Below-the-fold components: lazy-loaded to reduce initial bundle/parse time
const Process = lazy(() => import("@/components/site/Process").then(m => ({ default: m.Process })));
const Services = lazy(() => import("@/components/site/Services").then(m => ({ default: m.Services })));
const VideoShowcase = lazy(() => import("@/components/site/VideoShowcase").then(m => ({ default: m.VideoShowcase })));
const GrowthConsole = lazy(() => import("@/components/site/GrowthConsole").then(m => ({ default: m.GrowthConsole })));
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

    {/* Reference site order: Hero → Certifications+About → Services → Video → Case Studies → Stats → Testimonials → CTA → Blog */}
    
    {/* 1. Hero with Quote Form */}
    <Hero />

    {/* 2. Trusted Certifications + About/Empowering Businesses section */}
    <Suspense fallback={<SectionSkeleton />}>
      <Process />
    </Suspense>

    {/* 3. Services — Digital Solutions for your every need */}
    <Suspense fallback={<SectionSkeleton />}>
      <Services />
    </Suspense>

    {/* 4. Client Video Testimonials */}
    <Suspense fallback={<SectionSkeleton />}>
      <VideoShowcase />
    </Suspense>

    {/* 5. Case Studies */}
    <Suspense fallback={<SectionSkeleton />}>
      <GrowthConsole />
    </Suspense>

    {/* 6. Stats counter bar */}
    <StatsBar />

    {/* 7. Text Testimonials / Client Reviews */}
    <Suspense fallback={<SectionSkeleton />}>
      <Testimonials />
    </Suspense>

    {/* 8. CTA Banner - Consultation call */}
    <CtaBanner />

    {/* 9. Blog / News section */}
    <Suspense fallback={<SectionSkeleton />}>
      <Blog />
    </Suspense>
  </Layout>
);

export default Index;
