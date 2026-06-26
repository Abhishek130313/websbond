import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = lazy(() => import("./pages/Index.tsx"));

const OurWorkPage = lazy(() => import("./pages/OurWork.tsx"));
const BlogPage = lazy(() => import("./pages/Blog.tsx"));
const BlogPostPage = lazy(() => import("./pages/BlogPost.tsx"));
const ContactPage = lazy(() => import("./pages/Contact.tsx"));
const AboutPage = lazy(() => import("./pages/About.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const AdminPage = lazy(() => import("./pages/Admin.tsx").then(m => ({ default: m.AdminPage })));
const BlogAdminPage = lazy(() => import("./pages/BlogAdmin.tsx").then(m => ({ default: m.BlogAdminPage })));

// Service Detail Pages
const SEOPage = lazy(() => import("./pages/services/SEO.tsx"));
const SMOPage = lazy(() => import("./pages/services/SMO.tsx"));
const SMMPage = lazy(() => import("./pages/services/SMM.tsx"));
const WebDesignPage = lazy(() => import("./pages/services/WebDesign.tsx"));
const ContentMarketingPage = lazy(() => import("./pages/services/ContentMarketing.tsx"));
const GoogleAdsPage = lazy(() => import("./pages/services/GoogleAds.tsx"));
const GMBPage = lazy(() => import("./pages/services/GMB.tsx"));
const ECommercePage = lazy(() => import("./pages/services/ECommerce.tsx"));

// Packages Pages
const SEOPackagesPage = lazy(() => import("./pages/packages/SEOPackages.tsx"));
const SMOPackagesPage = lazy(() => import("./pages/packages/SMOPackages.tsx"));

// Tools, Payment & Company details
const SEOAnalyzerPage = lazy(() => import("./pages/tools/SEOAnalyzer.tsx"));
const PaymentPage = lazy(() => import("./pages/payment/Payment.tsx"));
const TestimonialsPage = lazy(() => import("./pages/Testimonials.tsx"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudies.tsx"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />

            
            {/* Main Branding Pages with Aliases */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/our-portfolio" element={<OurWorkPage />} />
            
            {/* Service Detail Pages */}
            <Route path="/seo-service-in-delhi" element={<SEOPage />} />
            <Route path="/smo-service-in-delhi" element={<SMOPage />} />
            <Route path="/smm-service-in-delhi" element={<SMMPage />} />
            <Route path="/website-design-service-in-delhi" element={<WebDesignPage />} />
            <Route path="/content-writing-service-in-delhi" element={<ContentMarketingPage />} />
            <Route path="/google-ads-services" element={<GoogleAdsPage />} />
            <Route path="/gmb-service-in-delhi" element={<GMBPage />} />
            <Route path="/e-commerce-website-services-in-delhi" element={<ECommercePage />} />
            
            {/* Packages Pages */}
            <Route path="/seo-packages" element={<SEOPackagesPage />} />
            <Route path="/smo-packages" element={<SMOPackagesPage />} />
            
            {/* Tools, Payment, and Listing Pages */}
            <Route path="/seo-analyzer" element={<SEOAnalyzerPage />} />
            <Route path="/paypal" element={<PaymentPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/blog-admin" element={<BlogAdminPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
