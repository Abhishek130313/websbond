import { lazy, Suspense } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { ServicesMindmap } from "@/components/site/ServicesMindmap";
import { WebDesignFeatureGrid } from "@/components/site/WebDesignFeatureGrid";
import { MidCtaBanner } from "@/components/site/MidCtaBanner";
import { EverythingGrid } from "@/components/site/EverythingGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { TechStackMatrix } from "@/components/site/TechStackMatrix";
import { FaqAndBlogs } from "@/components/site/FaqAndBlogs";

// Below-the-fold components
const Process = lazy(() => import("@/components/site/Process").then(m => ({ default: m.Process })));
const VideoShowcase = lazy(() => import("@/components/site/VideoShowcase").then(m => ({ default: m.VideoShowcase })));
const WhyChooseUs = lazy(() => import("@/components/site/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));

const SectionSkeleton = () => (
  <div className="py-16 md:py-24 bg-[#F7F6FB]" aria-hidden="true" />
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
          "@type": "LocalBusiness",
          "name": "Websbond",
          "@id": "https://websbond.com/#organization",
          "url": "https://websbond.com",
          "email": "connect@websbond.com",
          "telephone": "+919306623619",
          "description": "Websbond is a premium digital marketing agency in Delhi NCR offering website development, SEO, Google Ads, social media marketing, and app development.",
          "image": "https://websbond.com/og-image.jpg",
          "priceRange": "₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sector 48, Sohna Road",
            "addressLocality": "Gurugram",
            "addressRegion": "Haryana",
            "postalCode": "122018",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.4595,
            "longitude": 77.0266
          },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
          ],
          "areaServed": [
            { "@type": "City", "name": "Delhi" },
            { "@type": "City", "name": "Gurugram" },
            { "@type": "City", "name": "Noida" },
            { "@type": "City", "name": "Faridabad" },
            { "@type": "City", "name": "Ghaziabad" },
            { "@type": "State", "name": "Haryana" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads & PPC" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Development" } }
            ]
          },
          "sameAs": [
            "https://facebook.com/websbond",
            "https://instagram.com/websbond",
            "https://linkedin.com/company/websbond",
            "https://youtube.com/@websbond"
          ]
        }
      ]}
    />

    {/* Section 1: Hero with Animated Typewriter Text & Badges */}
    <Hero />

    {/* Section 2 & 3: Turn Your Website into a High-Converting Engine + Stats + Form */}
    <AboutSection />

    {/* Section 4 & 9: Verified Live Client Projects & Step-by-Step Strategic Roadmap */}
    <Suspense fallback={<SectionSkeleton />}>
      <Process />
    </Suspense>

    {/* Section 5: Smart Strategies Radial Mindmap */}
    <ServicesMindmap />

    {/* Section 6: High-Performance Web Design Feature Grid */}
    <WebDesignFeatureGrid />

    {/* Section 7: Video Growth Journey Showcase */}
    <Suspense fallback={<SectionSkeleton />}>
      <VideoShowcase />
    </Suspense>

    {/* Section 8: Mid-Page CTA Banner */}
    <MidCtaBanner />

    {/* Section 10: Everything You Need Capabilities Grid */}
    <EverythingGrid />

    {/* Section 11: Hire India's Top Agency Partner */}
    <Suspense fallback={<SectionSkeleton />}>
      <WhyChooseUs />
    </Suspense>

    {/* Real Google Business Reviews */}
    <Testimonials />

    {/* Section 14: Tech Stack Matrix */}
    <TechStackMatrix />

    {/* Section 13: Split FAQ & Latest Blogs */}
    <FaqAndBlogs />
  </Layout>
);

export default Index;
